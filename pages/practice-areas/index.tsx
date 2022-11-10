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

export async function getServerSideProps() {
  const response = await commonDescriptionServices.getCommonDescriptionBySlug(
    'practice-area'
  )

  console.log('----------------------: ', response)

  return {
    props: {
      practiceAreas: response
    }
  }
}

export default PracticeAreas
