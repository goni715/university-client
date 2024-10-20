import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";


type TDatePickerProps = {
    name: string;
    label: string;
}


const PHDatePicker = ({name, label} : TDatePickerProps) => {

    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
              <Form.Item label={label}>
                <DatePicker {...field} id={name} size="large" style={{width: '100%'}}/>
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

export default PHDatePicker;