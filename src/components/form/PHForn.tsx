import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, unknown>;
  resolver?: any;
}

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig; //type intersection


//type AcademicSemesterSchemaType = z.infer<typeof AcademicSemesterSchema>;



const PHForn = ({onSubmit, children, defaultValues, resolver } : TFormProps) => {
    const formConfig : TFormConfig = {
      resolver: null
    }
    if(defaultValues){
      formConfig['defaultValues'] = defaultValues;
    }

    if(resolver){
      formConfig['resolver'] = resolver;
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