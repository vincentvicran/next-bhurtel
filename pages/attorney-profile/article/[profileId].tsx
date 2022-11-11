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
import {CompWrapper} from 'common/compWrapper'
import {ResponsiveStack, VStack} from 'common/stack'

const ProfileContainer = styled.div`
  padding: ${Theme.space.$10} 0;
`
const ImgContainer = styled.div`
  position: relative;
  min-height: 140px;
  width: 140px;
  border-radius: ${Theme.radius.$default};
  overflow: hidden;
`

const DescriptionContainer = styled.div`
  padding: ${Theme.space.$10} ${Theme.space.$11};
  border-radius: ${Theme.radius.$default};
  border: 1px solid ${Theme.colors.$gray200};
  margin: ${Theme.space.$5} 0;
`

const AttorneyProfile = ({profile}: {profile: Api.Profile}) => {
  const media = useMedia()
  return (
    <CompWrapper>
      <ProfileContainer>
        <DescriptionContainer>
          <ResponsiveStack breakpoint="lg" gap="$6">
            <ResponsiveStack
              breakpoint="lg"
              switchDirection
              justify="flex-start"
              align="center"
            >
              <ImgContainer>
                <Image
                  alt="profile"
                  src={getImageUrl(`profile`, profile.image as string)}
                  layout={`fill`}
                  objectFit="cover"
                />
              </ImgContainer>
              <VStack>
                <Title text={profile.name} size="lg" weight="bold" />
                <Title text={profile.title} size="md" weight="bold" />
                {profile.alternate_title && (
                  <Title
                    text={profile.alternate_title}
                    size="md"
                    weight="bold"
                  />
                )}
              </VStack>
            </ResponsiveStack>
            <VStack>
              <TitleContainer title="About" underlineWidth="50px" />

              {profile.short_description && (
                <Paragraph
                  color="light"
                  style={{
                    marginBottom: media.sm ? 40 : 20,
                    fontStyle: 'italic'
                  }}
                >
                  {profile.short_description}
                </Paragraph>
              )}
            </VStack>
          </ResponsiveStack>
        </DescriptionContainer>
        <Paragraph
          color="dark"
          style={{margin: '40px 0px'}}
          dangerouslySetInnerHTML={{
            __html: profile.description
          }}
        />

        {/* YOUTUBE COMPONENT */}
        {profile.video_link && <Youtube videoId={profile.video_link} />}
      </ProfileContainer>
    </CompWrapper>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const profile = await profileServices.getProfileById({
    profileId: context?.params?.profileId as string
  })

  console.log('profile: ', profile)

  return {
    props: {profile: profile.profile_details} // will be passed to the page component as props
  }
}

export default AttorneyProfile
