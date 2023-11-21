
//定义图表对象
var myChart1 = null;
var myChart2 = null;
var myChart3 = null;
var myChart4 = null;
var myChart5 = null;
var myChart6 = null;
var myChart7 = null;
$(function () {
    industryBar();
    changeChart();
    ageTrendPie();
    skillAcquisitionChart();
    playCounts();
    roseChart();
    moveMapChart();
    title();
});

function industryBar() {
    myChart1 = echarts.init(document.getElementById('industryBar'));
    option = {
        /*  grid: {
          top: "20%",
          bottom: "12%"
        },*/
        backgroundColor: "#0f375f",
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
                label: {
                    show: true,
                },
            },
        },
        legend: {
            data: ["销售量", "业务1", "业务2"],
            top: "2%",
            right: "10",
            textStyle: {
                color: "rgba(250,250,250,0.6)",
                fontSize: 16,
            },
        },
        xAxis: {
            data: ["区域1", "区域2", "区域3", "区域4", "区域5", "区域6"],
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: "#26D9FF",
                    width: 2,
                },
            },
            axisTick: {
                show: true, //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "rgba(250,250,250,0.6)", //X轴文字颜色
                    fontSize: 16,
                },
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0.1)", "rgba(250,250,250,0)"],
                },
            },
        },
        yAxis: [
            {
                type: "value",
                /*name: "亿元",*/
                nameTextStyle: {
                    color: "#ebf8ac",
                    fontSize: 16,
                },
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: true,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#26D9FF",
                        width: 2,
                    },
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(250,250,250,0.6)",
                        fontSize: 16,
                    },
                },
            },
            {
                type: "value",
                /*name: "同比",*/
                nameTextStyle: {
                    color: "#ebf8ac",
                    fontSize: 16,
                },
                position: "right",
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    formatter: "{value} %", //右侧Y轴文字显示
                    textStyle: {
                        color: "rgba(250,250,250,0.6)",
                        fontSize: 16,
                    },
                },
            },
        ],
        series: [
            {
                name: "销售量",
                type: "line",
                yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                smooth: true, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                symbolSize: 8, //标记的大小
                itemStyle: {
                    //折线拐点标志的样式
                    color: "#1045A0",
                    borderColor: "#3D7EEB",
                    width: 2,
                    shadowColor: "#3D7EEB",
                    shadowBlur: 4,
                },
                lineStyle: {
                    color: "#3D7EEB",
                    width: 2,
                    shadowColor: "#3D7EEB",
                    shadowBlur: 4,
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgba(61,126,235, 0.5)",
                        },
                        {
                            offset: 1,
                            color: "rgba(61,126,235, 0)",
                        },
                    ]),
                },
                data: [4.2, 3.5, 2.9, 7.8, 5, 3],
            },
            {
                name: "业务1",
                type: "bar",
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "rgba(61,126,235, 1)",
                            },
                            {
                                offset: 1,
                                color: "rgba(61,126,235, 0)",
                            },
                        ]),
                        borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "rgba(160,196,225, 1)",
                            },
                            {
                                offset: 1,
                                color: "rgba(61,126,235, 1)",
                            },
                        ]),
                        borderWidth: 2,
                    },
                },
                data: [4, 3, 2, 8, 3, 5],
            },
            {
                name: "业务2",
                type: "bar",
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: "rgba(15,197,243,1)" },
                            { offset: 1, color: "rgba(15,197,243,0)" },
                        ]),
                        borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: "rgba(180,240,255,1)" },
                            { offset: 1, color: "rgba(15,197,243,1)" },
                        ]),
                        borderWidth: 2,
                    },
                },
                data: [3, 2, 3, 5, 4, 3],
            },
        ],
    };
    myChart1.setOption(option, true);	    // 使用刚指定的配置项和数据显示图表。
    $(document).ready(function () {
        myChart1.resize();
    })
    window.addEventListener("resize", function () {
        myChart1.resize();
    });
}



