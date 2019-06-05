<template>
    <div style="display: flex;">
<!--        <div class="left-content1">-->
<!--            <el-col class="left-content-wrap" :span="24">-->
<!--                <el-menu default-active="1-1" background-color="#545c64" text-color="#fff" active-text-color="#000" style="width: 100%;" class="el-menu-vertical-demo">-->

<!--                    <router-link to="/river/event">-->
<!--                        <el-menu-item index="1-1">-->
<!--                            <i class="el-icon-folder"></i>-->
<!--                            <span>事件分析</span>-->
<!--                        </el-menu-item>-->
<!--                    </router-link>-->

<!--                    <router-link to="/river/task">-->
<!--                        <el-menu-item index="1-2">-->
<!--                            <i class="el-icon-coordinate"></i>-->
<!--                            <span>专项任务</span>-->

<!--                        </el-menu-item>-->
<!--                    </router-link>-->
<!--                    <router-link to="/river/assess">-->
<!--                        <el-menu-item index="1-3">-->
<!--                            <i class="el-icon-s-cooperation"></i>-->
<!--                            <span>考核评估</span>-->
<!--                        </el-menu-item>-->
<!--                    </router-link>-->
<!--                </el-menu>-->
<!--            </el-col>-->
<!--        </div>-->
        <el-col class="right-content">
            <el-breadcrumb style="margin-bottom: 20px;" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>涉河事务</el-breadcrumb-item>
                <el-breadcrumb-item>事件分析</el-breadcrumb-item>
            </el-breadcrumb>
            <el-tabs type="border-card">
                <el-tab-pane label="吐槽量">
                    <div id="map" style="min-height: 76vh;"></div>
                </el-tab-pane>
            </el-tabs>
        </el-col>

    </div>
</template>

<script>
    let data = require('../../../../public/data/echartsData.js');
    let echarts = require('echarts');
    export default {
        name: "allclear",
        data() {
            return {
                options: [
                    {
                        value: "2018年",
                        label: "2018年"
                    },
                    {
                        value: "2019年",
                        label: "2019年"
                    }, {
                        value: "2020年",
                        label: "2020年"
                    }
                ],
                value: "2019年",

                options2: [
                    {
                        value: 1 - 8,
                        label: '1-8月'
                    },
                    {
                        value: 1 - 9,
                        label: '1-9月'
                    }, {
                        value: 1 - 10,
                        label: '1-10月'
                    }
                ],
                value2: 1 - 8,
                options3: [
                    {
                        value: '柳州市',
                        label: '柳州市'
                    },
                    {
                        value: '福州市',
                        label: '福州市'
                    }, {
                        value: '南宁市',
                        label: '南宁市'
                    }
                ],
                value3: '柳州市',

                options4: [
                    {
                        value: '全部',
                        label: '全部'
                    },
                    {
                        value: '局部',
                        label: '局部'
                    }
                ],

                value4: '全部'
            }
        },
        methods: {
            createMap() {
                /* eslint-disable */
                // 创建Map实例
                var map = new BMap.Map("map");
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
                /* eslint-enable */
            },
        },
        mounted() {
            this.createMap()
        }
    }
</script>

<style  lang="less">
    @shodow: -1px -1px 5px #ccc;
    @border: 0;
    .left-content1{
        min-width: 200px;
        min-height: 93vh;
        background-color: #1c1c1c;
        .left-content-wrap{
            height: 90%;
            margin-top: 10px;
            div{
                height: 100px;
                margin-bottom: 10px;
                background-color: #1c1c1c;
                border-radius: 3px;
                display: flex;
                div{
                    width: 50%;
                }
                div:nth-child(1){
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                div:nth-child(2){
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    i{
                        font-size: 1.5em;
                    }
                }
            }
        }

    }

    .left-content1>.left-content-wrap{
        height: 90%;
        margin-top: 10px;
    }
    .left-content1>.left-content-wrap>div{
        height: 100px;
        margin-bottom: 10px;
        background-color: #1c1c1c;
        border-radius: 3px;
        display: flex;
    }
    .left-content1>.left-content-wrap>div>div{
        width: 50%;
    }
    .left-content1>.left-content-wrap>div>div:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .left-content1>.left-content-wrap>div>div:nth-child(2){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .left-content-wrap{
        ul{
            li{
                color: #fff;
                a{
                    /*color: #fff;*/
                }
            }
        }
    }
    .left-content-wrap .el-menu-item.is-active { background-color: #fff !important; color: #333 !important; }

    .right-content{
        padding: 35px;
        background-color: #fff;
        div{
            .top-left{
                i{
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    margin-right: 10px;
                    background-color: #a7dcff;
                }
            }
        }
    }
    .top_title{
        margin-bottom: 30px;
        div{
            div{
                input{
                    width: 100px;
                }
            }
        }
    }
    .right-m{
        display: flex;
        div{ margin-right: 1vw;

        }
    }
    .mInp{
        display: flex;
        align-items: center;
        div{
            div{
                width: 150px;
                input{
                }
            }
        }
    }
</style>
