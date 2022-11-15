import {api} from 'api'

// MARK: - getAbout
const getAbout = async () => {
  const response = await api<Api.Base<Api.AboutFromAPI>>('get')(
    'general/type/about',
    undefined
  )

  const about = response.data.data.data

  let aboutDetails: Api.About | null = null

  about?.map(({general_details: general}, index) => {
    if (index === 0) {
      aboutDetails = general
    }
    return
  })

  return aboutDetails
}

export const aboutService = {getAbout}
