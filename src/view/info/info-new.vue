<template>
    <div id="shishi">
        <div id="map">
        </div>
        <div class="left-side">
            <div class="left-side-first">
                <el-button size="mini" type="primary" icon="el-icon-close-notification" plain>关闭预警</el-button>
            </div>
            <div class="left-side-second">
                <el-tabs type="border-card">
                    <el-tab-pane label="" class="werr">
                        <span slot="label"><i class="el-icon-s-unfold"></i> 选择图层</span>
                        <div style="padding-right: 22px">
                            <el-switch
                                    style="display: block"
                                    v-model="valuesw0"
                                    active-text="水质">
                            </el-switch>
                            <el-switch
                                    style="display: block"
                                    v-model="valuesw1"
                                    active-text="污染源">
                            </el-switch>
                        </div>
                        <div style="padding-right: 10px">
                            <el-switch
                                    style="display: block"
                                    v-model="valuesw2"
                                    active-text="水利工程">
                            </el-switch>
                            <el-switch
                                    style="display: block"
                                    v-model="valuesw3"
                                    active-text="生态流量">
                            </el-switch>
                        </div>
                        <div style="padding-right: 22px">
                            <el-switch
                                    style="display: block"
                                    v-model="valuesw4"
                                    active-text="排污口">
                            </el-switch>
                            <el-switch
                                    style="display: block"
                                    v-model="valuesw5"
                                    active-text="取水口">
                            </el-switch>
                        </div>
                        <div style="padding-right: 37px">
                            <el-switch
                                    style="display: block"
                                    v-model="valuesw6"
                                    active-text="水位">
                            </el-switch>
                            <el-switch
                                    style="display: block"
                                    v-model="valuesw7"
                                    active-text="雨情">
                            </el-switch>
                        </div>
                        <div style="padding-right: 22px">
                            <el-switch
                                    style="display: block"
                                    v-model="valuesw8"
                                    active-text="水量">
                            </el-switch>
                            <el-switch
                                    style="display: block"
                                    v-model="valuesw9"
                                    active-text="公示牌">
                            </el-switch>
                        </div>
                    </el-tab-pane>
                </el-tabs>

            </div>
            <div class="left-side-third">
                <el-tabs type="border-card" style="height: 100%">
                    <el-tab-pane label="" class="werty">
                        <span slot="label"><i class="el-icon-s-unfold"></i> 选择区域</span>
                        <div class="left-side3-item">
                            <span>柳州市</span>
                            <el-radio v-model="radio" label="1"></el-radio>
                        </div>
                        <div>
                            <span>城中区</span>
                            <el-radio v-model="radio" label="2"></el-radio>
                        </div>
                        <div>
                            <span>鱼峰区</span>
                            <el-radio v-model="radio" label="3"></el-radio>
                        </div>
                        <div>
                            <span>柳南区</span>
                            <el-radio v-model="radio" label="4"></el-radio>
                        </div>
                        <div>
                            <span>柳北区</span>
                            <el-radio v-model="radio" label="5"></el-radio>
                        </div>
                        <div>
                            <span>柳江区</span>
                            <el-radio v-model="radio" label="6"></el-radio>
                        </div>
                        <div>
                            <span>鹿寨县</span>
                            <el-radio v-model="radio" label="7"></el-radio>
                        </div>
                        <div>
                            <span>柳城县</span>
                            <el-radio v-model="radio" label="8"></el-radio>
                        </div>
                        <div>
                            <span>融安县</span>
                            <el-radio v-model="radio" label="9"></el-radio>
                        </div>
                        <div>
                            <span>三江侗族自治县</span>
                            <el-radio v-model="radio" label="10"></el-radio>
                        </div>
                        <div>
                            <span>融水苗族自治县</span>
                            <el-radio v-model="radio" label="11"></el-radio>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <div class="right-bottom">
            <div style="transition: 1s;display: flex;" :class="[{hide: ishide}]">
                <div class="end-clos" @click="soh">
                    <i v-if="ishide" class="el-icon-d-arrow-left" style=""></i>
                    <i v-if="!ishide" class="el-icon-d-arrow-right" style=""></i>
                </div>

                <el-tabs type="border-card">
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-water-cup"></i></span>
                        <span class="card-text">水质</span>
                        <span style="color: #87ced1">I类水</span>
                        <span style="color: #a6d19c">II类水</span>
                        <span style="color: #d1cca4">III类水</span>
                        <span style="color: #d1b1ae">IV类水</span>
                        <span style="color: #d196c0">V类水</span>
                        <span style="color: #bfa1d1">劣V类水</span>
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-help"></i></span>
                        <span class="card-text">污染源</span>
                        <span><i class="el-icon-help"></i>污染源</span>
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-guide"></i> </span>
                        <span class="card-text">水利工程</span>
                        <span><i class="el-icon-coin"></i>水库</span>
                        <span><i class="el-icon-set-up"></i>水闸</span>
                        <span><i class="el-icon-connection"></i>橡胶坝</span>
                        <span><i class="el-icon-cpu"></i>水电站</span>
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-picture-outline-round"></i></span>
                        <span class="card-text">公示牌</span>
                        <span class=""><i class="el-icon-picture-outline-round"></i>公示牌</span>
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-moon-night"></i></span>
                        <span class="card-text">水质</span>
                        <span style="color: #9cd1d0">水量不变</span>
                        <span style="color: #a9d19a">水量上升</span>
                        <span style="color: #d1cd96">水量下降</span>
                        <span style="color: #d1ad93">黄色预警</span>
                        <span style="color: #d18694">红色预警</span>
                    </el-tab-pane>
                    <el-tab-pane class="yuqing">
                        <span slot="label"><i class="el-icon-heavy-rain"></i></span>
                        <span class="card-text">雨情</span>
                        <span style="display: inline-block"><i
                                style="display:block;width: 15px;height: 15px;border-radius: 50%;background-color: #a1cbd1;float: left;"></i>小雨</span>
                        <span style="display: inline-block"><i
                                style="display:block;width: 15px;height: 15px;border-radius: 50%;background-color: #aad19c;float: left;"></i>中雨</span>
                        <span style="display: inline-block"><i
                                style="display:block;width: 15px;height: 15px;border-radius: 50%;background-color: #d1c09c;float: left;"></i>大雨</span>
                        <span style="display: inline-block"><i
                                style="display:block;width: 15px;height: 15px;border-radius: 50%;background-color: #d1a362;float: left;"></i>暴雨</span>
                        <span style="display: inline-block"><i
                                style="display:block;width: 15px;height: 15px;border-radius: 50%;background-color: #d17f62;float: left;"></i>大暴雨</span>
                        <span style="display: inline-block"><i
                                style="display:block;width: 15px;height: 15px;border-radius: 50%;background-color: #d1332d;float: left;"></i>特大暴雨</span>
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-ship"></i></span>
                        <span class="card-text">水位</span>
                        <span><i class="el-icon-ship"></i>水位</span>
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-wind-power"></i></span>
                        <span class="card-text">取水口</span>
                        <span><i class="el-icon-wind-power"></i>取水口</span>
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-receiving"></i></span>
                        <span class="card-text">排污口</span>
                        <span class=""><i class="el-icon-receiving"></i>排污口</span>
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-data-board"></i></span>
                        <span class="card-text">生态流量</span>
                        <span class=""><i class="el-icon-data-board"></i>生态流量</span>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    const opt = { version: '3.28' };
    import Vue from 'vue'
    import {loadModules} from "esri-loader";

    import("../../assets/shp.min.js");
    export default Vue.extend({
        name: 'info-new',
        data() {
            return {
                tags: [
                    {name: '关闭预警', type: ''}
                ],
                map: null,
                ishide: false,
                valuesw0: true,
                valuesw1: true,
                valuesw2: true,
                valuesw3: true,
                valuesw4: true,
                valuesw5: true,
                valuesw6: true,
                valuesw7: true,
                valuesw8: true,
                valuesw9: true,
                isbig: true,
                radio: '1',
                valuese: '',
                FeatrueLayers: [],

            options: [
                    {value: 0, label: "摄影图"}, {value: 1, label: "卫星图"}
                ],
            }
        },
        methods: {
            soh() {
                this.ishide = !this.ishide
                // if(!){
                //     this.ishide = true;
                // }else {
                //     this.ishide = false；
                // }
            },

            // 绘制地图
            createMap() {
                loadModules(['esri/map',
                    'esri/layers/GraphicsLayer',
                    ],opt).then(([Map,MapView]) => {

                    // 创建地图对象
                    this.map = new Map('map',
                        {
                            logo: false,
                            basemap: 'topo',
                            center:[109.44626,24.33941],
                            zoom: 13
                        }
                    );
            //         console.log(1);

                    // 底图（基础）部分
                    // let graphicsSHPlayer = new esri.layers.GraphicsLayer();
                    // this.map.addLayer(graphicsSHPlayer);

                    // 加载底图
                    // 模块化代码
                    // let wkid = this.map.spatialReference.wkid;
                    // debugger;

                    shp("/static/demo-hunanguanqu/shp.zip").then(data => {
                        console.log(data);
                        if(data && data.length > 0){
                            // debugger;
                            // console.log(graphicsSHPlayer);
                            // graphicsSHPlayer.clear();
                            for(let i = 0;i < data.length;i ++){
                                console.log(1);
                                let features = data[i].features;
                                for(let j = 0;j < features.length;i ++){
                                    let feature = features[j];
                                    let graphic = null;


                                    switch (feature.geometry.type) {
                                        case "point":   // 点要素
                                            var symbol = new esri.symbol.PictureMarkerSymbol(getRootPath() + "imgages/plot/point1.png",22,27);
                                            let mapPoint = new esri.geometry.Point(feature.geometry.coordinates[0],feature.geometry.coordinates[1],new esri.spatialReference(wkid));
                                            graphic = new esri.Graphic(mapPoint,symbol);
                                            break;
                                        case "lineString":// 线要素
                                            var symbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 0, 0]), 6);
                                            var polyline = new esri.geometry.Polyline(feature.geometry.coordinates);
                                            graphic = new esri.Graphic(polyline, symbol);
                                            break;
                                        case "Polygon":// 面要素
                                            if (feature.properties && feature.properties.ADMATYPE) {//县界图层不同颜色
                                                var symbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new esri.Color([211, 211, 211]), 2), new esri.Color([125, 125, 125, 0]));
                                            }
                                            else {// 水库图层不同颜色
                                                var symbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new esri.Color([0, 191, 255]), 1), new esri.Color([0, 191, 255, 0.8]));
                                            }
                                            var polygon = new esri.geometry.Polygon(feature.geometry.coordinates);
                                            graphic = new esri.Graphic(polygon, symbol);
                                            break;
                                    }
                                    console.log(graphic);
                                    graphicsSHPlayer.add(graphic);
                                }
                            }
                        }
                    })

                    // var initExtent = new esri.geometry.Extent({ xmin: 107.12726, ymin: 24.01941, xmax: 110.92726, ymax: 25.01941, spatialReference: map.spatialReference });
                    // this.map.setExtent(initExtent);


                    this.axios.get("/static/demo-hunanguanqu/system.json").then((res)=>{

                        this.system_info = res.data;
                        console.log(this.system_info);

                        //逐个获取监控图层数据
                        this.system_info.FeatureLayers.forEach(v=>{

                            this.axios.get(v.url).then((layer_res)=>{

                                //构建并添加到地图
                                var featureCollection = { layerDefinition: layer_res.data, featureSet: new esri.tasks.FeatureSet(layer_res.data) };
                                var JsonFlayer = new esri.layers.FeatureLayer(featureCollection);
                                if (v.show!=='1') JsonFlayer.hide();
                                this.map.addLayer(JsonFlayer);

                                //保存到本页的监控图层对象
                                v.LayerObject = JsonFlayer;
                                v.Rows = layer_res.data.features;
                                this.FeatrueLayers.push(v);
                                console.log(v);

                                //设置本图层的元素图标
                                var symbol =  new esri.symbol.PictureMarkerSymbol(v.icon, 22, 27);
                                var renderer = new esri.renderer.SimpleRenderer(symbol);
                                JsonFlayer.setRenderer(renderer);

                                //当鼠标点击元素
                                // JsonFlayer.on("click",  (evt)=> {
                                //     var graphic = evt.graphic;
                                //     console.log(graphic);
                                //
                                //     if (this.drawer_show_left) {
                                //         this.info_right = graphic.attributes;
                                //         this.info_right.itype = v.itype;
                                //         this.drawer_show_right = true;
                                //     }
                                //     else {
                                //         this.info_left = graphic.attributes;
                                //         this.info_left.itype = v.itype;
                                //         this.drawer_show_left = true;
                                //     }
                                //
                                // });
                                //当鼠标悬停在元素上
                                // JsonFlayer.on("mouse-over",  (evt)=> {
                                //     var graphic = evt.graphic;
                                //
                                //     this.info_tips = graphic.attributes;
                                //     this.info_tips.itype = v.itype;
                                //
                                //     var content = this.$refs.tip.innerHTML;
                                //     var zoompoint = graphic.geometry;
                                //     this.map.infoWindow.resize(250, 650);
                                //     this.map.infoWindow.setTitle(graphic.attributes.NAME);
                                //     this.map.infoWindow.setContent(content);
                                //     this.map.infoWindow.show(zoompoint);
                                // });
                                // //当鼠标离开元素
                                // JsonFlayer.on("mouse-out",  (evt)=> {
                                //     this.map.infoWindow.hide();
                                // });
                                console.log(JsonFlayer);
                            });
                        });

                    });
                    /*/!* eslint-disable *!/
                    // 创建Map实例
                    let map = new BMap.Map("map");
                    // 初始化地图,设置中心点坐标和地图级别
                    map.centerAndZoom(new BMap.Point(109.434425, 24.331961), 11);
                    //添加地图类型控件
                    map.addControl(new BMap.MapTypeControl({
                        mapTypes:[BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
                    }));
                    // 设置地图显示的城市 此项是必须设置的
                    map.setCurrentCity("柳州");
                    //开启鼠标滚轮缩放
                    map.enableScrollWheelZoom(true);
                    /!* eslint-enable *!/*/
                })
            }
        },
        mounted() {
            this.createMap()
        }
    })
