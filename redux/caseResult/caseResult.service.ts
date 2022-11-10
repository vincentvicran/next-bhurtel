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

const getCaseResultById = async (data: {caseResultId: number}) => {
  const response = await api<Api.Base<Api.CaseResultsById>>('get')(
    `case-result/${data.caseResultId}`
  )

  return response.data.data.data
}

export const caseResultServices = {getAllCaseResult, getCaseResultById}
