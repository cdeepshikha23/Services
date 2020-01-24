import React, { Component } from 'react';
import ServiceListView from './ServiceListView';
import Services from '../Components/ServiceListData';
class ServiceListController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkState: false
        };
    }
    changeCheck = (id) => {
        const { checkState } = this.state

        if (id == 0) {
            this.setState({
                checkState: !checkState
            })
            Services.map((item) => item.check = checkState)
        }

        this.setState({
            checkState: !checkState
        })
        Services.map((item, index) => {
            if (index == id) {
                item.check = checkState
            }
            return item;
        })



    }

    render() {
        const { checkState } = this.state
        return (
            <ServiceListView
                changeCheck={(id) => this.changeCheck(id)}
                Data={Services}
                selected={checkState}
            />
        );
    }
}

export default ServiceListController;