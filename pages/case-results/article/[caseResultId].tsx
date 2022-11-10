import {GetServerSideProps} from 'next'
import moment from 'moment'
import {useMedia} from 'hooks'
// import {getImageUrl} from 'helpers/getUrl'
import Theme from 'theme'
import styled from 'styled-components'
import {Paragraph} from 'components/Paragraph'
// import {Title} from 'components/title'

import {CompWrapper} from 'common/compWrapper'

import {caseResultServices} from 'redux/caseResult/caseResult.service'

const DescriptionContainer = styled.div`
  padding: ${Theme.space.$10} 0;
`

function caseResultDetail({caseResult}: {caseResult: Api.CaseResultsById}) {
  const media = useMedia()
  console.log(caseResult, 'caseResult is consoled')

  return (
    <CompWrapper>
      <DescriptionContainer>
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
