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
  DrawerMenuFooterText
} from './headerDrawer.style'

export const HeaderDrawer = ({image}: {image: string}) => {
  return (
    <DrawerMenu
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