//two
function changeChart() {
    myChart2 = echarts.init(document.getElementById('changeLine'));

    //数据
    var XName = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    var data1 = [
        [123, 154, 234, 321, 120, 390, 634],
        [63, 194, 234, 321, 278, 110, 534],
        [53, 254, 234, 321, 118, 240, 434],
        [23, 354, 334, 221, 178, 190, 234],
    ];
    var Line = ["云篆山水路线", "昕博朗学校路线", "新华小学路线", "云锦五路路线"];
    var img = [
        "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsSAAALEgHS3X78AAAEp0lEQVR42u3cz4sjRRTA8W9Vd3Vn8mMmjj9WQWSRZQ+CsH+B7MnDIgiCd0E8CYJ/gOAIelo8ehUP/gF6WLw5/gMueFP2sIcF0dHd2Z1kknR11fOQZJJJMtlZd03H7HtQpNOTnpn+8Lrm1etmjIig8e/DKoECKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIqoAJudKTr+osZMNPvBUQBHwHsPF9fB9R0DeHMOQ6T6WOrhEzXBM4swDOL0M6CrArRVoq3t2dGUIb9fTvatg8ZZup1PDBgzPmy98mey6qfzjLz2WaWjEUZKEvGyi9nWyneMOvGIyFQo2Sbg4MUSChpU9IeTTUpJdsEajPZOJeJG5uBZj7rLLduWS5dGm6XNLEELOFUFj54ACJCaychkpDSASK3bwsXL0YgVpWJKwM0iy9Zy8HdGru7jvt3Pbu7w0wES7drTwAbjTHMGCsQcIAnYTC1/wRx0wEnl27JNgZI8HQ6Kc1mQq83RNzaMjPzXqDbjTQaJRFLxIyyMSxAXEkWrhrQzAAmo5HOjCQf7jflILxOkohL+aUPgV4vEGNJo+E5PAy02+UIMEwBxo0CPDP7Dg5SnEtpt1PA0e87XO25FOoh8IYIH2Y5b45RzGAQBiIltZoHxqMcjbksXAVgdc2EQMYzzzdotyeZWKuleULXJtwT4SODfC2QCWR+IF9KnjuX1Xbo99Op7LVE8iXlz0YBTk5SyLEEjo5OLuccEoFUvHfO+reuUPx4zftXAIcx1hdcF+/TvFab4A0Bs0VwqyhpVnkJT89/Q4DDQ0e77YCMwIUsFMeFZD856699URRvX4nxE4A/jbnxXp7v4Zw3ReGNSDHI8wFQjIafuoyn58L/fB6sth/Ybg9fez2TRC6QZcZYvgHsazF+MP7YCyLXcM7gvSXLDGBqYDg+NhwdmSpPoTrAkub0W+f4FSB1fDucIunMHSLpO8WAH0rSy8u+19MBCHB4OHzd2pI+CEUhpigEiN+l6WcdY252jLn5s7Wf472ImPcN8pUl/tEHoV4XWq1Ke4KrLmPsTA3oODpytFoOyJKSyzHyMSIxteWngMW5cSEdDJQUhTdZVgxOz3/+jFJm4+bA2e5JpNU6WZ4Fw99JwnWMKccwpeddP+B7GZTNUPKqybJy0O+Hs1YfMz9swwvpB8fbGDG0GuGkkK7V0hxSmZQpABI8l2z0v3sJf50qpAMJCd2qCulql3LD1lRGQjm7lEsDz0rkxTQOfiPPxUBcuJTbbhss/Y1eyi3NwsmKInmkZsKk5gtPUzNhvp11507CSy/X6XYStpvFudpZw1ZWIOF4Cq6SdtbKbioJyAhRTu3u9yMJXerN+ugvaQQsjcZ8Q3VnZwxlSDhe1lB9GjrSw5b+1avT8+Jw+979nNaOI6U3KpTrWAosxVQmygK4ld8X0ZtK/7eViExD7O1NQPb3T7fsl4/4sBpwYzPwjFbTo95Yl9l9Vd1YN1X/147HebSjary1AHyc5qc+XLQEQx9ve8Kg6xr6hKoCKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIq4JrHP8fEWV8FMTmOAAAAAElFTkSuQmCC",
        "image://data:image/png;base64,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",
        "image://data:image/png;base64,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",
        "image://data:image/png;base64,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",
    ];
    var color = ["#00f8ff", "#00f15a", "#0696f9", "#dcf776"];

    //数据处理
    var datas = [];
    Line.map((item, index) => {
        datas.push({
            symbolSize: 150,
            symbol: img[index],
            name: item,
            type: "line",
            yAxisIndex: 1,
            data: data1[index],
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    color: color[index],
                },
            },
        });
    });

    option = {
        backgroundColor: "#0e2147",
        grid: {
            left: "5%",
            top: "5%",
            bottom: "5%",
            right: "5%",
        },
        legend: {
            type: "scroll",
            data: Line,
            itemWidth: 18,
            itemHeight: 12,
            textStyle: {
                color: "#00ffff",
                fontSize: 14,
            },
        },
        yAxis: [
            {
                type: "value",
                position: "right",
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
            },
            {
                type: "value",
                position: "left",
                nameTextStyle: {
                    color: "#00FFFF",
                },
                splitLine: {
                    lineStyle: {
                        type: "dashed",
                        color: "rgba(135,140,147,0.8)",
                    },
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    formatter: "{value}",
                    color: "#fff",
                    fontSize: 14,
                },
            },
        ],
        xAxis: [
            {
                type: "category",
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#6A989E",
                    },
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: "#fff", // x轴颜色
                        fontWeight: "normal",
                        fontSize: "14",
                        lineHeight: 22,
                    },
                },
                data: XName,
            },
            {
                type: "category",
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                splitArea: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
                //-----
                data: ["1月", "2月", "3月", "4月", "5月", "6月"],
            },
        ],
        series: datas,
    };

    myChart2.setOption(option, true);	    // 使用刚指定的配置项和数据显示图表。
    $(document).ready(function () {
        myChart2.resize();
    })
    window.addEventListener("resize", function () {
        myChart2.resize();
    });

}

