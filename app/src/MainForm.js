import React from 'react';
import SupplierSizeForm from './SupplierSizeForm';
import CriteriaForm from './CriteriaForm';
import PriceForm from './PriceForm';
import Confirmation from './Confirmation';
import Success from './Success';

export default class MainForm extends React.Component {
  state = {
    step: 1,

    s1: "",
    s2: "",
    s3: "",
    s4: "",

    s1m: "",
    s2m: "",
    s3m: "",
    s4m: "",

    order: "",

    qop: "",
    dop: "",
    doq: "",
    pcop: "",
    pcoq: "",
    pcod: "",

    ps2s1: "",
    ps3s1: "",
    ps3s2: "",
    ps4s1: "",
    ps4s2: "",
    ps4s3: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value
    });
  }

  render() {
    const { step } = this.state;
    const { s1, s2, s3, s4,
            s1m, s2m, s3m, s4m,
            order,
            qop, dop, doq, pcop, pcoq, pcod,
            ps2s1, ps3s1, ps3s2, ps4s1, ps4s2, ps4s3,
          } = this.state;
    const values = { s1, s2, s3, s4,
                    s1m, s2m, s3m, s4m,
                    order,
                    qop, dop, doq, pcop, pcoq, pcod,
                    ps2s1, ps3s1, ps3s2, ps4s1, ps4s2, ps4s3,
                  };

    switch (step) {
      case 1:
        return <SupplierSizeForm
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values} />
      case 2:
        return <CriteriaForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
      case 3:
        return <PriceForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
      case 4:
        return <Confirmation
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values} />
      case 5:
        return <Success />
      default:

    }
  }
}
