import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

export default class LectorQr extends Component{
    state = {
        delay: 100,
        result: ''
    }

    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.result !== this.state.result) {
            
        }
    }

    handleScan = ( data ) =>{
        this.setState({
            result: data,
        })
    }

    handleError = (err) =>{
        console.log(err)
    }

    render(){
        const previewStyle = {
            height: 300,
            width: 300
        }
    return(
        <div className="container-qr">
            <QrReader
                className="lector-qr"
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
            />
    <h3>{this.state.result}</h3>
        </div>
    )
    }
}