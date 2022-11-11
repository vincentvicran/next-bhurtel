import {api} from 'api'

export const getCommonDescriptionByCategoryId = async (
  categoryId: number,
  {page, limit}: {page?: number; limit?: number}
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

const getAllCommonDescription = async () => {
  const response = await api<Api.Base<Api.AllCommonDescription>>(`get`)(
    `common-description`
  )

  return response.data.data.data
}

const getCommonDescriptionBySlug = async (slug: string) => {
  const response = await api<Api.Base<Api.CommonDescriptionIndividual>>(`get`)(
    `common-description/content/${slug}`
  )
  return response.data.data.data
}

export const commonDescriptionServices = {
  getCommonDescriptionByCategoryId,
  getCommonDescriptionById,
  getCommonDescriptionBySlug,
  getAllCommonDescription
}
