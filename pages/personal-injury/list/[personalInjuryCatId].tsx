import React from 'react'
import {GetServerSideProps} from 'next'

import {CompWrapper} from 'common/compWrapper'
import {ListComp} from 'components/listComp'
import {NoResultFound} from 'components/noResultsFound'

import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'
import {commonCategoryServices} from 'redux/commonCategory/commonCategory.service'

const PersonalInjuryList = ({
  personalInjury,
  category,
  total
}: {
  personalInjury: Api.PaginatedCommonDescriptionIndividual[]
  category: string
  total: number
}) => {
  return (
    <CompWrapper>
      {personalInjury ? (
        <ListComp
          articleList={personalInjury}
          title={category ?? 'Personal Injury'}
          link={'/personal-injury'}
          total={total}
        />
      ) : (
        <NoResultFound />
      )}
    </CompWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = await commonCategoryServices.getCommonCategoryById(
    Number(context.params?.personalInjuryCatId as string)
  )

  const personalInjury =
    await commonDescriptionServices.getCommonDescriptionByCategoryId(
      Number(context.params?.personalInjuryCatId as string),
      {}
    )

  return {
    props: {
      personalInjury: personalInjury.rows,
      total: personalInjury.total,
      category: category.category_details.title
    } // will be passed to the page component as props
  }
}

export default PersonalInjuryList
