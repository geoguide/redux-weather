import React from 'react';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div data={this.props.data} svgHeight={120} svgWidth={180}>
          <div color={this.props.color} />
        </div>
      </div>
    );
  }
}

export default Chart;
