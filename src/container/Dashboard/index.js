import React from 'react';
import { Layout, Currency, DashboardBody,Table } from '../../components'

const Dashboard = () => {
    return (
        <Layout title='Dashboard' Visible={true} ActiveBtn={true}>
            <Currency />
            <DashboardBody />
            <Table/>
        </Layout>
    )
};

export default Dashboard