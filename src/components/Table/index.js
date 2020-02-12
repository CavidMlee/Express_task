import React from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import moment from 'moment';
import { Menu } from '../../static'
import { TableRow } from '../index'

const dateFormat = 'DD.MM.YYY'

const data =['12345','15698','47895','49577','12344','78956','44513','12356','22335','48956']

export const Table = () => {
    return (
        <div className='table_container'>
            <div className='table_header'>
                <div className='table_title'>Payments and transfers</div>
                <div className='header_right'>
                    <div><DatePicker defaultValue={moment('01.01.2020', dateFormat)} format={dateFormat} /></div>
                    <div>-</div>
                    <div><DatePicker defaultValue={moment('02.06.2020', dateFormat)} format={dateFormat} /></div>
                    <img className='table_option' src={Menu} />
                </div>
            </div>
            <div>
                {
                    data.map(item=>{
                        return <TableRow number={item} />
                    })
                }
            </div>
            <div className='table_btn'>View All</div>
        </div>
    )
}