import Image from 'next/image'
import {RiInstagramLine} from 'react-icons/ri'
import {TiSocialFacebook} from 'react-icons/ti'
import Link from 'next/link'
import {AiOutlineMenu} from 'react-icons/ai'

import {DrawerMenu} from 'components/drawerMenu'
import {HStack, VStack} from 'common/stack'

import {
  Logo,
  DrawerMenuBody,
  DrawerMenuItem,
  HorizontalMenuBreak,
  DrawerMenuFooterText,
  DrawerMenuItemsContainer,
  DrawerMenuFooter
} from './headerDrawer.style'
import {CollapseMenu} from 'components/collapseMenu'

export const HeaderDrawer = ({image, data}: {image: string; data: any}) => {
  return (
    <DrawerMenu
      disableScroll
      trigger={<AiOutlineMenu size={24} />}
      header={
        <Link href={'/'}>
          <Logo>
            <Image
              src={image}
              alt=""
              objectFit="contain"
              width="250"
              height="55"
            />
          </Logo>
        </Link>
      }
    >
      {() => (
        <>
          <DrawerMenuBody>
            <DrawerMenuItemsContainer>
              <Link href="/">
                <DrawerMenuItem>Home</DrawerMenuItem>
              </Link>
              <HorizontalMenuBreak />

              <DrawerMenuItem>
                <CollapseMenu
                  menuType="personal_injury"
                  menuList={nestedPerInjury}
                />
              </DrawerMenuItem>
              <HorizontalMenuBreak />

              <DrawerMenuItem>
                <CollapseMenu
                  menuType="practice_areas"
                  menuList={nestedPracAreas}
                />
              </DrawerMenuItem>
              <HorizontalMenuBreak />

              <DrawerMenuItem>
                <CollapseMenu menuType="contacts" />
              </DrawerMenuItem>
              <HorizontalMenuBreak />

              <DrawerMenuItem>
                <CollapseMenu menuType="case_results" />
              </DrawerMenuItem>
              <HorizontalMenuBreak />

              <DrawerMenuItem>
                <CollapseMenu menuType="attorney_profile" />
              </DrawerMenuItem>
              <HorizontalMenuBreak />

              <DrawerMenuItem>
                <CollapseMenu menuType="news" />
              </DrawerMenuItem>
              <HorizontalMenuBreak />
            </DrawerMenuItemsContainer>
          </DrawerMenuBody>

          <DrawerMenuFooter>
            <VStack gap="$2">
              <HStack gap="$4">
                <TiSocialFacebook size={24} />
                <RiInstagramLine size={24} />
              </HStack>

              <div>
                <DrawerMenuFooterText>
                  Codniv © Copyright 2022 - All rights reserved.
                </DrawerMenuFooterText>
                <DrawerMenuFooterText>
                  Created by <b>Codniv</b>.
                </DrawerMenuFooterText>
              </div>
            </VStack>
          </DrawerMenuFooter>
        </>
      )}
    </DrawerMenu>
  )
}

const nestedPerInjury = [
  {
    total_count: '6',
    category_details: {
      id: 3,
      type: 'personal_injury',
      title: 'Airline accidents',
      sub_categories: null,
      common_category_id: null,
      is_description_only: true
    }
  },
  {
    total_count: '6',
    category_details: {
      id: 4,
      type: 'personal_injury',
      title: 'Bus accidents',
      sub_categories: null,
      common_category_id: null,
      is_description_only: true
    }
  },
  {
    total_count: '6',
    category_details: {
      id: 5,
      type: 'personal_injury',
      title: 'Construction accidents',
      sub_categories: null,
      common_category_id: null,
      is_description_only: true
    }
  },
  {
    total_count: '6',
    category_details: {
      id: 2,
      type: 'personal_injury',
      title: 'Auto accident',
      sub_categories: [
        {
          id: 22,
          type: 'personal_injury',
          title: 'category title',
          common_category_id: 2,
          is_description_only: true
        },
        {
          id: 26,
          type: 'personal_injury',
          title: 'category title',
          common_category_id: 2,
          is_description_only: true
        },
        {
          id: 28,
          type: 'personal_injury',
          title: 'category title',
          common_category_id: 2,
          is_description_only: true
        }
      ],
      common_category_id: null,
      is_description_only: true
    }
  }
]

const nestedPracAreas = [
  {
    total_count: '7',
    category_details: {
      id: 32,
      type: 'practice_areas',
      title: 'Immigration Law',
      sub_categories: [
        {
          id: 33,
          type: 'practice_areas',
          title: 'Green Card Through Job | Labor Certification',
          common_category_id: 32,
          is_description_only: true
        }
      ],
      common_category_id: null,
      is_description_only: false
    }
  },
  {
    total_count: '7',
    category_details: {
      id: 56,
      type: 'practice_areas',
      title: 'New category',
      sub_categories: [
        {
          id: 57,
          type: 'practice_areas',
          title: 'Sub category',
          common_category_id: 56,
          is_description_only: false
        }
      ],
      common_category_id: null,
      is_description_only: false
    }
  },
  {
    total_count: '7',
    category_details: {
      id: 30,
      type: 'practice_areas',
      title: 'business law',
      sub_categories: [
        {
          id: 42,
          type: 'practice_areas',
          title: 'business 1',
          common_category_id: 30,
          is_description_only: false
        },
        {
          id: 43,
          type: 'practice_areas',
          title: 'business 2',
          common_category_id: 30,
          is_description_only: false
        },
        {
          id: 44,
          type: 'practice_areas',
          title: 'business 3',
          common_category_id: 30,
          is_description_only: false
        },
        {
          id: 34,
          type: 'practice_areas',
          title: 'Business and Commercial Law',
          common_category_id: 30,
          is_description_only: false
        }
      ],
      common_category_id: null,
      is_description_only: false
    }
  },
  {
    total_count: '7',
    category_details: {
      id: 31,
      type: 'practice_areas',
      title: 'Employee’s right or wages claim',
      sub_categories: null,
      common_category_id: null,
      is_description_only: false
    }
  }
]
