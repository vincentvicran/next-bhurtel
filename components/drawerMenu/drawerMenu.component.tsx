import {useEffect, useState} from 'react'
import {CgClose} from 'react-icons/cg'
import {AiOutlineMenu} from 'react-icons/ai'
import {
  AnimatedBlock,
  makeAnimatedComponent,
  useMountedValue,
  interpolate,
  AnimationConfigUtils
} from 'react-ui-animate'

import {HStack} from 'common/stack'
import {useDisableScroll, useMedia} from 'hooks'
import Theme from 'theme'

import {
  CloseIcon,
  HeaderDrawerMenuContainer,
  DrawerMenuHeader,
  HeaderDrawerMenuOverlay
} from './drawerMenu.style'

const HeaderDrawerMenuOverlayAnimated = makeAnimatedComponent(
  HeaderDrawerMenuOverlay
)

interface DrawerMenuProps {
  header?: React.ReactNode
  containerStyle?: React.CSSProperties
  trigger?: React.ReactNode
  inDismiss?: boolean
  children: (closeModal?: () => void) => React.ReactNode
  disableScroll?: boolean

  open: boolean
  setOpen: (value: boolean) => void
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({
  children,
  header,
  containerStyle,
  trigger = <AiOutlineMenu size={24} />,
  inDismiss = false,
  open,
  setOpen,
  disableScroll
}) => {
  const media = useMedia()
  const openMenu = useMountedValue(open, {
    from: 0,
    enter: 1,
    exit: 0,
    config: {
      ...AnimationConfigUtils.POWER4
    }
  })

  const closeMenu = () => {
    setOpen(false)
  }

  useDisableScroll(open && !!disableScroll)

  return (
    <>
      {!media.lg && (
        <HStack
          align="center"
          justify="center"
          onClick={() => setOpen(true)}
          style={{cursor: 'pointer'}}
        >
          {trigger}
        </HStack>
      )}
      {openMenu(
        (animation, mounted) =>
          mounted && (
            <HeaderDrawerMenuOverlayAnimated
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.stopPropagation()
                closeMenu()
              }}
              style={{
                margin: 0,
                opacity: animation.value
              }}
            >
              <AnimatedBlock
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100vh',
                  width: '360px',
                  zIndex: 100,
                  backgroundColor: Theme.colors.$backgroundPrimary,
                  translateX: interpolate(animation.value, [0, 1], [-360, 0])
                }}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.stopPropagation()
                  inDismiss && closeMenu()
                }}
              >
                <HeaderDrawerMenuContainer style={containerStyle}>
                  <DrawerMenuHeader justify="space-between" align="center">
                    {header}
                    <CloseIcon
                      onClick={() => {
                        closeMenu()
                      }}
                    >
                      <CgClose size={20} />
                    </CloseIcon>
                  </DrawerMenuHeader>
                  {children(closeMenu)}
                </HeaderDrawerMenuContainer>
              </AnimatedBlock>
            </HeaderDrawerMenuOverlayAnimated>
          )
      )}
    </>
  )
}
