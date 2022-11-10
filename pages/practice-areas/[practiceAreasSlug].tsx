import {GetServerSideProps} from 'next'
import React from 'react'
import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'

const PracticeAreas = ({
  practiceAreas
}: {
  practiceAreas: Api.CommonDescriptionIndividual
}) => {
  console.log('practice-areas: ', practiceAreas)
  return <div>PracticeAreas</div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await commonDescriptionServices.getCommonDescriptionBySlug(
    String(ctx.params?.practiceAreasSlug)
  )

  console.log('----------------------: ', response)

  return {
    props: {
      practiceAreas: response
    }
  }
}

export default PracticeAreas
