import React from 'react';
import { Button } from 'antd-mobile';
import Utils from 'utils/index';
import TabBar from 'component/tabBar/tabBar';

class Merchant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname: '/merchant',
        };
    }

    componentDidMount() {
    }   

    render() {
        return (
            <div className="page-index">
                1234
                <TabBar pathname={this.state.pathname} />
            </div>
        )
    }
}

export default Merchant;