</script>
<style>
    .el-radio__label {
        display: none;
    }
    #shishi #map_zoom_slider{
        left: 300px;
    }
</style>
<style>
    .el-switch__label {
        vertical-align: baseline;
    }

    .el-tabs--border-card {
        height: 100%;
    }
</style>

<style scoped lang="less">
    .hide {
        transform: translate(552px);
    }

    .showq {
        width: 700px;

    }

    .yuqing {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .yuqing > span {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .left-side3-item {
        padding-left: 10px !important;
    }

    @border: 0px #FFF solid;
    @shadow: 1px 1px 10px #909399;
    .werr > div {
        display: flex;
        box-shadow: 0 0 0;
        min-height: 6.5vh;
        justify-content: space-between;
    }

    .werr {
        box-shadow: 0 0 0;
        height: 100%;
    }

    .werty > div {
        display: flex;
        justify-content: space-between;
        padding-left: 30px;
        height: 3.5vh;
    }

    .left-side {
        max-width: 280px;
        min-width: 280px;
        min-height: 90vh;
        position: fixed;
        left: 10px;
        top: 70px;

    }

    .left-side > div {
        box-shadow: @shadow;
        margin-bottom: 10px;
    }

    .left-side-first {
        height: 50px;
        padding: 10px 10px 0 10px;
        line-height: 40px;
        background-color: #fff;
        border-top: @border;
    }

    .left-side-second {
        border-top: @border;
        min-height: 300px;
        height: 40vh;
    }

    .left-side-third {
        min-height: 400px;
        height: 45vh;
        border-top: @border;
    }

    .left-side-third > div {

    }

    .left-side-second > div {
        height: 100%;
    }

    .right-bottom {
        height: 90px;
        width: 700px;
        position: fixed;
        right: 0;
        bottom: 20px;
        display: flex;
        justify-content: flex-end;
    }

    .card-text {
        color: #409EFF;
        margin-right: 20px;
    }

    .card-text ~ span {
        margin-right: 20px;
    }

    .end-clos {
        width: 40px;
        height: 100%;
        background-color: #fff;
        font-size: 3em;
        display: flex;
        align-items: center;
        border-radius: 5px;
    }

    .end-clos:hover {
        cursor: pointer;
    }

    .card-text ~ span:hover {
        cursor: pointer;
        color: #409EFF !important;
    }

    #map {
        width: 100%;
        height: 95vh;
    }
</style>
