import React, { Component } from 'react';
import Grid from '@mui/material/Grid';

export default class FHAEstimate extends Component {

  getEstimates = (props) => {
    const { zillowEstimate, realtorEstimate, redfinEstimate, melissaEstimate, mashvisorEstimate, realtyMoleValue, dataTreeEstimate, estatedEstimate} = this.props.estimates;
      // let final = [];
      // console.log(this.props.estimates)
      const zillow = zillowEstimate.active ? zillowEstimate.value : null;
      const realtor = realtorEstimate.active ? realtorEstimate.value : null;
      const redfin = redfinEstimate.active ? redfinEstimate.value : null;
      const melissa = melissaEstimate.active ? melissaEstimate.value : null;
      const mashvisor = mashvisorEstimate.active ? mashvisorEstimate.value : null;
      const realtyMole = realtyMoleValue.active ? realtyMoleValue.value : null;
      const dataTree = dataTreeEstimate.active ? dataTreeEstimate.value : null;
      const estated = estatedEstimate.active ? estatedEstimate.value : null;
      let arr = [zillow, realtor, redfin, melissa, mashvisor, realtyMole, dataTree, estated];
      let final = arr.filter(estimate => estimate !== null && typeof estimate == 'number');
      if (Math.round(final.reduce((a, b) => a + b, 0) / final.length)) {
        return Math.round(final.reduce((a, b) => a + b, 0) / final.length);
      } else {
        return null
      }
    }

    numberWithCommas = (x) => {
       return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    render() {
        return (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
              <h2>Your Accupraisal is</h2>
              <h1 className="shimmer" style={{ fontSize: 80 }}>{this.getEstimates() === null ? "No Estimates Found" : '$' + this.numberWithCommas(this.getEstimates())}</h1>
            </Grid>
          </Grid>
        );
    }
}