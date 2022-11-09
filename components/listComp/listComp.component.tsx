import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import Image from 'next/image'
import Theme from 'theme'
import {
  ImgContainer,
  ListCardContainer,
  ListCardDescContainer,
  ListCompContainer,
  ReadMoreBtn,
  TitleContainer,
  Underline
} from './listComp.styles'
import {HiOutlineArrowLongRight} from 'react-icons/hi2'
import Link from 'next/link'

export function ListComp() {
  return (
    <ListCompContainer>
      {/* TITLE */}
      <TitleContainer>
        <Title text="Business Laws" size="xl" weight="semibold" />
        <Underline />
      </TitleContainer>

      {/* LISTS */}
      <ListCard />
    </ListCompContainer>
  )
}

function ListCard() {
  return (
    <ListCardContainer>
      {/* IMAGE SECTION */}
      <ImgContainer>
        <Image
          src="/assets/image/2.jpg"
          alt="list"
          layout="fill"
          objectFit="cover"
        />
      </ImgContainer>

      {/* DESCRIPTION SECTION */}
      <ListCardDescContainer>
        <Title
          text="20 Jun, 2022"
          size="sm"
          weight="normal"
          style={{color: Theme.colors.$gray400, marginBottom: 5}}
        />
        <Title
          text="Aggressive City of New York and State of New York, Commercial Law Firm Fights for Business Clients"
          size="md"
          weight="bold"
          style={{marginBottom: 10}}
        />
        <Paragraph color="light">
          Commercial litigators protect clients rights in business contracts and
          transactions A reputation for understanding business clients’ needs
          The commercial marketplace is continually changing. Businesses in the
          21st century need an experienced commercial
        </Paragraph>

        {/* <ReadMoreBtn href="/home">
          <Title text="Read More" size="sm" />
          <HiOutlineArrowLongRight />
        </ReadMoreBtn> */}
        <Link href="/">
          <ReadMoreBtn>
            <Title
              text="Read More"
              size="sm"
              style={{color: Theme.colors.$gray700}}
            />
            <HiOutlineArrowLongRight />
          </ReadMoreBtn>
        </Link>
      </ListCardDescContainer>
    </ListCardContainer>
  )
}
