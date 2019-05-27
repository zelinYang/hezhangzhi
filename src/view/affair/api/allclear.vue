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
    let data = require('../../../../public/data/echartsData');
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

<style scoped lang="less">
    @shodow: -1px -1px 5px #ccc;
</style>
