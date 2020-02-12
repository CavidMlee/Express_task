import React from 'react';
import { Row } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import { Link } from 'react-router-dom'


export const MenuButton = ({ img, title, to }) => {

    const isActive = (to === window.location.pathname)
    return (
        <Link to={to} className={`btn_container`}>
            <Row className={`btn_icon ${isActive ? "btn_active" : ''}`}>
                <img src={img} />
            </Row>
            <Row className={`btn_text ${isActive ? "btn_active_txt" : ''}`}>{title}</Row>
        </Link>
    )
}