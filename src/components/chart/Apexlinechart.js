import React from "react";
import Chart from "react-apexcharts";
const data = {
  series: [
    {
      name: "Mobile apps",
      data: [500,250,300,220,500,250,300,230,300,350,250,400],
    },
    {
      name: "Websites",
      data: [200,230,300,350,370,420,550,350,400,500,330,550],
    },
  ],
  options: {
    chart: {
      height: 350,
    
      type: "area",
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
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
    },

    colors: ["rgb(0, 117, 255)", "#77B6EA"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "",
      align: "left",
    },
    grid: {
      borderColor: "gray",
      border:"dashed",
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0,
      },
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep","Oct","Nov","Dec"],
      title: {
        text: "",
      },
      labels: {
        style: {
            colors:["gray","gray","gray","gray","gray","gray","gray","gray","gray","gray","gray","gray","gray",],
            fontWeight:400,
        },
      },
    },
    yaxis: {
      title: {
        color:"blue",
        text: "",
      },
      labels: {
        style: {
            colors:["gray","gray","gray","gray","gray","gray",],
            fontWeight:400,
        },
      },
      //min: 100,
      //max: 600,
      categories:["100","200","300","400","500","600"]
    },
    legend: {
        
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  },
};
function ApexLineChart() {
  return (
    <div>
      <Chart
        options={data.options}
        series={data.series}
        type="line"
        height={350}
        width={600}
      />
    </div>
  );
}
export default ApexLineChart;