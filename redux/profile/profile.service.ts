import {api} from 'api'

const getProfiles = async () => {
  const response = await api<Api.Base<Api.AllProfiles>>('get')('profile')

  return response.data.data.data
}

const getProfileById = async ({profileId}: {profileId: number | string}) => {
  const response = await api<Api.Base<Api.Profile>>('get')(
    `profile/${profileId}`
  )

  return response.data.data.data
}

export const profileServices = {getProfiles, getProfileById}
