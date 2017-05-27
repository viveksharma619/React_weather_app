import React , { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default class Chart extends Component{
    average(data){
        return _.round(_.sum(data)/data.length); 
    }

    render(){
        return(
            <div>
                <Sparklines height={120} width={180} data={this.props.data}>
                    <SparklinesLine color={this.props.color} />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div>{this.average(this.props.data)} ({this.props.units})</div>
            </div>
        );
    }
}