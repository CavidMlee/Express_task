import React from 'react';
import { DatePicker, Select } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

const { Option } = Select

const { RangePicker } = DatePicker

export const Stats = () => {
    return (
        <div className='stats_container'>
            <div className='stats_title_container'>
                <div className='stats_title'>Stats</div>
                <div className='stats_select_container'>
                    <div className='select_title'>My account</div>
                    <Select placeholder="AZ50AZEN40060495088944101001" className='stats_select'>
                        <Option value="1">AZ50AZEN40060495088944101001</Option>
                        <Option value="2">AZ70AZEN40060495284944101777</Option>
                    </Select>
                </div>
            </div>
            <div className='stats_date_container'>
                <RangePicker className='stats_date' size='large' placeholder={['From ', 'To ']} />
            </div>
            <div className='stats_money_container'>
                <div className='stats_round_img'>
                    <span>Balance</span>
                    <p>1 500 000 ₼</p>
                </div>
                <div>
                    <div className='stats_incoming'>
                        <span>Incoming</span>
                        <p> 2 000 000 ₼ </p>
                    </div>
                    <div className='stats_outcoming'>
                        <span>Outcoming</span>
                        <p>500 000 ₼</p>
                    </div>
                </div>
            </div>
        </div>
    )
}