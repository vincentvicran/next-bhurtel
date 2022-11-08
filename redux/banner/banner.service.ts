import {api} from 'api'

const getBanners = async () => {
  const response = await api<Api.Base<Api.AllBanners>>('get')('banner')

  return response.data.data.data
}

export const bannerServices = {getBanners}
