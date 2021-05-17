// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues);
    const [successMessage, setSuccessMessage] = useState(false);

    const handleChanges = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccessMessage(true);
    }
    return [formValues, handleChanges, successMessage, handleSubmit];
}