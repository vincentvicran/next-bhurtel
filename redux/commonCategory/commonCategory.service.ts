import {api} from 'api'

const getCommonCategoryByType = async (type: string) => {
  const response = await api<Api.Base<Api.AllCategories>>('get')(
    `common-category/type/${type}`
  )

  return response.data.data.data
}

export const commonCategoryServices = {getCommonCategoryByType}
