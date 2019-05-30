<template>
    <div style="display: flex;">
        <!--左边-->
        <div class="left-content2">
            <div class="left-first">
                <b style="font-size: 1.2em;">省级河长</b>
                <span style="display: block">总河长：<span style="color: #2f2bff">广西壮族自治区副河长</span></span>
            </div>
            <div class="left-second">
                <el-input
                        placeholder="巡河人员名称搜索"
                        suffix-icon="el-icon-search"
                        v-model="input2">
                </el-input>
            </div>
            <div class="">
            <el-tabs type="border-card">
                <el-tab-pane label="选择区域">
                    <div class="left-fourth">
                        <el-tree :data="data" :default-expand-all="isOpen" :props="defaultProps"
                                 @node-click="handleNodeClick"></el-tree>
                    </div>
                </el-tab-pane>

            </el-tabs>
            </div>
        </div>


        <!--中间-->
        <el-col :span="19" class="middle-content">
            <el-col class="middle-first">
                <div style="display: flex;justify-content: flex-start;align-items: center" class="cell-col">
                    <el-checkbox v-model="checked">当前巡河</el-checkbox>
                    <el-checkbox v-model="checked2">历史轨迹</el-checkbox>
                    <el-date-picker
                            v-model="input123"
                            type="daterange"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            default-value="2019-01-01">
                    </el-date-picker>
                </div>
                <div style="display: flex;justify-content: flex-end;align-items: center" class="cell-col marsa">
                    <figure @click="centerDialogVisible = true">已选级别：</figure>
                    <span @click="classM" :class="" v-for="item in optionse">{{item}}</span>
                </div>
            </el-col>
            <router-view></router-view>
        </el-col>

        <!--右边-->
        <div class="left-content2 borderN">
            <el-tabs type="border-card">
                <el-tab-pane label="巡河统计">
                    <div class="right-second">
                        当前在线巡河人数
                    </div>
                    <el-table
                            :data="tableData"
                            :header-cell-style="{backgroundColor: '#f8f8f8'}"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="city"
                                label="市级河长">
                        </el-table-column>
                        <el-table-column
                                prop="county"
                                label="县级河长">
                        </el-table-column>
                        <el-table-column
                                prop="village"
                                label="乡级河长">
                        </el-table-column>
                        <el-table-column
                                prop="proRiver"
                                label="河道专管员">
                        </el-table-column>
                    </el-table>

                    <div class="right-third">
                        <div @click="firstZ" :class="[{isblueline: iblueline}]">巡河完成情况统计</div>
                        <div @click="secondZ" :class="[{isblueline: iblueline1}]">事件上报情况统计</div>
                        <div @click="thirdZ" :class="[{isblueline: iblueline2}]">星级河长</div>
                        <div @click="fourthZ" :class="[{isblueline: iblueline3}]">星级巡河员</div>
                    </div>
                    <div class="right-fourth">
                        <div class="aqwe">
                            统计时间：
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
                    <el-table
                            :data="tableData1"
                            :header-cell-style="{backgroundColor: '#f8f8f8'}"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="round"
                                label="统计范围">
                        </el-table-column>
                        <el-table-column
                                prop="finish"
                                label="已完成巡河人数">
                        </el-table-column>
                        <el-table-column
                                prop="unfinish"
                                label="未完成巡河人数">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
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


        <el-dialog
                title="请选择"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
            <div>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible1">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    const cityOptions = ['市', '县', '乡', '专管员'];
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
                iblue: false,
                iblue1: false,
                iblue2: false,
                iblueline: true,
                iblueline1: false,
                iblueline2: false,
                iblueline3: false,
                tableData: [
                    {
                        city: '0',
                        county: '0',
                        village: '0',
                        proRiver: '0'
                    }
                ],

                checkAll: false,
                checkedCities: [],
                cities: cityOptions,
                isIndeterminate: true,

                tableData1: [

                ],
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
                dialogVisible: false,
                centerDialogVisible: false,

                userData:{},

                optionse:['无'],

                val: [],
            }
        },
        methods: {
            centerDialogVisible1(){
                this.optionse = this.checkedCities;
                this.centerDialogVisible = false;
            },
            classM(){
                this.centerDialogVisible = true;
            },
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
                console.log(val);
            },
            handleCheckedCitiesChange(value) {
                console.log(value);
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
                if(value.length === 0){
                    this.checkedCities[0] = '无'
                }
            },
            // classJ(){
            //     this.iblue = false;
            //     this.iblue1 = true;
            //     this.iblue2 = false
            // },
            // classY(){
            //     this.iblue = false;
            //     this.iblue1 = false;
            //     this.iblue2 = true
            // },
            firstZ(){
                this.iblueline = true;
                this.iblueline1 = false;
                this.iblueline2 = false;
                this.iblueline3 = false;
            },
            secondZ(){
                this.iblueline = false;
                this.iblueline1 = true;
                this.iblueline2 = false;
                this.iblueline3 = false;
            },
            thirdZ(){
                this.iblueline = false;
                this.iblueline1 = false;
                this.iblueline2 = true;
                this.iblueline3 = false;
            },
            fourthZ(){
                this.iblueline = false;
                this.iblueline1 = false;
                this.iblueline2 = false;
                this.iblueline3 = true;
            },

            handleNodeClick(i) {
                this.userData = i;
                this.dialogVisible = true
            },
            handleClose(){
                this.dialogVisible = false
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

                this.axios.get('data/tableData.json').then(res => {
                    this.tableData1 = res.data
                    console.log(res.data)
                }).catch(err => {
                    console.log(`错误${err}`)
                })
            }
        },
        mounted() {
            this.getTreeData()
        }
    }
