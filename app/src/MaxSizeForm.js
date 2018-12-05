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

export default class MaxSizeForm extends React.Component {

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
        <p> Maximum Lot Sizes </p>
        <form onSubmit={this.saveAndContinue}>
          <TextField
              name="s1m"
              hintText="Enter value"
              floatingLabelText="S1's lot size"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('s1m')}
              defaultValue={values.s1m} /><br />
          <TextField
              name="s2m"
              hintText="Enter value"
              floatingLabelText="S2's lot size"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('s2m')}
              defaultValue={values.s2m} /><br />
          <TextField
              name = "s3m"
              hintText="Enter value"
              floatingLabelText="S3's lot size"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('s3m')}
              defaultValue={values.s3m} /><br />
          <TextField
              name = "s4m"
              hintText="Enter value"
              floatingLabelText="S4's lot size"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('s4m')}
              defaultValue={values.s4m} /><br />

          <br />

          <button onClick={this.goBack}>Back</button>
          <button onClick={this.saveAndContinue}>Save And Continue</button>
        </form>
      </div>
    );
  }
}
