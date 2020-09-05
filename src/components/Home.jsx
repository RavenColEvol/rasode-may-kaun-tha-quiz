import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { Input, Tooltip, Form } from 'antd';
import { InfoCircleOutlined, UserOutlined, ArrowRightOutlined } from '@ant-design/icons';

import banner from '../media/banner.png'
import globalContext from '../utils/globalContext'
const { Search } = Input

export default withRouter((props) => {

    const [form] = Form.useForm();
    const { setName } = useContext(globalContext)
    const handleSearch = (value) => {
        setName(value['username'])
        props.history.push('quiz')
    }

    return (
        <div className='centered fullscreen'>
            
            <img src={banner} className='banner' alt='banner'></img>
            

            <Form form={form} onFinish={handleSearch}>
                <Form.Item name='username' rules={[{required: true}]}>
                    <Search
                        size='large'
                        placeholder="Enter your username Kokila Ben"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        suffix={
                            <Tooltip title="Fun Project">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                        onSearch={form.submit}
                        enterButton={<ArrowRightOutlined/>}
                    />
                </Form.Item>
            </Form>

        </div>
    )
})
