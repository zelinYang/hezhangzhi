<template>
    <div style="">
        <el-breadcrumb style="margin-bottom: 20px;" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>资料文件</el-breadcrumb-item>
            <el-breadcrumb-item>工作制度</el-breadcrumb-item>
        </el-breadcrumb>

        <el-tabs type="border-card">
            <el-tab-pane label="工作制度">
                <div style="margin-bottom: 10px;">
                    <el-button type="primary" icon="el-icon-folder-add">添加方案</el-button>
                    <el-button type="danger" @click="deleteselections(tableData)" icon="el-icon-delete">批量删除</el-button>
                </div>
                <el-form ref="form" :model="form"
                         style="background-color: rgb(244, 244, 249);border-radius: 5px;padding: 42px 10px 10px;"
                         label-width="80px">
                    <div style="display: flex;padding: 20px;position: relative">
                        <el-form-item label="方案名称">
                            <el-input v-model="form.title" placeholder="请输入内容"></el-input>
                        </el-form-item>
                        <el-form-item label="同步状态" style="margin-left: 30px">
                            <el-select v-model="form.region" style="width: 200px;" placeholder="请选择">

                            </el-select>
                        </el-form-item>
                        <el-form-item label="信息状态" style="margin-left: 30px">
                            <el-select v-model="form.region" style="width: 200px;" placeholder="请选择">

                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="display: flex;justify-content: space-between;">
                        <div style="width: 40%;display: flex;justify-content: flex-start;">
                            <el-form-item label="发布时间" style="margin-left: 17px">
                                <el-date-picker
                                        v-model="form.date2"
                                        type="daterange"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        default-value="2010-10-01">
                                </el-date-picker>
                            </el-form-item>

                        </div>
                        <div style="display: flex;justify-content: flex-end">
                            <el-form-item>
                                <el-button type="default" icon="el-icon-search">搜索</el-button>
                                <el-button type="info" icon="el-icon-circle-close">清除</el-button>
                            </el-form-item>
                        </div>
                    </div>
                </el-form>

                <div style="padding: 20px;" class="right-third">
                    <el-table
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
                                prop="name"
                                label="方案名称"
                                width="250">
                        </el-table-column>
                        <el-table-column
                                prop="fileNum"
                                label="印发文件号">
                        </el-table-column>
                        <el-table-column
                                prop="time"
                                label="发布时间">
                        </el-table-column>
                        <el-table-column
                                prop="porter"
                                label="发布人">
                        </el-table-column>
                        <el-table-column
                                prop="stat"
                                label="信息状态">
                        </el-table-column>
                        <el-table-column
                                prop="isasincy"
                                label="是否同步">
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
                    <el-dialog title="编辑" :visible.sync="dialogFormVisible" width="400px">
                        <el-form :model="form1">
                            <el-form-item label="标题" :label-width="formLabelWidth">
                                <el-input v-model="form1.title" auto-complete="off" style="width: 220px"></el-input>
                            </el-form-item>
                            <el-form-item label="日期" :label-width="formLabelWidth">
                                <el-date-picker
                                        v-model="value1"
                                        type="date"
                                        placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="类型" :label-width="formLabelWidth">
                                <el-select v-model="form.region" placeholder="请选择">
                                    <el-option label="河道有垃圾" value="1"></el-option>
                                    <el-option label="侵占河道" value="2"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                        </div>
                    </el-dialog>


                    <el-dialog title="编辑" :visible.sync="addinfoData" width="1000px">
                        <el-form :model="form1">
                            <el-form-item label="标题" :label-width="formLabelWidth">
                                <el-input v-model="form1.title" auto-complete="off" style="width: 220px"></el-input>
                            </el-form-item>
                            <el-form-item label="日期" :label-width="formLabelWidth">
                                <el-date-picker
                                        v-model="value1"
                                        type="date"
                                        placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="类型" :label-width="formLabelWidth">
                                <el-select v-model="form.region" placeholder="请选择">
                                    <el-option label="河道有垃圾" value="1"></el-option>
                                    <el-option label="侵占河道" value="2"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="addinfoData = false">取 消</el-button>
                            <el-button type="primary" @click="addinfoData = false">确 定</el-button>
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
                tableData: [
                    {
                        // num: 0,
                        title: '哈哈哈哈哈',
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
                        title: '哈哈哈哈哈',
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
                        title: '哈哈哈哈哈',
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
                        title: '哈哈哈哈哈',
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
                    name: '',
                    region: '',
                    title: '',
                    date2: '',
                    delivery: false,
                    type: {},
                    resource: '',
                    desc: ''
                },
                form1: {
                    title: '',
                },
                dialogFormVisible: false,
                formLabelWidth: "90px",
                currentPage3: 1,
                deleteselection: [],

            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row)
                this.dialogFormVisible = true

            },
            handleDelete(index, row) {
                this.tableData.splice(index, 1)
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

            deleteselections(rows) {
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
            this.addIndexToData(this.tableData)
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
