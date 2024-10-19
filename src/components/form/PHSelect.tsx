import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean}[]
}


const PHSelect = ({name, label, options } : TPHSelectProps) => {
 


    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <Controller
            name={name}
            render={({ field }) => (
              <Form.Item label={label}>
                <Select
                  {...field}
                  options={options}
                  size="large"
                />
              </Form.Item>
            )}
          />
        </div>
      </>
    );
};

export default PHSelect;