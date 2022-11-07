import Image from 'next/image'
import {RiInstagramLine} from 'react-icons/ri'
import {TiSocialFacebook} from 'react-icons/ti'
import Link from 'next/link'
import {AiOutlineMenu} from 'react-icons/ai'

import {DrawerMenu} from 'components/drawerMenu'
import {HStack, VStack} from 'common/stack'
import logoIcon from 'assets/icons/logo1.png'

import {
  HeaderName,
  Logo,
  LogoIcon,
  DrawerMenuBody,
  DrawerMenuItem,
  HorizontalMenuBreak,
  DrawerMenuFooterText
} from './headerDrawer.style'

export const HeaderDrawerMenu = () => {
  return (
    <DrawerMenu
      inDismiss
      trigger={<AiOutlineMenu size={24} />}
      header={
        <Logo>
          <Link href={'/'}>
            <>
              <LogoIcon>
                <Image src={logoIcon} alt="" />
              </LogoIcon>
              <HeaderName>Codniv</HeaderName>
            </>
          </Link>
        </Logo>
      }
    >
      {() => (
        <>
          <DrawerMenuBody>
            <Link href="/">
              <DrawerMenuItem>Home</DrawerMenuItem>
            </Link>
            <HorizontalMenuBreak />
            <Link href="/shop">
              <DrawerMenuItem>Shop</DrawerMenuItem>
            </Link>
            <HorizontalMenuBreak />
            <Link href="/on-sale">
              <DrawerMenuItem>On Sale</DrawerMenuItem>
            </Link>
            <HorizontalMenuBreak />
            <Link href="/category">
              <DrawerMenuItem>Category</DrawerMenuItem>
            </Link>
            <HorizontalMenuBreak />
          </DrawerMenuBody>

          <div style={{flex: 1}} />

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
        </>
      )}
    </DrawerMenu>
  )
}
