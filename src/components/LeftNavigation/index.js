import React from 'react';
import { Row } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import { MenuButton } from '../index'
import {
    Dashboard,
    Payments,
    Payroll,
    Templates,
    History,
    Product,
    Express,
} from '../../static'


export const LeftNavigation = () => {
    return (
        <Row className='LN_container'>
            <MenuButton
                title='Dashboard'
                img={Dashboard}
                to='/'
            />
            <MenuButton
                title='Payments'
                img={Payments}
                to='/payment'
            />
            <MenuButton
                title='Payroll'
                img={Payroll}
                to='#'
            />
            <MenuButton
                title='Templates'
                img={Templates}
                to='#'
            />
            <MenuButton
                title='History'
                img={History}
                to='#'
            />
            <MenuButton
                title='Product'
                img={Product}
                to='#'
            />
            <MenuButton
                title='Express POS'
                img={Express}
                to='#'
            />
        </Row>
    )
}