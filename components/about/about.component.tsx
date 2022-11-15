import Link from 'next/link'
import Image from 'next/image'

import {Button} from 'common/button'
import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'

import {useMedia} from 'hooks'
import Theme from 'theme'
import aboutImg from 'assets/images/about.jpg'

import {AboutCont, LeftCont, RightCont} from './about.styles'

interface AboutProps {
  text: string
  page?: boolean
}
export function About({text, page = false}: AboutProps) {
  const media = useMedia()
  return (
    <AboutCont md={media.md}>
      {/* LEFT SECTION */}
      <LeftCont>
        {!page && (
          <>
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
          </>
        )}

        <Paragraph color="light" style={{marginBottom: 40}}>
          {text}
        </Paragraph>
        {!page && (
          <Link href="/about">
            <Button title="LEARN MORE" color="primary" />
          </Link>
        )}
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
