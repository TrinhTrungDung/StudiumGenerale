import React from 'react';

const url = "http://localhost:5000";

function postDataToServer(data, route) {
  fetch(`${url}/${route}`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => console.log(`send ${route} to server`))
  .catch(err => console.log(err));
}

function postResultToServer() {
  fetch(`${url}/result`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then((res) => console.log('executing python scripts'))
  .catch(err => console.log(err));
}

export default class Confirmation extends React.Component {
  saveAndContinue = (event) => {
    var suppliersData = {
      order: this.props.values.order,
      s1: this.props.values.s1,
      s2: this.props.values.s2,
      s3: this.props.values.s3,
      s4: this.props.values.s4,
      s1m: this.props.values.s1m,
      s2m: this.props.values.s2m,
      s3m: this.props.values.s3m,
      s4m: this.props.values.s4m
    };

    var criteriaData = {
      qop: this.props.values.qop,
      dop: this.props.values.dop,
      doq: this.props.values.doq,
      pcop: this.props.values.pcop,
      pcoq: this.props.values.pcoq,
      pcod: this.props.values.pcod
    }

    var priceData = {
      ps2s1: this.props.values.ps2s1,
      ps3s1: this.props.values.ps3s1,
      ps3s2: this.props.values.ps3s2,
      ps4s1: this.props.values.ps4s1,
      ps4s2: this.props.values.ps4s2,
      ps4s3: this.props.values.ps4s3
    }

    var qualityData = {
      qs2s1: this.props.values.qs2s1,
      qs3s1: this.props.values.qs3s1,
      qs3s2: this.props.values.qs3s2,
      qs4s1: this.props.values.qs4s1,
      qs4s2: this.props.values.qs4s2,
      qs4s3: this.props.values.qs4s3
    }

    var deliveryData = {
      ds2s1: this.props.values.ds2s1,
      ds3s1: this.props.values.ds3s1,
      ds3s2: this.props.values.ds3s2,
      ds4s1: this.props.values.ds4s1,
      ds4s2: this.props.values.ds4s2,
      ds4s3: this.props.values.ds4s3
    }

    var processData = {
      prs2s1: this.props.values.prs2s1,
      prs3s1: this.props.values.prs3s1,
      prs3s2: this.props.values.prs3s2,
      prs4s1: this.props.values.prs4s1,
      prs4s2: this.props.values.prs4s2,
      prs4s3: this.props.values.prs4s3
    }

    // POST data to backend server
    postDataToServer(suppliersData, 'suppliers');
    postDataToServer(criteriaData, 'criteria');
    postDataToServer(priceData, 'price');
    postDataToServer(qualityData, 'quality');
    postDataToServer(deliveryData, 'delivery');
    postDataToServer(processData, 'process');
    postResultToServer();

    event.preventDefault();
    this.props.nextStep();
  }

  goBack = (event) => {
    event.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values: {  order,
                    s1, s2, s3, s4,
                    s1m, s2m, s3m, s4m,
                    qop, dop, doq, pcop, pcoq, pcod,
                    ps2s1, ps3s1, ps3s2, ps4s1, ps4s2, ps4s3,
                    qs2s1, qs3s1, qs3s2, qs4s1, qs4s2, qs4s3,
                    ds2s1, ds3s1, ds3s2, ds4s1, ds4s2, ds4s3,
                    prs2s1, prs3s1, prs3s2, prs4s1, prs4s2, prs4s3
                  } } = this.props;

    return (
      <div>
      <button onClick={this.goBack}>Back</button>
      <button onClick={this.saveAndContinue}>Confirm</button>
      </div>
    );
  }
}
