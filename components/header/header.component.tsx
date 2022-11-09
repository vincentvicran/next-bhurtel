import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import {FiSearch, FiChevronDown} from 'react-icons/fi'

import {
  HeaderContainer,
  Search,
  HeaderLogo,
  HeaderContent,
  HeaderItem,
  HeaderLinks,
  MainHoverContainer,
  HoverText,
  HoverSubContainer
} from './header.style'
import {CompWrapper} from 'common/compWrapper'
import {HeaderDrawer} from 'components/headerDrawer'
import {commonCategoryServices} from 'redux/commonCategory/commonCategory.service'
import attorney from 'assets/images/attorney.png'
import Theme from 'theme'
import {useMedia} from 'hooks'
import {HStack} from 'common/stack'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {profileServices} from 'redux/profile/profile.service'

interface HeaderProps {
  image: string
}

export const Header = ({image}: HeaderProps) => {
  const media = useMedia()
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
              <Link href="home">
                <HeaderItem>Home</HeaderItem>
              </Link>
              <Link href="home">
                <HeaderItem>
                  <p>Personal Injury</p>
                  {/* MENU */}
                  <HoverElement data={personalInjury} />
                  <FiChevronDown
                    style={{
                      cursor: 'pointer',
                      height: '12px',
                      width: '14px'
                    }}
                  />
                </HeaderItem>
              </Link>
              <Link href="home">
                <HeaderItem>
                  <p>Practice areas</p>
                  <FiChevronDown
                    style={{
                      cursor: 'pointer',
                      height: '12px',
                      width: '14px'
                    }}
                  />
                  <HoverElement data={practiceAreas} />
                </HeaderItem>
              </Link>
              <Link href="/contact-us">
                <HeaderItem>Contacts</HeaderItem>
              </Link>
              <Link href="/case-results">
                <HeaderItem>Case Results</HeaderItem>
              </Link>
              <Link href="/home">
                <HeaderItem>Attorney Profile</HeaderItem>
              </Link>

              <HeaderItem>
                <p>News</p>

                <FiChevronDown
                  style={{
                    cursor: 'pointer',
                    height: '12px',
                    width: '14px'
                  }}
                />
                <HoverElement data={news} />
              </HeaderItem>
            </HeaderLinks>
          )}
          <Search>
            <FiSearch style={{height: '19px', width: '19px'}} />
          </Search>
        </HeaderContent>
      </CompWrapper>
    </HeaderContainer>
  )
}

function HoverElement({data}: {data: Api.AllCategories | null}) {
  const router = useRouter()

  const linkClickedHandler = (data: any) => {
    router.push({pathname: '/news', query: {id: data.category_details.id}})
  }
  return (
    <MainHoverContainer>
      <div>
        {!data || data.rows.length === 0 ? (
          <HoverText
            style={{color: Theme.colors.$gray400, fontSize: Theme.fontSizes.$2}}
          >
            Categories not found
          </HoverText>
        ) : null}
        {data &&
          data.rows.map((el, id) => {
            return (
              <HoverText key={id} onClick={() => linkClickedHandler(el)}>
                {el.category_details.title}

                {el.category_details.sub_categories && (
                  <>
                    <FiChevronDown
                      style={{
                        cursor: 'pointer',

                        transform: 'rotate(-90deg)'
                      }}
                    />
                    <HoverSubElement
                      data={el.category_details.sub_categories}
                    />
                  </>
                )}
              </HoverText>
            )
          })}
      </div>
    </MainHoverContainer>
  )
}

function HoverSubElement({data}: {data: Api.SubCategoriesInCatId[]}) {
  return (
    <HoverSubContainer>
      {!data || data.length === 0 ? (
        <HoverText
          style={{color: Theme.colors.$gray400, fontSize: Theme.fontSizes.$2}}
        >
          Categories not found
        </HoverText>
      ) : null}
      {data &&
        data.map((el, id) => {
          return <HoverText key={id}>{el.title}</HoverText>
        })}
    </HoverSubContainer>
  )
}
