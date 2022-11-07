import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import {Interweave} from 'interweave'
import {CaseResCard} from './caseResultCard.styles'
import {CaseRes} from './caseResultCard.types'

export function CaseResultCard(props: CaseRes) {
  return (
    <CaseResCard>
      <Title
        size="md"
        weight="semibold"
        text={props.title}
        style={{marginBottom: 10}}
      />
      <Paragraph color="light">
        <Interweave content={props.description} tagName="p" />
      </Paragraph>
    </CaseResCard>
  )
}
