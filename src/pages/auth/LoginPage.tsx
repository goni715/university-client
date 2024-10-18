import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hook/hook";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import verifyToken from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { ErrorToast, LoadingToast, SuccessToast } from "../../helper/ValidationHelper";


const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm({
      defaultValues: {
        id: "A-0001",
        password: "123456",
      },
    });

    const [login] = useLoginMutation();

    const onSubmit = async(data: FieldValues) => {
       const toastId = LoadingToast('Processing...');
       console.log(data);

        try{
            const res = await login(data).unwrap();
            const user = verifyToken(res.data.accessToken) as TUser;
            dispatch(setUser({ user: user, token:res.data.accessToken}));
            SuccessToast('Login Success', toastId);
            navigate(`/${user?.role}/dashboard`)
        }catch(err:any){
            ErrorToast('Something Went Wrong', toastId)
        }
    }





    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input type="text" id="id" {...register('id')}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" {...register('password')}/>
                </div>
                <Button htmlType="submit">Login</Button>
            </form>

        </>
    );
};

export default LoginPage;