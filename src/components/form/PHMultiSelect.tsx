import { Form, Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TPHSelectProps = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean}[] | undefined,
  disabled?: boolean
}


const PHMultiSelect = ({name, label, options, disabled } : TPHSelectProps) => {
  const { formState: { errors } } = useFormContext()
 


    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <Controller
            name={name}
            render={({ field }) => (
              <Form.Item label={label}>
                <Select mode="multiple" {...field} options={options} disabled={disabled} size="large" placeholder="Select" status={`${(errors && errors[name]?.message) ? 'error' : ''}`} />
                {errors[name] && (
                  <span style={{ color: "red"}}>
                    {errors[name]?.message as string}
                  </span>
                )}
              </Form.Item>
            )}
          />
          {/* <span style={{ color: 'red'}}>Name is required</span> */}
        </div>
      </>
    );
};

export default PHMultiSelect;