//three
function ageTrendPie() {
    myChart3 = echarts.init(document.getElementById('agePie'));

    option = {
        backgroundColor: "rgb(43, 51, 59)",
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true,
                },
                dataView: {
                    show: true,
                    readOnly: false,
                },
                magicType: {
                    show: true,
                    type: ["pie", "funnel"],
                },
                restore: {
                    show: true,
                },
                saveAsImage: {
                    show: true,
                },
            },
        },
        calculable: true,
        tooltip: {
            trigger: "item",
            formatter: "{a}<br/>{b}:{c}千万元",
        },
        title: {
            text: "南丁格尔玫瑰图--PieHalfRose",
            left: "center",
            top: 20,
            textStyle: {
                color: "#ccc",
            },
        },
        calculable: true,
        legend: {
            icon: "circle",
            x: "center",
            y: "15%",
            data: [
                "义乌市1",
                "义乌市2",
                "义乌市3",
                "义乌市4",
                "义乌市5",
                "义乌市6",
                "义乌市7",
                "义乌市8",
                "义乌市9",
            ],
            textStyle: {
                color: "#fff",
            },
        },
        series: [
            {
                name: "XX线索",
                type: "pie",
                radius: [37, 155],
                avoidLabelOverlap: false,
                startAngle: 0,
                center: ["50.1%", "34%"],
                roseType: "area",
                selectedMode: "single",
                label: {
                    normal: {
                        show: true,
                        formatter: "{c}千万元",
                    },
                    emphasis: {
                        show: true,
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        smooth: false,
                        length: 20,
                        length2: 10,
                    },
                    emphasis: {
                        show: true,
                    },
                },
                data: [
                    {
                        value: 600.58,
                        name: "义乌市1",
                        itemStyle: {
                            normal: {
                                color: "#f845f1",
                            },
                        },
                    },
                    {
                        value: 1100.58,
                        name: "义乌市2",
                        itemStyle: {
                            normal: {
                                color: "#ad46f3",
                            },
                        },
                    },
                    {
                        value: 1200.58,
                        name: "义乌市3",
                        itemStyle: {
                            normal: {
                                color: "#5045f6",
                            },
                        },
                    },
                    {
                        value: 1300.58,
                        name: "义乌市4",
                        itemStyle: {
                            normal: {
                                color: "#4777f5",
                            },
                        },
                    },
                    {
                        value: 1400.58,
                        name: "义乌市5",
                        itemStyle: {
                            normal: {
                                color: "#44aff0",
                            },
                        },
                    },
                    {
                        value: 1500.58,
                        name: "义乌市6",
                        itemStyle: {
                            normal: {
                                color: "#45dbf7",
                            },
                        },
                    },
                    {
                        value: 1500.58,
                        name: "义乌市7",
                        itemStyle: {
                            normal: {
                                color: "#f6d54a",
                            },
                        },
                    },
                    {
                        value: 1600.58,
                        name: "义乌市8",
                        itemStyle: {
                            normal: {
                                color: "#f69846",
                            },
                        },
                    },
                    {
                        value: 1800,
                        name: "义乌市9",
                        itemStyle: {
                            normal: {
                                color: "#ff4343",
                            },
                        },
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                },
                                labelLine: {
                                    show: false,
                                },
                            },
                        },
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                },
                                labelLine: {
                                    show: false,
                                },
                            },
                        },
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                },
                                labelLine: {
                                    show: false,
                                },
                            },
                        },
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                },
                                labelLine: {
                                    show: false,
                                },
                            },
                        },
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                },
                                labelLine: {
                                    show: false,
                                },
                            },
                        },
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                },
                                labelLine: {
                                    show: false,
                                },
                            },
                        },
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                },
                                labelLine: {
                                    show: false,
                                },
                            },
                        },
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                },
                                labelLine: {
                                    show: false,
                                },
                            },
                        },
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                },
                                labelLine: {
                                    show: false,
                                },
                            },
                        },
                    },
                ],
            },
        ],
    };


    myChart3.setOption(option, true);	    // 使用刚指定的配置项和数据显示图表。
    $(document).ready(function () {
        myChart3.resize();
    })
    window.addEventListener("resize", function () {
        myChart3.resize();
    });
}

