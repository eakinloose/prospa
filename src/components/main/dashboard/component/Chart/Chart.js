import React from 'react'
import ReactApexChart from 'react-apexcharts';


const options = {
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  xaxis: {
    categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG']
  },
  title:{
    text: 'June expenses',
  },
  subtitle: {
    text: ['Money In', 'N69,000'],
  },
  yaxis: {
    min: 0,
    max: 20,
    tickAmount: 4
  },
  
  colors: ['#FA4A84'],
}

const series = [{
  name: 'Money in thousands',
  data: [4, 8, 11, 12, 11, 8, 6, 9]
}]

const NewChart = () => {
  return<ReactApexChart options={options} series={series} type="area" width= '100%' height={350} />
}

export default NewChart;