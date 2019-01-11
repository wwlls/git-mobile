import React from 'react';
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import Utils from 'utils/index';
import './tabBar.scss';

class Tabbar extends React.Component {
    //子组件路由无法跳转使用 Context
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context) {
        super(props, context);
        this.state = { 
        };
    }

    componentDidMount() {
    }   

    render() {
        return (
            <div style={{position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                  <TabBar.Item
                        title="Life"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                    }
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selected={this.props.pathname === '/home'}
                    badge={1}
                    onPress={() => {
                         this.context.router.history.push('/home');
                    }}
                  > 
                  </TabBar.Item>
                  <TabBar.Item
                    icon={
                      <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                      />
                    }
                    selectedIcon={
                      <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                      />
                    }
                    title="Koubei"
                    key="Koubei"
                    badge={'new'}
                    selected={this.props.pathname === '/lend'}
                    onPress={() => {
                      this.context.router.history.push('/lend');
                    }}
                  >
                  </TabBar.Item>
                  <TabBar.Item
                    icon={
                      <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                      />
                    }
                    selectedIcon={
                      <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                      />
                    }
                    title="Friend"
                    key="Friend"
                    dot
                    selected={this.props.pathname === '/mine'}
                    onPress={() => {
                      this.context.router.history.push('/mine');
                    }}
                  >
                  </TabBar.Item>
                  <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    title="My"
                    key="my"
                    selected={this.props.pathname === '/merchant'}
                    onPress={() => {
                      this.context.router.history.push('/merchant');
                    }}
                  >
                  </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default Tabbar;
