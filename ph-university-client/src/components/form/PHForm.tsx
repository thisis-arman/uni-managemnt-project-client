import { FormProvider, useForm } from "react-hook-form";


const PHForm = ({children,onSubmit,defaultValues}) => {
    const formConfig = {};

    if (defaultValues) {
        formConfig['defaultValues'] = defaultValues;
    }

    const methods = useForm(formConfig)
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onsubmit)}>{ children}</form>
            
       </FormProvider>
    );
};

export default PHForm;