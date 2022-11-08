import Image from 'next/image'
import Theme from 'theme'

import {Button} from 'common/button'
import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'

import {AboutCont, LeftCont, RightCont} from './about.styles'
import aboutImg from './../../assets/images/about.jpg'
import {useMedia} from 'hooks'

interface AboutProps {
  text: string
}
export function About(props: AboutProps) {
  const media = useMedia()
  return (
    <AboutCont md={media.md}>
      {/* LEFT SECTION */}
      <LeftCont>
        <Title
          text="ABOUT"
          size="sm"
          weight="normal"
          style={{
            color: Theme.colors.$gray400,
            marginBottom: 5,
            display: 'block'
          }}
        />
        <Title
          text="Learn more about us"
          size="lg"
          weight="bold"
          style={{marginBottom: 20}}
        />
        <Paragraph color="light" style={{marginBottom: 40}}>
          {props.text}
        </Paragraph>
        <Button title="LEARN MORE" color="primary" />
      </LeftCont>

      {/* RIGHT SECTION */}
      <RightCont>
        <Image
          src={aboutImg}
          alt="verdict"
          height={media.md ? '350px' : ''}
          objectFit="contain"
        />
      </RightCont>
    </AboutCont>
  )
}
