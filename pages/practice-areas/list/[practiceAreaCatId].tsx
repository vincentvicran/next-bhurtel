import React from 'react'
import {GetServerSideProps} from 'next'

import {CompWrapper} from 'common/compWrapper'
import {ListComp} from 'components/listComp'
import {NoResultFound} from 'components/noResultsFound'

import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'
import {commonCategoryServices} from 'redux/commonCategory/commonCategory.service'

const PracticeAreas = ({
  practiceArea,
  category
}: {
  practiceArea: Api.PaginatedCommonDescriptionIndividual[]
  category: string
}) => {
  return (
    <CompWrapper>
      {practiceArea ? (
        <ListComp
          articleList={practiceArea}
          title={category ?? 'Practice Areas'}
          link={'/practice-areas'}
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
      category: category.category_details.title
    } // will be passed to the page component as props
  }
}

export default PracticeAreas
