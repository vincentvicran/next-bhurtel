import Link from 'next/link'
import {useState} from 'react'
import {FiChevronDown} from 'react-icons/fi'
import {
  AnimatedBlock,
  interpolate,
  makeAnimatedComponent,
  TransitionBlock,
  useAnimatedValue,
  useMeasure
} from 'react-ui-animate'
import styled from 'styled-components'

import Theme from 'theme'

interface CollapseMenuItemProps {
  content?: React.ReactNode
  children: React.ReactNode
  iconVisible?: boolean
  childrenClassName?: string
  menuType: MenuType
}

interface NestedCollapseMenuItemProps {
  children: React.ReactNode
  menuTitle: string
  link?: string
}

type ValueObjType = {
  label: string
  value: string
  link?: string
}

interface HeaderMenuType {
  personal_injury: ValueObjType
  practice_areas: ValueObjType
  contacts: ValueObjType
  case_results: ValueObjType
  attorney_profile: ValueObjType
  news: ValueObjType
}

type MenuType = keyof typeof headerMenu

interface CollapseMenuProps {
  menuType: MenuType
  menuList?: Api.AllCategories['rows']
}

const HeaderMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

const HeaderMenuTitle = styled.div`
  font-size: ${Theme.fontSizes.$3};
  color: black;
`
const NestedHeaderMenuTitle = styled(HeaderMenuTitle)`
  padding: ${Theme.space.$1} 0;
`

const MenuBodyContainerStyled = styled.div``

const MenuBodyStyled = styled.div`
  padding: ${Theme.space.$2};
`

const MenuBodyContainer = makeAnimatedComponent(MenuBodyContainerStyled)
const MenuBody = makeAnimatedComponent(MenuBodyStyled)

export const CollapseMenu = ({menuType, menuList}: CollapseMenuProps) => {
  return (
    <CollapseMenuItem menuType={menuType} iconVisible={!!menuList}>
      {menuList?.map(({category_details: menu}) => {
        return menu?.sub_categories ? (
          <NestedCollapseMenuItem key={menu.id} menuTitle={menu.title}>
            {menu?.sub_categories?.map((item) => (
              <NestedHeaderMenuTitle key={item.id.toString()}>
                <Link href={'/'}>
                  <HeaderMenuTitle>{item.title}</HeaderMenuTitle>
                </Link>
              </NestedHeaderMenuTitle>
            ))}
          </NestedCollapseMenuItem>
        ) : (
          <NestedHeaderMenuTitle key={menu.id.toString()}>
            <Link href={headerMenu[menuType]?.link ?? '/'}>
              <HeaderMenuTitle>{menu.title}</HeaderMenuTitle>
            </Link>
          </NestedHeaderMenuTitle>
        )
      })}
    </CollapseMenuItem>
  )
}

// MARK: - CollapseMenuItem

const CollapseMenuItem = ({
  content,
  children,
  iconVisible = true,
  childrenClassName,
  menuType
}: CollapseMenuItemProps) => {
  const [open, setOpen] = useState(false)

  const [height, setHeight] = useState<any>(0)
  const heightAnimation = useAnimatedValue(open ? height : 0)

  const bind = useMeasure(({height}: any) => {
    setHeight(height)
  })

  return (
    <>
      <TransitionBlock state={open}>
        {(animation) => (
          <AnimatedBlock
            style={{
              position: 'relative',
              width: '100%'
            }}
          >
            <HeaderMenuContainer onClick={() => setOpen((prev) => !prev)}>
              <div>
                <Link href={headerMenu[menuType]?.link ?? '/'}>
                  <HeaderMenuTitle>
                    {headerMenu[menuType].label}
                  </HeaderMenuTitle>
                </Link>
              </div>
              {iconVisible && (
                <AnimatedBlock
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    rotateZ: interpolate(animation.value, [0, 1], [0, 180])
                  }}
                >
                  <FiChevronDown size={14} />
                </AnimatedBlock>
              )}
            </HeaderMenuContainer>
            {iconVisible && (
              <MenuBodyContainer
                style={{
                  opacity: interpolate(animation.value, [0, 1], [0, 1]),
                  height: heightAnimation.value
                }}
              >
                <MenuBody {...bind()} className={childrenClassName}>
                  <>
                    {content}
                    {children}
                  </>
                </MenuBody>
              </MenuBodyContainer>
            )}
          </AnimatedBlock>
        )}
      </TransitionBlock>
    </>
  )
}

// MARK: - NestedCollapseMenuItem

const NestedCollapseMenuItem = ({
  link,
  menuTitle,
  children
}: NestedCollapseMenuItemProps) => {
  const [open, setOpen] = useState(false)

  const [height, setHeight] = useState<any>(0)
  const heightAnimation = useAnimatedValue(open ? height : 0)

  const bind = useMeasure(({height}: any) => {
    setHeight(height)
  })

  return (
    <>
      <TransitionBlock state={open}>
        {(animation) => (
          <AnimatedBlock
            style={{
              position: 'relative',
              width: '100%'
            }}
          >
            <HeaderMenuContainer onClick={() => setOpen((prev) => !prev)}>
              <NestedHeaderMenuTitle>
                <Link href={link ?? '/'}>
                  <HeaderMenuTitle>{menuTitle}</HeaderMenuTitle>
                </Link>
              </NestedHeaderMenuTitle>
              <AnimatedBlock
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  rotateZ: interpolate(animation.value, [0, 1], [0, 180])
                }}
              >
                <FiChevronDown size={14} />
              </AnimatedBlock>
            </HeaderMenuContainer>
            <MenuBodyContainer
              style={{
                opacity: interpolate(animation.value, [0, 1], [0, 1]),
                height: heightAnimation.value,
                visibility: animation.value === 0 ? 'hidden' : 'visible'
              }}
            >
              <MenuBody {...bind()}>
                <>{children}</>
              </MenuBody>
            </MenuBodyContainer>
          </AnimatedBlock>
        )}
      </TransitionBlock>
    </>
  )
}

const headerMenu: HeaderMenuType = {
  personal_injury: {
    label: 'Personal Injury',
    value: 'personal_injury'
  },
  practice_areas: {
    label: 'Practice Areas',
    value: 'practice_areas'
  },
  contacts: {
    label: 'Contacts',
    value: 'contacts',
    link: '/contact-us'
  },
  case_results: {
    label: 'Case Results',
    value: 'case_results',
    link: '/case-results'
  },
  attorney_profile: {
    label: 'Attorney Profile',
    value: 'attorney_profile',
    link: '/'
  },
  news: {
    label: 'News',
    value: 'news',
    link: '/news'
  }
}
