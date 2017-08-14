import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

//we can use lodash to cal average
function average (data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {

  return (
      <div>
          <Sparklines height = {120} width = {180} data = {props.data}>
            <SparklinesLine color = {props.color} />
            <SparklinesReferenceLine type ="avg" />
          </Sparklines>
          <div> Avg: {average(props.data)} {props.units}</div>
      </div>
  );
}
