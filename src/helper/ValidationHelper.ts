import { toast } from "sonner";


class ValidationHelper {

    LoadingToast(msg: string){
        return toast.loading(msg);
    }
   
    //params[0] = msg params[2] = toastId
    SuccessToast(...params: (string | number)[] ){
        toast.success(params[0], { id:params[1], duration:2000 });
    }

    ErrorToast(...params: (string | number)[]){
        toast.error(params[0], { id:params[1], duration:2000 });
    }
}



export const { SuccessToast, LoadingToast, ErrorToast } = new ValidationHelper();