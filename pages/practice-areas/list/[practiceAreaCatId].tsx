import React from 'react'
import {GetServerSideProps} from 'next'

import {CompWrapper} from 'common/compWrapper'
import {ListComp} from 'components/listComp'
import {NoResultFound} from 'components/noResultsFound'

import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'
import {commonCategoryServices} from 'redux/commonCategory/commonCategory.service'

const PracticeAreas = ({
  practiceArea,
  category,
  total
}: {
  practiceArea: Api.PaginatedCommonDescriptionIndividual[]
  category: string
  total: string
}) => {
  return (
    <CompWrapper>
      {practiceArea ? (
        <ListComp
          articleList={practiceArea}
          title={category ?? 'Practice Areas'}
          link={'/practice-areas'}
          total={Number(total ?? 1)}
        />
      ) : (
        <NoResultFound />
      )}
    </CompWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = await commonCategoryServices.getCommonCategoryById(
    Number(context.params?.practiceAreaCatId as string)
  )

  const practiceArea =
    await commonDescriptionServices.getCommonDescriptionByCategoryId(
      Number(context.params?.practiceAreaCatId as string),
      {}
    )

  return {
    props: {
      practiceArea: practiceArea.rows,
      category: category.category_details.title,
      total: practiceArea.total
    } // will be passed to the page component as props
  }
}

export default PracticeAreas
