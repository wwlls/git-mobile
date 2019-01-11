import React from 'react';
import { Button } from 'antd-mobile';
import Utils from 'utils/index';
import TabBar from 'component/tabBar/tabBar';

class Lend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname: '/lend',
        };
    }

    componentDidMount() {
    }   

    render() {
        return (
            <div className="page-index">
                123456
                <TabBar pathname={this.state.pathname} />
            </div>
        )
    }
}

export default Lend;
