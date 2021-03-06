import React, {useState} from 'react'
import { Redirect, Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './LoginForm.css';

const LoginForm = () => {
const [isLoggedIn, setLogin] = useState(false);

const onFinish = function onfinish(data){
    if(data.password === "123") setLogin(true);
}

if(isLoggedIn){
  return <Redirect to='/home' />
}

  return (
    <div className='loginForm'>
      <h1 className='siteTitle'>DISCOVER</h1>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        validateTrigger="onSubmit"
      >
        <Input 
        style={{lineHeight: 3}} 
        prefix={<UserOutlined 
        className="site-form-item-icon" />} 
        placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
      >
        <Input
          style={{lineHeight: 3}}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button  type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <span style={{paddingLeft : 5, paddingRight : 5}}>Or</span> 
        <Link value="submit" to="/register">register now!</Link>
      </Form.Item>
    </Form>
    </div>
  );
}

export default LoginForm