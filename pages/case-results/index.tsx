import {useRouter} from 'next/router'
import {CompWrapper} from 'common/compWrapper'

import {CaseResultCard} from 'components/caseResultCard'
import {Title} from 'components/title'
import {caseResultServices} from 'redux/caseResult/caseResult.service'
import styled from 'styled-components'
import Theme from 'theme'

const CaseResultContainer = styled.div`
  padding: ${Theme.space.$16} 0;
`
const CaseResultList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${Theme.space.$5};
`
function CaseResult({caseResults}: {caseResults: Api.AllCaseResults}) {
  const router = useRouter()
  return (
    <CompWrapper>
      <CaseResultContainer>
        <Title
          size="xl"
          weight="bold"
          text="Mr. Durga Prasad Bhurtel Successfully Represented Various Clients for Injury Claims"
          style={{marginBottom: 20}}
        />
        <Title
          size="lg"
          weight="bold"
          text="Case Results by Durga P. Burtel"
          style={{color: Theme.colors.$primary, marginBottom: 25}}
        />

        {/* CASE RESULT LISTS */}
        <CaseResultList>
          {caseResults.rows &&
            caseResults.rows.map((el, id) => {
              return (
                <div
                  key={el.id.toString()}
                  onClick={() =>
                    router.push({
                      pathname: `/case-results/article/${el.id}`
                    })
                  }
                >
                  <CaseResultCard
                    key={id}
                    title={el.title}
                    description={el.description}
                  />
                </div>
              )
            })}
        </CaseResultList>
      </CaseResultContainer>
    </CompWrapper>
  )
}

export const getServerSideProps = async () => {
  const response = await caseResultServices.getAllCaseResult({query: {}})
  return {props: {caseResults: response}}
}

export default CaseResult
