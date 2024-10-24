import { Form, TimePicker } from "antd";
import { Controller } from "react-hook-form";

type TTimeProps = {
    name: string;
    label: string;
    disabled?: boolean;
}


const PHTimePicker = ({name, label, disabled} : TTimeProps) => {
   

    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <Controller
            name={name}
            render={({ field: {onChange}, fieldState: { error } }) => (
              <Form.Item label={label}>
                <TimePicker
                  onChange={(_date,dateString)=>onChange(dateString)}
                  id={name}
                  size="large"
                  disabled={disabled}
                  status={`${error && error.message ? "error" : ""}`}
                  style={{ width: "100%" }}
                  format="HH:mm"
                />
                {error && (
                  <span style={{ color: "red" }}>
                    {error.message as string}
                  </span>
                )}
              </Form.Item>
            )}
          />
        </div>
      </>
    );
};

export default PHTimePicker;