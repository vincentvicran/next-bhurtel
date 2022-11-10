import {GetServerSideProps} from 'next'
import moment from 'moment'
import {useMedia} from 'hooks'

import Theme from 'theme'
import styled from 'styled-components'
import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import {TestimonialCarousal} from 'components/testimonialCarousal'

import {CompWrapper} from 'common/compWrapper'

import {caseResultServices} from 'redux/caseResult/caseResult.service'

const DescriptionContainer = styled.div`
  padding: ${Theme.space.$10} ${Theme.space.$11};
  border-radius: ${Theme.radius.$default};
  border: 1px solid ${Theme.colors.$gray200};
  margin: ${Theme.space.$5} 0;
`

function caseResultDetail({caseResult}: {caseResult: Api.CaseResultsById}) {
  const media = useMedia()

  const testimonialData = caseResult.testimonial_details.map((el, any) => {
    return {testimonial_details: el}
  })

  return (
    <CompWrapper>
      <DescriptionContainer>
        <Title
          text={caseResult.case_result_details.title}
          size="lg"
          weight="bold"
        ></Title>
        <Paragraph
          color="light"
          style={{fontStyle: 'italic', marginBottom: 10}}
        >
          {moment(caseResult.case_result_details.created_at).format(
            `DD MMM, YYYY`
          )}
        </Paragraph>

        {caseResult.case_result_details.description && (
          <Paragraph
            color="light"
            style={{marginBottom: media.sm ? 40 : 20, fontStyle: 'italic'}}
          >
            {caseResult.case_result_details.description}
          </Paragraph>
        )}
      </DescriptionContainer>

      <div style={{marginBottom: Theme.space.$15}}>
        <TestimonialCarousal data={testimonialData as any} />
      </div>
    </CompWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await caseResultServices.getCaseResultById({
    caseResultId: Number(context?.params?.caseResultId as string)
  })

  return {
    props: {caseResult: response}
  }
}

export default caseResultDetail
