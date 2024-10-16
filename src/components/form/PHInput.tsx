import { Input } from "antd";
import { Controller } from "react-hook-form";


type TInputProps = {
    type: string;
    name: string;
    label: string;
}


const PHInput = ({ type, name, label } : TInputProps) => {
    //const { register } = useFormContext();

    return (
      <>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor={name}>{label}</label>
          <Controller
            name={name}
            render={({ field }) => <Input {...field} type={type} id={name} />}
          />
        </div>

        {/* <input type={type} id={name} {...register(name)}/> */}
      </>
    );
};

export default PHInput;