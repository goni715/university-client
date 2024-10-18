import { Button } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hook/hook";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import verifyToken from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { ErrorToast, LoadingToast, SuccessToast } from "../../helper/ValidationHelper";
import PHForn from "../../components/form/PHForn";
import PHInput from "../../components/form/PHInput";


const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    //const { register } = useFormContext();

    const [login] = useLoginMutation();

    const onSubmit = async(data: FieldValues) => {
       const toastId = LoadingToast('Processing...');
       console.log(data);

        try{
            // const res = await login(data).unwrap();
            // const user = verifyToken(res.data.accessToken) as TUser;
            // dispatch(setUser({ user: user, token:res.data.accessToken}));
            // SuccessToast('Login Success', toastId);
            // navigate(`/${user?.role}/dashboard`)
        }catch(err:any){
            ErrorToast('Something Went Wrong', toastId)
        }
    }





    return (
        <>
            <PHForn onSubmit={onSubmit}>
                <div> 
                    <PHInput type="text" name="id" label="ID" />
                </div>
                <div>
                    <PHInput type="password" name="password" label="Password"/>
                </div>
                <Button htmlType="submit">Login</Button>
            </PHForn>

        </>
    );
};

export default LoginPage;