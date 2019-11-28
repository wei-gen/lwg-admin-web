import React from 'react';
import './index.css';
import CommonLayout from '../../layout';
import Sider from '../../components/Sider';
import Header from '../../components/Header';

export default class Home extends React.Component {




    render() {
        return (
            <div className="home-container">
                
                <CommonLayout>
                    <Sider/>
                    <Header/>
                </CommonLayout>

            </div>
        )
    }

}