import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState( initialForm );
    

    //Para que se pueda cambiar el input
    const onInputChange = ({target}) =>{
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value //Propieda computada dinamica
        });
    }

    //Resetear form
    const onResetForm = ({target}) =>{
        setFormState(initialForm);
    }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
    
  }
}

