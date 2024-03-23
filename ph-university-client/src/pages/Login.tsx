/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { Button, Row } from 'antd';
import { useAppDispatch } from '../redux/hooks';
import { verifyToken } from '../utils/verifyToken';
import { TUser, setUser } from '../redux/features/auth/authSlice';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import PHForm from '../components/form/PHForm';
import PHInput from '../components/form/PHInput';

type TFormData = {
    userId: string,
    password: string
}

const Login = () => {


    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const defaultValues = {
        userId: 'A-0001',
        password: 'admin123',
    };

    const [login] = useLoginMutation()


    const onSubmit = async (data: TFormData) => {

        const toastId = toast.loading("logging in...");
        try {
            const userInfo = {
                id: data.userId,
                password: data.password,
            };
            const res = await login(userInfo).unwrap();
            console.log(res);
            const user = verifyToken(res.data.accessToken) as TUser;

            toast.success("Login successful", { id: toastId, duration: 2000 })
            dispatch(setUser({ user: user, token: res.data.accessToken }));
            navigate(`/${user.role}/dashboard`)

        } catch (error) {
            toast.error("something went wrong", { id: toastId, duration: 2000 })


        }

    }


    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
                <PHInput type="text" name="userId" label="ID:" />
                <PHInput type="text" name="password" label="Password" />
                <Button htmlType="submit">Login</Button>
            </PHForm>
        </Row>
    );
};

export default Login;