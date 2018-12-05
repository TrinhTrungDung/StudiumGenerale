import React from 'react';
import ReactBasicTable from 'react-basic-table';
import ReactDOM from 'react-dom'
const math = require('mathjs')
var Fraction = require('fractional').Fraction

function toDecimal(x) {
  if (x.indexOf('/') != -1) {
      var parts = x.split(" ")
      var decParts;
      if (parts.length > 1) {
          decParts = parts[1].split("/");
      }
      else {
          decParts = parts[0].split("/");
          parts[0] = 0;
      }
      return parseInt(parts[0], 10) + (parseInt(decParts[0], 10) / parseInt(decParts[1], 10))
  } else {
      return x
  }
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
    (new Fraction(1,eval(temparray[0]))).toString(),
    (new Fraction(1,eval(temparray[1]))).toString(),
    (new Fraction(1,eval(temparray[2]))).toString(),
    temparray[0],
    "1",
    (new Fraction(1,eval(temparray[3]))).toString(),
    (new Fraction(1,eval(temparray[4]))).toString(),
    temparray[1],
    temparray[3],
    "1",
    (new Fraction(1,eval(temparray[4]))).toString(),
    temparray[2],
    temparray[4],
    temparray[5],
    "1"];
    return fullarray;
}

export default class Success extends React.Component {
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

    var criteriaColumns = ['Criteria', 'Price', 'Quality', 'Age', 'Process capability'];
    var priceColumns = ['Price','S1','S2','S3','S4'];
    var qualityColumns = ['Quality','S1','S2','S3','S4'];
    var deliveryColumns = ['Delivery','S1','S2','S3','S4'];
    var processColumns = ['Process','S1','S2','S3','S4'];
   
    var criteriaRows = generateRow(criteriaObject,criteriaColumns);
    var priceRows = generateRow(priceObject,priceColumns);
    var qualityRows = generateRow(qualityObject,qualityColumns);
    var deliveryRows = generateRow(deliveryObject,deliveryColumns);
    var processRows = generateRow(processObject,processColumns);

    return (
    
        <div>
        <ReactBasicTable columns={criteriaColumns} rows={criteriaRows} />
        <ReactBasicTable columns={priceColumns} rows={priceRows} />
        <ReactBasicTable columns={qualityColumns} rows={qualityRows} />
        <ReactBasicTable columns={deliveryColumns} rows={deliveryRows} />
        <ReactBasicTable columns={processColumns} rows={processRows} />
        
        </div>
      
      
    );
  }

  
}


