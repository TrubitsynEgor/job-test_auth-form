import { Link } from 'react-router-dom'
import styles from './AuthForm.module.scss'
import { Button, Checkbox, Form, Input, Alert } from 'antd'
import { FC } from 'react'
import { OnFinishLogin, OnFinishReg } from '../../../features'

interface AuthFormProps {
  onFinishLog?: (values: OnFinishLogin) => Promise<void>
  onFinishReg?: (values: OnFinishReg) => Promise<void>
  pathnameIsLogin: boolean
  notFoundError?: string
  registration?: boolean
}

export const AuthForm: FC<AuthFormProps> = ({
  onFinishLog,
  onFinishReg,
  pathnameIsLogin,
  notFoundError,
  registration,
}) => {
  return (
    <Form
      className={styles.form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      // @ts-ignore: error message
      onFinish={registration ? onFinishReg : onFinishLog}
      autoComplete="off"
    >
      {notFoundError && (
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Alert
            message="Wrong login or password"
            description="Please check the correctness of filling in the data"
            type="error"
            closable
          />
        </Form.Item>
      )}

      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      {registration && (
        <>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  )
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="FirstName"
            name="firstName"
            rules={[
              { required: true, message: 'Please input your first name!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="lastName"
            name="lastName"
            rules={[
              { required: true, message: 'Please input your last name!' },
            ]}
          >
            <Input />
          </Form.Item>
        </>
      )}

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Link
          className={styles.registration}
          to={pathnameIsLogin ? '/registration' : '/login'}
        >
          {pathnameIsLogin
            ? "I don't have an account"
            : 'I already have an account'}
        </Link>
      </Form.Item>
    </Form>
  )
}
