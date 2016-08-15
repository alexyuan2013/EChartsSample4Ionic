angular.module('starter.controllers', [])

    .controller('AppCtrl', ['$scope', function ($scope) {

    }])

    //散点图
    .controller('ScatterCtrl', ['$scope', '$window', function ($scope, $window) {
        $scope.title = '1990与2015年各国家人均寿命与GDP';
        function onClick(params) {
            console.log(params);
        };
        console.log($window.innerWidth);
        $scope.width = $window.innerWidth * 0.95 + 'px';
        $scope.height = '300px';

        $scope.config = {
            theme: 'default',
            event: [{ click: onClick }],
            dataLoaded: true
        };

        var data = [
            [[28604, 77, 17096869, 'Australia', 1990], [31163, 77.4, 27662440, 'Canada', 1990], [1516, 68, 1154605773, 'China', 1990], [13670, 74.7, 10582082, 'Cuba', 1990], [28599, 75, 4986705, 'Finland', 1990], [29476, 77.1, 56943299, 'France', 1990], [31476, 75.4, 78958237, 'Germany', 1990], [28666, 78.1, 254830, 'Iceland', 1990], [1777, 57.7, 870601776, 'India', 1990], [29550, 79.1, 122249285, 'Japan', 1990], [2076, 67.9, 20194354, 'North Korea', 1990], [12087, 72, 42972254, 'South Korea', 1990], [24021, 75.4, 3397534, 'New Zealand', 1990], [43296, 76.8, 4240375, 'Norway', 1990], [10088, 70.8, 38195258, 'Poland', 1990], [19349, 69.6, 147568552, 'Russia', 1990], [10670, 67.3, 53994605, 'Turkey', 1990], [26424, 75.7, 57110117, 'United Kingdom', 1990], [37062, 75.4, 252847810, 'United States', 1990]],
            [[44056, 81.8, 23968973, 'Australia', 2015], [43294, 81.7, 35939927, 'Canada', 2015], [13334, 76.9, 1376048943, 'China', 2015], [21291, 78.5, 11389562, 'Cuba', 2015], [38923, 80.8, 5503457, 'Finland', 2015], [37599, 81.9, 64395345, 'France', 2015], [44053, 81.1, 80688545, 'Germany', 2015], [42182, 82.8, 329425, 'Iceland', 2015], [5903, 66.8, 1311050527, 'India', 2015], [36162, 83.5, 126573481, 'Japan', 2015], [1390, 71.4, 25155317, 'North Korea', 2015], [34644, 80.7, 50293439, 'South Korea', 2015], [34186, 80.6, 4528526, 'New Zealand', 2015], [64304, 81.6, 5210967, 'Norway', 2015], [24787, 77.3, 38611794, 'Poland', 2015], [23038, 73.13, 143456918, 'Russia', 2015], [19360, 76.5, 78665830, 'Turkey', 2015], [38225, 81.4, 64715810, 'United Kingdom', 2015], [53354, 79.1, 321773631, 'United States', 2015]]
        ];

        $scope.option = {
            /*backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
              offset: 0,
              color: '#f7f8fa'
            }, {
                offset: 1,
                color: '#cdd0d5'
              }]),*/
            legend: {
                top: 0,
                right: 10,
                data: ['1990', '2015']
            },
            tooltip: {triggerOn: 'click'},
            grid: { x: '10%', y: '3%', width: '85%', height: '90%' },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true
            },
            series: [{
                name: '1990',
                data: data[0],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                label: {
                    emphasis: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(120, 36, 50, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(251, 118, 123)'
                        }, {
                                offset: 1,
                                color: 'rgb(204, 46, 72)'
                            }])
                    }
                }
            }, {
                    name: '2015',
                    data: data[1],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(25, 100, 150, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: 'rgb(129, 227, 238)'
                            }, {
                                    offset: 1,
                                    color: 'rgb(25, 183, 207)'
                                }])
                        }
                    }
                }]
        };

    }])

    //折线图
    .controller('LineCtrl', ['$scope', '$window', function ($scope, $window) {
        $scope.title = '堆叠区域图';
        function onClick(params) {
            console.log(params);
        };
        console.log($window.innerWidth);
        $scope.width = $window.innerWidth * 0.95 + 'px';
        $scope.height = '300px';

        $scope.config = {
            theme: 'default',
            event: [{ click: onClick }],
            dataLoaded: true
        };

        $scope.option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: { normal: {} },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
    }])
    //柱状图
    .controller('BarCtrl', ['$scope', '$window', function ($scope, $window) {
        $scope.title = '柱状图动画延迟';
        function onClick(params) {
            console.log(params);
        };
        console.log($window.innerWidth);
        $scope.width = $window.innerWidth * 0.95 + 'px';
        $scope.height = '300px';

        $scope.config = {
            theme: 'default',
            event: [{ click: onClick }],
            dataLoaded: true
        };

        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        for (var i = 0; i < 100; i++) {
            xAxisData.push('类目' + i);
            data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }

        $scope.option = {
            legend: {
                data: ['bar', 'bar2'],
                align: 'left'
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
            },
            series: [{
                name: 'bar',
                type: 'bar',
                data: data1,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                    name: 'bar2',
                    type: 'bar',
                    data: data2,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
    }])

    //饼状图
    .controller('PieCtrl', ['$scope', '$window', function ($scope, $window) {
        $scope.title = '嵌套环形图';
        function onClick(params) {
            console.log(params);
        };
        console.log($window.innerWidth);
        $scope.width = $window.innerWidth * 0.95 + 'px';
        $scope.height = '300px';

        $scope.config = {
            theme: 'default',
            event: [{ click: onClick }],
            dataLoaded: true
        };

        $scope.option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '直达', selected: true },
                        { value: 679, name: '营销广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '55%'],

                    data: [
                        { value: 335, name: '直达' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1048, name: '百度' },
                        { value: 251, name: '谷歌' },
                        { value: 147, name: '必应' },
                        { value: 102, name: '其他' }
                    ]
                }
            ]
        };
    }])
    .controller('SliderCtrl', ['$scope', '$window', function ($scope, $window) {
        $scope.options = {
            loop: false,
            effect: 'fade',
            speed: 500,
            autoHeight: true,
        }

        var chartOptions1 = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['电2016', '电2015', '水2016', '水2015']
            },
            grid: {
                left: '2%',
                right: '3%',
                bottom: '3%',
                top: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '电2016',
                    type: 'line',
                    data: [120, 132, 101, 134, 90, 130, 110]
                },
                {
                    name: '电2015',
                    type: 'line',
                    data: [110, 122, 91, 124, 90, 122, 91, 124, 90, 134, 110, 120]
                },
                {
                    name: '水2016',
                    type: 'line',
                    data: [28.20, 29.32, 29.01, 29.34, 32.90, 33.30, 33.20]
                },
                {
                    name: '水2015',
                    type: 'line',
                    data: [27.20, 26.32, 25.01, 28.34, 31.290, 32.35, 31.20, 28.32, 32.01, 36.34, 31.90, 32.30]
                }
            ]
        };
        var chartOptions2 = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                top: '2%',
                left: 'right',
                data: ['电', '水', '气', '油']
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '3%',
                top: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                axisTick: {
                    alignWithLabel: true
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '电',
                    type: 'bar',
                    stack: '总量',
                    data: [110, 122, 91, 124, 90, 122, 91, 122, 91, 124, 90, 122]
                },
                {
                    name: '水',
                    type: 'bar',
                    stack: '总量',
                    data: [41, 43, 38, 44, 49, 45, 41, 43, 38, 44, 49, 45]
                },
                {
                    name: '气',
                    type: 'bar',
                    stack: '总量',
                    data: [41, 44, 48, 44, 59, 35, 51, 44, 48, 44, 59, 35]
                },
                {
                    name: '油',
                    type: 'bar',
                    stack: '总量',
                    data: [8.20, 9.32, 9.01, 9.34, 12.90, 13.30, 13.20, 9.32, 9.01, 9.34, 12.90, 13.30]
                }
            ]
        };
        var chartOptions3 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            series: [
                {
                    name: '类型占比',
                    type: 'pie',
                    radius: [0, '45%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 24, name: '动力' },
                        { value: 16, name: '空调' },
                        { value: 22, name: '生产' },
                        { value: 14, name: '生活' },
                        { value: 11, name: '照明' },
                        { value: 13, name: '其他' },
                    ]
                },
                {
                    name: '学院占比',
                    type: 'pie',
                    radius: ['60%', '75%'],
                    data: [
                        { value: 22, name: '电气院' },
                        { value: 14, name: '水电院' },
                        { value: 24, name: '土木院' },
                        { value: 16, name: '建筑院' },
                        { value: 13, name: '商学院' },
                        { value: 11, name: '其他' },
                    ]
                }
            ]
        };

        console.log($window.innerWidth);
        var width = $window.innerWidth + 'px';
        var height = '230px';
        var chart1Dom = document.getElementById("chart1");
        //var ang_element = angular.element('#chart1');
        //var chart1Dom = ang_element[0];


        $scope.$on("$ionicSlides.sliderInitialized", function (event, data) {
            // data.slider is the instance of Swiper
            $scope.slider = data.slider;
            //var chart1Dom = document.getElementById("chart1");
            //使用angular的方式获取dom元素
            //angular.element()得到的是jquery的object，必须使用[0]的方式转化为raw dom才能被echarts使用
            var chart1Dom = angular.element(document.querySelector('#chart1'))[0];
            chart1Dom.style.width = width;
            chart1Dom.style.height = height;
            var chart1 = echarts.init(chart1Dom);
            //var chartOptions = chartOptions;

            if (chartOptions1 && typeof chartOptions1 === "object") {
                chart1.setOption(chartOptions1, true);
            }

            var chart2Dom = document.getElementById("chart2");
            chart2Dom.style.width = width;
            chart2Dom.style.height = height;
            var chart2 = echarts.init(chart2Dom);
            //var chartOptions = chartOptions;

            if (chartOptions2 && typeof chartOptions2 === "object") {
                chart2.setOption(chartOptions2, true);
            }

            var chart3Dom = document.getElementById("chart3");
            chart3Dom.style.width = width;
            chart3Dom.style.height = height;
            var chart3 = echarts.init(chart3Dom);
            //var chartOptions = chartOptions;

            if (chartOptions3 && typeof chartOptions3 === "object") {
                chart3.setOption(chartOptions3, true);
            }

            $scope.items = [{ name: '商学院', power: 1000, water: 500, gas: 50, nPower: 100 },
                { name: '土木', power: 1000, water: 500, gas: 50, nPower: 100 },
                { name: '电气', power: 1000, water: 500, gas: 50, nPower: 100 },
                { name: '建筑', power: 1000, water: 500, gas: 50, nPower: 100 },
                { name: '水利', power: 1000, water: 500, gas: 50, nPower: 100 },
                { name: '土木', power: 1000, water: 500, gas: 50, nPower: 100 },
                { name: '电气', power: 1000, water: 500, gas: 50, nPower: 100 },
                { name: '建筑', power: 1000, water: 500, gas: 50, nPower: 100 },
                { name: '水利', power: 1000, water: 500, gas: 50, nPower: 100 },
                { name: '地科', power: 1000, water: 500, gas: 50, nPower: 100 }
                ];
            $scope.tableStyle = {"background": "#FFFFFF", "height":$scope.items.length*37 + 100 +"px" };

        });

        $scope.$on("$ionicSlides.slideChangeStart", function (event, data) {
            console.log('Slide change is beginning');
        });

        $scope.$on("$ionicSlides.slideChangeEnd", function (event, data) {
            // note: the indexes are 0-based
            $scope.activeIndex = data.slider.activeIndex;
            $scope.previousIndex = data.slider.previousIndex;
        });
    }])
    ;