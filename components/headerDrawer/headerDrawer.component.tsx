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
                <CollapseMenu menuType="personal_injury" />
              </DrawerMenuItem>
              <HorizontalMenuBreak />

              <DrawerMenuItem>
                <CollapseMenu menuType="practice_areas" />
              </DrawerMenuItem>
              <HorizontalMenuBreak />

              <Link href="/contact-us">
                <DrawerMenuItem>Contacts</DrawerMenuItem>
              </Link>
              <HorizontalMenuBreak />

              <Link href="/case-results">
                <DrawerMenuItem>Case Results</DrawerMenuItem>
              </Link>
              <HorizontalMenuBreak />

              <Link href="/attorney-profile">
                <DrawerMenuItem>Attorney Profile</DrawerMenuItem>
              </Link>
              <HorizontalMenuBreak />

              <Link href="/news">
                <DrawerMenuItem>News</DrawerMenuItem>
              </Link>
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