/**
*	迁徙图
*/
function moveMapChart() {
    var geoCoordMap = {
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028]
    };

    var BJData = [
        [{ name: '北京' }, { name: '上海', value: 95 }],
        [{ name: '北京' }, { name: '广州', value: 90 }],
        [{ name: '北京' }, { name: '大连', value: 80 }],
        [{ name: '北京' }, { name: '南宁', value: 70 }],
        [{ name: '北京' }, { name: '南昌', value: 60 }],
        [{ name: '北京' }, { name: '拉萨', value: 50 }],
        [{ name: '北京' }, { name: '长春', value: 40 }],
        [{ name: '北京' }, { name: '包头', value: 30 }],
        [{ name: '北京' }, { name: '重庆', value: 20 }],
        [{ name: '北京' }, { name: '常州', value: 10 }]
    ];

    var SHData = [
        [{ name: '上海' }, { name: '包头', value: 95 }],
        [{ name: '上海' }, { name: '昆明', value: 90 }],
        [{ name: '上海' }, { name: '广州', value: 80 }],
        [{ name: '上海' }, { name: '郑州', value: 70 }],
        [{ name: '上海' }, { name: '长春', value: 60 }],
        [{ name: '上海' }, { name: '重庆', value: 50 }],
        [{ name: '上海' }, { name: '长沙', value: 40 }],
        [{ name: '上海' }, { name: '北京', value: 30 }],
        [{ name: '上海' }, { name: '丹东', value: 20 }],
        [{ name: '上海' }, { name: '大连', value: 10 }]
    ];

    var GZData = [
        [{ name: '广州' }, { name: '福州', value: 95 }],
        [{ name: '广州' }, { name: '太原', value: 90 }],
        [{ name: '广州' }, { name: '长春', value: 80 }],
        [{ name: '广州' }, { name: '重庆', value: 70 }],
        [{ name: '广州' }, { name: '西安', value: 60 }],
        [{ name: '广州' }, { name: '成都', value: 50 }],
        [{ name: '广州' }, { name: '常州', value: 40 }],
        [{ name: '广州' }, { name: '北京', value: 30 }],
        [{ name: '广州' }, { name: '北海', value: 20 }],
        [{ name: '广州' }, { name: '海口', value: 10 }]
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord
                }, {
                    coord: toCoord
                }]);
            }
        }
        return res;
    };

    var color = ['#a6c84c', '#00eaff', '#ffde00'];
    var series = [];
    [['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
        series.push({
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 1,
            effect: {//波纹点样式
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 5
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
            {
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });

    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['北京 Top10', '上海 Top10', '广州 Top10'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        geo: {
            map: 'china',
            zoom: 1.4,
            label: {
                emphasis: {
                    show: true,
                    color: '#fff'
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    areaColor: 'rgba(7,16,44, 0.7)',
                    borderColor: 'rgba(147, 235, 248, 1)'
                },
                emphasis: {
                    areaColor: '#1d83e1'
                }
            }
        },
        series: series
    };
    myChart7 = echarts.init(document.getElementById('moveMapChart'));
    myChart7.setOption(option, true);
    $(document).ready(function () {
        myChart7.resize();
    })
    window.addEventListener("resize", function () {
        myChart7.resize();
    });
}

//百分比
function skillAcquisitionChart() {
    myChart4 = echarts.init(document.getElementById('skillAcquisitionBar'));
    var data = [70, 34, 60, 78, 69];
    var titlename = [
        "太原市民政局",
        "太原市运输局",
        "太原市残联",
        "太原市报社",
        "太原市司法局",
    ];
    var valdata = [683, 234, 234, 523, 345];
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    option = {
        backgroundColor: "#0e2147",
        xAxis: {
            show: false,
        },
        yAxis: [
            {
                show: true,
                data: titlename,
                inverse: true,
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: "#fff",
                    formatter: function (value, index) {
                        return ["{lg|" + (index + 1) + "}" + "{title|" + value + "} "].join(
                            "\n"
                        );
                    },
                    rich: {
                        lg: {
                            backgroundColor: "#339911",
                            color: "#fff",
                            borderRadius: 15,
                            // padding: 5,
                            align: "center",
                            width: 15,
                            height: 15,
                        },
                    },
                },
            },
            {
                show: true,
                inverse: true,
                data: valdata,
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff",
                    },
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
            },
        ],
        series: [
            {
                name: "条",
                type: "bar",
                yAxisIndex: 0,
                data: data,
                barWidth: 30,
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num];
                        },
                    },
                },
                label: {
                    normal: {
                        show: true,
                        position: "inside",
                        formatter: "{c}%",
                    },
                },
            },
            {
                name: "框",
                type: "bar",
                yAxisIndex: 1,
                barGap: "-100%",
                data: [100, 100, 100, 100, 100],
                barWidth: 40,
                itemStyle: {
                    normal: {
                        color: "none",
                        borderColor: "#00c1de",
                        borderWidth: 3,
                        barBorderRadius: 15,
                    },
                },
            },
        ],
    };


    myChart4.setOption(option, true);	    // 使用刚指定的配置项和数据显示图表。
    $(document).ready(function () {
        myChart4.resize();
    })
    window.addEventListener("resize", function () {
        myChart4.resize();
    });
}


