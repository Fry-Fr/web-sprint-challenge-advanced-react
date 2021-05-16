// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValues) => {
    const [state, setState] = useState(initialValues);

    const handleChanges = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    return [state, handleChanges];
}