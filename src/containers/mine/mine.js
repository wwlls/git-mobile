import React from 'react';
import { Button } from 'antd-mobile';
import Utils from 'utils/index';
import TabBar from 'component/tabBar/tabBar';

class Mine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname: '/mine',
        };
    }

    componentDidMount() {
    }   

    render() {
        return (
            <div className="page-index">
                12345
                <TabBar pathname={this.state.pathname} />
            </div>
        )
    }
}

export default Mine;
