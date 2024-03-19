/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { Button } from 'antd';
import { useAppDispatch } from '../redux/hooks';
import { verifyToken } from '../utils/verifyToken';
import { setUser } from '../redux/features/auth/authSlice';

type TFormData = {
    userId: string,
    password: string
}

const Login = () => {


    const dispatch = useAppDispatch()


    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: 'A-0001',
            password: 'admin123',
        }
    });


    const [login, { error }] = useLoginMutation()


    const onSubmit =async (data :TFormData) => {
        const userInfo = {
            id: data.userId,
            password: data.password,
        };

 

        const res = await login(userInfo).unwrap();
        console.log(res);
        const user = verifyToken(res.data.accessToken);

        dispatch(setUser({ user: user, token: res.data.accessToken }));

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID: </label>
                <input type="text" id="id" {...register('userId')} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" {...register('password')} />
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;