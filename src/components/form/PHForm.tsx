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



const PHForm = ({onSubmit, children, defaultValues, resolver } : TFormProps) => {
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

    //form-submit
    const submit = async (data : FieldValues) => {
     const result = await onSubmit(data);
     if(result===true){
      methods.reset()
     }
    }


    
    return (
        <>
           <FormProvider {...methods}>
             <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
             {children}
             </Form>
           </FormProvider> 
        </>
    );
};

export default PHForm;