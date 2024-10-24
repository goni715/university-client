import { Form, Select } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type TPHSelectProps = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean}[] | undefined,
  disabled?: boolean;
  onValueChange: React.Dispatch<React.SetStateAction<string>>
}


const PHSelectWithWatch = ({name, label, options, disabled, onValueChange } : TPHSelectProps) => {
  const {control, formState: { errors } } = useFormContext();
  const inputValue = useWatch({
    control,
    name
  })

 
  useEffect(()=>{
    onValueChange(inputValue)
  },[inputValue, onValueChange])
 


    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <Controller
            name={name}
            render={({ field }) => (
              <Form.Item label={label}>
                <Select {...field} options={options} disabled={disabled} size="large" placeholder="Select" status={`${(errors && errors[name]?.message) ? 'error' : ''}`} />
                {errors[name] && (
                  <span style={{ color: "red"}}>
                    {errors[name]?.message as string}
                  </span>
                )}
              </Form.Item>
            )}
          />
        </div>
      </>
    );
};

export default PHSelectWithWatch;