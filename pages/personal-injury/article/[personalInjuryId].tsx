import {CompWrapper} from 'common/compWrapper'
import {Description} from 'components/description'
import {NoResultFound} from 'components/noResultsFound'
import {GetServerSideProps} from 'next'
import React from 'react'
import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'

const PersonalInjuryArticle = ({
  personalInjury
}: {
  personalInjury: Api.CommonDescriptionIndividual
}) => {
  return (
    <CompWrapper>
      {personalInjury ? (
        <Description article={personalInjury.description_details} />
      ) : (
        <NoResultFound />
      )}
    </CompWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const newsCategory = await newsServices.getNewsCategories()

  const cmnDescription =
    await commonDescriptionServices.getCommonDescriptionByCategoryId(
      Number(context.params?.personalInjuryId as string),
      {}
    )

  const personalInjury = context.query?.description
    ? await commonDescriptionServices.getCommonDescriptionBySlug(
        String(context.query?.description as string)
      )
    : cmnDescription.rows.length > 0
    ? cmnDescription.rows[0]
    : null

  return {
    props: {personalInjury} // will be passed to the page component as props
  }
}

export default PersonalInjuryArticle
