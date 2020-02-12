import React from 'react';
import { Row, Col, Input, Icon as AntIcon,Badge } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import { Icon, Diagram, Basket, Lock, People, Setting, Message, Bell, Exit } from '../../static'

export const Header = () => {
    return (
        <Row className='header_container'>
            <Col span={6} lg={{ span: 4 }} xxl={{span:6}}>
                <img src={Icon} className='h_icon_img' />
            </Col>
            <Col span={16} lg={{ span: 24 }} xl={{span:19}}>
                <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{span:7}} className='h_search'>
                    <Input
                        name='search'
                        placeholder="Search"
                        prefix={<AntIcon type="search" />}
                        allowClear={true}
                        size={'large'}
                    />
                </Col>
                <Col xxl={{span:12}} xl={{ span: 16 }} lg={{span:12}}>
                    <Row>
                        <Col span={16} className='h_functional'>
                            <img src={Message} />
                            <img src={Basket} />
                            <img src={Lock} />
                            <div className='h_divider'></div>
                            <img src={People} />
                            <img src={Setting} />
                            <img src={Message} />
                            <Badge count={5} className='badge' > <img src={Bell} /> </Badge>
                        </Col>

                        <Col span={18} className='h_userName'>
                            <div>
                                <div className='h_userName_txt'>Ilya Davidoff</div>
                                <div className='h_status_txt'>Apple INC, Admin</div>
                            </div>
                            <img src={Exit} />
                        </Col>
                    </Row>
                </Col>
            </Col>
        </Row>
    )
};

