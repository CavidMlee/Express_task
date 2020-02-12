import React from 'react';
import { Layout, InputForm } from '../../components'
import {useInputValue} from '../../hooks/useInputValue'

const Payment = () => {
    const { values, handleChange } = useInputValue()
    return (
        <Layout title='Dövlət Xəzinədarlıq Ödənişləri' Visible={false}>
            <InputForm handleChange={handleChange} />
        </Layout>
    )
};

export default Payment