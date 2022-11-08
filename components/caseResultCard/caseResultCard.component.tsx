import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import Theme from 'theme'
import {CaseResCard} from './caseResultCard.styles'
import {CaseRes} from './caseResultCard.types'

export function CaseResultCard(props: CaseRes) {
  return (
    <CaseResCard>
      <Title
        size="md"
        weight="semibold"
        text={props.title}
        style={{marginBottom: 10, color: Theme.colors.$primary}}
      />
      <Paragraph color="light">
        <div dangerouslySetInnerHTML={{__html: props.description}} />
      </Paragraph>
    </CaseResCard>
  )
}
