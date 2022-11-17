import {useEffect, useState, useMemo} from 'react'

export interface MediaReturn {
  xxl?: boolean
  xl: boolean
  lg: boolean
  md: boolean
  sm: boolean
  xs: boolean
}

export const useMedia = (): MediaReturn => {
  const xs = useGenericMedia(`(max-width: 480px)`)
  const sm = useGenericMedia(`(min-width: 640px)`)
  const md = useGenericMedia(`(min-width: 768px)`)
  const lg = useGenericMedia(`(min-width: 1024px)`)
  const xl = useGenericMedia(`(min-width: 1280px)`)
  const xxl = useGenericMedia(`(min-width: 1920px)`)

  const res = useMemo(
    () => ({xxl, xl, lg, md, sm, xs}),
    [xxl, xl, lg, md, sm, xs]
  )

  return res
}

// MARK: - useGenericMedia
const useGenericMedia = (query: string) => {
  const [match, setMatch] = useState(false)

  useEffect(() => {
    let mounted = true
    const mq = window.matchMedia(query)
    setMatch(mq.matches)

    const onChange = () => {
      if (!mounted) {
        return
      }

      setMatch(mq.matches)
    }

    mq.addEventListener('change', onChange)

    return () => {
      mounted = false
      mq.removeEventListener('change', onChange)
    }
  }, [query])

  return match
}
