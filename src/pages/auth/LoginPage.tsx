import { Button, Col, Flex } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hook/hook";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import verifyToken from "../../utils/verifyToken";
import {
  ErrorToast,
  LoadingToast,
  SuccessToast,
} from "../../helper/ValidationHelper";
import PHInput from "../../components/form/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../schemas/auth.schema";
import PHForm from "../../components/form/PHForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, {isLoading}] = useLoginMutation();

  const defaultValues = {
    id: "F-0002",
    password: "123456",
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = LoadingToast("Processing...");

    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      SuccessToast("Login Success", toastId);
      
      if(res.data.needsPasswordChange){
        navigate(`/change-password`)
      }
      else{
        navigate(`/${user?.role}/dashboard`)
      }

    } catch (err: any) {
      if (err?.status === 404) {
        ErrorToast("Couild not find this ID", toastId);
      } else if (err?.status === 403) {
        ErrorToast(err?.data?.message, toastId);
      } else {
        ErrorToast("Something Went Wrong", toastId);
      }
    }
  };

  return (
    <>
      <Flex justify="center" align="center" style={{ height: "100vh" }}>
        <Col span={6}>
          <PHForm
            onSubmit={onSubmit}
            defaultValues={defaultValues}
            resolver={zodResolver(LoginSchema)}
          >
            <PHInput type="text" name="id" label="ID" />
            <PHInput type="password" name="password" label="Password" />
            <Button htmlType="submit" disabled={isLoading}>Login</Button>
          </PHForm>
        </Col>
      </Flex>
    </>
  );
};

export default LoginPage;
