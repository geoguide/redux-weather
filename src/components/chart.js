import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const chart = (props) => {
  console.log(props.color);
  return (
    <div>
      <Sparklines data={props.data} svgHeight={120} svgWidth={180}>
        <SparklinesLine color={props.color}/>
      </Sparklines>
    </div>
  );
}

export default chart;
