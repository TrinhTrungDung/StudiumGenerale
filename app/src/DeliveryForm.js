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

export default class DeliveryForm extends React.Component {

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
        <p> Delivery Ranking </p>
        <form onSubmit={this.saveAndContinue}>
          <TextField
              name="ds2s1"
              hintText="Enter value"
              floatingLabelText="Delivery S1 per S2"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('ds2s1')}
              defaultValue={values.ds2s1} /><br />
          <TextField
              name = "ds3s1"
              hintText="Enter value"
              floatingLabelText="Delivery S3 per S1"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('ds3s1')}
              defaultValue={values.ds3s1} /><br />
          <TextField
              name = "ds3s2"
              hintText="Enter value"
              floatingLabelText="Delivery S3 per S2"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('ds3s2')}
              defaultValue={values.ds3s2} /><br />
          <TextField
              name = "ds4s1"
              hintText="Enter value"
              floatingLabelText="Delivery S4 per S1"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('ds4s1')}
              defaultValue={values.ds4s1} /><br />
          <TextField
              name = "ds4s2"
              hintText="Enter value"
              floatingLabelText="Delivery S4 per S2"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('ds4s2')}
              defaultValue={values.ds4s2} /><br />
          <TextField
              name = "ds4s3"
              hintText="Enter value"
              floatingLabelText="Delivery S4 per S3"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('ds4s3')}
              defaultValue={values.ds4s3} /><br />

          <br />

          <button onClick={this.goBack}>Back</button>
          <button onClick={this.saveAndContinue}>Save And Continue</button>
        </form>
      </div>
    );
  }
}
