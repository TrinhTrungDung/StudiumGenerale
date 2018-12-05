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

export default class ProcessForm extends React.Component {

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
        <p> Process Ranking </p>
        <form onSubmit={this.saveAndContinue}>
          <TextField
              name="prs2s1"
              hintText="Enter value"
              floatingLabelText="Process S1 per S2"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('prs2s1')}
              defaultValue={values.prs2s1} /><br />
          <TextField
              name = "pr3s1"
              hintText="Enter value"
              floatingLabelText="Process S3 per S1"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('prs3s1')}
              defaultValue={values.prs3s1} /><br />
          <TextField
              name = "pr3s2"
              hintText="Enter value"
              floatingLabelText="Process S3 per S2"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('prs3s2')}
              defaultValue={values.prs3s2} /><br />
          <TextField
              name = "pr4s1"
              hintText="Enter value"
              floatingLabelText="Process S4 per S1"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('prs4s1')}
              defaultValue={values.prs4s1} /><br />
          <TextField
              name = "pr4s2"
              hintText="Enter value"
              floatingLabelText="Process S4 per S2"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('prs4s2')}
              defaultValue={values.prs4s2} /><br />
          <TextField
              name = "pr4s3"
              hintText="Enter value"
              floatingLabelText="Process S4 per S3"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('prs4s3')}
              defaultValue={values.prs4s3} /><br />

          <br />

          <button onClick={this.goBack}>Back</button>
          <button onClick={this.saveAndContinue}>Save And Continue</button>
        </form>
      </div>
    );
  }
}
