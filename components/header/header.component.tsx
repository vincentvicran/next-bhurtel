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
import {
  getCategoryLink,
  getMenuLink,
  getSubCategoryLink,
  headerMenu,
  MenuType
} from 'helpers/getNavLink.helper'

interface HeaderProps {
  image: string
}

export const Header = ({image}: HeaderProps) => {
  const media = useMedia()
  const router = useRouter()
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
      } catch (err) {}
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
                <HeaderItem isActive={router.pathname.includes('/home')}>
                  Home
                </HeaderItem>
              </Link>

              <HeaderMenu
                menuType="personal_injury"
                data={personalInjury}
                style={{width: '55vw'}}
              />

              <HeaderMenu
                menuType="practice_areas"
                data={practiceAreas}
                style={{width: '55vw'}}
              />

              <Link href="/contact-us">
                <HeaderItem isActive={router.pathname.includes('/contact-us')}>
                  Contacts
                </HeaderItem>
              </Link>

              <Link href="/case-results">
                <HeaderItem
                  isActive={router.pathname.includes('/case-results')}
                >
                  Case Results
                </HeaderItem>
              </Link>

              <HeaderMenu
                menuType="attorney_profile"
                data={profiles}
                style={{right: '0', width: '20vw'}}
              />

              <HeaderMenu
                menuType="news"
                data={news}
                style={{right: '0', width: '20vw'}}
              />
            </HeaderLinks>
          )}
          <Search>
            <Link href="/search">
              <FiSearch size={16} />
            </Link>
            <a href="tel:+212-461-4628">
              <TbPhoneCall size={16} color={Theme.colors.$gray800} />
            </a>
          </Search>
        </HeaderContent>
      </CompWrapper>
    </HeaderContainer>
  )
}

function HeaderMenu({
  menuType,
  data,
  style
}: {
  menuType: MenuType
  data: Api.AllCategories | null
  style?: React.CSSProperties
  pathname?: string
}) {
  const router = useRouter()

  return (
    <HeaderItem isActive={router.pathname.includes(headerMenu[menuType].link)}>
      <Link href={getMenuLink(menuType, data?.rows)}>
        <div>{headerMenu[menuType].label}</div>
      </Link>
      {/* MENU */}
      <FiChevronDown
        style={{
          cursor: 'pointer',
          height: '12px',
          width: '14px'
        }}
      />
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
            return (
              <HoverText
                key={id}
                style={{
                  color: Theme.colors.$primary,
                  fontSize: Theme.fontSizes.$3,
                  fontWeight: 'normal'
                }}
              >
                <Link
                  href={getCategoryLink(
                    menuType,
                    el.category_details.id,
                    el.category_details.is_description_only
                  )}
                >
                  <div> {el.category_details.title}</div>
                </Link>

                {el.category_details.sub_categories && (
                  <>
                    {el.category_details.sub_categories.map(
                      (subitems, index) => {
                        return (
                          <NestedHoverText
                            key={subitems.id.toString()}
                            style={{
                              fontSize: Theme.fontSizes.$2,
                              paddingLeft: Theme.space.$3
                            }}
                          >
                            <Link
                              href={getSubCategoryLink(
                                menuType,
                                subitems.id,
                                subitems.is_description_only
                              )}
                            >
                              <div> {subitems.title}</div>
                            </Link>
                          </NestedHoverText>
                        )
                      }
                    )}
                  </>
                )}
              </HoverText>
            )
          })}
        {/* </div> */}
      </MainHoverContainer>
    </HeaderItem>
  )
}
