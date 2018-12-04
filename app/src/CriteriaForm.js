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

export default class CriteriaForm extends React.Component {

  saveAndContinue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  }

  goBack = (event) => {
    event.preventDefault();
    this.props.prevStep();
  }
  //
  // handleSubmit(event) {
  //   var data = {
  //     qop: this.state.qop,
  //     dop: this.state.dop,
  //     doq: this.state.doq,
  //     pcop: this.state.pcop,
  //     pcoq: this.state.pcoq,
  //     pcod: this.state.pcod
  //   }
  //
  //   // Post data to backend here
  //   fetch('http://localhost:5000/criteria', {
  //     method: 'post',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   .then((res) => console.log("fawefwea"))
  //   .catch(err => console.log(err));
  //
  //   event.preventDefault();
  // }

  render() {
    const { values } = this.props;

    return (
      <div>
        <p> Criteria Ranking </p>
        <form onSubmit={this.saveAndContinue}>
          <TextField
              name="qop"
              hintText="Enter value"
              floatingLabelText="Quality over Price"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('qop')}
              defaultValue={values.qop} /><br />
          <TextField
              name = "dop"
              hintText="Enter value"
              floatingLabelText="Delivery consistency over Price"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('dop')}
              defaultValue={values.dop} /><br />
          <TextField
              name = "doq"
              hintText="Enter value"
              floatingLabelText="Delivery consistency over Quality"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('doq')}
              defaultValue={values.doq} /><br />
          <TextField
              name = "pcop"
              hintText="Enter value"
              floatingLabelText="Process capability over Price"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('pcop')}
              defaultValue={values.pcop} /><br />
          <TextField
              name = "pcoq"
              hintText="Enter value"
              floatingLabelText="Process capability over Quality"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('pcoq')}
              defaultValue={values.pcoq} /><br />
          <TextField
              name = "pcod"
              hintText="Enter value"
              floatingLabelText="Process capability over Delivery consistency"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.props.handleChange('pcod')}
              defaultValue={values.pcod} /><br />

          <br />

          <button onClick={this.goBack}>Back</button>
          <button onClick={this.saveAndContinue}>Save And Continue</button>
        </form>
      </div>
    );
  }
}
