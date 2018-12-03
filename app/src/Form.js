import React from 'react'
import SplitterLayout from 'react-splitter-layout'
import TextField from 'material-ui/TextField';
import {orange500,blue500} from 'material-ui/styles/colors'


const styles = {
    errorStyle: {
      color: orange500,
    },
    underlineStyle: {
      borderColor: orange500,
    },
    floatingLabelStyle: {
      color: orange500,
    },
    floatingLabelFocusStyle: {
      color: blue500,
    },
}

const download = function(data, csvName) {
    const blob = new Blob([data],{type: 'text/csv'})
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('hidden','')
    a.setAttribute('href',url)
    a.setAttribute('download',csvName+".csv")
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

export default class Form extends React.Component{

    state = {
        QoP: "",
        DoP: "",
        DoQ: "",
        PcoP: "",
        PcoQ: "",
        PcoD: "",

        PS2S1: "",
        PS3S1: "",
        PS3S2: "",
        PS4S1: "",
        PS4S2: "",
        PS4S3: "",

        QS2S1: "",
        QS3S1: "",
        QS3S2: "",
        QS4S1: "",
        QS4S2: "",
        QS4S3: "",

        DS2S1: "",
        DS3S1: "",
        DS3S2: "",
        DS4S1: "",
        DS4S2: "",
        DS4S3: "",

        PrS2S1: "",
        PrS3S1: "",
        PrS3S2: "",
        PrS4S1: "",
        PrS4S2: "",
        PrS4S3: "",
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    onSubmitCriteria = e => {
        e.preventDefault()

        download(this.state.QoP + ","
        + this.state.DoP + ","
        + this.state.DoQ + ","
        + this.state.PcoP + ","
        + this.state.PcoQ + ","
        + this.state.PcoD, "criteriaRank")
    }

    onSubmitPrice = e => {
        e.preventDefault()

        download(this.state.PS2S1 + ","
        + this.state.PS3S1 + ","
        + this.state.PS3S2 + ","
        + this.state.PS4S1 + ","
        + this.state.PS4S2 + ","
        + this.state.PS4S3str, "priceRank")
    }

    onSubmitQuality = e => {
        e.preventDefault()

        download(this.state.QS2S1 + ","
        + this.state.QS3S1 + ","
        + this.state.QS3S2 + ","
        + this.state.QS4S1 + ","
        + this.state.QS4S2 + ","
        + this.state.QS4S3, "qualityRank")        
    }

    onSubmitDelivery = e => {
        e.preventDefault()

        download(this.state.DS2S1 + ","
        + this.state.DS3S1 + ","
        + this.state.DS3S2 + ","
        + this.state.DS4S1 + ","
        + this.state.DS4S2 + ","
        + this.state.DS4S3, "deliveryRank")        
    }

    onSubmitProcess = e => {
        e.preventDefault()

        download(this.state.PrS2S1 + ","
        + this.state.PrS3S1 + ","
        + this.state.PrS3S2 + ","
        + this.state.PrS4S1 + ","
        + this.state.PrS4S2 + ","
        + this.state.PrS4S3, "processRank")        
    }

    render(){
        return (
            <SplitterLayout primaryIndex={1} secondaryInitialSize={270}>
                <div> 
                    <p> Criteria Ranking </p>
                    <form>
                        <TextField
                            name = "QoP"
                            hintText="Enter value"
                            floatingLabelText="Quality over Price"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            value={this.state.QoP}
                            onChange={e => this.change(e)}/><br />
                        <TextField
                            name = "DoP"
                            hintText="Enter value"
                            floatingLabelText="Delivery consistency over Price"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            value={this.state.DoP}
                            onChange={e => this.change(e)}/><br />
                        <TextField
                            name = "DoQ"
                            hintText="Enter value"
                            floatingLabelText="Delivery consistency over Quality"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            value={this.state.DoQ}
                            onChange={e => this.change(e)}/><br />
                        <TextField
                            name = "PcoP"
                            hintText="Enter value"
                            floatingLabelText="Process capability over Price"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            value={this.state.PcoP}
                            onChange={e => this.change(e)}/><br />
                        <TextField
                            name = "PcoQ"
                            hintText="Enter value"
                            floatingLabelText="Process capability over Quality"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            value={this.state.PcoQ}
                            onChange={e => this.change(e)}/><br />
                        <TextField
                            name = "PcoD"
                            hintText="Enter value"
                            floatingLabelText="Process capability over Delivery consistency"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            value={this.state.PcoD}
                            onChange={e => this.change(e)}/><br /> 

                        <br />
            
                        {/* <button onClick={e => this.onSubmit(e)}> Create criteriaRank </button> */}
                        <button onClick={e=> this.onSubmitCriteria(e)}> Create criteriaRank</button>
                    </form>
                </div>
                <SplitterLayout secondaryInitialSize={270}>
                    <SplitterLayout secondaryInitialSize={540}>
                        <div> 
                        <p> Price Ranking </p>
                        <form>
                            <TextField
                                name = "PS2S1"
                                hintText="Enter value"
                                floatingLabelText="Price S2 over S1"
                                floatingLabelStyle={styles.floatingLabelStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                value={this.state.PS2S1}
                                onChange={e => this.change(e)}/><br />
                            <TextField
                                name = "PS3S1"
                                hintText="Enter value"
                                floatingLabelText="Price S3 over S1"
                                floatingLabelStyle={styles.floatingLabelStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                value={this.state.PS3S1}
                                onChange={e => this.change(e)}/><br />
                            <TextField
                                name = "PS3S2"
                                hintText="Enter value"
                                floatingLabelText="Price S3 over S2"
                                floatingLabelStyle={styles.floatingLabelStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                value={this.state.PS3S2}
                                onChange={e => this.change(e)}/><br />
                            <TextField
                                name = "PS4S1"
                                hintText="Enter value"
                                floatingLabelText="Price S4 over S1"
                                floatingLabelStyle={styles.floatingLabelStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                value={this.state.PS4S1}
                                onChange={e => this.change(e)}/><br />
                            <TextField
                                name = "PS4S2"
                                hintText="Enter value"
                                floatingLabelText="Price S4 over S2"
                                floatingLabelStyle={styles.floatingLabelStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                value={this.state.PS4S2}
                                onChange={e => this.change(e)}/><br />
                            <TextField
                                name = "PS4S3"
                                hintText="Enter value"
                                floatingLabelText="Price S4 over S3"
                                floatingLabelStyle={styles.floatingLabelStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                value={this.state.PS4S3}
                                onChange={e => this.change(e)}/><br /> 

                            <br />
                
                            <button onClick={e => this.onSubmitPrice(e)}> Create priceRank </button>
                        </form>
                        </div>
                        <SplitterLayout secondaryInitialSize={270}>
                            <div> 
                                <p> Quality Ranking </p>
                                <form>
                                    <TextField
                                        name = "QS2S1"
                                        hintText="Enter value"
                                        floatingLabelText="Quality S2 over S1"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.QS2S1}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "QS3S1"
                                        hintText="Enter value"
                                        floatingLabelText="Quality S3 over S1"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.QS3S1}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "QS3S2"
                                        hintText="Enter value"
                                        floatingLabelText="Quality S3 over S2"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.QS3S2}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "QS4S1"
                                        hintText="Enter value"
                                        floatingLabelText="Quality S4 over S1"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.QS4S1}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "QS4S2"
                                        hintText="Enter value"
                                        floatingLabelText="Quality S4 over S2"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.QS4S2}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "QS4S3"
                                        hintText="Enter value"
                                        floatingLabelText="Quality S4 over S3"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.QS4S3}
                                        onChange={e => this.change(e)}/><br /> 

                                    <br />
                        
                                    <button onClick={e => this.onSubmitQuality(e)}> Create qualityRank </button>
                                </form>
                            </div>
                            <div> 
                                <p> Delivery Consistency Ranking </p>
                                <form>
                                    <TextField
                                        name = "DS2S1"
                                        hintText="Enter value"
                                        floatingLabelText="Delivery consistency S2 over S1"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.DS2S1}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "DS3S1"
                                        hintText="Enter value"
                                        floatingLabelText="Delivery consistency S3 over S1"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.DS3S1}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "DS3S2"
                                        hintText="Enter value"
                                        floatingLabelText="Delivery consistency S3 over S2"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.DS3S2}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "DS4S1"
                                        hintText="Enter value"
                                        floatingLabelText="Delivery consistency S4 over S1"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.DS4S1}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "DS4S2"
                                        hintText="Enter value"
                                        floatingLabelText="Delivery consistency S4 over S2"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.DS4S2}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "DS4S3"
                                        hintText="Enter value"
                                        floatingLabelText="Delivery consistency S4 over S3"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.DS4S3}
                                        onChange={e => this.change(e)}/><br /> 

                                    <br />
                        
                                    <button onClick={e => this.onSubmitDelivery(e)}> Create deliveryRank </button>
                                </form>
                            </div>
                        </SplitterLayout>
                    </SplitterLayout>
                        <div> 
                            <p> Process Capability Ranking </p>
                            <form>
                                    <TextField
                                        name = "PrS2S1"
                                        hintText="Enter value"
                                        floatingLabelText="Process capability S2 over S1"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.PrS2S1}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "PrS3S1"
                                        hintText="Enter value"
                                        floatingLabelText="Process capability S3 over S1"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.PrS3S1}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "PrS3S2"
                                        hintText="Enter value"
                                        floatingLabelText="Process capability S3 over S2"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.PrS3S2}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "PrS4S1"
                                        hintText="Enter value"
                                        floatingLabelText="Process capability S4 over S1"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.PrS4S1}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "PrS4S2"
                                        hintText="Enter value"
                                        floatingLabelText="Process capability S4 over S2"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.PrS4S2}
                                        onChange={e => this.change(e)}/><br />
                                    <TextField
                                        name = "PrS4S3"
                                        hintText="Enter value"
                                        floatingLabelText="Process capability S4 over S3"
                                        floatingLabelStyle={styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                        value={this.state.PrS4S3}
                                        onChange={e => this.change(e)}/><br /> 

                                    <br />
                        
                                    <button onClick={e => this.onSubmitProcess(e)}> Create processRank </button>
                            </form>
                        </div>
                </SplitterLayout>
            </SplitterLayout>         
        )
    }
}
