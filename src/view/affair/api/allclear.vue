<template>
    <div>
        <el-col class="top_title" style="display:flex;justify-content: space-between;border-bottom: 2px solid #cccccc;height: 60px;align-items: center">
            <div class="top-left">
                <i></i><span>全面清障进度</span>
            </div>
            <el-select v-model="value" style="color: #ffffff;" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-col>

        <el-col class="right-m" style="display:block;">
            <div style="display: flex">
                <div class="mInp">
                    <div style="white-space: nowrap">
                        统计时间
                    </div>
                    <el-select v-model="value2" placeholder="请选择">
                        <el-option
                                v-for="item in options2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>

                <div class="mInp">
                    <div style="display: flex;white-space: nowrap">
                        行政区域
                    </div>
                    <el-select v-model="value3" placeholder="请选择">
                        <el-option
                                v-for="item in options3"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="mInp">
                    <div style="white-space: nowrap">
                        清障类型
                    </div>
                    <el-select v-model="value4" placeholder="请选择">
                        <el-option
                                v-for="item in options4"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>

            <div style="display: flex;position: relative;margin-top: 70px">
                <el-col>
                    <div id="myEcharts" style="width: 40rem;height: 400px;"></div>
                </el-col>
                <el-col>
                    <div id="myEchartsType" style="width: 40rem;height: 400px;"></div>
                </el-col>
            </div>
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
            getEchartData(){
                // 底部第一个echarts
                const myec = document.getElementById('myEcharts');
                let cate1 = data.default.cateData;
                this.rander(myec, cate1);
                // 底部第二个echarts
                const myecType = document.getElementById('myEchartsType');
                let cate2 = data.default.cateData2;
                this.rander(myecType,cate2)
            },
            // 渲染
            rander(el, option){
                // 初始化
                let echart = echarts.init(el);
                // 渲染
                echart.setOption(option)
            }
        },
        mounted() {
            this.getEchartData();
            console.log(data.default.cateData);
        }
    }
</script>

<style  lang="less">
       @shodow: -1px -1px 5px #ccc;
    @border: 0;
    .left-content1{
        min-width: 200px;
        margin-right: 10px;
        min-height: 93vh;
        box-shadow: @shodow;
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
        border: @border;
        padding: 35px;
        box-shadow: @shodow;
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
