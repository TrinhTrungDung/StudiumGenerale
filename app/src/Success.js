import React from 'react';

const url = "http://localhost:5000";

export default class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(`${url}/result`)
    .then(res => res.json())
    .then(data => this.setState({ data }))
    .catch(err => console.log(err));
  }

  render() {

    if (this.state.data !== null) {
      console.log(this.state.data);
      var { desiredS1, desiredS2, desiredS3, desiredS4 } = this.state.data;
      return (
        <div>
          <p> Results </p>
          <h2>Order Lots of Supplier 1: {desiredS1}</h2>
          <h2>Order Lots of Supplier 2: {desiredS2}</h2>
          <h2>Order Lots of Supplier 3: {desiredS3}</h2>
          <h2>Order Lots of Supplier 4: {desiredS4}</h2>
        </div>
      );
    } else {
      return (
        <div>
          <p> Error occurs while processing data. </p>
        </div>
      );
    }
  }


}
