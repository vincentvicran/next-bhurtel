import {api} from 'api'

const getNewsCategories = async () => {
  const response = await api<Api.Base<Api.AllCategories>>('get')(
    'common-category/type/news'
  )

  return response.data.data.data
}

export const newsServices = {getNewsCategories}
