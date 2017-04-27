$(document).ready(function(){  
	// 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('main1'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option);


    //图表2
    var myChart2 = echarts.init(document.getElementById('main2'));
    myChart2.setOption({
	    series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius: '55%',
	            data:[
	                {value:235, name:'视频广告'},
	                {value:274, name:'联盟广告'},
	                {value:310, name:'邮件营销'},
	                {value:335, name:'直接访问'},
	                {value:400, name:'搜索引擎'}
	            ]
	        }
	    ]
	})


	//图表3
	var myChart3 = echarts.init(document.getElementById('main3'));
	var data = [];

	for (var i = 0; i <= 360; i++) {
	    var t = i / 180 * Math.PI;
	    var r = Math.sin(2 * t) * Math.cos(2 * t);
	    data.push([r, i]);
	}

	option3 = {
	    title: {
	        text: '极坐标双数值轴'
	    },
	    legend: {
	        data: ['line']
	    },
	    polar: {
	        center: ['50%', '54%']
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross'
	        }
	    },
	    angleAxis: {
	        type: 'value',
	        startAngle: 0
	    },
	    radiusAxis: {
	        min: 0
	    },
	    series: [{
	        coordinateSystem: 'polar',
	        name: 'line',
	        type: 'line',
	        showSymbol: false,
	        data: data
	    }],
	    animationDuration: 2000
	};
	myChart3.setOption(option3);


	//图表4
	var myChart4 = echarts.init(document.getElementById('main4'));
	var dataBJ = [
	    [55,9,56,0.46,18,6,1],
	    [25,11,21,0.65,34,9,2],
	    [56,7,63,0.3,14,5,3],
	    [33,7,29,0.33,16,6,4],
	    [42,24,44,0.76,40,16,5],
	    [82,58,90,1.77,68,33,6],
	    [74,49,77,1.46,48,27,7],
	    [78,55,80,1.29,59,29,8],
	    [267,216,280,4.8,108,64,9],
	    [185,127,216,2.52,61,27,10],
	    [39,19,38,0.57,31,15,11],
	    [41,11,40,0.43,21,7,12],
	    [64,38,74,1.04,46,22,13],
	    [108,79,120,1.7,75,41,14],
	    [108,63,116,1.48,44,26,15],
	    [33,6,29,0.34,13,5,16],
	    [94,66,110,1.54,62,31,17],
	    [186,142,192,3.88,93,79,18],
	    [57,31,54,0.96,32,14,19],
	    [22,8,17,0.48,23,10,20],
	    [39,15,36,0.61,29,13,21],
	    [94,69,114,2.08,73,39,22],
	    [99,73,110,2.43,76,48,23],
	    [31,12,30,0.5,32,16,24],
	    [42,27,43,1,53,22,25],
	    [154,117,157,3.05,92,58,26],
	    [234,185,230,4.09,123,69,27],
	    [160,120,186,2.77,91,50,28],
	    [134,96,165,2.76,83,41,29],
	    [52,24,60,1.03,50,21,30],
	    [46,5,49,0.28,10,6,31]
	];

	var dataGZ = [
	    [26,37,27,1.163,27,13,1],
	    [85,62,71,1.195,60,8,2],
	    [78,38,74,1.363,37,7,3],
	    [21,21,36,0.634,40,9,4],
	    [41,42,46,0.915,81,13,5],
	    [56,52,69,1.067,92,16,6],
	    [64,30,28,0.924,51,2,7],
	    [55,48,74,1.236,75,26,8],
	    [76,85,113,1.237,114,27,9],
	    [91,81,104,1.041,56,40,10],
	    [84,39,60,0.964,25,11,11],
	    [64,51,101,0.862,58,23,12],
	    [70,69,120,1.198,65,36,13],
	    [77,105,178,2.549,64,16,14],
	    [109,68,87,0.996,74,29,15],
	    [73,68,97,0.905,51,34,16],
	    [54,27,47,0.592,53,12,17],
	    [51,61,97,0.811,65,19,18],
	    [91,71,121,1.374,43,18,19],
	    [73,102,182,2.787,44,19,20],
	    [73,50,76,0.717,31,20,21],
	    [84,94,140,2.238,68,18,22],
	    [93,77,104,1.165,53,7,23],
	    [99,130,227,3.97,55,15,24],
	    [146,84,139,1.094,40,17,25],
	    [113,108,137,1.481,48,15,26],
	    [81,48,62,1.619,26,3,27],
	    [56,48,68,1.336,37,9,28],
	    [82,92,174,3.29,0,13,29],
	    [106,116,188,3.628,101,16,30],
	    [118,50,0,1.383,76,11,31]
	];

	var dataSH = [
	    [91,45,125,0.82,34,23,1],
	    [65,27,78,0.86,45,29,2],
	    [83,60,84,1.09,73,27,3],
	    [109,81,121,1.28,68,51,4],
	    [106,77,114,1.07,55,51,5],
	    [109,81,121,1.28,68,51,6],
	    [106,77,114,1.07,55,51,7],
	    [89,65,78,0.86,51,26,8],
	    [53,33,47,0.64,50,17,9],
	    [80,55,80,1.01,75,24,10],
	    [117,81,124,1.03,45,24,11],
	    [99,71,142,1.1,62,42,12],
	    [95,69,130,1.28,74,50,13],
	    [116,87,131,1.47,84,40,14],
	    [108,80,121,1.3,85,37,15],
	    [134,83,167,1.16,57,43,16],
	    [79,43,107,1.05,59,37,17],
	    [71,46,89,0.86,64,25,18],
	    [97,71,113,1.17,88,31,19],
	    [84,57,91,0.85,55,31,20],
	    [87,63,101,0.9,56,41,21],
	    [104,77,119,1.09,73,48,22],
	    [87,62,100,1,72,28,23],
	    [168,128,172,1.49,97,56,24],
	    [65,45,51,0.74,39,17,25],
	    [39,24,38,0.61,47,17,26],
	    [39,24,39,0.59,50,19,27],
	    [93,68,96,1.05,79,29,28],
	    [188,143,197,1.66,99,51,29],
	    [174,131,174,1.55,108,50,30],
	    [187,143,201,1.39,89,53,31]
	];

	var lineStyle = {
	    normal: {
	        width: 1,
	        opacity: 0.5
	    }
	};

	option4 = {
	    backgroundColor: '#161627',
	    title: {
	        text: 'AQI - 雷达图',
	        left: 'center',
	        textStyle: {
	            color: '#eee'
	        }
	    },
	    legend: {
	        bottom: 5,
	        data: ['北京', '上海', '广州'],
	        itemGap: 20,
	        textStyle: {
	            color: '#fff',
	            fontSize: 14
	        },
	        selectedMode: 'single'
	    },
	    // visualMap: {
	    //     show: true,
	    //     min: 0,
	    //     max: 20,
	    //     dimension: 6,
	    //     inRange: {
	    //         colorLightness: [0.5, 0.8]
	    //     }
	    // },
	    radar: {
	        indicator: [
	            {name: 'AQI', max: 300},
	            {name: 'PM2.5', max: 250},
	            {name: 'PM10', max: 300},
	            {name: 'CO', max: 5},
	            {name: 'NO2', max: 200},
	            {name: 'SO2', max: 100}
	        ],
	        shape: 'circle',
	        splitNumber: 5,
	        name: {
	            textStyle: {
	                color: 'rgb(238, 197, 102)'
	            }
	        },
	        splitLine: {
	            lineStyle: {
	                color: [
	                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
	                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
	                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
	                ].reverse()
	            }
	        },
	        splitArea: {
	            show: false
	        },
	        axisLine: {
	            lineStyle: {
	                color: 'rgba(238, 197, 102, 0.5)'
	            }
	        }
	    },
	    series: [
	        {
	            name: '北京',
	            type: 'radar',
	            lineStyle: lineStyle,
	            data: dataBJ,
	            symbol: 'none',
	            itemStyle: {
	                normal: {
	                    color: '#F9713C'
	                }
	            },
	            areaStyle: {
	                normal: {
	                    opacity: 0.1
	                }
	            }
	        },
	        {
	            name: '上海',
	            type: 'radar',
	            lineStyle: lineStyle,
	            data: dataSH,
	            symbol: 'none',
	            itemStyle: {
	                normal: {
	                    color: '#B3E4A1'
	                }
	            },
	            areaStyle: {
	                normal: {
	                    opacity: 0.05
	                }
	            }
	        },
	        {
	            name: '广州',
	            type: 'radar',
	            lineStyle: lineStyle,
	            data: dataGZ,
	            symbol: 'none',
	            itemStyle: {
	                normal: {
	                    color: 'rgb(238, 197, 102)'
	                }
	            },
	            areaStyle: {
	                normal: {
	                    opacity: 0.05
	                }
	            }
	        }
	    ]
	};
	myChart4.setOption(option4);


	//图表5
	var myChart5 = echarts.init(document.getElementById('main5'));
	var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + "月份");
    }
    return data;
	}();

	option5 = {
	    backgroundColor: "#344b58",
	    "title": {
	        "text": "本年商场顾客男女人数统计",
	        "subtext": "BY Wang Dingding",
	        x: "4%",

	        textStyle: {
	            color: '#fff',
	            fontSize: '22'
	        },
	        subtextStyle: {
	            color: '#90979c',
	            fontSize: '16',

	        },
	    },
	    "tooltip": {
	        "trigger": "axis",
	        "axisPointer": {
	            "type": "shadow",
	            textStyle: {
	                color: "#fff"
	            }

	        },
	    },
	    "grid": {
	        "borderWidth": 0,
	        "top": 110,
	        "bottom": 95,
	        textStyle: {
	            color: "#fff"
	        }
	    },
	    "legend": {
	        x: '4%',
	        top: '11%',
	        textStyle: {
	            color: '#90979c',
	        },
	        "data": ['女', '男', '平均']
	    },
	     

	    "calculable": true,
	    "xAxis": [{
	        "type": "category",
	        "axisLine": {
	            lineStyle: {
	                color: '#90979c'
	            }
	        },
	        "splitLine": {
	            "show": false
	        },
	        "axisTick": {
	            "show": false
	        },
	        "splitArea": {
	            "show": false
	        },
	        "axisLabel": {
	            "interval": 0,

	        },
	        "data": xData,
	    }],
	    "yAxis": [{
	        "type": "value",
	        "splitLine": {
	            "show": false
	        },
	        "axisLine": {
	            lineStyle: {
	                color: '#90979c'
	            }
	        },
	        "axisTick": {
	            "show": false
	        },
	        "axisLabel": {
	            "interval": 0,

	        },
	        "splitArea": {
	            "show": false
	        },

	    }],
	    "dataZoom": [{
	        "show": true,
	        "height": 30,
	        "xAxisIndex": [
	            0
	        ],
	        bottom: 30,
	        "start": 10,
	        "end": 80,
	        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
	        handleSize: '110%',
	        handleStyle:{
	            color:"#d3dee5",
	            
	        },
	           textStyle:{
	            color:"#fff"},
	           borderColor:"#90979c"
	        
	        
	    }, {
	        "type": "inside",
	        "show": true,
	        "height": 15,
	        "start": 1,
	        "end": 35
	    }],
	    "series": [{
	            "name": "女",
	            "type": "bar",
	            "stack": "总量",
	            "barMaxWidth": 35,
	            "barGap": "10%",
	            "itemStyle": {
	                "normal": {
	                    "color": "rgba(255,144,128,1)",
	                    "label": {
	                        "show": true,
	                        "textStyle": {
	                            "color": "#fff"
	                        },
	                        "position": "insideTop",
	                        formatter: function(p) {
	                            return p.value > 0 ? (p.value) : '';
	                        }
	                    }
	                }
	            },
	            "data": [
	                709,
	                1917,
	                2455,
	                2610,
	                1719,
	                1433,
	                1544,
	                3285,
	                5208,
	                3372,
	                2484,
	                4078
	            ],
	        },

	        {
	            "name": "男",
	            "type": "bar",
	            "stack": "总量",
	            "itemStyle": {
	                "normal": {
	                    "color": "rgba(0,191,183,1)",
	                    "barBorderRadius": 0,
	                    "label": {
	                        "show": true,
	                        "position": "top",
	                        formatter: function(p) {
	                            return p.value > 0 ? (p.value) : '';
	                        }
	                    }
	                }
	            },
	            "data": [
	                327,
	                1776,
	                507,
	                1200,
	                800,
	                482,
	                204,
	                1390,
	                1001,
	                951,
	                381,
	                220
	            ]
	        }, {
	            "name": "总数",
	            "type": "line",
	            "stack": "总量",
	            symbolSize:10,
	            symbol:'circle',
	            "itemStyle": {
	                "normal": {
	                    "color": "rgba(252,230,48,1)",
	                    "barBorderRadius": 0,
	                    "label": {
	                        "show": true,
	                        "position": "top",
	                        formatter: function(p) {
	                            return p.value > 0 ? (p.value) : '';
	                        }
	                    }
	                }
	            },
	            "data": [
	                1036,
	                3693,
	                2962,
	                3810,
	                2519,
	                1915,
	                1748,
	                4675,
	                6209,
	                4323,
	                2865,
	                4298
	            ]
	        },
	    ]
	}

	myChart5.setOption(option5);
});  