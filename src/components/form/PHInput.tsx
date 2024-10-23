import { Form, Input } from "antd";
import { Controller } from "react-hook-form";


type TInputProps = {
    type: string;
    name: string;
    label: string;
    disabled?: boolean;
}


const PHInput = ({ type, name, label, disabled } : TInputProps) => {

    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
              <Form.Item label={label}>
                <Input {...field} type={type} id={name} size="large" disabled={disabled} status={`${(error && error.message) ? 'error' : ''}`} />
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