import {Pagination} from '@mui/material'
import {useRouter} from 'next/router'

interface PaginationProps {
  total: number
}

export function Paginate({total}: PaginationProps) {
  const router = useRouter()
  const pageChangeHandler = (_: any, val: number) => {
    router.query.page = JSON.stringify(val)
    router.push(router)
  }
  return (
    <Pagination
      count={Math.ceil(total / Number(process.env.NEXT_PUBLIC_LIMIT ?? 6))}
      page={Number(router.query.page) ?? 1}
      onChange={pageChangeHandler}
    />
  )
}
