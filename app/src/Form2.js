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


export default class Form extends React.Component{

    render(){
        return (
            <SplitterLayout primaryIndex={1} secondaryInitialSize={450}>
                <div> 
                    <p> Lot Size </p>
                    <form>
                        <TextField
                            hintText="Enter value"
                            floatingLabelText="S1's lot size"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            /><br />
                        <TextField
                            hintText="Enter value"
                            floatingLabelText="S2's lot size"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            /><br />
                        <TextField
                            hintText="Enter value"
                            floatingLabelText="S3'S lot size"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            /><br />
                        <TextField
                            hintText="Enter value"
                            floatingLabelText="S4's lot size"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            /><br />
                        <br />
                    </form>
                </div>
                <SplitterLayout secondaryInitialSize={450}>
                <div> 
                    <p> Lot Quantity </p>
                    <form>
                        <TextField
                            hintText="Enter value"
                            floatingLabelText="S1's lot quantity"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            /><br />
                        <TextField
                            hintText="Enter value"
                            floatingLabelText="S2's lot quantity"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            /><br />
                        <TextField
                            hintText="Enter value"
                            floatingLabelText="S3'S lot quantity"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            /><br />
                        <TextField
                            hintText="Enter value"
                            floatingLabelText="S4's lot quantity"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            /><br />
                        <br />
                    </form>
                </div>
                <div> 
                    <p> Order Quantity </p>
                    <form>
                        <TextField
                            hintText="Enter value"
                            floatingLabelText="Order quantity"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            /><br />
                        <br />
                        <button onClick={e => this.onSubmitQuality(e)}> Create supplier </button>
                    </form>
                </div>
                </SplitterLayout>
            </SplitterLayout>     
        )
    }
}
