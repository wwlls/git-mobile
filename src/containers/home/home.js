import React from 'react';
import { Button } from 'antd-mobile';
import Utils from 'utils/index';
import TabBar from 'component/tabBar/tabBar';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname: '/home',
        };
    }

    componentDidMount() {
    }   

    render() {
        return (
            <div className="">
                12345678
                <TabBar pathname={this.state.pathname} />
            </div>
        )
    }
}

export default Home;
