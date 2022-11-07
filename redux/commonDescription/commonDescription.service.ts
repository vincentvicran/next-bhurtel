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
  const response = await api<
    Api.Base<{
      description_details: Api.CommonDescription
      category_details: Api.CommonCategory
      user_details: Api.User
    }>
  >(`get`)(`common-description/${id}`)

  return response.data.data.data
}

export const commonDescriptionServices = {
  getCommonDescriptionByCategoryId,
  getCommonDescriptionById
}