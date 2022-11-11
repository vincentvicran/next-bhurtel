import styled from 'styled-components'
import {GetServerSideProps} from 'next'
import Image from 'next/image'

import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import {Youtube} from 'common/youtube'
import {TitleContainer} from 'components/titleContainer'
import {CompWrapper} from 'common/compWrapper'
import {ResponsiveStack, VStack} from 'common/stack'
import {NoResultFound} from 'components/noResultsFound'

import {getImageUrl} from 'helpers/getUrl'
import {profileServices} from 'redux/profile/profile.service'
import {useMedia} from 'hooks'
import Theme from 'theme'

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
  return profile ? (
    <CompWrapper>
      <ProfileContainer>
        <DescriptionContainer>
          <ResponsiveStack breakpoint="lg">
            <ResponsiveStack
              breakpoint="lg"
              switchDirection={(media.md && !media.lg) || media.lg}
              justify={!media.md ? 'center' : 'flex-start'}
              align={!media.md ? 'center' : 'flex-start'}
              style={{
                minWidth: media.lg ? 400 : 'auto'
              }}
            >
              <ImgContainer
                style={{
                  marginRight:
                    media.md && !media.lg ? Theme.space.$10 : Theme.space.$3
                }}
              >
                <Image
                  alt="profile"
                  src={getImageUrl(`profile`, profile.image as string)}
                  layout={`fill`}
                  objectFit="cover"
                />
              </ImgContainer>
              <VStack
                style={{
                  marginTop:
                    media.md && !media.lg ? Theme.space.$10 : Theme.space.$3
                }}
              >
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
            {profile.short_description && (
              <VStack
                style={{
                  marginTop:
                    (media.md && !media.lg) || !media.md
                      ? Theme.space.$10
                      : Theme.space.$3
                }}
              >
                <TitleContainer title="About" underlineWidth="50px" />

                <Paragraph
                  color="light"
                  style={{
                    marginTop: 0,
                    marginBottom: media.sm ? 40 : 20,
                    fontStyle: 'italic'
                  }}
                >
                  {profile.short_description}
                </Paragraph>
              </VStack>
            )}
          </ResponsiveStack>
        </DescriptionContainer>
        <VStack style={{marginTop: Theme.space.$10}}>
          <TitleContainer title="More Information" underlineWidth="150px" />

          <Paragraph
            color="dark"
            dangerouslySetInnerHTML={{
              __html: profile.description
            }}
          />
        </VStack>
        {/* YOUTUBE COMPONENT */}
        {profile.video_link && <Youtube videoId={profile.video_link} />}
      </ProfileContainer>
    </CompWrapper>
  ) : (
    <NoResultFound />
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
