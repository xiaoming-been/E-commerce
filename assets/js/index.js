// 头部选项卡
// 初始化页面时加载第一个选项卡的数据
document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.tab_links');
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
    }
});

function openTab(evt, tabName) {
    var i, tab_content, tab_links;
    tab_content = document.getElementsByClassName("tab_content");
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }
    tab_links = document.getElementsByClassName("tab_links");
    for (i = 0; i < tab_links.length; i++) {
        tab_links[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");

    // 检查当前选项卡是否为第一个选项卡
    if (tabName === "overview") {
        document.getElementById("overview").style.display = "flex";
    } else {
        document.getElementById("overview").style.display = "none";
    }
}

/* 总览选项卡 */
// 初始化页面时加载第一个选项卡的数据
document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.overview_tab_links');
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
    }
});
function open_overview_tab(evt, tabName) {
    var i, tab_content, tab_links;
    tab_content = document.getElementsByClassName("overview_tab_content");
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }
    tab_links = document.getElementsByClassName("overview_tab_links");
    for (i = 0; i < tab_links.length; i++) {
        tab_links[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
    // 检查当前选项卡是否为第一个选项卡
    if (tabName === "overview_tab") {
        document.getElementById("overview_tab").style.display = "flex";
    } else {
        document.getElementById("overview_tab").style.display = "none";
    }
}
// 实时分析-引流分布-场景值图表选项卡
// 初始化页面时加载第一个选项卡的数据
document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.overview_analyze_content_chart_left_content_label_tab');
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
    }
});
function overview_analyze_content_chart_left_content_label(evt, tabName) {
    var i, tab_content, tab_links;
    tab_content = document.getElementsByClassName("overview_analyze_content_chart_left_content_chart");
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }
    tab_links = document.getElementsByClassName("overview_analyze_content_chart_left_content_label_tab");
    for (i = 0; i < tab_links.length; i++) {
        tab_links[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}
// 初始化图表
function initCharts() {
    // 获取图表的DOM元素
    var transactionsChart = echarts.init(document.getElementById('number_transactions'));
    var visitsChart = echarts.init(document.getElementById('number_visits'));

    // 图表数据
    var labelData = [
        {
            label: "下单金额",
            data: [
                { name: "广告", value: 10 },
                { name: "自营小程序", value: 20 },
                { name: "扫码小程序", value: 30 },
                { name: "公众号", value: 40 },
                { name: "快捷入口", value: 50 },
                { name: "扫码", value: 60 }
            ]
        },
        {
            label: "下单用户数",
            data: [
                { name: "广告", value: 100 },
                { name: "自营小程序", value: 200 },
                { name: "扫码小程序", value: 300 },
                { name: "公众号", value: 400 },
                { name: "快捷入口", value: 500 },
                { name: "扫码", value: 600 }
            ]
        }
    ];

    // 配置图表选项
    var transactionsOption = {
        title: {
            text: labelData[0].label,
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [{
            name: labelData[0].label,
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: labelData[0].data
        }]
    };

    var visitsOption = {
        title: {
            text: labelData[1].label,
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [{
            name: labelData[1].label,
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: labelData[1].data
        }]
    };

    // 设置图表选项
    transactionsChart.setOption(transactionsOption);
    visitsChart.setOption(visitsOption);

    // 返回图表对象
    return {
        transactionsChart: transactionsChart,
        visitsChart: visitsChart
    };
}

// 切换图表
function switchChart(evt, tabName) {
    // 获取所有图表元素
    var charts = document.getElementsByClassName("overview_analyze_content_chart_left_content_chart");

    // 隐藏所有图表
    for (var i = 0; i < charts.length; i++) {
        charts[i].style.display = "none";
    }

    // 显示选中的图表
    document.getElementById(tabName).style.display = "block";

    // 刷新图表
    if (tabName === "number_transactions") {
        chartObjects.transactionsChart.resize();
    } else if (tabName === "number_visits") {
        chartObjects.visitsChart.resize();
    }
}

// 初始化图表并获取图表对象
var chartObjects = initCharts();
// 让图表随屏幕自适应
window.addEventListener('resize', function () {
    chartObjects.transactionsChart.resize();
    chartObjects.visitsChart.resize();
});

// 数据总览-今日概况-面积图
(function () {
    var labelData = [{
        label: "下单金额分时段趋势图",
        data: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
    },
    {
        label: "下单金额累计趋势图",
        data: [
            [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
            [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
        ]
    }
    ];

    var myChart = echarts.init(document.querySelector(".data_overview_today_chart_content_item"));

    var option = {
        backgroundColor: 'rgb(255,255,255)',
        // 修改两条线的颜色
        color: ['rgb(151,172,206)', 'rgb(222,171,164)'],
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255,255,255)',
            background: 'rgba(255,255,255)',
        },
        // 图例组件
        legend: {
            right: 'center',
        },
        grid: {
            top: "20%",
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false, // 去除轴间距
            data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '23:00'],
            // 去除刻度线
            axisTick: {
                show: true
            },
            axisLabel: {
                // color: "#4c9bfb" // x轴文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            }
        },
        yAxis: {
            type: 'value',
            // 去除刻度线
            axisTick: {
                show: false
            },
            axisLabel: {
                // color: "#4c9bfb" // x轴文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            splitLine: {
                lineStyle: {
                    color: "rgb(244,244,244)"
                }
            }
        },
        series: [{
            type: 'line',
            smooth: true, // 圆滑的线
            name: '昨日',
            stack: '总量',
            areaStyle: {},
            data: labelData[0].data[0]
        },
        {
            type: 'line',
            smooth: true, // 圆滑的线
            name: '今日',
            stack: '总量',
            areaStyle: {},
            data: labelData[0].data[1]
        }
        ]
    };

    myChart.setOption(option);

    // 4.让图表随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })

    // 获取所有的a元素  
    var anchors = document.querySelectorAll('.data_overview_today_chart_content a');
    // 初始化第一个a元素的高亮样式
    if (anchors.length > 0) {
        anchors[0].classList.add('a-active');
    }

    // 为每个 a 元素添加点击事件监听器  
    anchors.forEach(function (anchor, index) {
        anchor.addEventListener('click', function (event) {
            // 阻止默认的链接行为（如果a元素是链接）  
            event.preventDefault();

            // 点击a之后 根据当前a的索引号 找到对应的 labelData 相关对象  
            var obj = labelData[index];
            option.series[0].data = obj.data[0];
            option.series[1].data = obj.data[1];

            // 重新渲染图表
            myChart.setOption(option);

            // 移除扫码 a 元素的高亮样式  
            anchors.forEach(function (otherAnchor) {
                otherAnchor.classList.remove('a-active');
            });

            // 给当前 a 元素添加高亮样式  
            this.classList.add('a-active');
        });
    });

    // 需要重新渲染
    myChart.setOption(option);
})();
// 数据总览-核心指标-折线图
(function () {
    var labelData = [
        {
            label: "访问页面数(PV)",
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
        },
        {
            label: "访客数(UV)",
            data: [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38]
        },
        {
            label: "下单金额",
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
        },
        {
            label: "下单次数",
            data: [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38]
        },
        {
            label: "下单人数",
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
        }
    ];

    var myChart = echarts.init(document.querySelector(".data_overview_core_metrics_content_item"));

    var option = {
        backgroundColor: 'rgb(255,255,255)',
        color: ['rgb(222,171,164)'],
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255,255,255)',
            background: 'rgba(255,255,255)',
        },
        legend: {
            right: 'center',
        },
        grid: {
            top: "20%",
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '5.10', '5.11', '5.12'],
            axisTick: {
                show: true
            },
            axisLabel: {},
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {},
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: "rgb(244,244,244)"
                }
            }
        },
        series: [{
            type: 'line',
            name: labelData[0].label, // 默认使用第一组数据的标签
            stack: '总量',
            data: labelData[0].data // 默认使用第一组数据
        }]
    };

    myChart.setOption(option);

    // 添加点击事件
    var labels = document.querySelectorAll('.data_overview_core_metrics_content_label a');
    labels.forEach(function (label, index) {
        label.addEventListener('click', function (event) {
            event.preventDefault();

            // 移除扫码选项卡的高亮样式
            labels.forEach(function (otherLabel) {
                otherLabel.classList.remove('a-active');
            });

            // 给当前选项卡添加高亮样式
            label.classList.add('a-active');

            // 更新图表数据
            myChart.setOption({
                series: [{
                    name: labelData[index].label,
                    data: labelData[index].data
                }]
            });
        });
    });
    // 初始化时给第一个选项卡添加高亮样式
    labels[0].classList.add('a-active');
    // 让图表随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();
