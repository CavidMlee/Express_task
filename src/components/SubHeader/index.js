import React from 'react';
import './style.css';
import { InfoItem } from './infoItem'


export const SubHeader = () => {
    return (
        <div className='SH_container'>
            <div className='SH_maxwidth'>
                <InfoItem
                    title='На подпись'
                    count='5'
                />
                <InfoItem
                    title='Отправленные в банк'
                    count='25'
                />
                <InfoItem
                    title='Исполненные'
                    count='225'
                />
                <InfoItem
                    title='Отклоненные'
                    count='1524'
                />
            </div>
        </div>

    )
}