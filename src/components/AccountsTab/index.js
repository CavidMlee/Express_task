import React from 'react';
import { Tabs, Empty } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import { TabList } from './tabList'

const { TabPane } = Tabs;

export const AccountsTab = () => {
    return (
        <div className='tab_container'>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Accounts" key="1">
                    <div>
                        <TabList
                            account='My account'
                            accountNumber='AZ50AZEN40060495088944101001'
                            money='2 000 000 ₼'
                        />
                        <TabList
                            account='My account'
                            accountNumber='AZ50AZEN40060495088944101001'
                            money='2 000 000 ₼'
                        />
                    </div>
                </TabPane>
                <TabPane tab="Loans" key="2">
                    <div>
                        <Empty />
                    </div>
                </TabPane>
                <TabPane tab="Cards" key="3">
                    <div>
                        <Empty />
                    </div>
                </TabPane>
                <TabPane tab="Deposits" key="4">
                    <div>
                        <Empty />
                    </div>
                </TabPane>
            </Tabs>
            <div className='account_btn'>
                Go to accounts page
            </div>

        </div>

    )
}