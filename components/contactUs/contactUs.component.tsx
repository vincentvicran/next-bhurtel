import React, {useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'

import {VStack} from 'common/stack'
import {InputField, Textarea} from 'components/inputField'
import {Button} from 'common/button'
import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import {useMedia} from 'hooks'
import {contactServices} from 'redux/contact/contact.service'

import {ContactContainer, HFlex} from './contactUs.styled'

export const ContactUs = ({toast}: any) => {
  const [loading, setLoading] = useState(false)
  const contactSchema = Yup.object().shape({
    subject: Yup.string().min(6, 'Too Short!').required('Required'),
    fullname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.number().min(7, 'Minimum 7 numbers should be added'),
    message: Yup.string().required('Required')
  })
  const formik = useFormik({
    initialValues: {
      fullname: '',
      message: '',
      email: '',
      subject: '',
      phone: undefined
    },
    onSubmit: async (values) => {
      if (values.phone === '') {
        values.phone = undefined
      }
      setLoading(true)
      try {
        await contactServices.createContact(values)

        toast.success('Successfully sent!!!. We will reach out to you soon.')
      } catch (err: any) {
      } finally {
        setLoading(false)
        formik.resetForm()
      }
    },
    validationSchema: contactSchema
  })
  const media = useMedia()
  return (
    <ContactContainer>
      <VStack gap="$7">
        <VStack gap="$5">
          <Paragraph color="light">CONTACT</Paragraph>
          <Title text="Let's talk" size="lg" weight="bold"></Title>
          <Paragraph color="light" style={{textAlign: 'left'}}>
            Contact Us today to start adding value to your business.
          </Paragraph>
        </VStack>
        <form onSubmit={formik.handleSubmit}>
          <VStack gap="$5">
            <InputField
              value={formik.values.subject}
              name="subject"
              onChange={formik.handleChange}
              placeholder="Subject"
              required
              error={formik.touched.subject && formik.errors.subject}
            ></InputField>

            <HFlex media={media}>
              <div style={{flex: 1}}>
                <InputField
                  value={formik.values.fullname}
                  name="fullname"
                  onChange={formik.handleChange}
                  placeholder="Full Name"
                  required
                  error={formik.touched.fullname && formik.errors.fullname}
                ></InputField>
              </div>
              <div style={{flex: 1}}>
                <InputField
                  value={formik.values.phone}
                  name="phone"
                  onChange={formik.handleChange}
                  placeholder=" Phone "
                  type={`number`}
                  error={formik.touched.phone && formik.errors.phone}
                ></InputField>
              </div>
            </HFlex>
            <InputField
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              placeholder="Email Address"
              required
              error={formik.touched.email && formik.errors.email}
            ></InputField>

            <Textarea
              value={formik.values.message}
              name="message"
              onChange={formik.handleChange}
              placeholder="Your Message"
              required
              error={formik.touched.message && formik.errors.message}
            ></Textarea>

            <Button
              title="Send Message"
              color="primary"
              variant="contained"
              disabled={loading}
              loading={loading}
            ></Button>
          </VStack>
        </form>
      </VStack>
    </ContactContainer>
  )
}
