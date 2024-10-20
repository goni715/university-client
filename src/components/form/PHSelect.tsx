import { Form, Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TPHSelectProps = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean}[] | undefined,
  disabled?: boolean
}


const PHSelect = ({name, label, options, disabled } : TPHSelectProps) => {
  const { formState: { errors } } = useFormContext()
 


    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <Controller
            name={name}
            render={({ field }) => (
              <Form.Item label={label}>
                <Select {...field} options={options} disabled={disabled} size="large" placeholder="Select"/>
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

export default PHSelect;