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

        setPersonalInjury(personal)
        setPracticeAreas(practice)
        setNews(news)
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
            <HeaderDrawer image={attorney.src} />
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
              <HeaderItem href="/">Home</HeaderItem>
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
              <HeaderItem href="contact-us">contacts</HeaderItem>
              <HeaderItem href="case-results">case results</HeaderItem>
              <HeaderItem href="case-results">Attorney profile</HeaderItem>

              <HeaderItem href="news">
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
              <HoverText key={id}>
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
