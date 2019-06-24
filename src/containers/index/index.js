import React from 'react';
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import Utils from 'utils/index';
import Home from 'containers/home/home';
import Lend from 'containers/lend/lend';
import Merchant from 'containers/merchant/merchant';
import Mine from 'containers/mine/mine';
import './index.scss';

class Index extends React.Component {
    //子组件路由无法跳转使用 Context
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context) {
         console.log(context)
        super(props, context);
        this.state = { 
          selectedTab: 'blueTab',
        };
    }

    componentDidMount() {
    }   

    renderContent(pageText) {
      let {
        state,
        dispatch
      } = this.props

      if (pageText == 'Life') {
        return (
          <Home />
        );
      } else if (pageText == 'Koubei') {
        return (
          <Lend  />
        )
      } else if (pageText == 'Friend') {
        return (
          <div>
          <Merchant  />
          </div>
        )
      } else if (pageText == 'my') {
        return (
          <Mine  />
        )
      }

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
                    selected={this.state.selectedTab === 'blueTab'}
                    badge={1}
                    onPress={() => {
                      this.setState({
                        selectedTab: 'blueTab',
                      });
                    }}
                    data-seed="logId"
                  > 
                    {this.renderContent('Life')}
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
                    selected={this.props.selectedTab === 'redTab'}
                    onPress={() => {
                      this.setState({
                        selectedTab: 'redTab',
                      });
                    }}
                    data-seed="logId1"
                  >
                  {this.renderContent('Koubei')}
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
                    selected={this.props.selectedTab === 'greenTab'}
                    onPress={() => {
                      this.setState({
                        selectedTab: 'greenTab',
                      });
                    }}
                    // onPress={() => {
                    //   this.context.router.history.push('/mine');
                    // }}
                  >
                  {this.renderContent('Friend')}
                  </TabBar.Item>
                  <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    title="My"
                    key="my"
                    selected={this.props.selectedTab === 'yellowTab'}
                    onPress={() => {
                      this.setState({
                        selectedTab: 'yellowTab',
                      });
                    }}
                    // onPress={() => {
                    //   this.context.router.history.push('/merchant');
                    // }}
                  >
                  {this.renderContent('my')}
                  </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default Index;
