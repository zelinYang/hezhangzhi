<template>
    <div style="display: flex;">
        <!--左边-->
        <div class="left-content1">
            <div class="left-first1">
                <span style="font-size: 1.2em;">柳州市，未办结事件共计0件</span>
                <span style="display: block">当前重点问题类型：无</span>
            </div>

            <div class="left-third1">
                <span><i class="el-icon-location"></i><b>选择区域</b></span>
            </div>
            <div class="left-fourth1">
                <el-tree :data="data" :default-expand-all="isOpen" :props="defaultProps"
                         @node-click="handleNodeClick"></el-tree>
            </div>
        </div>


        <!--中间-->
        <el-col :span="17" class="middle-content1">
            <div class="middle-first1">
                <el-radio-group v-model="radio">
                    <el-radio :label="t">已办结</el-radio>
                    <el-radio :label="q">未办结</el-radio>
                </el-radio-group>
            </div>
        </el-col>

        <!--右边-->
        <div class="left-content1 borderN">
            <div class="right-fist1">
                <div>起止时间：</div>
                <el-date-picker
                        v-model="input123"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        default-value="2019-01-01">
                </el-date-picker>
            </div>
            <div class="right-second1">
                事件状态
            </div>

            <div class="right-third1">
                <div style="width: 70%;display:flex;justify-content: space-between;">
                    <span>未办结0%(0件)</span>
                    <span>已办结0%(0件)</span>
                </div>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
            </div>
            <div class="right-fourth1 san1">
                <div class="aqwe1">
                    事件来源：
                </div>
                <div class="right-third1">
                    <div style="width: 70%;display:flex;justify-content: space-between;">
                        <span>河长上报0%(0件)</span>
                    </div>
                    <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
                </div>
                <div class="right-third1">
                    <div style="width: 70%;display:flex;justify-content: space-between;">
                        <span>河长办上报0%(0件)</span>
                    </div>
                    <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
                </div>
                <div class="right-third1">
                    <div style="width: 70%;display:flex;justify-content: space-between;">
                        <span>河道专管员上报0%(0件)</span>
                    </div>
                    <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
                </div>
            </div>

            <div class="right-fourth1">
                <div class="aqwe1">
                    事件类型：
                    <div id="myEchartsPie" style="width: 20rem;height: 400px;"></div>
                </div>
            </div>
        </div>
        <el-dialog
                title="河长信息"
                :visible.sync="dialogVisible"
                width="800px"
                height="600px"
                :before-close="handleClose">
            <div  style="height: 150px; width: 80%; display: flex;" >
                <el-col :span="5" style="height: 100%">
                    <img :src="userData.img" alt="" style="height: 100%;width: 100%;">
                </el-col>
                <el-col :span="19" class="usermsg" style="height: 100%;margin-left: 10px">
                    <div style="color: #409EFF;font-size: 1.1em">
                        {{userData.label}}
                    </div>
                    <div>职位：{{userData.duty}}</div>
                    <div>
                        <span style="margin-right: 10px;">办公电话：</span>
                        <span style="margin-right: 30px;">{{userData.phone}}</span>
                        <span>邮箱：{{userData.email}}</span>
                    </div>
                    <div>
                        <span style="margin-right: 20px;">河流（段）名称：</span>
                        <span>{{userData.river}}</span>
                    </div>
                    <div>
                        <span style="margin-right: 20px">河流（段）起点：</span>
                        <span style="margin-right: 40px">{{userData.startR}}</span>
                        <span style="margin-right: 20px">河流（段）终点：</span>
                        <span>{{userData.endR}}</span>
                    </div>
                </el-col>
            </div>
            <div style="width: 100%;height: 50px;border-bottom: #8c939d solid 1px;line-height: 50px; font-size: 1.2em;margin-top: 20px">工作记录</div>
            <div style="width: 100%;height: 100px;line-height: 100px;text-align: center">暂无记录</div>
            <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    let data12 = require('../../../../public/data/echartsData');
    let echarts = require('echarts');
    export default {
        name: "organize-info",
        data() {
            return {
                input2: '',
                data: [],
                defaultProps: '',
                isOpen: true,
                input123: '',
                input23: '',
                checked: true,
                checked2: false,
                tableData: [
                    {
                        city: '0',
                        county: '0',
                        village: '0',
                        proRiver: '0'
                    }
                ],
                t:6,
                q:9,
                tableData1: [

                ],
                userData:{},
                radio: 3,
                options3: [
                    {
                        label: '本日',
                        value: 1,
                    },
                    {
                        label: '本周',
                        value: 2,
                    },
                    {
                        label: '本月',
                        value: 3,
                    }
                ],
                value3: '本日',

                dialogVisible: false

            }
        },
        methods: {
            handleClose(){
                this.dialogVisible = false
            },
            handleNodeClick(i) {
                console.log(i)
                this.userData = i;
                this.dialogVisible = true
            },
            getTreeData() {
                this.axios.get('data/treeData.json').then(res => {
                    console.log(res);
                    // this.axios.get('/organize/organizeInfo/data').then(resp => {
                    //
                    // }).catch(error => {
                    //     console.log(`错误${error}`)
                    // })
                    this.data = res.data
                }).catch(err => {
                    console.log(`错误${err}`)
                })
            },
            getEchartData(){
                // 底部第一个echarts
                const myec = document.getElementById('myEchartsPie');
                let cate1 = data12.default.pieData3;
                this.rander(myec, cate1);
                // 底部第二个echarts
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
            this.getTreeData();
            this.getEchartData()
            console.log(data12.default.pieData3)
        }
    }
</script>

<style lang="less">
    .usermsg {
        div {
            height: 30px;
            line-height: 30px;
        }
    }
</style>
<style lang="less" scoped>
    @border: #ccc 1px solid;
    .left-content1 {
        min-width: 270px;
        min-height: 800px;
        margin-top: 30px;
        background-color: #fff;
        border-top: 3px solid #2f2bff;
        padding: 10px;
        margin-left: 10px;

        .left-first1 {
            padding-top: 20px;
            height: 200px;

        }

        .left-second1 {
            height: 50px;
        }
        .left-content1{
            margin-top: 30px;
        }
        .left-third1 {
            border: @border;
            padding: 10px;
            height: 30px;
            line-height: 30px;
        }

        .left-fourth1 {
            height: 500px;
            border: @border;
            overflow: auto;
        }

        .right-fist1 {
            height: 80px;
            padding: 20px;

            div {
                width: 100%;
                display: flex;
                align-items: center;
                margin-bottom: 20px;
            }

        }
    }

    @padding: 10px 20px 10px 20px;
    .borderN1 {
        width: 370px;
        padding: 0;
        border-top: 0;

        .right-second1 {
            width: 100%;
            height: 40px;
            line-height: 40px;
            padding: @padding;
        }

        .right-third1 {
            height: 70px;
            justify-content: space-between;

            div {
                padding: 0 20px 0 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .san1 {
            height: 250px !important;
        }

        .right-fourth1 {
            width: 100%;
            height: 400px;
            margin-bottom: 10px;

            .aqwe1 {
                margin-left: 10px;
                margin-top: 20px;
                margin-bottom: 20px;
            }
        }


    }
    .middle-content1 {
        margin-right: 10px;
        position: relative;

        .middle-first1{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 40px;
            box-shadow: -3px -3px 3px #1d1d1d;
            background-color: #fff;
            position: absolute;
            right: 0;
            bottom: 0;
        }

    }
</style>
