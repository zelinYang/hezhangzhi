<template>
    <div style="">
        <el-breadcrumb style="margin-bottom: 20px;" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>资料文件</el-breadcrumb-item>
            <el-breadcrumb-item>一河一档一策</el-breadcrumb-item>
        </el-breadcrumb>

        <el-tabs type="border-card">
            <el-tab-pane label="一河一档一策">
                <div style="margin-bottom: 10px;">
                    <el-button type="primary" @click="addData" icon="el-icon-folder-add">新增文件</el-button>
                    <el-button type="danger" @click="deleteselections(tableData)" icon="el-icon-delete">批量删除</el-button>
                </div>
                <el-form ref="form" :model="form"
                         style="background-color: rgb(244, 244, 249);border-radius: 5px;padding: 20px 10px 10px;"
                         label-width="80px">
                    <div style="display: flex;padding: 20px;position: relative">
                        <el-form-item label="标题">
                            <el-input v-model="form.title" placeholder="请输入内容"></el-input>
                        </el-form-item>
                        <el-form-item label="信息状态" style="margin-left: 30px">
                            <el-select v-model="form.infoStAt_value" style="width: 200px;" placeholder="请选择">
                                <el-option value="待审核">待审核</el-option>
                                <el-option value="初步审核">初步审核</el-option>
                                <el-option value="已审核">已审核</el-option>
                                <el-option value="通过审核">通过审核</el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="发布时间" style="margin-left: 30px">
                            <el-date-picker
                                    v-model="form.date"
                                    type="daterange"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    default-value="2010-10-01">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                    <div style="display: flex;justify-content: space-between;padding-left: 20px;">
                        <div style="width: 40%;display: flex;justify-content: space-between;">
                            <el-form-item label="流域" style="min-width: 100%;">
                                <el-select v-model="form.areaL" style="min-width: 100%;" placeholder="请选择">
                                    <el-option value="柳江河流域"></el-option>
                                </el-select>
                            </el-form-item>

                        </div>
                        <div style="display: flex;justify-content: flex-end">
                            <el-form-item>
                                <el-button type="default" @click="search" icon="el-icon-search">搜索</el-button>
                                <el-button type="info" @click="clean" icon="el-icon-circle-close">清除</el-button>
                            </el-form-item>
                        </div>
                    </div>
                </el-form>

                <div style="padding: 20px;" class="right-third">
                    <el-table
                            @select-all="checkAll"
                            :highlight-current-row="true"
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column type="selection">
                        </el-table-column>
                        <el-table-column
                                label="序号"
                                width="100">
                            <template slot-scope="scope">
                                {{scope.row.index}}
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="title"
                                label="标题">
                        </el-table-column>
                        <el-table-column
                                width="300"
                                prop="time"
                                label="发布时间">
                        </el-table-column>
                        <el-table-column
                                width="300"
                                prop="porter"
                                label="发布人">
                        </el-table-column>
                        <el-table-column
                                width="300"
                                prop="area"
                                label="流域">
                        </el-table-column>
                        <el-table-column
                                width="300"
                                prop="type"
                                label="类型">
                        </el-table-column>
                        <el-table-column
                                width="250"
                                prop="stat"
                                label="信息状态">
                        </el-table-column>
                        <el-table-column
                                width="250" label="操作" style="display: flex">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        @click="handleEdit(scope.$index, scope.row)">编辑
                                </el-button>
                                <el-button
                                        size="mini"
                                        type="danger"
                                        @click="handleDelete(scope.$index, scope.row)">删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-dialog title="编辑文件" :center="true"  :visible.sync="editinfoData" width="500px">
                        <el-form :model="form1" :hide-required-asterisk="true">
                            <div style="width: 100%;">
                                <el-form-item :required="true" label="文件名称" :label-width="formLabelWidth" style="width: 100%;">
                                    <el-input v-model="form1.title" placeholder="请输入" auto-complete="off"></el-input>
                                </el-form-item>
                            </div>

                            <div style="width: 100%;">
                                <el-form-item label="流域" :required="true" :label-width="formLabelWidth" style="width: 100%;">
                                    <el-select v-model="form.areaL" style="min-width: 100%;" placeholder="请选择">
                                        <el-option value="柳江河流域"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div style="width: 100%;">
                                <el-form-item :required="true" label="上传文件" :label-width="formLabelWidth">
                                    <el-upload
                                            class="upload-demo"
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            :on-change="handleChange"
                                            :file-list="fileList">
                                        <el-button size="small" icon="el-icon-upload" type="primary">选择文件</el-button>
                                        <span slot="tip" class="el-upload__tip">（支持文件格式：PDF）</span>
                                    </el-upload>
                                </el-form-item>
                            </div>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="viewAdd">预览</el-button>
                            <el-button type="primary" @click="saveAdd">保存</el-button>
                            <el-button type="primary" @click="portAdd">发布</el-button>
                            <el-button @click="editinfoData = false">取 消</el-button>
                        </div>
                    </el-dialog>


                    <el-dialog title="新增文件" :center="true" :hide-required-asterisk="true" :visible.sync="addinfoData" width="500px">
                        <el-form :model="form1" :rules="rules" ref="form2" :hide-required-asterisk="true">
                            <div style="width: 100%;">
                                <el-form-item :required="true" prop="title" label="文件名称" :label-width="formLabelWidth" style="width: 100%;">
                                    <el-input v-model="form1.title" placeholder="请输入" auto-complete="off"></el-input>
                                </el-form-item>
                            </div>

                            <div style="width: 100%;">
                                <el-form-item label="流域" prop="areaL" :required="true" :label-width="formLabelWidth" style="width: 100%;">
                                    <el-select v-model="form.areaL" style="min-width: 100%;" placeholder="请选择">
                                        <el-option value="柳江河流域"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div style="width: 100%;">
                                <el-form-item :required="true" label="上传文件" :label-width="formLabelWidth">
                                    <el-upload
                                            class="upload-demo"
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            :on-change="handleChange"
                                            :file-list="fileList">
                                        <el-button size="small" icon="el-icon-upload" type="primary">选择文件</el-button>
                                        <span slot="tip" class="el-upload__tip">（支持文件格式：PDF）</span>
                                    </el-upload>
                                </el-form-item>
                            </div>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="viewEdit">预览</el-button>
                            <el-button type="primary" @click="saveEdit">保存</el-button>
                            <el-button type="primary" @click="portEdit">发布</el-button>
                            <el-button @click="addinfoData = false">取 消</el-button>
                        </div>
                    </el-dialog>
                    <div style="margin-top: 20px;display:flex;justify-content: space-between">
                        <el-pagination
                                @size-change="handleSizeChange3"
                                @current-change="handleCurrentChange3"
                                :current-page="currentPage3"
                                :page-sizes="[100, 200, 300, 400]"
                                :page-size="100"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="400">
                        </el-pagination>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "guidang",
        data() {
            return {
                input2: '',
                options1: {},
                value1: '',
                input123: '',
                input: '',
                addinfoData: false,
                tableData: [
                    {
                        // num: 0,
                        title: '河流文件1',
                        time: '2019-05-17',
                        type: 'news',
                        porter: '管理员',
                        stat: '待审核',
                        business: '计算机网络',
                        area: '柳江河流域',
                        name: '柳江河治理总方案',
                        fileNum: 'ljh201906040258',
                        isasincy: '是'
                    },
                    {
                        // num: 1,
                        title: '河流文件2',
                        time: '2019-05-17',
                        type: 'news',
                        porter: '管理员',
                        stat: '待审核',
                        business: '计算机网络',
                        area: '柳江河流域',
                        name: '柳江河治理总方案',
                        fileNum: 'ljh201906040258',
                        isasincy: '是'
                    },
                    {
                        // num: 2,
                        title: '河流文件3',
                        time: '2019-05-17',
                        type: 'news',
                        porter: '管理员',
                        stat: '待审核',
                        business: '计算机网络',
                        area: '柳江河流域',
                        name: '柳江河治理总方案',
                        fileNum: 'ljh201906040258',
                        isasincy: '是'
                    },
                    {
                        // num: 0,
                        title: '河流文件4',
                        time: '2019-05-17',
                        type: 'news',
                        porter: '管理员',
                        stat: '待审核',
                        business: '计算机网络',
                        area: '柳江河流域',
                        name: '柳江河治理总方案',
                        fileNum: 'ljh201906040258',
                        isasincy: '是'
                    },
                ],
                form: {
                    infoStAt: [
                        {value: 1, label: '已保存'},
                        {value: 2, label: '已发布'}
                    ],
                    areaL: '',
                    infoStAt_value:"",
                    name: '',
                    fileTypeF: [
                        {
                            value: 1,
                            label: 'news'
                        },
                        {
                            value: 2,
                            label: 'olds'
                        }
                    ],
                    fileTypeF_value: '',
                    region: [],
                    title: '',
                    date: '',
                    delivery: false,
                    type: {},
                    resource: '',
                    desc: ''
                },
                form1: {
                    title: '',
                    num: '',
                    fileType_value: '',
                    fileType: [{value: 1,label: 'news'},{value: 2,label: 'olds'}],
                    isPro_value: '',
                    isPro: [{value: 1,label: '是'},{value: 2,label: '否'}],
                    valueDate: '',
                    thisTime_value: '',
                    nextTime_value: '',
                    valueRecord: '',
                    valueArea: '',
                    proDate: '',
                    thisTime: [
                        {
                            value: 1,
                            label: '已完成'
                        },
                        {
                            value: 2,
                            label: '未完成'
                        }
                    ],
                    nextTime: [
                        {
                            value: 1,
                            label: '已开始'
                        },
                        {
                            value: 2,
                            label: '未开始'
                        }
                    ]

                },
                form2: {
                    title: '',
                    num: '',
                    fileType_value: '',
                    fileType: [{value: 1,label: 'news'},{value: 2,label: 'olds'}],
                    isPro_value: '',
                    isPro: [{value: 1,label: '是'},{value: 2,label: '否'}],
                    valueDate: '',
                    thisTime_value: '',
                    nextTime_value: '',
                    valueRecord: '',
                    valueArea: '',
                    thisTime: [
                        {
                            value: 1,
                            label: '已完成'
                        },
                        {
                            value: 2,
                            label: '未完成'
                        }
                    ],
                    nextTime: [
                        {
                            value: 1,
                            label: '已开始'
                        },
                        {
                            value: 2,
                            label: '未开始'
                        }
                    ]

                },
                dialogFormVisible: false,
                formLabelWidth: "70px",
                currentPage3: 1,
                deleteselection: [],
                addinfoData: false,
                fileList: [],
                editinfoData: false,
                rules: {
                    title: [{
                        required: true,
                        message: '请输入标题',
                        trigger: 'blur'
                    }],
                    areaL: [
                        {
                            required: true,
                            message: '请选择流域',
                            trigger: 'change'
                        }
                    ],
                }

            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row)
                this.editinfoData = true

            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该内容, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.tableData.splice(index, 1)
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },

            addData(){
                this.addinfoData = true
            },
            handleSizeChange3() {
            },
            handleCurrentChange3() {
            },

            checke1(selection, row) {
                this.deleteselection = selection;
                // console.log(this.deleteselection);
                console.log("开始删除的索引", this.deleteselection[0].index - 1);
                // console.log(this.tableData[this.deleteselection[0].index - 1]);
            },
            viewAdd(){
                this.$message({
                    message: '功能正在开发中',
                    type: 'warning'
                });
                this.addinfoData = false
            },
            saveAdd(){
                this.$message({
                    message: '功能正在开发中',
                    type: 'warning'
                });
                this.addinfoData = false
            },
            portAdd(){
                this.$message({
                    message: '功能正在开发中',
                    type: 'warning'
                });
                this.addinfoData = false
            },

            viewEdit(){
                this.$message({
                    message: '功能正在开发中',
                    type: 'warning'
                });
                this.addinfoData = false
            },
            saveEdit(){
                this.$message({
                    message: '功能正在开发中',
                    type: 'warning'
                });
                this.addinfoData = false
            },
            portEdit(){
                this.$message({
                    message: '功能正在开发中',
                    type: 'warning'
                });
                this.addinfoData = false
            },

            clean(){
                this.$message({
                    message: '功能正在开发中',
                    type: 'warning'
                });
            },

            search(){
                this.$message({
                    message: '功能正在开发中',
                    type: 'warning'
                });
            },
            checkAll(selection){
                this.deleteselection = selection;
            },
            handleChange(){},
            deleteselections(rows) {
                if(this.deleteselection.length === 0){
                    this.$message({
                        message: '请选择要删除项',
                        type: 'warning'
                    });
                    return;
                }
                // this.tableData.splice()
                //   console.log(this.$refs.multipleTable)
                //   this.deleteselection.forEach(val => {
                //       this.tableData.splice(val.index,1);
                //   })
                //   console.log(this.deleteselection[0].index);
                //   console.log(this.tableData[this.deleteselection[0].index - 1]);
                this.tableData.splice(this.deleteselection[0].index - 1, this.deleteselection.length)
                console.log("删除之后剩下的行：", this.tableData);
            },
            tabselect(val) {
                //console.log(val);
            },
            addIndexToData(array) {
                var newList = array.map((val, index) => {
                    val.index = index + 1;
                    return val
                })
                this.tableData = newList;
            },

        },
        created() {
            console.warn('信息状态：',this.form.infoStAt)
            console.warn('信息状态：',this.form)
            this.addIndexToData(this.tableData)
        },
        mounted() {
            console.log('信息状态：',this.form)
        }

    }
</script>

<style scoped lang="less">
    @shodow: -1px -1px 5px #ccc;
    @border: 0;
    .left-content1 {
        min-width: 200px;
        min-height: 100vh;
        background-color: #1c1c1c;

        .left-content-wrap {
            height: 90%;
            margin-top: 10px;

            div {
                height: 100px;
                margin-bottom: 10px;
                background-color: #1c1c1c;
                border-radius: 3px;
                display: flex;

                div {
                    width: 50%;
                }

                div:nth-child(1) {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                div:nth-child(2) {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    i {
                        font-size: 1.5em;
                    }
                }
            }
        }

    }

    @media screen and (max-width: 1366px) {
        .media {
            width: 100px !important;
        }
    }

    .right-content {
        background-color: #fdfdfd;
        border: 0;
        min-height: 300px !important;

        .right-first {
            display: flex;
            padding: 30px;
            align-items: center;
            margin-top: 30px;
        }

        .right-second {
            display: flex;
            justify-content: center;
            margin-top: 30px;

            button {
                margin-right: 10px;
            }
        }

        .right-third {
            padding: 20px;
        }
    }

    .left-content-wrap .el-menu-item.is-active {
        background-color: #fff !important;
        color: #333 !important;
    }
</style>
