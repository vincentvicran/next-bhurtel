import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {FiSearch, FiChevronDown} from 'react-icons/fi'
import {TbPhoneCall} from 'react-icons/tb'

import {CompWrapper} from 'common/compWrapper'
import {HeaderDrawer} from 'components/headerDrawer'
import {commonCategoryServices} from 'redux/commonCategory/commonCategory.service'
import attorney from 'assets/images/attorney.png'
import Theme from 'theme'
import {useMedia} from 'hooks'
import {HStack} from 'common/stack'
import {profileServices} from 'redux/profile/profile.service'

import {
  HeaderContainer,
  Search,
  HeaderLogo,
  HeaderContent,
  HeaderItem,
  HeaderLinks,
  MainHoverContainer,
  HoverText,
  NestedHoverText
} from './header.style'

interface HeaderProps {
  image: string
}

export const Header = ({image}: HeaderProps) => {
  const media = useMedia()
  const router = useRouter()
  console.log(router, 'router called')
  const [personalInjury, setPersonalInjury] =
    useState<Api.AllCategories | null>(null)
  const [practiceAreas, setPracticeAreas] = useState<Api.AllCategories | null>(
    null
  )
  const [news, setNews] = useState<Api.AllCategories | null>(null)
  const [profiles, setProfiles] = useState<Api.AllCategories | null>(null)
  useEffect(() => {
    ;(async () => {
      try {
        const personal = await commonCategoryServices.getCommonCategoryByType(
          'personal_injury'
        )
        const practice = await commonCategoryServices.getCommonCategoryByType(
          'practice_areas'
        )
        const news = await commonCategoryServices.getCommonCategoryByType(
          'news'
        )
        const profileList = await profileServices.getProfiles()

        const remappedProfiles: Array<{
          total_count: string
          category_details: Api.CommonCategory
        }> = profileList.rows.map((profile) => {
          return {
            total_count: profile.total_count,
            category_details: {
              id: profile.profile_details.id,
              type: 'attorney_profile',
              title: profile.profile_details.name,
              common_category_id: null,
              is_description_only: true
            }
          } as {
            total_count: string
            category_details: Api.CommonCategory
          }
        })

        setPersonalInjury(personal)
        setPracticeAreas(practice)
        setNews(news)
        setProfiles({total: '0', rows: remappedProfiles, isLast: false})
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <HeaderContainer>
      <CompWrapper>
        <HeaderContent>
          <HStack align="center" justify="space-between">
            <HeaderDrawer
              image={attorney.src}
              data={{
                personalInjury,
                practiceAreas,
                news,
                profiles
              }}
            />
            <HeaderLogo>
              <Image
                src={attorney}
                alt="logo"
                objectFit="contain"
                width="150"
                height="80"
              />
            </HeaderLogo>
          </HStack>
          {media.lg && (
            <HeaderLinks>
              <Link href="/home">
                <HeaderItem>Home</HeaderItem>
              </Link>

              <HeaderItem
                isActive={router.pathname === '/personal-injury' ? true : false}
              >
                <p>Personal Injury</p>
                {/* MENU */}
                <HoverElement
                  data={personalInjury}
                  style={{width: '55vw'}}
                  pathname="/personal-injury"
                />
                <FiChevronDown
                  style={{
                    cursor: 'pointer',
                    height: '12px',
                    width: '14px'
                  }}
                />
              </HeaderItem>

              <HeaderItem
                isActive={router.pathname === '/practice-area' ? true : false}
              >
                <p>Practice areas</p>
                <FiChevronDown
                  style={{
                    cursor: 'pointer',
                    height: '12px',
                    width: '14px'
                  }}
                />
                <HoverElement
                  data={practiceAreas}
                  style={{width: '55vw'}}
                  pathname="/practice-areas"
                />
              </HeaderItem>

              <Link href="/contact-us">
                <HeaderItem
                  isActive={router.pathname === '/contact-us' ? true : false}
                >
                  Contacts
                </HeaderItem>
              </Link>
              <Link href="/case-results">
                <HeaderItem
                  isActive={router.pathname === '/case-results' ? true : false}
                >
                  Case Results
                </HeaderItem>
              </Link>

              <HeaderItem
                isActive={router.pathname === '/profile' ? true : false}
              >
                <p>Attorney Profile</p>
                <FiChevronDown
                  style={{
                    cursor: 'pointer',
                    height: '12px',
                    width: '14px'
                  }}
                />
                <HoverElement
                  data={profiles}
                  style={{right: '0', width: '20vw'}}
                  pathname="/profile"
                />
              </HeaderItem>

              <HeaderItem isActive={router.pathname === '/news' ? true : false}>
                <p>News</p>

                <FiChevronDown
                  style={{
                    cursor: 'pointer',
                    height: '12px',
                    width: '14px'
                  }}
                />
                <HoverElement
                  data={news}
                  style={{right: '0', width: '20vw'}}
                  pathname="/news"
                />
              </HeaderItem>
            </HeaderLinks>
          )}
          <Search>
            <FiSearch size={16} />
            <a href="tel:+212-461-4628">
              <TbPhoneCall size={16} />
            </a>
          </Search>
        </HeaderContent>
      </CompWrapper>
    </HeaderContainer>
  )
}

function HoverElement({
  data,
  style,
  pathname
}: {
  data: Api.AllCategories | null
  style?: React.CSSProperties
  pathname?: string
}) {
  const router = useRouter()

  const linkClickedHandler = (data: any) => {
    router.push({pathname: pathname, query: {id: data.category_details.id}})
  }
  return (
    <MainHoverContainer style={style}>
      {/* <div> */}
      {!data || data.rows.length === 0 ? (
        <HoverText
          style={{
            color: Theme.colors.$gray600,
            fontSize: Theme.fontSizes.$3,
            alignSelf: 'center'
          }}
        >
          Categories not found
        </HoverText>
      ) : null}
      {data &&
        data.rows.map((el, id) => {
          // console.log(el, 'el called')
          return (
            <HoverText
              key={id}
              onClick={() => linkClickedHandler(el)}
              style={{
                color: Theme.colors.$primary,
                fontSize: Theme.fontSizes.$3,
                fontWeight: 'normal'
              }}
            >
              {el.category_details.title}

              {el.category_details.sub_categories && (
                <>
                  {el.category_details.sub_categories.map((subitems, index) => {
                    return (
                      <NestedHoverText
                        key={subitems.id.toString()}
                        style={{
                          fontSize: Theme.fontSizes.$2,
                          paddingLeft: Theme.space.$3
                        }}
                      >
                        {subitems.title}
                      </NestedHoverText>
                    )
                  })}
                </>
              )}
            </HoverText>
          )
        })}
      {/* </div> */}
    </MainHoverContainer>
  )
}
