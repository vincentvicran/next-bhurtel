import {api} from 'api'

const getAllCaseResult = async (data: {
  query: {page?: number; limit?: number}
}) => {
  const response = await api<Api.Base<Api.AllCaseResults>>('get')(
    'case-result',
    data.query
  )

  return response.data.data.data
}

export const caseResultServices = {getAllCaseResult}
