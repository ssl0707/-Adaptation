<template>
  <div id="home-map"
       v-if="names">
  </div>
  <div id="home-maps"
       v-else></div>
</template>

<script>
    require('echarts/map/js/china')
    export default {
        props: ['names'],
        data () {
            return {
                data: [
                    {
                        name: '宁夏',
                        value: 52
                    },
                    {
                        name: '内蒙古',
                        value: 58
                    },
                    {
                        name: '四川',
                        value: 58
                    },
                    {
                        name: '陕西',
                        value: 61
                    },
                    {
                        name: '安徽',
                        value: 229
                    }, {
                        name: '黑龙江',
                        value: 114
                    }

                ],
                geoCoordMap: {
                    宁夏: [106.27, 38.47],
                    内蒙古: [111.65, 40.82],
                    四川: [104.06, 30.67],
                    陕西: [108.95, 34.27],
                    安徽: [117.27, 31.86],
                    黑龙江: [126.63, 45.75]
                }
            }
        },
        methods: {
            drawChart (txt, count) {
                if (this.names) {
                    var bar_dv = document.getElementById('home-map')
                    this.myChart = this.$echarts.init(bar_dv)
                } else {
                    var bar = document.getElementById('home-maps')
                    this.myChart = this.$echarts.init(bar)
                }
                let convertData = data => {
                    var res = []

                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = this.geoCoordMap[data[i].name]
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                src: this.data[i].src,
                                value: geoCoord.concat(data[i].value)
                            })
                        }
                    }
                    return res
                }
                var option = {
                    tooltip: {
                        // 提示框组件
                        trigger: 'item', // 触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
                        formatter: function (data) {
                            // 格式化数据的函数
                            if (data.name === '安徽') {
                                return (
                                    '<div class="map-show"><p class="map-title">' +
                                    data.name +
                                    '自治区图书馆</p><p class="map-activity">儿童活动：7场</p></div>'
                                )
                            } else if (data.name === '陕西') {
                                return (
                                    '<div class="map-show"><p class="map-title">' +
                                    data.name +
                                    '自治区图书馆</p><p class="map-activity">培训活动：1场</p><p class="map-activity">讲座：4场</p><p class="map-activity">儿童活动：1场</p></div>'
                                )
                            } else if (data.name === '宁夏') {
                                return (
                                    '<div class="map-show"><p class="map-title">' +
                                    data.name +
                                    '自治区图书馆</p><p class="map-activity">培训活动：3场</p><p class="map-activity">讲座：4场</p><p class="map-activity">儿童活动：2场</p></div>'
                                )
                            } else if (data.name === '黑龙江') {
                                return (
                                    '<div class="map-show"><p class="map-title">' +
                                    data.name +
                                    '自治区图书馆</p><p class="map-activity">儿童活动：4场</p></div>'
                                )
                            }
                        },
                        show: true,
                        position: 'left' // 显示位置
                    },
                    geo: {
                        map: 'china',
                        zoom: count, // 设置地图的大小
                        label: {
                            normal: {
                                // 是图形在默认状态下的样式
                                show: false, // 省份名称
                                textStyle: {
                                    color: '#2c589e'
                                }
                            },
                            emphasis: {
                                // show: false,
                                // 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                                color: '#fff',
                                areaColor: '#2a333d',
                                label: {
                                    show: true
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#19325A',
                                borderColor: '#3878ca'
                            },
                            emphasis: {
                                areaColor: '#2c589e'
                            }
                        }
                    },
                    // 配置属性
                    series: [
                        {
                            type: 'map',
                            roam: false, // 是否开启鼠标缩放和平移漫游
                            data: convertData(this.data)
                        },
                        {
                            name: 'pm',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: convertData(this.data), // 展示的数据
                            symbolSize: txt, // 设置圆点的闪烁大小
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    // 静态的时候显示的默认样式
                                    formatter: function (val) {
                                        // 展示区域名称
                                        return val.data.name
                                    },
                                    position: 'left', // 名称位置
                                    show: true // 名字是否展示
                                },
                                emphasis: {
                                    // 鼠标移入动态的时候显示的默认样式
                                    show: false
                                }
                            },
                            itemStyle: {
                                // 设置圆点闪烁区域样式
                                normal: {
                                    // color: '#cd870e',
                                    color: '#bcf2fe',
                                    shadowBlur: 4, // 图形阴影的模糊大小
                                    shadowColor: '#00e4ff'
                                },
                                emphasis: {
                                    borderColor: '#c3f96e',
                                    borderWidth: 2
                                }
                            }
                        }
                    ]
                }
                // 使用制定的配置项和数据显示图表
                this.myChart.setOption(option)
            }
        },
        mounted () {
            var sUserAgent = navigator.userAgent.toLowerCase()
            if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
                // 跳转移动端页面
                this.drawChart('12', 1.22)
            } else {
                // 跳转pc端页面
                this.drawChart('20', '')
            }
        }
        // vue使用echarts地图卡顿问题
        // beforeDestroy () {
        //     this.myChart.clear()
        // }
    }
</script>

<style lang="scss">
@import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
#home-map {
  width: 100%;
  height: 100%;
  background-color: #0e1122;
}
#home-maps {
  width: 100%;
  height: 100%;
  background-color: #0e1122;
}
// 地图提示框样式start
.map-show {
  max-width: 146px;
  padding: 10px;
  overflow: hidden;
  border: 1px solid #5e5e5e;
  text-align: center;
  .map-title {
    color: #ffcc99;
  }
  .map-activity {
    white-space: normal;
    width: 100%;
    text-align: left;
    color: #ffcc99;
    font-size: 12px;
  }
}
// 地图提示框样式end
</style>
