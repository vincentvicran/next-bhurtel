import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import {CaseResCard} from './caseResultCard.styles'
import {CaseRes} from './caseResultCard.types'

export function CaseResultCard(props: CaseRes) {
  return (
    <CaseResCard>
      <Title
        size="md"
        weight="semibold"
        text={props.title}
        style={{marginBottom: 5}}
      />
      <Paragraph color="light">{props.description}</Paragraph>
    </CaseResCard>
  )
}
