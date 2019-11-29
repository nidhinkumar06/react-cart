import React, { PureComponent } from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
    'Frozen',
  'Chilled',
  'Flakes',
  'Organic',
	],
	datasets: [{
		data: [400,
  300,
  500,
  200],
		backgroundColor: [
      "#40adef",
      "#4b115e",
      "#2467ab",
      "#8cc63f"
		],
		hoverBackgroundColor: [
		'#40adef',
		'#4b115e',
		'#2467ab',
    "#8cc63f"
		]
	}]
};

const options = {
  legend: {
            display: true,
            position: 'bottom'
        }
}

export default class Example extends PureComponent {
  render() {
    return (
       <Pie data={data}  width={380} options={options}
  height={380} />
    );
  }
}
