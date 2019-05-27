<template>
    <div style="display: flex;">
        <!--左边-->
        <div class="left-content1">
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
            <el-tabs type="border-card">
                <el-tab-pane label="选择区域">
                    <div class="left-fourth">
                        <el-tree :data="data" :default-expand-all="isOpen" :props="defaultProps"
                                 @node-click="handleNodeClick"></el-tree>
                    </div>
                </el-tab-pane>

            </el-tabs>
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
                    <figure>已选级别：</figure>
                    <span @click="classM" :class="[{tagBlue: iblue}]">市</span>
                    <span @click="classJ" :class="[{tagBlue1: iblue1}]">县</span>
                    <span @click="classY" :class="[{tagBlue2: iblue2}]">乡</span>
                </div>
            </el-col>
            <router-view></router-view>
        </el-col>

        <!--右边-->
        <div class="left-content1 borderN">
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
                                prop="around"
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
    </div>
</template>

<script>
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

                userData:{},

            }
        },
        methods: {
            classM(){
                this.iblue = true;
                this.iblue1 = false;
                this.iblue2 = false
            },
            classJ(){
                this.iblue = false;
                this.iblue1 = true;
                this.iblue2 = false
            },
            classY(){
                this.iblue = false;
                this.iblue1 = false;
                this.iblue2 = true
            },
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
            }
        },
        mounted() {
            this.getTreeData()
        }
    }
</script>

<style lang="less" scoped>
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
    .left-content1,.middle-content{
        margin-top: 30px;
    }
    .left-content1 {
        min-width: 250px;
        min-height: 800px;
        margin-right{"remainingRequest":"G:\\联通河长制系统项目\\联通河长制系统项目\\node_modules\\vue-loader\\lib\\index.js??vue-loader-options!G:\\联通河长制系统项目\\联通河长制系统项目\\src\\App.vue?vue&type=script&lang=js&","dependencies":[{"path":"G:\\联通河长制系统项目\\联通河长制系统项目\\src\\App.vue","mtime":1558699295347},{"path":"G:\\联通河长制系统项目\\联通河长制系统项目\\node_modules\\cache-loader\\dist\\cjs.js","mtime":499162500000},{"path":"G:\\联通河长制系统项目\\联通河长制系统项目\\node_modules\\babel-loader\\lib\\index.js","mtime":499162500000},{"path":"G:\\联通河长制系统项目\\联通河长制系统项目\\node_modules\\cache-loader\\dist\\cjs.js","mtime":499162500000},{"path":"G:\\联通河长制系统项目\\联通河长制系统项目\\node_modules\\vue-loader\\lib\\index.js","mtime":499162500000}],"contextDependencies":[],"result":["//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\timport sys_config from '@/config/sys.config.js'\n\timport LoginView from '@/views/Login.vue'\n\n  export default {\n    data() {\n\t\treturn {\n\t\t\tisCollapse: false,\n\t\t\tLoadedData: true,\n\t\t\tLoading_saving: false,\n\t\t\ttitle: '河长制综合管理平台',\n\t\t\tsys_config: sys_config,\n\t\t\tuserName: '柳州市河长办'\n\t\t};\n    },\n    mounted(){\n    \tthis.$store.state.sys = sys_config;\n    },\n    methods: {\n    \tSave(data){\n    \t\tthis.Loading_saving = true;\n    \t\tthis.axios.post('/admineditor/api/save_sys', {sys: data} ).then((res)=>{\n    \t\t\tthis.Loading_saving = false;\n    \t\t}).catch((error) => {\n                this.Loading_saving = false;\n            });\n    \t},\n    \tLoad(){\n    \t\tif (this.$route.query.name == '') return;\n\n    \t\tthis.axios.post('/admineditor/api/get_sys', {name: this.$route.query.name}).then((res) => {\n    \t\t    //this.sys = res.data.data;\n    \t\t});\n    \t},\n\t\tlinkRiver(){\n    \t\tdebugger\n    \t\tthis.$router.push('/affairChildren/affairRiver/allClear')\n\t\t},\n    \tLogout(){\n    \t\tthis.$store.state.logined=false;\n    \t},\n    \tClickPage(item, mod){\n    \t    this.LoadedData = false;\n\n    \t    let _this=this;\n    \t    setTimeout(() => { _this.LoadedData = true; }, 300);\n    \t},\n    },\n    computed: {},\n    components: { LoginView },\n\t  created() {\n    \tconsole.log(\"initMap\",this.$baiduMap)\n\t  }\n  }\n",{"version":3,"sources":["App.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;