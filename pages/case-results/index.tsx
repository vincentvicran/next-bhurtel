import {CompWrapper} from 'common/compWrapper'
import {CaseResultCard} from 'components/caseResultCard'
import {Title} from 'components/title'
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
function CaseResult() {
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
          {Array(10)
            .fill('')
            .map((_, id) => {
              return (
                <CaseResultCard
                  key={id}
                  title="Lead Poison to Children While Living in Rented Apartment"
                  description="Mr. Bhurtel represented infants who were living inan apartment and ingested lead paint and sustained injuries. Claims were settled $2,870,000.00 (two million eight hundred seventy thousand dollars)."
                />
              )
            })}
        </CaseResultList>
      </CaseResultContainer>
    </CompWrapper>
  )
}

export default CaseResult
