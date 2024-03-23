import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
    type: string;
    name: string;
    label?: string;
}


const PHInput = ({type,name,label}:TInputProps) => {
    return (
        <div style={{ margin: 0 }}>
            {label && label}
            <Controller
                name={name}
                render={({ field }) => <Input {...field} type={type} id={name} />}
            />
           
        </div>
    );
};

export default PHInput;