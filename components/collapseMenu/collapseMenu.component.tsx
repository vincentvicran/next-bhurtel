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
  color: black;
`

const MenuBodyContainerStyled = styled.div``

const MenuBodyStyled = styled.div`
  padding: ${Theme.space.$2};
`

const MenuBodyContainer = makeAnimatedComponent(MenuBodyContainerStyled)
const MenuBody = makeAnimatedComponent(MenuBodyStyled)

export const CollapseMenu = ({
  menuType,
  menuList = menuType === 'personal_injury' ? nestedPerInjury : nestedPracAreas
}: CollapseMenuProps) => {
  return (
    <CollapseMenuItem menuType={menuType}>
      {menuList?.map(({category_details: menu}) => {
        return menu?.sub_categories ? (
          <NestedCollapseMenuItem key={menu.id} menuTitle={menu.title}>
            {menu?.sub_categories?.map((item) => (
              <div key={item.id.toString()}>
                <Link href={'/'}>
                  <HeaderMenuTitle>{item.title}</HeaderMenuTitle>
                </Link>
              </div>
            ))}
          </NestedCollapseMenuItem>
        ) : (
          <div>
            <Link href={headerMenu[menuType]?.link ?? '/'}>
              <HeaderMenuTitle>{menu.title}</HeaderMenuTitle>
            </Link>
          </div>
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
              <div>
                <Link href={link ?? '/'}>
                  <HeaderMenuTitle>{menuTitle}</HeaderMenuTitle>
                </Link>
              </div>
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
                height: heightAnimation.value
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
