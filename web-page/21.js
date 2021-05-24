var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['         30.05','31.05','01.06','02.06','03.06','04.06','05.06','06.06','07.06','08.06','09.06'],
        datasets: [{
            //label: 'My First dataset',
            backgroundColor: 'rgba(4, 162, 217, 0.53)',
            borderColor: 'transparent',
             pointBackgroundColor:"transparent",
            pointHoverBorderColor: 'rgb(79,95,111)',
            pointHoverBackgroundColor: 'white',
            pointHoverBorderWidth:7,
            pointHoverRadius: 10,
           lineTension: 0.28,
            data: [41.5, 50.5, 41.5, 34, 49, 37, 33.5,46,39,30,51]
        },
            {
        //label: "My Second dataset",
        backgroundColor: 'rgba(3,127, 201,0.22)',
                
        borderColor: "transparent",
       lineTension: 0.35, pointBackgroundColor:"transparent",
        data: [48, 43.5, 48, 45, 43, 53.5, 46,43.5,47,42.5,45]
      }
                  ]
        
    },
    

    // Configuration options go here
    options: { 
        scales: {
             xAxes: [{
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            ticks: {
                max: 60,
                min: 0,
                stepSize: 10
            }
        }]
    },
        legend: {
        display: false
    },
        tooltips:
        {
            onlyshowDatasetIndex:[0,1],
            callbacks:
            {
                label: function (tooltipItems,data){
                    return tooltipItems.yLabel;
                },
                title: function(tooltipItem,data){
                    return;
                }
            },
            displayColors:false,
            caretSize:5,
            xPadding: 5,
            yPadding:10
        }
    }
});

var ctx = document.getElementById('graf1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['          30.05','31.05','01.06','02.06','03.06','04.06','05.06'],
        datasets: [{
            //label: 'My First dataset',
            pointBorderColor: 'transparent',
            borderColor: 'rgb(89,194,230)',
                borderWidth:4.5,
        backgroundColor: "transparent",
       lineTension: 0, pointBackgroundColor:"transparent",
        data: [68, 46, 52, 43.5, 7, 52, 44]
        },
            {
        //label: "My Second dataset",
             borderColor: 'rgb(252, 76, 122)',
            backgroundColor: 'transparent',
             pointBorderColor: 'transparent',pointBackgroundColor:"transparent",
            pointHoverBorderColor: 'rgb(79,95,111)',
             borderWidth:4.5, 
           
           lineTension: 0,
            data: [52.5, 50.5, 38, 53.5, 51, 48.5, 55]    
       
      }
                  ]
        
    },
    

    // Configuration options go here
    options: { 
        scales: {
             xAxes: [{
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            ticks: {
                max: 70,
                min: 0,
                stepSize: 10
            }
        }]
    },
        legend: {
        display: false
    },
        tooltips:
        {
            onlyshowDatasetIndex:[0,1],
            callbacks:
            {
                label: function (tooltipItems,data){
                    return tooltipItems.yLabel;
                },
                title: function(tooltipItem,data){
                    return;
                }
            },
            displayColors:false,
            caretSize:5,
            xPadding: 5,
            yPadding:10
        }
    }
});
var promisedDeliveryChart = new Chart(document.getElementById('bagel'), {
  type: 'doughnut',
  plugins:[
    {beforeDraw: function(chart){
    var width=chart.chart.width,
        height=chart.chart.height,
      ctx= chart.chart.ctx;

      ctx.restore();
      var fontSize=(height/150).toFixed(2);
      ctx.font=fontSize+"em sans-serif";
      ctx.textBaseline="middle";
      var text="96",
      textX=Math.round((width-ctx.measureText(text).width)/2.02),
      textY=height/2.2;

      ctx.fillText(text, textX, textY);
      ctx.save();

      ctx2= chart.chart.ctx;

      ctx2.restore();
      var fontSize=(height/250).toFixed(2);
      ctx2.font=fontSize+"em sans-serif";
      ctx2.textBaseline="middle";
      var text2="Working Hours",
      textX=Math.round((width-ctx.measureText(text).width)/2.35),
      textY=height/1.8;

      ctx.fillText(text2, textX, textY);
      ctx.save();
    }
    }
  ],
  data: {
    datasets: [
      {
        borderWidth: 0,
        data: [100, 140, 70,30],
        backgroundColor: [
          "#96e4ff",
          "#44b1d7",
          "#59c2e6",
          "#71d0f1"
        ],
      }]
  },
  options: {
    cutoutPercentage:75,
    //responsive: true,
    legend: {
      display: false
    },
    //centretext:"123",
    rotation:60,
    animation:{
      animateScale:true
    },
},
});
var ctx = document.getElementById('lastgraf').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['S','M','T','W','T','F','S'],
        datasets: [{
            //label: 'My First dataset',
            pointBorderColor: '#fc4c7a',
            borderColor: '#fc4c7a',
                borderWidth:3,
        backgroundColor: "transparent",
       lineTension: 0, pointBackgroundColor:"transparent",
        data: [23, 26, 28, 22, 21, 12, 8]
        }
                  ]
        
    },
    

    // Configuration options go here
    options: { 
        scales: {
             xAxes: [{
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            ticks: {
                max: 30,
                min: 0,
                stepSize: 10
            }
        }]
    },
        legend: {
        display: false
    },
        tooltips:
        {
            onlyshowDatasetIndex:[0,1],
            callbacks:
            {
                label: function (tooltipItems,data){
                    return tooltipItems.yLabel;
                },
                title: function(tooltipItem,data){
                    return;
                }
            },
            displayColors:false,
            caretSize:5,
            xPadding: 5,
            yPadding:10
        }
    }
});