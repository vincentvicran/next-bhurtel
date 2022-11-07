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

type ValueObjType = {
  label: string
  value: string
  link?: string
}

interface HeaderMenuType {
  personal_injury: ValueObjType
  practice_areas: ValueObjType
  attorney_profile: ValueObjType
  news: ValueObjType
}

type MenuType = keyof typeof headerMenu

interface CollapseMenuProps {
  menuType: MenuType
  menuList?: typeof nestedPerInjury
}

const HeaderMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

const HeaderMenuTitle = styled.div`
  font-size: ${Theme.fontSizes.$3};
`

const MenuBodyContainerStyled = styled.div``

const MenuBodyStyled = styled.div`
  padding: ${Theme.space.$2};
`

const MenuBodyContainer = makeAnimatedComponent(MenuBodyContainerStyled)
const MenuBody = makeAnimatedComponent(MenuBodyStyled)

export const CollapseMenu = ({
  menuType,
  menuList = nestedPerInjury
}: CollapseMenuProps) => {
  return (
    <CollapseMenuItem menuType={menuType}>
      {menuList?.map(({category_details: menu}) => {
        return <div key={menu.id}>{menu.title}</div>
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
              <HeaderMenuTitle>
                <Link href={headerMenu[menuType]?.link ?? '/'}>
                  {headerMenu[menuType].label}
                </Link>
              </HeaderMenuTitle>
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
          </AnimatedBlock>
        )}
      </TransitionBlock>
    </>
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

const headerMenu: HeaderMenuType = {
  personal_injury: {
    label: 'Personal Injury',
    value: 'personal_injury'
  },
  practice_areas: {
    label: 'Practice Areas',
    value: 'practice_areas'
  },
  attorney_profile: {
    label: 'Attorney Profile',
    value: 'attorney_profile'
  },
  news: {
    label: 'News',
    value: 'news',
    link: '/news'
  }
}
