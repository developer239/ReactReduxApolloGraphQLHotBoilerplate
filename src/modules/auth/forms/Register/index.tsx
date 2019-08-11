import React, { FC } from 'react'
import { message } from 'antd'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { History as RouterHistory } from 'history'
import { auth } from 'services/auth'
import { TextInput } from 'components/TextInput'
import { FormButton } from 'components/FormButton'
import { useRegister } from '../../hooks/useRegister'

const initialValues = {
  email: '',
  password: '',
  firstName: 'John',
  lastName: 'Doe',
}

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
})

interface IProps {
  routerHistory: RouterHistory
}

export const RegisterForm: FC<IProps> = ({ routerHistory }) => {
  const [register] = useRegister()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const result = await register({ variables: { data: values } })
          if (result) {
            auth.setAccessToken(result.data.register.accessToken)
            routerHistory.push('/me')
          }
        } catch (error) {
          setSubmitting(false)
          message.error(error.message)
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextInput label="Email" name="email" />
          <TextInput label="Password" name="password" type="password" />
          <TextInput label="First Name" name="firstName" />
          <TextInput label="Last Name" name="lastName" />

          <FormButton htmlType="submit" type="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </FormButton>
        </Form>
      )}
    </Formik>
  )
}
