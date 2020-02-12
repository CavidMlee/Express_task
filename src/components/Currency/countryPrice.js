import React from 'react';
import { Row, Col, Input, Icon as AntIcon } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

export const CountryPrice = ({ img, title, buyIcon, buyPrice, sellIcon, sellPrice }) => {
    return (
        <div className="CP_container">
            <div>
                <span><img src={img} className='flag_img' /></span>
                <div className='CP_title'>{title}</div>
            </div>
            <div>
                <span><img src={buyIcon} className='CP_icon' /></span>
                <div className='CP_price'>{buyPrice}</div>
            </div>
            <div>
                <span><img src={sellIcon} className='CP_icon' /></span>
                <div className='CP_price'>{sellPrice}</div>
            </div>
        </div>
    )
}