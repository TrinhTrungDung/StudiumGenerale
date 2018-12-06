import React from 'react';
import ReactBasicTable from 'react-basic-table';
import ReactDOM from 'react-dom'
const url = "http://localhost:5000";
const math = require('mathjs')
var Fraction = require('fractional').Fraction

function printRatio (value) {
  return math.format(value, { fraction: 'ratio' });
}

function generateRow(array, columns){
  var rows = []
  for (var i = 0; i < 4; i++ ){

    var item = [
      <span style={{fontWeight: 'bold'}} >{columns[i]}</span>,
      <span>{array[i*4]}</span>,
      <span>{array[i*4+1]}</span>,
      <span>{array[i*4+2]}</span>,
      <span>{array[i*4+3]}</span>,
    ];
    rows.push(item);
  }
  return rows;
}

function generateFullArray(temparray){
  var fullarray = [
    "1",
    generateDecimalTextFromFraction(temparray[0]),
    generateDecimalTextFromFraction(temparray[1]),
    generateDecimalTextFromFraction(temparray[2]),
    temparray[0],
    "1",
    generateDecimalTextFromFraction(temparray[3]),
    generateDecimalTextFromFraction(temparray[4]),
    temparray[1],
    temparray[3],
    "1",
    generateDecimalTextFromFraction(temparray[5]),
    temparray[2],
    temparray[4],
    temparray[5],
    "1"];
    return fullarray;
}

function generateDecimalTextFromFraction(fraction){
  var str;
  if(fraction.indexOf('/') != -1){
    str =  (new Fraction(eval(printRatio(math.divide(math.fraction(1), math.fraction(fraction)))))).toString();
  } else {
    str = (new Fraction(1,eval(fraction))).toString();
  }
  return str;
}

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

// function postResultToServer() {
//   fetch(`${url}/result`, {
//     method: 'post',
//     headers: {
//       'Content-type': 'application/json'
//     }
//   })
//   .then((res) => console.log('executing python scripts'))
//   .catch(err => console.log(err));
// }

function postPriceData(data){
  fetch(`${url}/price`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => console.log("fawefwea"))
  .catch(err => console.log(err));
}

function postQualityData(data){
  fetch(`${url}/quality`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => console.log("fawefwea"))
  .catch(err => console.log(err));
}

function postDeliveryData(data){
  fetch(`${url}/delivery`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => console.log("fawefwea"))
  .catch(err => console.log(err));
}

function postProcessData(data){
  fetch(`${url}/process`, {
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
    // postResultToServer();

    event.preventDefault();
    this.props.nextStep();
  }

  goBack = (event) => {
    event.preventDefault();
    this.props.prevStep();
  }

  // componentWillMount() {
  //   fetch(`${url}/result`, {
  //     method: 'post',
  //     headers: {
  //       'Content-type': 'application/json'
  //     }
  //   })
  //   .then((res) => console.log('executing python scripts'))
  //   .catch(err => console.log(err));
  // }

  render() {

    var criteriaObject = generateFullArray([
      this.props.values.qop,
      this.props.values.dop,
      this.props.values.pcop,
      this.props.values.doq,
      this.props.values.pcoq,
      this.props.values.pcod
    ]);

    var priceObject = generateFullArray([
      this.props.values.ps2s1,
      this.props.values.ps3s1,
      this.props.values.ps4s1,
      this.props.values.ps3s2,
      this.props.values.ps4s2,
      this.props.values.ps4s3
    ]);

    var qualityObject = generateFullArray([
      this.props.values.qs2s1,
      this.props.values.qs3s1,
      this.props.values.qs4s1,
      this.props.values.qs3s2,
      this.props.values.qs4s2,
      this.props.values.qs4s3
    ]);

    var processObject = generateFullArray([
      this.props.values.prs2s1,
      this.props.values.prs3s1,
      this.props.values.prs4s1,
      this.props.values.prs3s2,
      this.props.values.prs4s2,
      this.props.values.prs4s3
    ]);

    var deliveryObject = generateFullArray([
      this.props.values.ds2s1,
      this.props.values.ds3s1,
      this.props.values.ds4s1,
      this.props.values.ds3s2,
      this.props.values.ds4s2,
      this.props.values.ds4s3
    ]);

    var criteriaColumns = ['Criteria', 'Price', 'Quality', 'Delivery', 'Process capability'];
    var criteriaColumns1 = ['Price', 'Quality', 'Delivery', 'Process capability'];
    var priceColumns = ['Price','S1','S2','S3','S4'];
    var priceColumns1 = ['S1','S2','S3','S4'];
    var qualityColumns = ['Quality','S1','S2','S3','S4'];
    var qualityColumns1 = ['S1','S2','S3','S4'];
    var deliveryColumns = ['Delivery','S1','S2','S3','S4'];
    var deliveryColumns1 = ['S1','S2','S3','S4'];
    var processColumns = ['Process','S1','S2','S3','S4'];
    var processColumns1 = ['S1','S2','S3','S4'];

    var criteriaRows = generateRow(criteriaObject,criteriaColumns1);
    var priceRows = generateRow(priceObject,priceColumns1);
    var qualityRows = generateRow(qualityObject,qualityColumns1);
    var deliveryRows = generateRow(deliveryObject,deliveryColumns1);
    var processRows = generateRow(processObject,processColumns1);

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
        <ReactBasicTable columns={criteriaColumns} rows={criteriaRows} />
        <ReactBasicTable columns={priceColumns} rows={priceRows} />
        <ReactBasicTable columns={qualityColumns} rows={qualityRows} />
        <ReactBasicTable columns={deliveryColumns} rows={deliveryRows} />
        <ReactBasicTable columns={processColumns} rows={processRows} />
        <button onClick={this.goBack}>Back</button>
        <button onClick={this.saveAndContinue}>Confirm</button>
        </div>


    );
  }
}
