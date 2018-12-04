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

export default class PriceForm extends React.Component {

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
        <p> Price Ranking </p>
        <form onSubmit={this.saveAndContinue}>
          <TextField
              name="ps2s1"
              hintText="Enter value"
              floatingLabelText="Price S1 per S2"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('ps2s1')}
              defaultValue={values.ps2s1} /><br />
          <TextField
              name = "ps3s1"
              hintText="Enter value"
              floatingLabelText="Delivery consistency over Price"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('ps3s1')}
              defaultValue={values.ps3s1} /><br />
          <TextField
              name = "ps3s2"
              hintText="Enter value"
              floatingLabelText="Delivery consistency over Quality"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('ps3s2')}
              defaultValue={values.ps3s2} /><br />
          <TextField
              name = "ps4s1"
              hintText="Enter value"
              floatingLabelText="Process capability over Price"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('ps4s1')}
              defaultValue={values.ps4s1} /><br />
          <TextField
              name = "ps4s2"
              hintText="Enter value"
              floatingLabelText="Process capability over Quality"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('ps4s2')}
              defaultValue={values.ps4s2} /><br />
          <TextField
              name = "ps4s3"
              hintText="Enter value"
              floatingLabelText="Process capability over Delivery consistency"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('ps4s3')}
              defaultValue={values.ps4s3} /><br />

          <br />

          <button onClick={this.goBack}>Back</button>
          <button onClick={this.saveAndContinue}>Save And Continue</button>
        </form>
      </div>
    );
  }
}
