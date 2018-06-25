import React from 'react';

export default class terry extends React.Component{
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return(
            <div>Hello Terry2{this.props.match.params.param},{this.props.match.params.aaa}</div>
        )
    }
}