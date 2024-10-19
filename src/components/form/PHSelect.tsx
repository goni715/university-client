import { Form, Select } from "antd";


const PHSelect = ({ label }) => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <Form.Item label={label}>
            <Select
              onChange={handleChange}
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
        </div>
      </>
    );
};

export default PHSelect;