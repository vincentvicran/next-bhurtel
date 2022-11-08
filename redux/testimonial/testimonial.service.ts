import {api} from 'api'

const getAllTestimonialsHomepage = async () => {
  const response = await api<Api.Base<Api.AllTestimonials>>('get')(
    'testimonials/all-testimonial',
    {showHomepage: 'true'}
  )

  return response.data.data.data
}

export const testimonialServices = {getAllTestimonialsHomepage}
