import React from 'react';
import Tools from 'utils/tools';

export default class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            money: 1000000000,
            time: Tools.isMoment(new Date().getTime(), 1),
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="page page-Member">
                <p>member页面</p>
                <div>金额格式化：{Tools.isNumeral(this.state.money)}</div>
                <div>时间格式化：{Tools.isMoment(this.state.time, 0)}<br/>{Tools.isMoment(this.state.time, 1)}<br/>{Tools.isMoment(this.state.time, 2)}</div> 
             </div>
        );
    }
}