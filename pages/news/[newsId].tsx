import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import {useMedia} from 'hooks'
import Image from 'next/image'
import styled from 'styled-components'
import Theme from 'theme'
import about from '../../assets/images/about.jpg'

const NewsContainer = styled.div`
  padding: ${Theme.space.$10};
`

interface NewsProps {
  details: object
}

// DESCRIPTION IN details PROPS WILL COME FROM
// BACKEND TEXTEDITOR SO CURRENTLY DUMMY DATA IS ADDED
function News(props: NewsProps) {
  console.log(props)
  const media = useMedia()
  return (
    <NewsContainer>
      <Paragraph color="light" style={{fontStyle: 'italic', marginBottom: 10}}>
        June 30, 2021
      </Paragraph>
      <Title
        text="What are the major Construction Accident reports in NYC?"
        size={media.sm ? 'xl' : 'lg'}
        weight="bold"
        style={{marginBottom: media.sm ? 40 : 20}}
      />

      <Paragraph color="dark" style={{marginBottom: 40}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu,
        aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu.
        A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean
        tempus mauris nibh. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi
        habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim
        Convallis urna amet aenean mi habitant a, non eu...
      </Paragraph>

      <Image alt="accident" src={about} />
      <Paragraph color="dark" style={{margin: '40px 0px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc habitasse
        aliquet enim, ut feugiat dolor tristique sapien. Mi nunc massa ipsum
        orci sed. Turpis amet condimentum quis diam. Suscipit lectus volutpat
        quam dolor, egestas enim turpis mauris quam. Ut mauris, viverra ut in
        est egestas ut. Quis malesuada eget in tortor vestibulum non. Lacus,
        quam semper lectus velit, eu. Massa et elementum at pellentesque neque
        tellus ultrices. Netus in rutrum mi non sed eu facilisis elementum
        proin. Tempus feugiat et eu et pellentesque habitasse tellus consectetur
        in. Nulla massa aenean ipsum lacus. Rhoncus suscipit condimentum mattis
        orci non sed. Auctor quam in suscipit diam diam. Mi est ullamcorper
        blandit at. Vitae velit ornare urna morbi accumsan tincidunt. Integer
        commodo arcu integer sagittis ipsum diam. Orci tristique tortor massa at
        at. Fact: Orci justo, imperdiet porttitor aenean adipiscing. Sed morbi
        sed egestas pellentesque maecenas dis. Nec nec tristique suspendisse eu
        in pretium nunc felis. Sit elementum aliquet nisi, quam sit aliquet.
        Viverra in etiam aliquet at elit turpis. Viverra phasellus quis tortor
        nunc sollicitudin urna adipiscing facilisis suspendisse. Pellentesque
        euismod cum augue facilisis. Nisl euismod vehicula gravida nec. Commodo
        morbi a sit blandit hendrerit vitae nunc. Lacus, lobortis sit id ornare
        senectus diam id aliquam. Volutpat nisl nisl, pulvinar sagittis,
        condimentum. Morbi orci odio pharetra ut potenti gravida. Quisque
        laoreet amet, integer morbi. At id fermentum urna ultrices. Mauris at
        dui imperdiet sem urna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nunc habitasse aliquet enim, ut feugiat dolor tristique
        sapien. Mi nunc massa ipsum orci sed. Turpis amet condimentum quis diam.
        Suscipit lectus volutpat quam dolor, egestas enim turpis mauris quam. Ut
        mauris, viverra ut in est egestas ut. Quis malesuada eget in tortor
        vestibulum non. Lacus, quam semper lectus velit, eu. Massa et elementum
        at pellentesque neque tellus ultrices. Netus in rutrum mi non sed eu
        facilisis elementum proin. Tempus feugiat et eu et pellentesque
        habitasse tellus consectetur in. Nulla massa aenean ipsum lacus. Rhoncus
        suscipit condimentum mattis orci non sed. Auctor quam in suscipit diam
        diam. Mi est ullamcorper blandit at. Vitae velit ornare urna morbi
        accumsan tincidunt. Integer commodo arcu integer sagittis ipsum diam.
        Orci tristique tortor massa at at.
      </Paragraph>

      {/* YOUTUBE COMPONENT */}
      <YoutubeComp src="https://www.youtube.com/embed/YE7VzlLtp-4" />
    </NewsContainer>
  )
}

// YOUTUBE STYLES
const YtContainer = styled.div`
  min-height: 200px;
  & > iframe {
    width: 100%;
    display: block;
  }
`

interface YtProps {
  src?: string
  style?: React.CSSProperties
}
function YoutubeComp(props: YtProps) {
  const media = useMedia()

  return (
    <YtContainer style={props.style}>
      <iframe
        src={props.src}
        height={media.xs ? '250px' : media.sm ? '512px' : '300px'}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </YtContainer>
  )
}
export default News
