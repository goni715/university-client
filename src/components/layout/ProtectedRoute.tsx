import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook/hook";
import { logout, selectToken, TUser } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import verifyToken from "../../utils/verifyToken";

type TProtectedRoute = {
     children: ReactNode;
      role: string | undefined;
}


const ProtectedRoute = ({children, role} : TProtectedRoute) => {
    const token = useAppSelector(selectToken);
    const dispatch = useAppDispatch();

    let user;
    if(token){
        user = verifyToken(token) as TUser;
    }


    if(role !==undefined  && role !== user?.role){
        dispatch(logout());
    }

    if(!token){
        return <Navigate to="/login" replace={true} />
    }

    return children;
};

export default ProtectedRoute;