//雷达
function playCounts() {
    myChart5 = echarts.init(document.getElementById('playCounts'));

    option = {
        backgroundColor: "black",
        normal: {
            top: 200,
            left: 300,
            width: 500,
            height: 400,
            zIndex: 6,
            backgroundColor: "",
        },
        color: ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
        title: {
            show: true,
            text: "基础雷达图",
            left: "40%",
            top: "1%",
            textStyle: {
                fontSize: 18,
                color: "#fff",
                fontStyle: "normal",
                fontWeight: "normal",
            },
        },
        tooltip: {
            show: true,
            trigger: "item",
        },
        legend: {
            show: true,
            icon: "circle",
            left: "35%",
            top: "90%",
            orient: "horizontal",
            textStyle: {
                fontSize: 14,
                color: "#fff",
            },
            data: ["数据1", "数据2"],
        },
        radar: {
            center: ["50%", "50%"],
            radius: "70%",
            startAngle: 90,
            splitNumber: 4,
            shape: "circle",
            splitArea: {
                areaStyle: {
                    color: ["transparent"],
                },
            },
            axisLabel: {
                show: false,
                fontSize: 18,
                color: "#fff",
                fontStyle: "normal",
                fontWeight: "normal",
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "grey", //
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "grey", //
                },
            },
            indicator: [
                {
                    name: "道路结冰",
                    max: 88,
                },
                {
                    name: "暴雪",
                    max: 88,
                },
                {
                    name: "暴雨",
                    max: 88,
                },
                {
                    name: "冰雹",
                    max: 88,
                },
                {
                    name: "大风",
                    max: 88,
                },
                {
                    name: "大雾",
                    max: 88,
                },
                {
                    name: "高温",
                    max: 88,
                },
                {
                    name: "干旱",
                    max: 88,
                },
                {
                    name: "寒潮",
                    max: 88,
                },
                {
                    name: "雷电",
                    max: 88,
                },
                {
                    name: "霾",
                    max: 88,
                },
                {
                    name: "沙尘暴",
                    max: 88,
                },
                {
                    name: "霜冻",
                    max: 88,
                },
                {
                    name: "台风",
                    max: 88,
                },
                {
                    name: "洪水",
                    max: 88,
                },
            ],
        },
        series: [
            {
                name: "数据1",
                type: "radar",
                symbol: "circle",
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        color: "rgba(245, 166, 35, 0.4)",
                    },
                },
                itemStyle: {
                    color: "rgba(245, 166, 35, 1)",
                    borderColor: "rgba(245, 166, 35, 0.3)",
                    borderWidth: 10,
                },
                lineStyle: {
                    normal: {
                        type: "dashed",

                        color: "rgba(245, 166, 35, 1)",
                        width: 2,
                    },
                },
                data: [[80, 50, 55, 80, 50, 80, 48, 43, 60, 78, 60, 40, 42, 44, 65]],
            },
            {
                name: "数据2",
                type: "radar",
                symbol: "circle",
                symbolSize: 10,
                itemStyle: {
                    normal: {
                        color: "rgba(19, 173, 255, 1)",
                        borderColor: "rgba(19, 173, 255, 0.4)",
                        borderWidth: 10,
                    },
                },
                areaStyle: {
                    normal: {
                        color: "rgba(19, 173, 255, 0.5)",
                    },
                },
                lineStyle: {
                    normal: {
                        color: "rgba(19, 173, 255, 1)",
                        width: 2,
                        type: "dashed",
                    },
                },
                data: [[60, 60, 65, 60, 70, 40, 80, 63, 68, 60, 77, 60, 80, 62, 80]],
            },
        ],
    };

    myChart5.setOption(option, true);	    // 使用刚指定的配置项和数据显示图表。
    $(document).ready(function () {
        myChart5.resize();
    })
    window.addEventListener("resize", function () {
        myChart5.resize();
    });
}

