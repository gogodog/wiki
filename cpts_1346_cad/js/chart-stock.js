Highcharts.setOptions({
	global: {
			useUTC: false
	}
});
function activeLastPointToolip(chart) {
	var points = chart.series[0].points;
	chart.tooltip.refresh(points[points.length -1]);
}

window.onscroll = function() {
	var show = document.getElementById("chart-stock");
	var row = document.getElementById("row");
	// 获取浏览器窗口可视化高度
	var clientH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	// 获取showDiv元素顶部到浏览器窗口顶部的距离
	var showTop = show.getBoundingClientRect().bottom;
	var row = show.getBoundingClientRect().bottom;
	// 如果距离小于可视化窗口高度，就给showDiv元素添加动画效果
	console.log("showTop:" + showTop);
		console.log("clientH:" + clientH);
	if (showTop <= 10) {
		
	}
};

createchart();
function createchart(){
var chart1 = $.getJSON('https://data.jianshukeji.com/jsonp?filename=json/large-dataset.json&callback=?', function (data) {
		// Create a timer
		var start = +new Date();
		// Create the chart
		Highcharts.stockChart('chart-stock', {
				chart: {
						events: {
								load: function () {
										if (!window.isComparing) {
												this.setTitle(null, {
														text: ''
												});
										}
								}
						},
						zoomType: 'x'
				},
				credits: {
					href:"www.baidu.com",
					text:"Lai.Tou"
				},
				exporting: {   
				  enabled: false  //设置导出按钮不可用    
				},
				scrollbar: {   
					enabled: false  //设置导出按钮不可用    
				  },
				tooltip: {
						split: true,
						shared: false,
				},
				rangeSelector: {
						enabled : false,
						buttons: [{
								type: 'day',
								count: 3,
								text: '3天'
						}, {
								type: 'week',
								count: 1,
								text: '1周'
						}, {
								type: 'month',
								count: 1,
								text: '1月'
						}, {
								type: 'month',
								count: 6,
								text: '6月'
						}, {
								type: 'year',
								count: 1,
								text: '1年'
						}, {
								type: 'all',
								text: '全部'
						}],
						selected: 0
				},
				yAxis: {
						title: {
								text: ''
						}
				},
				title: {
						text: '参加人次访问量<span style="style="font-size: .5em;"">[时间/访问量]</span>'
				},
				subtitle: {
						text: '' // dummy text to reserve space for dynamic subtitle
				},
				navigator: {
					enabled: false
				},
				series: [{
						name: '访问量',
						data: data.data,
						pointStart: Date.UTC(2004, 3, 1),
						pointInterval: 3600 * 1000,
						tooltip: {
								valueDecimals: 1,
								valueSuffix: '°C'
						}
				}]
		});
});

var chart2 = Highcharts.chart('chart-stack', {
    chart: {
        type: 'bubble',
        zoomType: 'xy'
    },
    title: {
        text: '用户投票反应时间占比'
	},
	yAxis: {
		title: {
				text: ''
		},
		tickPosition:'inside',
		opposite:true
	},
	labels:{
		
		opposite: true
		
	},
	exporting: {   
		enabled: false  //设置导出按钮不可用    
	  },
    series: [{
        name:'数据列 1',
        // 每个气泡包含三个值，x，y，z；其中 x，y用于定位，z 用于计算气泡大小
        data: [[97, 36, 79], [94, 74, 60], [68, 76, 58], [64, 87, 56], [68, 27, 73], [74, 99, 42], [7, 93, 87], [51, 69, 40], [38, 23, 33], [57, 86, 31]]
    }, {
        name:'数据列 2',
        data: [[25, 10, 87], [2, 75, 59], [11, 54, 8], [86, 55, 93], [5, 3, 58], [90, 63, 44], [91, 33, 17], [97, 3, 56], [15, 67, 48], [54, 25, 81]]
    }, {
        name:'数据列 3',
        data: [[47, 47, 21], [20, 12, 4], [6, 76, 91], [38, 30, 60], [57, 98, 64], [61, 17, 80], [83, 60, 13], [67, 78, 75], [64, 12, 10], [30, 77, 82]]
    }]
});

var chart3 = Highcharts.chart('chart-stock', {
	chart: {
			polar: true
	},
	title: {
			text: '极地图'
	},
	pane: {
			startAngle: 0,
			endAngle: 360
	},
	xAxis: {
			tickInterval: 45,
			min: 0,
			max: 360,
			labels: {
					formatter: function () {
							return this.value + '°';
					}
			}
	},
	yAxis: {
			min: 0
	},
	plotOptions: {
			series: {
					pointStart: 0,
					pointInterval: 45
			},
			column: {
					pointPadding: 0,
					groupPadding: 0
			}
	},
	series: [{
			type: 'column',
			name: '柱形',
			data: [8, 7, 6, 5, 4, 3, 2, 1],
			pointPlacement: 'between'
	}, {
			type: 'line',
			name: '线',
			data: [1, 2, 3, 4, 5, 6, 7, 8]
	}, {
			type: 'area',
			name: '面积',
			data: [1, 8, 2, 7, 3, 6, 4, 5]
	}]
});

var chart4 = Highcharts.chart('chart-map', {
	data: {
		table: 'freq',
		startRow: 1,
		endRow: 17,
		endColumn: 7
	},
	chart: {
		polar: true,
		type: 'column'
	},
	exporting: {   
		enabled: false  //设置导出按钮不可用    
	  },
	title: {
		text: '俄勒冈州南海岸的风玫瑰'
	},
	subtitle: {
		text: ''
	},
	credits: {
		href:"www.baidu.com",
		text:"Lai.Tou"
	},
	pane: {
		size: '85%'
	},
	legend: {
		align: 'center',
		verticalAlign: 'bottom',
		y: 0
		//layout: 'vertical'
	},
	xAxis: {
		tickmarkPlacement: 'on'
	},
	yAxis: {
		min: 0,
		endOnTick: false,
		showLastLabel: true,
		title: {
			text: '频率 (%)'
		},
		labels: {
			formatter: function () {
				return this.value + '%';
			}
		},
		reversedStacks: false
	},
	tooltip: {
		valueSuffix: '%'
	},
	plotOptions: {
		series: {
			stacking: 'normal',
			shadow: false,
			groupPadding: 0,
			pointPlacement: 'on'
		}
	}
});
}