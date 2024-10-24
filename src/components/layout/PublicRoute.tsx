import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook/hook";
import { selectToken, TUser } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import verifyToken from "../../utils/verifyToken";

type TPublicRoute = {
     children: ReactNode;
}


const PublicRoute = ({children} : TPublicRoute) => {
    const token = useAppSelector(selectToken);

    let user;
    if(token){
        user = verifyToken(token) as TUser;
    }


    if(token){
        return <Navigate to={`/${user?.role}/dashboard`} replace={true} />
    }

    return children;
};

export default PublicRoute;