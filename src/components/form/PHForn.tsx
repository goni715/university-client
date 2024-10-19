import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, unknown>;
}

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig; //type intersection


const PHForn = ({onSubmit, children, defaultValues } : TFormProps) => {
    const formConfig : TFormConfig = {}
    if(defaultValues){
      formConfig['defaultValues'] = defaultValues;
    }
    const methods = useForm(formConfig);
    
    return (
        <>
           <FormProvider {...methods}>
             <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
             {children}
             </Form>
           </FormProvider> 
        </>
    );
};

export default PHForn;