// 昨日场景值分析
(function () {
    var labelData = [
        {
            label: "下单金额",
            data: [
                { name: "广告", value: 10 },
                { name: "自营小程序", value: 20 },
                { name: "扫码小程序", value: 30 },
                { name: "公众号", value: 40 },
                { name: "快捷入口", value: 50 },
                { name: "扫码", value: 60 }
            ]
        },
        {
            label: "下单用户数",
            data: [
                { name: "广告", value: 100 },
                { name: "自营小程序", value: 200 },
                { name: "扫码小程序", value: 300 },
                { name: "公众号", value: 400 },
                { name: "快捷入口", value: 500 },
                { name: "扫码", value: 600 }
            ]
        },
        {
            label: "访问页面数",
            data: [
                { name: "广告", value: 10 },
                { name: "自营小程序", value: 20 },
                { name: "扫码小程序", value: 30 },
                { name: "公众号", value: 40 },
                { name: "快捷入口", value: 50 },
                { name: "扫码", value: 60 }
            ]
        },
        {
            label: "访客人数",
            data: [
                { name: "广告", value: 1 },
                { name: "自营小程序", value: 2 },
                { name: "扫码小程序", value: 3 },
                { name: "公众号", value: 4 },
                { name: "快捷入口", value: 5 },
                { name: "扫码", value: 6 }
            ]
        }
    ];

    var myChart = echarts.init(document.querySelector(".data_overview_scene_analysis_content_left_item_chart"));

    var option = {
        backgroundColor: 'rgb(255,255,255)',
        // color: ['rgb(222,171,164)'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            left: '30px', // 设置图例在左侧
            orient: 'vertical', // 设置图例的布局为垂直布局
            top: 'middle', // 设置图例在垂直方向上居中
            data: labelData[0].data.map(function (item) {
                return item.name;
            })
        },
        series: [
            {
                name: labelData[0].label,
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: labelData[0].data
            }
        ]
    };

    myChart.setOption(option);

    // 添加点击事件
    var labels = document.querySelectorAll('.data_overview_scene_analysis_content_left_item_label a');
    labels.forEach(function (label, index) {
        label.addEventListener('click', function (event) {
            event.preventDefault();

            // 移除其他标签的高亮样式
            labels.forEach(function (otherLabel) {
                otherLabel.classList.remove('a-active');
            });

            // 添加当前标签的高亮样式
            label.classList.add('a-active');

            // 更新图表数据
            myChart.setOption({
                legend: {
                    data: labelData[index].data.map(function (item) {
                        return item.name;
                    })
                },
                series: [{
                    name: labelData[index].label,
                    data: labelData[index].data
                }]
            });
        });
    });

    // 初始化时将第一个标签高亮
    labels[0].classList.add('a-active');
    // 当窗口大小改变时，调整图表大小
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// Top5场景值指标趋势图
(function () {
    var labelData = [
        {
            label: "下单金额",
            data: [
                { name: "广告", value: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120] },
                { name: "自营小程序", value: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130] },
                { name: "扫码小程序", value: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140] },
                { name: "公众号", value: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150] },
                { name: "快捷入口", value: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160] },
                { name: "扫码", value: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170] }
            ]
        },
        {
            label: "下单用户数",
            data: [
                { name: "广告", value: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120] },
                { name: "自营小程序", value: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130] },
                { name: "扫码小程序", value: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140] },
                { name: "公众号", value: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150] },
                { name: "快捷入口", value: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160] },
                { name: "扫码", value: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170] }
            ]
        },
        {
            label: "访问页面数",
            data: [
                { name: "广告", value: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120] },
                { name: "自营小程序", value: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130] },
                { name: "扫码小程序", value: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140] },
                { name: "公众号", value: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150] },
                { name: "快捷入口", value: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160] },
                { name: "扫码", value: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170] }
            ]
        },
        {
            label: "访客人数",
            data: [
                { name: "广告", value: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120] },
                { name: "自营小程序", value: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130] },
                { name: "扫码小程序", value: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140] },
                { name: "公众号", value: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150] },
                { name: "快捷入口", value: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160] },
                { name: "扫码", value: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170] }
            ]
        }
    ];

    var myChart = echarts.init(document.querySelector(".data_overview_scene_analysis_content_right_item_chart"));

    function getSeries(data) {
        return data.map(function (item) {
            return {
                type: 'line',
                name: item.name,
                stack: '总量',
                data: item.value
            };
        });
    }

    var option = {
        backgroundColor: 'rgb(255,255,255)',
        color: ['rgb(222,171,164)', 'rgb(126,196,191)', 'rgb(255,207,162)', 'rgb(198,161,223)', 'rgb(159,190,255)', 'rgb(255,159,159)'],
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255,255,255)',
            textStyle: {
                color: '#000'
            }
        },
        legend: {
            orient: 'horizontal', // 水平排列
            right: 'center',
            itemWidth: 10, // 图例图标宽度
            itemHeight: 10, // 图例图标高度
            textStyle: {
                fontSize: 12 // 图例文字大小
            }
        },
        grid: {
            top: "20%",
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '5.10', '5.11', '5.12'],
            axisTick: {
                show: true
            },
            axisLabel: {},
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {},
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: "rgb(244,244,244)"
                }
            }
        },
        series: getSeries(labelData[0].data) // 默认显示第一组数据
    };

    myChart.setOption(option);

    // 添加点击事件
    var labels = document.querySelectorAll('.data_overview_scene_analysis_content_right_item_label a');
    labels.forEach(function (label, index) {
        label.addEventListener('click', function (event) {
            event.preventDefault();

            // 移除其他选项卡的高亮样式
            labels.forEach(function (otherLabel) {
                otherLabel.classList.remove('a-active');
            });

            // 给当前选项卡添加高亮样式
            label.classList.add('a-active');

            // 更新图表数据
            myChart.setOption({
                series: getSeries(labelData[index].data)
            });
        });
    });

    // 初始化时给第一个选项卡添加高亮样式
    labels[0].classList.add('a-active');

    // 让图表随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();