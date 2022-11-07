import React from 'react'
import {FiSearch, FiChevronDown} from 'react-icons/fi'

import {HStack} from 'common/stack'

import {HeaderContainer, HeaderLogo, Search, Menuitem} from './header.style'
import {Menu, MenuItem} from 'common/menu'
import {CompWrapper} from 'common/compWrapper'
import {useMedia} from 'hooks'
import {HeaderMenu} from 'components/headerMenu'

interface HeaderProps {
  image: string
}

export const Header = ({image}: HeaderProps) => {
  const media = useMedia()
  return (
    <HeaderContainer>
      <CompWrapper>
        <HStack align="center">
          <HStack gap="$13" align="center">
            <HeaderLogo src={image} />
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
                              <HStack
                                justify="flex-start"
                                align="center"
                                gap="$2"
                              >
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
                        <MenuItem
                          onClick={() => console.log('menu item1 clicked')}
                        >
                          <p>item1</p>
                        </MenuItem>
                        <MenuItem
                          onClick={() => console.log('menu item2 clicked')}
                        >
                          <p>item2</p>
                        </MenuItem>
                        <MenuItem
                          onClick={() => console.log('menu item3 clicked')}
                        >
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
      </CompWrapper>
    </HeaderContainer>
  )
}

const data = [
  {
    category_details: {
      id: 1,
      type: 'personal_injury',
      title: 'Personal injury',
      common_category_id: null,
      is_description_only: true
    }
  },
  {
    category_details: {
      id: 2,
      type: 'personal_injury',
      title: 'Auto accidents',
      common_category_id: null,
      is_description_only: false
    }
  },
  {
    category_details: {
      id: 3,
      type: 'personal_injury',
      title: 'Airline accidents',
      common_category_id: null,
      is_description_only: true
    }
  },
  {
    category_details: {
      id: 4,
      type: 'personal_injury',
      title: 'Bus accidents',
      common_category_id: null,
      is_description_only: true
    }
  },
  {
    category_details: {
      id: 5,
      type: 'personal_injury',
      title: 'Construction accidents',
      common_category_id: null,
      is_description_only: true
    }
  }
]