</script>

<style lang="less">
    @border: #ebebeb 1px solid;
    @shodow: 1px 1px 5px #ccc;

    .tagBlue{
        color: #fff;
        background-color: #5993ee;
    }
    .tagBlue1{
        color: #fff;
        background-color: #5993ee;
    }
    .tagBlue2{
        color: #fff;
        background-color: #5993ee;
    }
    .usermsg>div{
        height: 32px;
    }

    .isblueline{
        color: #fff;
        background-color: #066dff;
    }
    .isblueline1{
        color: #fff;
        background-color: #066dff;
    }
    .isblueline2{
        color: #fff;
        background-color: #066dff;
    }
    .isblueline3{
        color: #fff;
        background-color: #066dff;
    }
    @border: #ccc 1px solid;
    .left-content2 {
        min-width: 270px;
        min-height: 92.5vh;
        margin-top: 10px;
        background-color: #fff;
        border-top: 3px solid #2f2bff;
        padding: 10px;
        margin-left: 10px;
        margin-right: 10px;
        box-shadow: #cccccc 1px 1px 5px;

        .left-first {
            padding-top: 20px;
            height: 200px;

        }

        .left-second {
            height: 50px;
        }
        .left-content2{
            margin-top: 30px;
        }
        .left-third {
            border: @border;
            padding: 10px;
            height: 30px;
            line-height: 30px;
        }

        .left-fourth {
            height: 500px;
            overflow: auto;
        }

        .right-fist {
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
    .borderN {
        width: 370px;
        padding: 0;
        border-top: 0;

        .right-second {
            width: 100%;
            height: 40px;
            line-height: 40px;
            padding: @padding;
        }

        .right-third {
            height: 70px;
            display:flex;
            justify-content: space-between;

            div {
                width: 25%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                border: solid 1px #ccc;
            }
        }

        .san {
            height: 250px !important;
        }

        .right-fourth {
            width: 100%;
            height: 50px;
            display:flex;
            align-items: center;
            margin-bottom: 10px;

            .aqwe {
                margin-left: 10px;
                margin-top: 20px;
                margin-bottom: 20px;
            }
        }


    }
    .middle-content {
        margin-top: 10px;
        position: relative;


        .middle-first{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 60px;
            background-color: #f4f4f4;
            position: absolute;padding:10px;
            box-shadow: @shodow;
        }

    }
    .marsa>span{
        margin-right: 10px;
        border-radius: 5px;text-align: center;
    }
    .marsa>span:hover{
        cursor: pointer;
        color: #fff;
        background-color: #5993ee;
    }
</style>
