import {api} from 'api'

const getCommonCategoryByType = async (type: string) => {
  const response = await api<Api.Base<Api.AllCategories>>('get')(
    `common-category/type/${type}`
  )

  return response.data.data.data
}

const getCommonCategoryById = async (id: number) => {
  const response = await api<Api.Base<Api.CategoryFromAPI>>('get')(
    `common-category/${id}`,
    {limit: process.env.NEXT_LIMIT}
  )

  return response.data.data.data
}

export const commonCategoryServices = {
  getCommonCategoryByType,
  getCommonCategoryById
}
