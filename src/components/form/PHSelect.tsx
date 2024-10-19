import { Form, Select } from "antd";
import { Controller } from "react-hook-form";


const PHSelect = ({name, label }) => {
 

    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <Controller
            name={name}
            render={({ field }) => (
              <Form.Item label={label}>
                <Select
                  {...field}
                  options={[
                    {
                      value: "Autumn",
                      label: "Autumn",
                    },
                    {
                      value: "Summer",
                      label: "Summer",
                    },
                    {
                      value: "Fall",
                      label: "Fall",
                    },
                  ]}
                />
              </Form.Item>
            )}
          />
        </div>
      </>
    );
};

export default PHSelect;