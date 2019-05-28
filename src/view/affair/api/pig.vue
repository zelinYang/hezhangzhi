<template>
    <div style="min-width: 770px;">
        <el-col class="top_title"
                style="display:flex;justify-content: space-between;border-bottom: 2px solid #cccccc;height: 60px;align-items: center">
            <div class="top-left" >
                <i></i><span>生猪养殖污染防治</span>
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

        <el-col class="right-m" style="display: block">
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
            </div>
            <div style="margin-top: 70px">
                <el-col :span="10" class="bottom-second" style="height: 500px; ">
                    <el-col style="font-size: 1.2em">禁养区</el-col>
                    <el-col style="margin-top: 20px"><span>已关闭拆除0.00%</span><span>未关闭拆除0.00%</span></el-col>
                    <el-col><span>消灭生猪0.00%</span><span>存栏生猪0.00%</span></el-col>
                    <el-col style="font-size: 1.2em;margin-bottom: 10px">可养区(250头以上)</el-col>
                    <el-progress :text-inside="true"
                                 :stroke-width="18"
                                 :show-text="false"
                                 style="height: 20px"
                                 :percentage="100"
                                 status="success">
                    </el-progress>
                    <el-col><span>已关闭拆除100.00%</span><span>未关闭拆除0.00%</span></el-col>
                    <el-progress :text-inside="true"
                                 :stroke-width="18"
                                 :show-text="false"
                                 style="height: 20px"
                                 :percentage="100"
                                 status="success">
                    </el-progress>
                    <el-col><span>消灭生猪100.00%</span><span>存栏生猪0.00%</span></el-col>
                    <el-col style="font-size: 1.2em;margin-bottom: 10px">可养区(1500-5000头)</el-col>
                    <el-col style="margin-top: 20px"><span>已改造0.00%</span><span>未改造0.00%</span></el-col>
                </el-col>
                <el-col :span="2" style="height: 500px;"></el-col>


                <el-col :span="10" class="bottom-second" style="height: 500px;">
                    <el-col style="font-size: 1.2em">可养区(250头以下)</el-col>
                    <el-col style="margin-top: 20px"><span>已关闭拆除0.00%</span><span>已改造0.00%</span><span>未完成0.00%</span>
                    </el-col>
                    <el-col><span>消灭生猪0.00%</span><span>存栏生猪0.00%</span><span>改造0.00%</span></el-col>
                    <el-col style="font-size: 1.2em;margin-bottom: 10px">可养区(250-1500头)</el-col>
                    <el-col style=""><span>已改造0.00%</span><span>未改造0.00%</span></el-col>
                    <el-col style="height: 20px"></el-col>
                    <el-col style="font-size: 1.2em;margin-bottom: 10px">可养区(5000头以上)</el-col>
                    <el-col style="margin-top: 20px"><span>已改造0.00%</span><span>未改造0.00%</span></el-col>
                </el-col>
            </div>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: "pig",
        data() {
            return {
                options: [
                    {
                        value: 2018,
                        label: 2018
                    },
                    {
                        value: 2019,
                        label: 2019
                    }, {
                        value: 2020,
                        label: 2020
                    }
                ],
                value: 2019,

                options2: [
                    {
                        value: 1 - 8,
                        label: '1-8'
                    },
                    {
                        value: 1 - 9,
                        label: '1-9'
                    }, {
                        value: 1 - 10,
                        label: '1-10'
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
        }
    }
</script>

<style scoped lang="less">
    .bottom-second {
        div {
            height: 50px;
            display: flex;
            padding: 0 10px 0 10px;
            justify-content: space-between;

            span {
                color: #8c939d;
            }
        }
    }
</style>
