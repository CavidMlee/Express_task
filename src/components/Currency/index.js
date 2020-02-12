import React from 'react';
import { Row, Col, Input, Icon as AntIcon } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import { CountryPrice } from './countryPrice';
import { Usd, Eur, Tr, Rus, Uk, Up, Down, Ellipse,Convert } from '../../static'

export const Currency = () => {
    return (
        <Row className="currency_container">
            <Col span={4}>
                <div className='currency_txt'>Currency</div>
                <div className='byprice_txt'>Buy price</div>
                <div className='sellprice_txt'>Sell price</div>
            </Col>

            <Col span={3}>
                <CountryPrice
                    img={Usd}
                    title='USD'
                    buyIcon={Ellipse}
                    buyPrice='1.6980'
                    sellIcon={Ellipse}
                    sellPrice='1.7020'
                />

            </Col>
            <Col span={3}><CountryPrice
                img={Eur}
                title='EUR'
                buyIcon={Up}
                buyPrice='2.013'
                sellIcon={Down}
                sellPrice='2.05'
            /></Col>
            <Col span={3}>
                <CountryPrice
                    img={Rus}
                    title='RUR'
                    buyIcon={Ellipse}
                    buyPrice='0.0263'
                    sellIcon={Ellipse}
                    sellPrice='0.0272'
                />
            </Col>
            <Col span={3}>
                <CountryPrice
                    img={Uk}
                    title='GBP'
                    buyIcon={Up}
                    buyPrice='2.27'
                    sellIcon={Down}
                    sellPrice='2.325'
                />
            </Col>
            <Col span={3}>
                <CountryPrice
                    img={Tr}
                    title='YTL'
                    buyIcon={Up}
                    buyPrice='0.2700'
                    sellIcon={Down}
                    sellPrice='0.3080'
                />
            </Col>

            <Col span={5} className='convert_btn_container'>
                <div className='convert_btn'>
                    <img className='convert_btnimg' src={Convert} />
                    <div className='convert_btntxt'>Convertion</div>
                </div>
            </Col>
        </Row>
    )
}