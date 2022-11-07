import {api} from 'api'

interface Contact {
  subject: string
  fullname: string
  email: string
  message: string
  phone?: number
}
// MARK: createContact
const createContact = async (data: Contact) => {
  const response = await api<Api.Base<undefined>>(`post`)(
    `contact`,
    undefined,
    data
  )

  return response.data.data.data
}

export const contactServices = {createContact}
