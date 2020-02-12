import React, { useState } from 'react'

export const useInputValue = () => {
    const [values, setValues] = useState({});

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return {
        handleChange,
        values
    }
}
