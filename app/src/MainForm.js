import React from 'react';
import OrderForm from './OrderForm';
import SupplierSizeForm from './SupplierSizeForm';
import MaxSizeForm from './MaxSizeForm';
import CriteriaForm from './CriteriaForm';
import PriceForm from './PriceForm';
import QualityForm from './QualityForm';
import DeliveryForm from './DeliveryForm';
import ProcessForm from './ProcessForm';
import Confirmation from './Confirmation';
import Success from './Success';

export default class MainForm extends React.Component {
  state = {
    step: 1,

    order: "",

    s1: "",
    s2: "",
    s3: "",
    s4: "",

    s1m: "",
    s2m: "",
    s3m: "",
    s4m: "",

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
    ps4s3: "",

    qs2s1: "",
    qs3s1: "",
    qs3s2: "",
    qs4s1: "",
    qs4s2: "",
    qs4s3: "",

    ds2s1: "",
    ds3s1: "",
    ds3s2: "",
    ds4s1: "",
    ds4s2: "",
    ds4s3: "",

    prs2s1: "",
    prs3s1: "",
    prs3s2: "",
    prs4s1: "",
    prs4s2: "",
    prs4s3: ""

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
    const { order,
            s1, s2, s3, s4,
            s1m, s2m, s3m, s4m,
            qop, dop, doq, pcop, pcoq, pcod,
            ps2s1, ps3s1, ps3s2, ps4s1, ps4s2, ps4s3,
            qs2s1, qs3s1, qs3s2, qs4s1, qs4s2, qs4s3,
            ds2s1, ds3s1, ds3s2, ds4s1, ds4s2, ds4s3,
            prs2s1, prs3s1, prs3s2, prs4s1, prs4s2, prs4s3
          } = this.state;
    const values = {  order,
                    s1, s2, s3, s4,
                    s1m, s2m, s3m, s4m,
                    qop, dop, doq, pcop, pcoq, pcod,
                    ps2s1, ps3s1, ps3s2, ps4s1, ps4s2, ps4s3,
                    qs2s1, qs3s1, qs3s2, qs4s1, qs4s2, qs4s3,
                    ds2s1, ds3s1, ds3s2, ds4s1, ds4s2, ds4s3,
                    prs2s1, prs3s1, prs3s2, prs4s1, prs4s2, prs4s3
                  };

    switch (step) {
      case 1:
        return <OrderForm
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values} />
      case 2:
        return <SupplierSizeForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
      case 3:
        return <MaxSizeForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />

      case 4:
        return <CriteriaForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
      case 5:
        return <PriceForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
      case 6:
        return <QualityForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
      case 7:
        return <DeliveryForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
      case 8:
        return <ProcessForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
      case 9:
        return <Confirmation
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values} />
      case 10:
        return <Success values={values}/>
      default:

    }
  }
}
