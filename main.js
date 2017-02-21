window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(231,233,237)'
};

window.randomScalingFactor = function() {
	return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
}

var lineChartData = {
	labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	datasets: []
};

window.onload = function() {
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx, {
		type: 'line',
		data: lineChartData,
		options: {
			title:{
                display:true,
                text:"Gráfico de áreas"
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Mes"
                    }
                }],
                yAxes: [{
                    stacked: false,
                    scaleLabel: {
                       	display: true,
                       	labelString: 'Valor'
                    }
                }]
            }
		}
	});
};