function roseChart() {
    myChart6 = echarts.init(document.getElementById('roseChart'));

    var data = [
        {
            value: 100,
            name: "Chrome移动版",
            label: {
                color: "#fff",
            },
            itemStyle: {},
            emphasis: {
                itemStyle: {},
            },
        },
        {
            value: 80,
            name: "Google Chrome",
            label: {
                color: "#fff",
            },
            itemStyle: {},
            emphasis: {
                itemStyle: {},
            },
        },
        {
            value: 65,
            name: "微信浏览器",
            label: {
                color: "#fff",
            },
            itemStyle: {},
            emphasis: {
                itemStyle: {},
            },
        },
        {
            value: 65,
            name: "手机百度",
            label: {
                color: "#fff",
            },
            itemStyle: {},
            emphasis: {
                itemStyle: {},
            },
        },
        {
            value: 60,
            name: "UC浏览器（其他）",
            label: {
                color: "#fff",
            },
            itemStyle: {},
            emphasis: {
                itemStyle: {},
            },
        },
        {
            value: 60,
            name: "QQ手机浏览器",
            label: {
                color: "#fff",
            },
            itemStyle: {},
            emphasis: {
                itemStyle: {},
            },
        },
        {
            value: 50,
            name: "Safari移动版",
            label: {
                color: "#fff",
            },
            itemStyle: {},
            emphasis: {
                itemStyle: {},
            },
        },
        {
            value: 90,
            name: "其它",
            label: {
                color: "#fff",
            },
            itemStyle: {},
            emphasis: {
                itemStyle: {},
            },
        },
    ];

    function angleText(i, num) {
        //每个元素的角度
        var everyAngle = 360 / num;
        //文字现在所在的角度
        var currentAngle = i * everyAngle + everyAngle / 2;
        //文字所在模块的所占角度
        var currentArea = (i + 1) * everyAngle;

        if (currentAngle <= 90) {
            return -currentAngle;
        } else if (currentAngle <= 180 && currentAngle > 90) {
            return 180 - currentAngle;
        } else if (currentAngle < 270 && currentAngle > 180) {
            return 180 - currentAngle;
        } else if (currentAngle < 360 && currentAngle >= 270) {
            return 360 - currentAngle;
        }
    }

    //有值的色图的正切处理
    var data3 = [];
    data3 = JSON.parse(JSON.stringify(data));
    for (var i = 0; i < data3.length; i++) {
        if (i === 0) {
            data3[i]["label"]["color"] = "#333";
            data3[i]["itemStyle"]["color"] = "rgba(25, 255, 224)";
            data3[i]["emphasis"]["itemStyle"]["color"] = "rgba(25, 255, 224)";
            data3[i]["label"]["rotate"] = angleText(i, data3.length);
        } else {
            data3[i]["label"]["color"] = "#fff";
            data3[i]["itemStyle"]["color"] = "#4169E1";
            data3[i]["emphasis"]["itemStyle"]["color"] = "#6A5ACD";
            data3[i]["label"]["rotate"] = angleText(i, data3.length);
        }
    }

    //最外层大圈的数据
    var data1 = [];

    data1 = JSON.parse(JSON.stringify(data));
    for (var i = 0; i < data1.length; i++) {
        data1[i].value = 1;
        data1[i]["label"]["rotate"] = angleText(i, data1.length);
        if (i === 0) {
            data1[i]["label"]["color"] = "rgba(25, 255, 224)";
        }
    }

    //透明饼图的数据
    var data2 = [];

    for (var i = 0; i < data.length; i++) {
        if (i === 0) {
            data2.push({
                value: 1,
                itemStyle: {
                    color: "rgba(25, 255, 224,0.05)",
                },
            });
        } else {
            data2.push({
                value: 1,
                itemStyle: {
                    color: "transparent",
                },
            });
        }
    }

    var option = {
        backgroundColor: "rgba(9, 15, 33)",
        grid: {},
        polar: {},
        angleAxis: {
            show: false,
            interval: 1,
            type: "category",
            data: [],
        },
        //中间画圈圈的坐标轴
        radiusAxis: {
            show: false,
        },
        series: [
            {
                type: "pie",
                radius: ["68%", "90%"],
                hoverAnimation: false,
                itemStyle: {
                    color: "transparent",
                },
                labelLine: {
                    normal: {
                        show: false,
                        length: 30,
                        length2: 55,
                    },
                },
                label: {
                    normal: {
                        position: "inside",
                        align: "right",
                    },
                },
                name: "",
                data: data1,
            },
            {
                stack: "a",
                type: "pie",
                radius: ["75%", "42%"],
                roseType: "area",
                zlevel: 10,
                itemStyle: {
                    color: "#4169E1",
                },
                emphasis: {
                    itemStyle: {
                        color: "#6A5ACD",
                    },
                },
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 18,
                            color: "#fff",
                        },
                        position: "inside",
                        rotate: 30,
                        align: "right",
                        fontWeight: "bold",
                        formatter: "{c}%",
                    },
                    emphasis: {
                        show: true,
                    },
                },
                animation: false,
                data: data3,
            },
            {
                type: "pie",
                zlevel: 99,
                radius: ["15%", "90%"],
                selectedOffset: 0,
                animation: false,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: false,
                    },
                },
                data: data2,
            },
        ],
    };

    myChart6.setOption(option);

    myChart6.on("click", function (a) {
        //最外层的字体颜色重置变色
        for (var da1 = 0; da1 < option.series[0].data.length; da1++) {
            option.series[0].data[da1].label.color = "#fff";
        }

        //色圈的字体颜色和选中颜色重置
        for (var da2 = 0; da2 < option.series[1].data.length; da2++) {
            option.series[1].data[da2].itemStyle.color = "#4169E1";
            option.series[1].data[da2].label.color = "#fff";
            //hover颜色重置
            option.series[1].data[da2].emphasis.itemStyle.color = "#6A5ACD";
        }

        //背景的透明饼图的重置
        for (var da3 = 0; da3 < option.series[2].data.length; da3++) {
            option.series[2].data[da3].itemStyle.color = "transparent";
        }

        option.series[1].data[a.dataIndex].itemStyle.color = "rgba(25, 255, 224)";
        option.series[1].data[a.dataIndex].label.color = "#333";
        //hover 颜色改变
        option.series[1].data[a.dataIndex].emphasis.itemStyle.color =
            "rgba(25, 255, 224)";
        option.series[0].data[a.dataIndex].label.color = "rgba(25, 255, 224)";
        option.series[2].data[a.dataIndex].itemStyle.color = "rgba(25, 255, 224,0.1)";
        //console.log(option)
        myChart.setOption(option);
    });

    myChart6.on("mouseover", function (a) {
        myChart6.dispatchAction({
            type: "highlight",
            seriesIndex: 1,
            dataIndex: a.dataIndex,
        });
    });

    myChart6.on("mouseout", function (a) {
        myChart6.dispatchAction({
            type: "downplay",
            seriesIndex: 1,
            dataIndex: a.dataIndex,
        });
    });


    myChart6.setOption(option, true);	    // 使用刚指定的配置项和数据显示图表。
    $(document).ready(function () {
        myChart6.resize();
    })
    window.addEventListener("resize", function () {
        myChart6.resize();
    });


}


