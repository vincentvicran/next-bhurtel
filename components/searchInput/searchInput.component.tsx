import {ChangeEvent, ReactNode, useEffect, useState, useRef} from 'react'
import {MdSearch} from 'react-icons/md'

import {InputField} from 'components/inputField'
import {useDebounceValue, useMedia} from 'hooks'

export const SearchInput = ({
  title,
  append,
  onChangeHandler,
  onFocusHandler
}: {
  title?: string
  append?: ReactNode
  onChangeHandler?: (arg?: any) => void
  onFocusHandler?: (arg?: any) => void
}) => {
  const media = useMedia()
  const [searchInput, setSearchInput] = useState('')
  const searchFlag = useRef(false)
  const searchValue = useDebounceValue(searchInput)

  useEffect(() => {
    searchFlag.current && onChangeHandler?.(searchValue)
    return () => {
      searchFlag.current = true
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: `40px 0 0 0`
      }}
    >
      <InputField
        style={{width: !media.md ? '' : 400}}
        prepend={<MdSearch style={{margin: '0 0 0 10px '}} size={20} />}
        name="Search"
        placeholder={`Search ${title ?? `item`}`}
        type="text"
        value={searchInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearchInput(e.target.value)
        }}
      />
      {append}
    </div>
  )
}
