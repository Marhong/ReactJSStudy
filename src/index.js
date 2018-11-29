import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
/*import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();*/

// 函数 getNotificationsCount 已经可以直接调用
// 用React.js构建未读消息组件
class Notification extends Component {
    getResult(number){
        if(number>0){
            return <span>有({number})条未读消息</span>;
        }else{
            return <span>没有未读消息</span>;
        }
    }
    render () {
        // TODO
        const number = getNotificationsCount();
        return (
            <div>
                {this.getResult(number)}
            </div>
        )
    }
}

ReactDOM.render(<Notification/>,document.getElementById('root'));