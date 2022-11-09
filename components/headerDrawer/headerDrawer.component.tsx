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
import Theme from 'theme'

export const HeaderDrawer = ({
  image,
  data
}: {
  image: string
  data?: {
    personalInjury: Api.AllCategories | null
    practiceAreas: Api.AllCategories | null
    news: Api.AllCategories | null
    profiles: Api.AllCategories | null
  }
}) => {
  return (
    <DrawerMenu
      disableScroll
      trigger={
        <HStack
          justify="center"
          align="center"
          style={{
            padding: `0 ${Theme.space.$2} ${Theme.space.$2} 0`
          }}
        >
          <AiOutlineMenu size={20} />
        </HStack>
      }
      header={
        <Link href={'/'}>
          <Logo>
            <Image
              src={image}
              alt=""
              objectFit="contain"
              width="150"
              height="80"
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
                  menuList={data?.personalInjury?.rows}
                />
              </DrawerMenuItem>
              <HorizontalMenuBreak />

              <DrawerMenuItem>
                <CollapseMenu
                  menuType="practice_areas"
                  menuList={data?.practiceAreas?.rows}
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
                <CollapseMenu
                  menuType="attorney_profile"
                  menuList={data?.profiles?.rows}
                />
              </DrawerMenuItem>
              <HorizontalMenuBreak />

              <DrawerMenuItem>
                <CollapseMenu menuType="news" menuList={data?.news?.rows} />
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
