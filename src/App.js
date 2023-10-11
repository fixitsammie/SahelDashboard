import './App.css';
import { Layout, Input, Menu, Badge, Avatar, Dropdown, Space, Button, Table, Tag, Tabs, Flex, Radio } from 'antd';
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, BellOutlined, DownOutlined, MoreOutlined, EditOutlined } from '@ant-design/icons';
const { Search } = Input;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}



const itemsA = [
    getItem('Home', 'sub1', <MailOutlined />,),
    getItem('Contracts', 'sub2', <AppstoreOutlined />,),
    getItem('Invoices', 'sub4', <SettingOutlined />,),
    getItem('Transaction', 'sub4', <SettingOutlined />,),
    getItem('Sahel Advance', 'sub4', <SettingOutlined />,),
    getItem('Withdrawal Methods', 'sub4', <SettingOutlined />,),
    getItem('Perks', 'sub4', <SettingOutlined />,),
    getItem('Accounting', 'sub4', <SettingOutlined />,),
    getItem('Tax Forms', 'sub4', <SettingOutlined />,),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {

    color: '#fff',
    height: 64,
    paddingInline: 50,
    backgroundColor: 'white',
};
const contentStyle = {

    minHeight: 120,
    padding: 40

};
const siderStyle = {

    lineHeight: '120px',
    color: '#fff',
    minHeight: '100vh'

};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        ),
    },
];
const onSearch = (value, _e, info) => console.log(info?.source, value);

const columns = [



    {
        title: 'Client',
        key: 'client',
        render: (_, record) => (
            <Space >
                <Avatar shape="round" size="large"></Avatar>
                <Flex justify="center" vertical align="start">
                    <span> {record.name}</span>
                    <span>{record.date}</span>
                </Flex>
            </Space>


        ),
    },
    {
        title: 'Invoice ID',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Status',
        dataIndex: 'stats',
        key: 'stats',
        render: (_, { stats }) => (

            <Tag color={stats == 'PAID' ? 'orange' : 'blue'} key={stats}>
                {stats.toUpperCase()}
            </Tag>
        )


    },

    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (

            <MoreOutlined />

        ),
    },


];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
        stats: 'SKIPPED',
        date: 'October 11, 2023',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
        stats: 'PAID',
        date: 'October 11, 2023',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
        stats: 'PAID',
        date: 'October 11, 2023',
    },
];



function App() {
    const [tabPosition, setTabPosition] = useState('left');
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
    };
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <div className="App">

            <Layout>
                <Sider style={siderStyle} width='300'>
                    <h1 style={{ paddingLeft: 30 }}>Sahel</h1>
                    <Menu
                        mode="inline"
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
                        style={{ width: 256, background: 'transparent', color: 'white', }}
                        items={itemsA}
                    />
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Hover me
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </Sider>
                <Layout>
                    <Header style={headerStyle}>
                        <Search
                            placeholder="Search..."
                            onSearch={onSearch}
                            style={{
                                width: 200,
                            }}
                        />
                        <BellOutlined style={({ color: 'black', })} />

                        <Badge
                            dot={true}>
                            <Avatar shape="square" size="large"
                            >
                                <BellOutlined style={({ color: 'black', })} />
                            </Avatar>
                        </Badge>
                        <Avatar shape="round" size="large"></Avatar>

                        <Space>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        Hover me
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown></Space>





                    </Header>
                    <Content style={contentStyle} >


                        <Flex justify='space-between' align='flex-start'>
                            <h1>Invoices</h1>
                            <Space> <EditOutlined /><p>Edit</p></Space>
                        </Flex>


                        <div>
                            <Space
                                style={{
                                    marginBottom: 24,
                                }}
                            >

                                <Radio.Group value={tabPosition} onChange={changeTabPosition}>
                                    <Radio.Button value="left">Internal invoices</Radio.Button>
                                    <Radio.Button value="right">External invoices</Radio.Button>
                                </Radio.Group>
                            </Space>
                        </div>
                        <Flex justify='space-between' align='flex-start'>
                            <Search
                                placeholder="Search for contact name"
                                onSearch={onSearch}
                                style={{
                                    width: 200,
                                }}
                            />

                            <Space>
                                <p>Invoice Date</p>
                                <p>Status</p>
                            </Space>
                        </Flex>


                        <Table columns={columns} dataSource={data}
                            title={() => 'Invoices'} />
                    </Content>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
            </Layout>
        </div >
    );
}

export default App;
