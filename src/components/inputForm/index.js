import React from 'react';
import { Row, Col, Input, Icon as AntIcon, Select, Button } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

export const InputForm = ({handleChange}) => {
    const { Option } = Select

    const inputContainer = (name, placeholder, value) => {
        return (
            <React.Fragment>
                <div className='inputName'>{name}</div>
                <div className="example-input">
                    <Input size="large" defaultValue={value} className="input_form" placeholder={placeholder} onChange={handleChange}/>
                </div>
            </React.Fragment>
        )
    }

    return (
        <div className='inputTable_container'>
            <div className='input_container_title'>
                Make new payment
                </div>
            <div className='inputTable_inputs'>
                <Row gutter={[24]}>
                    <Col span={12}>
                        {inputContainer("Köçürmənin nömrəsi", 'Köçürmənin nömrəsi', '2387218461284')}
                    </Col>
                    <Col span={12}>
                        {inputContainer("Köçürmənin tarixi", 'Köçürmənin tarixi', '04.05.2020')}
                    </Col>
                </Row>
                <Row gutter={[24]}>
                    <Col span={12}>
                        {inputContainer("Amount", 'Amount', '500.50')}
                    </Col>
                    <Col span={12}>
                        <div className='inputName'>Currency</div>
                        <Select defaultValue={'AZN'} size='large' className='select' >
                            <Option value='AZN'>AZN</Option>
                            <Option value='20-30'>20-30</Option>
                        </Select>
                    </Col>
                </Row>
                <Row gutter={[24,]}>
                    <Col span={12}>
                        {inputContainer("Göndərənin İBAN hesabı", 'Göndərənin İBAN hesabı', '2387218461284')}
                    </Col>
                    <Col span={12}>
                        {inputContainer("Göndərənin Adı", 'Göndərənin Adı', 'Ahmedov Zulfugar')}
                    </Col>
                </Row>
                <Row gutter={[24,]}>
                    <Col span={12}>
                        {inputContainer("Alanın İBAN hesabı", 'Alanın İBAN hesabı', '234235213534')}
                    </Col>
                    <Col span={12}>
                        {inputContainer("Alanın adı", 'Alanın adı', 'Mamedov Mamed')}
                    </Col>
                </Row>

                <Row>{inputContainer("Alanın VÖEN", 'Alanın VÖEN', '234123412351235')}</Row>
                <Row>
                    <div className='inputName'>Təyinat</div>
                    <Select defaultValue={'Choose from list'} size='large' className='select'>
                        <Option value='A'>A</Option>
                        <Option value='B'>B</Option>
                    </Select>
                </Row>
                <Row>{inputContainer("Şablon təyinat", 'Şablon təyinat', 'Text field')}</Row>
                <Row>{inputContainer("Əlavə təyinat", '', '')}</Row>
                <Row>
                    <div className='inputName'>Komissiya tutulacaq hesab</div>
                    <Select defaultValue={'AZ11NABZ01350100000000036944'} size='large' className='select' >
                        <Option value='A'>AZ11NABZ01350100000000036944</Option>
                        <Option value='B'>AZ11NABZ01350100000000036944</Option>
                    </Select>
                </Row>

            </div>
            <div className='input_footer'>
                <Button className='Input_btn'>
                    Validate file
                </Button>
            </div>
        </div>
    )
}
