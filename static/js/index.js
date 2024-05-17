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

            // 移除其他 a 元素的高亮样式  
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
            data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '23:00'],
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

            // 移除其他选项卡的高亮样式
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
})();








