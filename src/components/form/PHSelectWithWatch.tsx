import { Form, Select } from "antd";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type TPHSelectProps = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean}[] | undefined,
  disabled?: boolean
}


const PHSelectWithWatch = ({name, label, options, disabled } : TPHSelectProps) => {
  const {control, formState: { errors } } = useFormContext();
  const value = useWatch({
    control,
    name
  })

  console.log(value);
 


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