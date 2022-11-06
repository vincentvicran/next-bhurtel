import {useState} from 'react'
import {
  TransitionBlock,
  interpolate,
  makeAnimatedComponent,
  useMeasure,
  useAnimatedValue
} from 'react-ui-animate'

import {IoIosArrowForward} from 'react-icons/io'

import {
  CollapseContainer,
  CollapseContent,
  CollapseBody,
  CollapseHeader,
  CollapseIcon,
  CollapseHeaderContent,
  CollapseBodyContent
} from './collapse.styled'
import {CollapseProps, CustomCollapseItemProps} from './collapse.type'

const CollapseContentAnimated = makeAnimatedComponent(CollapseContent)
const CollapseHeaderAnimated = makeAnimatedComponent(CollapseHeader)
const CollapseBodyAnimated = makeAnimatedComponent(CollapseBody)
const CollapseIconAnimated = makeAnimatedComponent(CollapseIcon)

export const Collapse = ({
  children,
  collapseList,
  multiple,
  header,
  content,
  globalHeight,
  style,
  trigger,
  iconVisible = false
}: CollapseProps) => {
  return (
    <>
      <CollapseContainer style={style}>
        {multiple ? (
          collapseList?.map(({header, content, itemHeight}, i) => {
            return (
              <CollapseItem
                key={i}
                header={header}
                content={content}
                globalHeight={globalHeight}
                itemHeight={itemHeight}
                iconVisible={iconVisible}
                trigger={trigger}
              >
                {children}
              </CollapseItem>
            )
          })
        ) : (
          <CollapseItem
            header={header ? header : 'Header'}
            content={content}
            globalHeight={globalHeight}
            iconVisible={iconVisible}
            trigger={trigger}
          >
            {children}
          </CollapseItem>
        )}
      </CollapseContainer>
    </>
  )
}

export const CollapseItem = ({
  content,
  header,
  children,
  globalHeight,
  trigger,
  itemHeight,
  iconVisible,
  childrenClassName
}: CustomCollapseItemProps) => {
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
          <CollapseContentAnimated>
            <CollapseHeaderAnimated
            //   onClick={() => {
            //     setOpen((prev) => !prev)
            //   }}
            >
              {iconVisible && (
                <CollapseIconAnimated
                  style={{
                    rotateZ: interpolate(animation.value, [0, 1], [0, 90])
                  }}
                >
                  <IoIosArrowForward />
                </CollapseIconAnimated>
              )}
              <CollapseHeaderContent className="w-full">
                {header ? header : 'Header'}
              </CollapseHeaderContent>
            </CollapseHeaderAnimated>
            <CollapseBodyAnimated
              style={{
                height: heightAnimation.value,
                opacity: animation.value
              }}
            >
              <CollapseBodyContent {...bind()} className={childrenClassName}>
                <>
                  {content}
                  {children}
                </>
              </CollapseBodyContent>
            </CollapseBodyAnimated>
          </CollapseContentAnimated>
        )}
      </TransitionBlock>
    </>
  )
}
