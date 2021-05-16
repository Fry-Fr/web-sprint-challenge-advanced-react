// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValues) => {
    const [state, setState] = useState(initialValues);

    const setValue = (value) => {
        setState(value);
    }
    return [state, setValue];
}