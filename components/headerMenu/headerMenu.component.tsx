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

interface HeaderMenuProps {
  header: React.ReactNode
  menuList?: typeof nestedPerInjury
}

export const HeaderMenu = ({
  header,
  menuList = nestedPerInjury
}: HeaderMenuProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const triggerOpen = (value: boolean) => {
    setOpen(value)
  }

  return (
    <div
      onMouseEnter={() => triggerOpen(true)}
      onMouseLeave={() => triggerOpen(false)}
    >
      <HeaderCollapse header={header} trigger={open}>
        {menuList?.map(({category_details: menu}) => {
          return <div key={menu.id}>{menu.title}</div>
        })}
      </HeaderCollapse>
    </div>
  )
}

const HeaderMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const HeaderMenuTitle = styled.div`
  font-size: ${Theme.fontSizes.$3};
`

const MenuBodyContainerStyled = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 20;
`

const MenuBodyStyled = styled.div`
  padding: ${Theme.space.$2};
  background: ${Theme.colors.$backgroundPrimary};
`

const MenuBodyContainer = makeAnimatedComponent(MenuBodyContainerStyled)
const MenuBody = makeAnimatedComponent(MenuBodyStyled)

// MARK: - HeaderCollapse

const HeaderCollapse = ({
  content,
  header,
  children,
  trigger,
  iconVisible = true,
  childrenClassName
}: any) => {
  //   const [open, setOpen] = useState(false)

  const [height, setHeight] = useState<any>(0)
  const heightAnimation = useAnimatedValue(trigger ? height : 0)

  const bind = useMeasure(({height}: any) => {
    setHeight(height)
  })

  return (
    <>
      <TransitionBlock state={trigger}>
        {(animation) => (
          <AnimatedBlock
            style={{
              position: 'relative'
            }}
          >
            <HeaderMenuContainer>
              <HeaderMenuTitle className="w-full">
                {header ? header : 'Header'}
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
                  {<FiChevronDown size={14} />}
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
