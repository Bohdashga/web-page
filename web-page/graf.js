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
                borderWidth:4.5,
        backgroundColor: "transparent",
       lineTension: 0, pointBackgroundColor:"transparent",
        data: [21, 26, 28, 22, 21, 12, 8]
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