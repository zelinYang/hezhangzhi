<template>
    <div>
        <el-breadcrumb style="margin-bottom: 20px;" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>涉河事务</el-breadcrumb-item>
            <el-breadcrumb-item>黑臭水体整治</el-breadcrumb-item>
        </el-breadcrumb>
        <el-tabs type="border-card">
            <el-tab-pane label="黑臭水体整治">
                <el-col class="right-m" style="display: block;min-width: 1371px;">
                    <div style="display: flex; background-color: rgb(244, 244, 249); margin: 0;height: 200px;border-radius: 5px;padding-top: 30px;align-items: center;padding-left: 15px;padding-right: 15px;">
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
                            <el-select v-model="value" style="color: #ffffff;" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>

                    <div style="display: flex; position: relative; margin-top: 70px;">
                        <div style="display: flex;width: 100%;">
                            <el-col :span="8">
                                <div id="myEchartsPie" style="width: 20rem;height: 400px;"></div>
                            </el-col>
                            <el-col :span="6"></el-col>
                            <el-col :span="8">
                                <div id="myEchartsLine" style="width: 40rem;height: 400px;"></div>
                            </el-col>
                        </div>
                        <div class="echartsSelect">
                            <label>清障类型：</label>
                            <el-select v-model="value5" style="width: 140px;" placeholder="请选择">
                                <el-option
                                        v-for="item in options5"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </el-col>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    let data = require('../../../../public/data/echartsData');
    let echarts = require('echarts');
    export default {
        name: "pig",
        data() {
            return {
                options: [
                    {
                        value: 2018,
                        label: '2018年'
                    },
                    {
                        value: 2019,
                        label: '2019年'
                    }, {
                        value: 2020,
                        label: '2020年'
                    }
                ],
                value: 2019,

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

                value4: '全部',

                options5: [
                    {
                        label: '前期整治',
                        value: 0,
                    },
                    {
                        label: '实施整治',
                        value: 1,
                    },
                    {
                        label: '完工整治',
                        value: 2,
                    }
                ],
                value5: 0,
            }
        },
        methods: {
            getEchartData() {
                // 底部第一个echarts
                const myec = document.getElementById('myEchartsPie');
                let cate1 = data.default.pieData2;
                this.rander(myec, cate1);
                // 底部第二个echarts
                const myecType = document.getElementById('myEchartsLine');
                let cate2 = data.default.lineData;
                this.rander(myecType, cate2)
            },
            // 渲染
            rander(el, option) {
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
    .echartsSelect {
        position: absolute;
        top: 0;
        right: 10px;
    }
</style>
