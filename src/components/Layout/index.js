import React, { Fragment, memo } from 'react';
import './style.css'
import { Header, LeftNavigation, SubHeader,TitleHeader } from '../index'
import {Not} from '../../static'

const MemoHeader = memo(()=><Header />);
const MemoLeftNavigation = memo(()=><LeftNavigation />);

export const Layout = ({ children,title,Visible, ActiveBtn }) => {
    return (
        <Fragment>
            <MemoHeader />
            <MemoLeftNavigation />
            <div id="layoutMainContainer">
                <div className="scrolledArea">
                    {Visible &&<SubHeader  />}
                    <div className='contentArea'>
                    <img src={Not} className='message_icon'/>
                    <TitleHeader  title={title} ActiveBtn={ActiveBtn} />
                        {children}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}