import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";


type TInputProps = {
    type: string;
    name: string;
    label: string;
}


const PHInput = ({ type, name, label } : TInputProps) => {

    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
              <Form.Item label={label}>
                <Input {...field} type={type} id={name} size="large" />
                {error && (
                  <span style={{ color: "red" }}>
                    {error.message as string}
                  </span>
                )}
              </Form.Item>
            )}
          />
        </div>
       
        {/* <input type={type} id={name} {...register(name)}/> */}
      </>
    );
};

export default PHInput;