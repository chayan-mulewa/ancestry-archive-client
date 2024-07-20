import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Form, Input, Button, ConfigProvider, message } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { IsValidToken } from '../utils/index';
import { Theme } from '../themes/index';
import { Server } from '../config/index';
import axios from 'axios';

const Signup = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (document.cookie.includes('token')) {
          const isValidTokenResult = await IsValidToken();
          if (!isValidTokenResult) {
            navigate('/signup');
          } else {
            navigate('/');
          }
        } else {
          navigate('/signup');
        }
      } catch (error) {
        navigate('/signup');
      }
    };
    fetchData();
  }, []);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(Server.authURL + '/signup', {
        fullName: fullName,
        email: email,
        username: username,
        password: password
      }, {
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (response.status === 201) {
        messageApi.success('Signup successful! Redirecting to login page...');
        navigate('/login');
      }

    } catch (error) {
      if (!error.response) {
        messageApi.error('Network error or server is unreachable. Please try again later.');
      } else if (error.response.data.error === 'username') {
        form.setFields([
          { name: 'username', errors: [error.response.data.message] }
        ]);
      } else if (error.response.data.error === 'email') {
        form.setFields([
          { name: 'email', errors: [error.response.data.message] }
        ]);
      } else {
        messageApi.error('Network error or server is unreachable. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-dvh flex flex-col justify-center items-center text-center bg-bgColor text-white'>
      {contextHolder}
      <div className='flex flex-col justify-center gap-4 p-6 items-center text-center rounded-md border border-textColor'>
        <div className='flex flex-col gap-4 justify-start items-center text-center'>
          <h1 className='text-2xl font-bold' >Signup</h1>
        </div>
        <div >
          <ConfigProvider theme={{
            token: {
              colorPrimaryHover: Theme.color,
              colorPrimary: Theme.color
            }
          }}>
            <Form form={form} onFinish={handleSubmit} className='h-72 w-64 flex flex-col gap-2 text-start'>
              <Form.Item name="full_name" rules={[{ required: true, message: 'Please input your full name!' }]}>
                <Input placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </Form.Item>
              <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}>
                <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Item>
              <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)} />
              </Form.Item>
              <Form.Item>
                <ConfigProvider theme={{
                  token: {
                    primaryShadow: 'none',
                    colorBgContainer: Theme.backgroundColor,
                    colorPrimaryHover: Theme.color
                  }
                }}>
                  <Button htmlType="submit" loading={isLoading} style={{ width: '100%' }} className="relative group flex px-8 py-2 justify-center items-center text-center border rounded-md border-textColor bg-textColor text-black overflow-hidden">
                    <span className='relative z-10 text-inherit transition-all duration-100 group-hover:text-textColor text-bgColor'>{!isLoading && 'Signup'}</span>
                  </Button>
                </ConfigProvider>
              </Form.Item>
            </Form>
          </ConfigProvider>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center text-center' >
          <h1 className='text-xl font-bold'>Or</h1>
          <h1> Already have an account <span className='text-textColor'><Link to={'/login'}>Login</Link></span></h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;