function title() {
    myChart9 = echarts.init(document.getElementById('title'));

    let angle = 0; //角度，用来做简单的动画效果的
    let value = 55.33;
    option = {
        backgroundColor: "#061740",
        title: {
            text: "{a|" + value + "}{c|%}",
            x: "center",
            y: "center",
            textStyle: {
                rich: {
                    a: {
                        fontSize: 48,
                        color: "#29EEF3",
                    },

                    c: {
                        fontSize: 20,
                        color: "#ffffff",
                        // padding: [5,0]
                    },
                },
            },
        },
        legend: {
            type: "plain",
            orient: "vertical",
            right: 0,
            top: "10%",
            align: "auto",
            data: [
                {
                    name: "涨价后没吃过",
                    icon: "circle",
                },
                {
                    name: "天天吃",
                    icon: "circle",
                },
                {
                    name: "三五天吃一次",
                    icon: "circle",
                },
                {
                    name: "半个月吃一次",
                    icon: "circle",
                },
            ],
            textStyle: {
                color: "white",
                fontSize: 16,
                padding: [10, 1, 10, 0],
            },
            selectedMode: false,
        },
        series: [
            {
                name: "ring5",
                type: "custom",
                coordinateSystem: "none",
                renderItem: function (params, api) {
                    return {
                        type: "arc",
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                            startAngle: ((0 + angle) * Math.PI) / 180,
                            endAngle: ((90 + angle) * Math.PI) / 180,
                        },
                        style: {
                            stroke: "#0CD3DB",
                            fill: "transparent",
                            lineWidth: 1.5,
                        },
                        silent: true,
                    };
                },
                data: [0],
            },
            {
                name: "ring5",
                type: "custom",
                coordinateSystem: "none",
                renderItem: function (params, api) {
                    return {
                        type: "arc",
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                            startAngle: ((180 + angle) * Math.PI) / 180,
                            endAngle: ((270 + angle) * Math.PI) / 180,
                        },
                        style: {
                            stroke: "#0CD3DB",
                            fill: "transparent",
                            lineWidth: 1.5,
                        },
                        silent: true,
                    };
                },
                data: [0],
            },
            {
                name: "ring5",
                type: "custom",
                coordinateSystem: "none",
                renderItem: function (params, api) {
                    return {
                        type: "arc",
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                            startAngle: ((270 + -angle) * Math.PI) / 180,
                            endAngle: ((40 + -angle) * Math.PI) / 180,
                        },
                        style: {
                            stroke: "#0CD3DB",
                            fill: "transparent",
                            lineWidth: 1.5,
                        },
                        silent: true,
                    };
                },
                data: [0],
            },
            {
                name: "ring5",
                type: "custom",
                coordinateSystem: "none",
                renderItem: function (params, api) {
                    return {
                        type: "arc",
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                            startAngle: ((90 + -angle) * Math.PI) / 180,
                            endAngle: ((220 + -angle) * Math.PI) / 180,
                        },
                        style: {
                            stroke: "#0CD3DB",
                            fill: "transparent",
                            lineWidth: 1.5,
                        },
                        silent: true,
                    };
                },
                data: [0],
            },
            {
                name: "ring5",
                type: "custom",
                coordinateSystem: "none",
                renderItem: function (params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                    let point = getCirlPoint(x0, y0, r, 90 + -angle);
                    return {
                        type: "circle",
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 4,
                        },
                        style: {
                            stroke: "#0CD3DB", //粉
                            fill: "#0CD3DB",
                        },
                        silent: true,
                    };
                },
                data: [0],
            },
            {
                name: "ring5", //绿点
                type: "custom",
                coordinateSystem: "none",
                renderItem: function (params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                    let point = getCirlPoint(x0, y0, r, 270 + -angle);
                    return {
                        type: "circle",
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 4,
                        },
                        style: {
                            stroke: "#0CD3DB", //绿
                            fill: "#0CD3DB",
                        },
                        silent: true,
                    };
                },
                data: [0],
            },
            {
                name: "吃猪肉频率",
                type: "pie",
                radius: ["58%", "45%"],
                silent: true,
                clockwise: true,
                startAngle: 90,
                z: 0,
                zlevel: 0,
                label: {
                    normal: {
                        position: "center",
                    },
                },
                data: [
                    {
                        value: value,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: {
                                    // 完成的圆环的颜色
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "#4FADFD", // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "#28E8FA", // 100% 处的颜色
                                        },
                                    ],
                                },
                            },
                        },
                    },
                    {
                        value: 100 - value,
                        name: "",
                        label: {
                            normal: {
                                show: false,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: "#173164",
                            },
                        },
                    },
                ],
            },

            {
                name: "",
                type: "gauge",
                radius: "58%",
                center: ["50%", "50%"],
                startAngle: 0,
                endAngle: 359.9,
                splitNumber: 8,
                hoverAnimation: true,
                axisTick: {
                    show: false,
                },
                splitLine: {
                    length: 60,
                    lineStyle: {
                        width: 5,
                        color: "#061740",
                    },
                },
                axisLabel: {
                    show: false,
                },
                pointer: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        opacity: 0,
                    },
                },
                detail: {
                    show: false,
                },
                data: [
                    {
                        value: 0,
                        name: "",
                    },
                ],
            },
        ],
    };

    //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
    function getCirlPoint(x0, y0, r, angle) {
        let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
        let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
        return {
            x: x1,
            y: y1,
        };
    }

    function draw() {
        angle = angle + 3;
        myChart9.setOption(option, true);
        //window.requestAnimationFrame(draw);
    }

    setInterval(function () {
        //用setInterval做动画感觉有问题
        draw();
    }, 100);


    myChart9.setOption(option, true);	    // 使用刚指定的配置项和数据显示图表。
    $(document).ready(function () {
        myChart9.resize();
    })
    window.addEventListener("resize", function () {
        myChart9.resize();
    });
}
// myChart3 = echarts.init(document.getElementById('industryBar'));

// myChart3.setOption(option, true);	    // 使用刚指定的配置项和数据显示图表。
// $(document).ready(function () {
//     myChart3.resize();
// })
// window.addEventListener("resize", function () {
//     myChart3.resize();
// });