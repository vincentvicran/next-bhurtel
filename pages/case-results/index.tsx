import {Title} from 'components/title'
import styled from 'styled-components'
import Theme from 'theme'

const CaseResultContainer = styled.div`
  padding: 40px;
`
function CaseResult() {
  return (
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
    </CaseResultContainer>
  )
}

export default CaseResult
