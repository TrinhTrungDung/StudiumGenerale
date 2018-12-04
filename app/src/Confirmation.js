import React from 'react';

const url = "http://localhost:5000";

function postSuppliersData(data) {
  
}

function postCriteriaInfo(data) {
  fetch(`${url}/criteria`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => console.log("fawefwea"))
  .catch(err => console.log(err));
}

export default class Confirmation extends React.Component {
  saveAndContinue = (event) => {
    var suppliersData = {
      s1: this.props.values.s1,
      s2: this.props.values.s2,
      s3: this.props.values.s3,
      s4: this.props.values.s4,
      s1m: this.props.values.s1m,
      s2m: this.props.values.s2m,
      s3m: this.props.values.s3m,
      s4m: this.props.values.s4m,
      order: this.props.values.order
    };

    var criteriaData = {
      qop: this.props.values.qop,
      dop: this.props.values.dop,
      doq: this.props.values.doq,
      pcop: this.props.values.pcop,
      pcoq: this.props.values.pcoq,
      pcod: this.props.values.pcod
    }

    // POST data to backend server
    postSuppliersData(suppliersData);
    postCriteriaInfo(criteriaData);

    event.preventDefault();
    this.props.nextStep();
  }

  goBack = (event) => {
    event.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values: { qop, dop, doq, pcop, pcoq, pcod } } = this.props;
    console.log(this.props.values);

    return (
      <div>
      <button onClick={this.saveAndContinue}>Confirm</button>
      </div>
    );
  }
}
