import styled from 'styled-components'
import Image from 'next/image'

import {useMedia} from 'hooks'
import Theme from 'theme'

import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import {Youtube} from 'common/youtube'

import moment from 'moment'
import {getImageUrl} from 'helpers/getUrl'

const DescriptionContainer = styled.div`
  padding: ${Theme.space.$10} 0;
`
const ImgContainer = styled.div`
  position: relative;
  min-height: 400px;
  width: 100%;
  border-radius: ${Theme.radius.$default};
  overflow: hidden;
`

export const Description = ({article}: {article: Api.CommonDescription}) => {
  const media = useMedia()
  return (
    <DescriptionContainer>
      <div>
        <Paragraph
          color="light"
          style={{fontStyle: 'italic', marginBottom: 10}}
        >
          {article.posted_by && <>{article.posted_by}, </>}
          {moment(article.posted_at).format(`DD MMM, YYYY`)}
        </Paragraph>
        <Title
          text={article.title}
          size={media.sm ? 'xl' : 'lg'}
          weight="bold"
        />
        {article.short_description && (
          <Paragraph
            color="light"
            style={{marginBottom: media.sm ? 40 : 20, fontStyle: 'italic'}}
          >
            {article.short_description}
          </Paragraph>
        )}

        <ImgContainer>
          <Image
            alt="accident"
            src={getImageUrl(`commonDescription`, article.thumbnail as string)}
            layout={`fill`}
            objectFit="cover"
          />
        </ImgContainer>
        <Paragraph
          color="dark"
          style={{margin: '40px 0px'}}
          dangerouslySetInnerHTML={{
            __html: article.main_description
          }}
        />

        {/* YOUTUBE COMPONENT */}
        {article.video_link && <Youtube videoId={article.video_link} />}
      </div>
    </DescriptionContainer>
  )
}
