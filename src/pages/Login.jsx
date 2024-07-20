import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input, Button, Form, ConfigProvider, message } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { IsValidToken } from '../utils/index';
import { Server } from '../config/index';
import { Theme } from '../themes/index';
import { useDataContext } from '../contexts/index'
import axios from 'axios';

const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { setIsAuthenticated } = useDataContext();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (document.cookie.includes('token')) {
                    const isValidTokenResult = await IsValidToken();
                    if (!isValidTokenResult) {
                        navigate('/login');
                    } else {
                        navigate('/');
                    }
                } else {
                    navigate('/login');
                }
            } catch (error) {
                navigate('/login');
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async () => {
        if (!username || !password) {
            return; // Don't submit if username or password is empty
        }
        setIsLoading(true);
        try {
            const response = await axios.post(Server.authURL + '/login', {
                username: username,
                password: password,
                role: 'user'
            });
            if (response.status === 200) {
                setIsAuthenticated(true);
                setUsername('');
                setPassword('');
                const token = response.data.token;
                document.cookie = `token=${token}; path=/`;
                navigate('/');
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
                    <h1 className='text-2xl font-bold' >Login</h1>
                </div>
                <div >
                    <ConfigProvider theme={{
                        token: {
                            colorPrimaryHover: Theme.color,
                            colorPrimary: Theme.color
                        }
                    }}>
                        <Form form={form} onFinish={handleSubmit} className='h-40 w-64 flex flex-col gap-2 text-start'>
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
                                        <span className='relative z-10 text-inherit transition-all duration-100 group-hover:text-textColor text-bgColor'>{!isLoading && 'Login'}</span>
                                    </Button>
                                </ConfigProvider>
                            </Form.Item>
                        </Form>
                    </ConfigProvider>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center text-center' >
                    <h1 className='text-xl font-bold'>Or</h1>
                    <h1> Don't have an account ! <span className='text-textColor'><Link to={'/signup'}>Signup</Link></span></h1>
                </div>
            </div>
        </div>
    );
};

export default Login;
