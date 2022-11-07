import React, {useEffect, useState} from 'react'
import {FiSearch, FiChevronDown} from 'react-icons/fi'

import {HStack} from 'common/stack'

import {
  HeaderContainer,
  HeaderLogo,
  Search,
  Menuitem,
  HeaderContent,
  HeaderItem,
  HeaderLinks,
  MainHoverContainer,
  HoverText,
  HoverSubContainer
} from './header.style'
import {Menu, MenuItem} from 'common/menu'
import {CompWrapper} from 'common/compWrapper'
import {useMedia} from 'hooks'
import {HeaderMenu} from 'components/headerMenu'
import Image from 'next/image'
import attorney from 'assets/images/attorney.png'
import {commonCategoryServices} from 'redux/commonCategory/commonCategory.service'
import Theme from 'theme'

interface HeaderProps {
  image: string
}

export const Header = ({image}: HeaderProps) => {
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
          <Image
            src={attorney}
            alt="logo"
            width="100"
            objectFit="contain"
            height="30"
          />
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

function HoverSubElement({data}: {data: Api.CommonCategory[]}) {
  return (
    <HoverSubContainer>
      {data &&
        data.map((el, id) => {
          return <HoverText key={id}>{el.title}</HoverText>
        })}
    </HoverSubContainer>
  )
}

const data = [
  {
    category_details: {
      id: 1,
      type: 'personal_injury',
      title: 'Personal injury',
      common_category_id: null,
      is_description_only: true,
      sub_categories: null
    }
  },
  {
    category_details: {
      id: 2,
      type: 'personal_injury',
      title: 'Auto accidents',
      common_category_id: null,
      is_description_only: false,
      sub_categories: null
    }
  },
  {
    category_details: {
      id: 3,
      type: 'personal_injury',
      title: 'Airline accidents',
      common_category_id: null,
      is_description_only: true,
      sub_categories: null
    }
  },
  {
    category_details: {
      id: 4,
      type: 'personal_injury',
      title: 'Bus accidents',
      common_category_id: null,
      is_description_only: true,
      sub_categories: null
    }
  },
  {
    category_details: {
      id: 5,
      type: 'personal_injury',
      title: 'Construction accidents',
      common_category_id: null,
      is_description_only: true,
      sub_categories: [
        {
          id: 59,
          type: 'personal_injury',
          title: 'Mini',
          common_category_id: 51,
          is_description_only: false
        },
        {
          id: 62,
          type: 'personal_injury',
          title: 'Bus accidents',
          common_category_id: 51,
          is_description_only: false
        },
        {
          id: 63,
          type: 'personal_injury',
          title: 'Rail accidents',
          common_category_id: 51,
          is_description_only: false
        },
        {
          id: 64,
          type: 'personal_injury',
          title: 'Road accidents',
          common_category_id: 51,
          is_description_only: false
        },
        {
          id: 65,
          type: 'personal_injury',
          title: 'Train accidents',
          common_category_id: 51,
          is_description_only: false
        }
      ]
    }
  }
]

function Prev() {
  const media = useMedia()
  return (
    <HStack align="center">
      <HStack gap="$13" align="center">
        <HeaderLogo src={''} />
        <HStack
          gap="$5"
          align="center"
          style={{display: media.sm ? 'flex' : 'none'}}
        >
          <Menuitem href="/home">HOME</Menuitem>
          <HeaderMenu header={'PERSONAL INJURY'} />
          <Menu
            placement="bottomright"
            trigger={(elementArg: {active: boolean}) => {
              return (
                <HStack justify="center" align="center" gap="$2">
                  <Menuitem href="#">
                    PERSONAL INJURY
                    <FiChevronDown
                      style={{
                        cursor: 'pointer',
                        height: '12px',
                        width: '14px'
                      }}
                    />
                  </Menuitem>
                </HStack>
              )
            }}
          >
            <MenuItem onClick={() => console.log('menu item1 clicked')}>
              <p>item1</p>
            </MenuItem>
            <MenuItem onClick={() => console.log('menu item2 clicked')}>
              <p>item2</p>
            </MenuItem>
            <MenuItem onClick={() => console.log('menu item3 clicked')}>
              <p>item3</p>
            </MenuItem>
          </Menu>

          <Menu
            placement="bottomright"
            trigger={(elementArg: {active: boolean}) => {
              console.log(elementArg)
              return (
                <HStack justify="center" align="center" gap="$2">
                  <Menuitem href="#">
                    PRACTICE AREAS
                    <FiChevronDown
                      style={{
                        cursor: 'pointer',
                        height: '12px',
                        width: '14px'
                      }}
                    />
                  </Menuitem>
                </HStack>
              )
            }}
          >
            {/* start */}
            {data.map((item) => {
              if (item?.category_details?.is_description_only) {
                return (
                  <MenuItem
                    key={item?.category_details.id}
                    onClick={() => console.log('menu item1 clicked')}
                  >
                    <p>{item.category_details.title}</p>
                  </MenuItem>
                )
              } else {
                return (
                  <Menu
                    key={item?.category_details.id}
                    placement="nestedright"
                    trigger={(elementArg: {active: boolean}) => {
                      console.log(elementArg)
                      return (
                        <MenuItem
                          onClick={() => console.log('it is clicked')}
                          style={{minWidth: '200px', width: '100%'}}
                        >
                          <HStack justify="flex-start" align="center" gap="$2">
                            <p>{item.category_details.title}</p>
                            <FiChevronDown
                              style={{
                                cursor: 'pointer',
                                height: '12px',
                                width: '14px'
                              }}
                            />
                          </HStack>
                        </MenuItem>
                      )
                    }}
                  >
                    <MenuItem onClick={() => console.log('menu item1 clicked')}>
                      <p>item1</p>
                    </MenuItem>
                    <MenuItem onClick={() => console.log('menu item2 clicked')}>
                      <p>item2</p>
                    </MenuItem>
                    <MenuItem onClick={() => console.log('menu item3 clicked')}>
                      <p>item3</p>
                    </MenuItem>
                  </Menu>
                )
              }
            })}
          </Menu>

          <Menuitem href="/contact-us">CONTACTS</Menuitem>
          <Menuitem href="/case-results">CASE RESULTS</Menuitem>
          <Menuitem href="/news">NEWS</Menuitem>
        </HStack>
      </HStack>

      <Search>
        <FiSearch style={{height: '19px', width: '19px'}} />
      </Search>
    </HStack>
  )
}
