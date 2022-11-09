import styled from 'styled-components'
import Image from 'next/image'

import {useMedia} from 'hooks'
import Theme from 'theme'

import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import {Youtube} from 'common/youtube'

import {getImageUrl} from 'helpers/getUrl'
import {TitleContainer} from 'components/titleContainer'
import {GetServerSideProps} from 'next'
import {profileServices} from 'redux/profile/profile.service'

const ProfileContainer = styled.div`
  padding: ${Theme.space.$10} 0;
`
const ImgContainer = styled.div`
  position: relative;
  min-height: 400px;
  width: 100%;
  border-radius: ${Theme.radius.$default};
  overflow: hidden;
`

const AttorneyProfile = ({profile}: {profile: Api.Profile}) => {
  const media = useMedia()
  return (
    <ProfileContainer>
      <TitleContainer title="Attorney Profile" />
      <div>
        <Title
          text={profile.title}
          size={media.sm ? 'xl' : 'lg'}
          weight="bold"
        />
        {profile.short_description && (
          <Paragraph
            color="light"
            style={{marginBottom: media.sm ? 40 : 20, fontStyle: 'italic'}}
          >
            {profile.short_description}
          </Paragraph>
        )}

        <ImgContainer>
          <Image
            alt="accident"
            src={getImageUrl(`profile`, profile.image as string)}
            layout={`fill`}
            objectFit="cover"
          />
        </ImgContainer>
        <Paragraph
          color="dark"
          style={{margin: '40px 0px'}}
          dangerouslySetInnerHTML={{
            __html: profile.description
          }}
        />

        {/* YOUTUBE COMPONENT */}
        {profile.video_link && <Youtube videoId={profile.video_link} />}
      </div>
    </ProfileContainer>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await profileServices.getProfileById({
    profileId: context?.params?.profileId as string
  })

  return {
    props: {profile: response} // will be passed to the page component as props
  }
}

export default AttorneyProfile
