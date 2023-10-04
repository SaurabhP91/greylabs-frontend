import React from "react";
import Chart from "react-apexcharts";
const data = {
  series: [
    {
      name: "Sales",
      data: [300,250,110,300,490,350,270,130,425],
    },
   
  ],
  plotOptions: {    
    bar: {
      horizontal: false,
      columnWidth: '22%',
      endingShape: 'rounded',
    },
  },
  colors:['#00E396'],
  options: {
    chart: {
      height: 350,
    
      type: "bar",
     
      },
      bar: {
        horizontal: false,
        columnWidth: '20%',
        endingShape: 'rounded',
      },
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
      tooltips:{
        show:false,
      },
    },

    
    dataLabels: {
      enabled: false,
    },
    
    title: {
      text: "",
      align: "left",
    },
   
    markers: {
      size: 0,
    },
    xaxis: {
        
      categories: ["","","","","","","","",""],
      title: {
        text: "",
      },
      labels: {
        style: {
            colors:["gray","gray","gray","gray","gray","gray","gray","gray","gray"],
            fontWeight:400,
        },
      },
    },
    yaxis: {
      title: {
        color:"white",
        text: "",
      },
      labels: {
        style: {
            colors:["white","white","white","white","white","white",],
            fontWeight:400,
        },
      },
      //min: 100,
      //max: 600,
      categories:["0","100","200","300","400","500"]
    },
    legend: {
        
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  
};

function Apexcolumnchart() {
  return (
    <div>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height={250}
        width={450}
      />
    </div>
  );
}
export default Apexcolumnchart;