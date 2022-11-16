import {api} from 'api'

export const getCommonDescriptionByCategoryId = async (
  categoryId: number,
  {
    page = 1,
    limit = Number(process.env.NEXT_PUBLIC_LIMIT ?? 6)
  }: {page?: number; limit?: number}
) => {
  const response = await api<Api.Base<Api.AllCommonDescription>>('get')(
    `common-description/common-category/${categoryId}`,
    {page, limit}
  )

  return response.data.data.data
}

const getCommonDescriptionById = async (id: number) => {
  const response = await api<Api.Base<Api.CommonDescriptionIndividual>>(`get`)(
    `common-description/${id}`
  )

  return response.data.data.data
}

const getAllCommonDescription = async (query?: {
  page?: number
  limit?: number
  showHomepage?: boolean
  search?: string
}) => {
  const response = await api<Api.Base<Api.AllCommonDescription>>(`get`)(
    `common-description`,
    query
  )

  return response.data.data.data
}

const getCommonDescriptionBySlug = async (slug: string) => {
  const response = await api<Api.Base<Api.CommonDescriptionIndividual>>(`get`)(
    `common-description/content/${slug}`
  )
  return response.data.data.data
}

const getCommonDescriptionByCategoryType = async (
  type: string,
  page?: number,
  limit?: number,
  showHomepage?: 'true' | 'false'
) => {
  const response = await api<Api.Base<Api.AllCommonDescription>>('get')(
    `common-description/common-category/type/${type}`,
    {page, limit, showHomepage}
  )

  return response.data.data.data
}

export const commonDescriptionServices = {
  getCommonDescriptionByCategoryId,
  getCommonDescriptionById,
  getCommonDescriptionBySlug,
  getAllCommonDescription,
  getCommonDescriptionByCategoryType
}
