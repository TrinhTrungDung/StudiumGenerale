import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500,blue500} from 'material-ui/styles/colors';

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
};

export default class SupplierSizeForm extends React.Component {

  saveAndContinue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  }

  goBack = (event) => {
    event.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values } = this.props;
    return (
      <div>
        <p> Suppliers' Lot Sizes </p>
        <form onSubmit={this.saveAndContinue}>
          <TextField
              name="s1"
              hintText="Enter value"
              floatingLabelText="S1's lot size"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('s1')}
              defaultValue={values.s1} /><br />
          <TextField
              name="s2"
              hintText="Enter value"
              floatingLabelText="S2's lot size"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('s2')}
              defaultValue={values.s2} /><br />
          <TextField
              name = "s3"
              hintText="Enter value"
              floatingLabelText="S3's lot size"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('s3')}
              defaultValue={values.s3} /><br />
          <TextField
              name = "s4"
              hintText="Enter value"
              floatingLabelText="S4's lot size"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('s4')}
              defaultValue={values.s4} /><br />

          <br />

          <button onClick={this.goBack}>Back</button>
          <button onClick={this.saveAndContinue}>Save And Continue</button>
        </form>
      </div>
    );
  }
}
