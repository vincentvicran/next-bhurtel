import {GetServerSideProps} from 'next'
import moment from 'moment'

import Theme from 'theme'
import styled from 'styled-components'
import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import {TestimonialCarousal} from 'components/testimonialCarousal'

import {CompWrapper} from 'common/compWrapper'

import {caseResultServices} from 'redux/caseResult/caseResult.service'
import {DescParagraph} from 'components/descriptionCard/descriptionCard.styles'

const DescriptionContainer = styled.div`
  padding: ${Theme.space.$10} ${Theme.space.$11};
  border-radius: ${Theme.radius.$default};
  border: 1px solid ${Theme.colors.$gray200};
  margin: ${Theme.space.$5} 0;
`

function CaseResultDetail({caseResult}: {caseResult: Api.CaseResultsById}) {
  const testimonialData: Api.TestimonialFromAPI[] =
    caseResult.testimonial_details?.map((el) => {
      return {
        total_count: '0',
        case_result_details: caseResult.case_result_details,
        testimonial_details: el
      }
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
            style={{marginBottom: 20, fontStyle: 'italic'}}
          >
            <DescParagraph
              dangerouslySetInnerHTML={{
                __html: caseResult.case_result_details.description
              }}
            ></DescParagraph>
          </Paragraph>
        )}
      </DescriptionContainer>
      {testimonialData && (
        <div style={{marginBottom: Theme.space.$15}}>
          <TestimonialCarousal data={testimonialData} />
        </div>
      )}
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

export default CaseResultDetail
