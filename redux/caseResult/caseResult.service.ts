import {api} from 'api'

const getAllCaseResult = async ({
  query: {page = 1, limit = Number(process.env.NEXT_PUBLIC_LIMIT)}
}: {
  query: {page?: number; limit?: number}
}) => {
  const response = await api<Api.Base<Api.AllCaseResults>>('get')(
    'case-result',
    {page, limit}
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
