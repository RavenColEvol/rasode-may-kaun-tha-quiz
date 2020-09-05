import React from 'react';
import { Statistic } from 'antd'

const { Countdown } = Statistic;

export default class extends React.PureComponent {
    render() {
        return (
            <Countdown className='timer' format='mm:ss' value={Date.now() + 1000 * 60 * 10} onFinish={this.props.submit}/>
        )
    }
}