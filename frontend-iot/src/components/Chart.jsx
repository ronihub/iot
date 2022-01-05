import React, { Component } from "react";
import Chart from "react-apexcharts";

class MyChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
   

      options: {
        colors: ['#000000', '#'],
        grid: {
           xaxis: {
        lines: {
            show: false
        }
    },   
    yaxis: {
      show: false,
        lines: {
            show: false
        }
    },  
        },
        chart: {
          toolbar: {
            show: false
          },
          id: "basic-bar"
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec']
        },  axisBorder: {
          show: false,
        },
      },
      series: [
        {
          name: "rm2.5",
          data: [1.8, 2, 2, 2.2, 1.8, 1.6, 2, 2.4, 2.4, 2.4, 2.4, 2.2]
        },
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="350"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MyChart;