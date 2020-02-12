import React from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import {Menu} from '../../static'


export const TableRow =({number})=>{
    return(
        <div className='tableRow_container'>
            <div className='table_number'>{number}</div>
            <div className='table_date'>21.09.2019</div>
            <div className='table_user'>
                <div className='table_account'>От «My Account»</div>
                <div className='table_accountNumber'>AZ50AZEN40060495088944101001</div>
            </div>
            <div className='table_about'>Görülmüş işlərə gorə xidmət haqqı</div>
            <div className='table_money'>500 000 ₼</div>
            <img src={Menu} />
        </div>
    )
}