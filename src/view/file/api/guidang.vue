<template>
    <div style="">
        <el-breadcrumb style="margin-bottom: 20px;" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>资料文件</el-breadcrumb-item>
            <el-breadcrumb-item>河流归档资料</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form ref="form"  :model="form" style="background-color: rgb(244, 244, 249);border-radius: 5px;padding: 42px 10px 10px;" label-width="80px">
            <div  style="display: flex;padding: 20px;position: relative;">
                <el-form-item label="标题">
                    <el-input v-model="form.title" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item label="类型">
                    <el-select v-model="form.region" placeholder="请选择">

                    </el-select>
                </el-form-item>
                <el-form-item label="发布时间">
                    <el-date-picker
                            v-model="form.date2"
                            type="daterange"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            default-value="2010-10-01">
                    </el-date-picker>
                </el-form-item>
                <el-form-item style="position: absolute;right: 20px">
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                    <el-button type="danger" icon="el-icon-delete">删除</el-button>
                </el-form-item>
            </div>
<!--            <div  style="display: flex;justify-content: center;width: 100%;">-->
<!--                <el-form-item>-->
<!--                    <el-button type="primary" icon="el-icon-search">搜索</el-button>-->
<!--                    <el-button type="danger" icon="el-icon-delete">删除</el-button>-->
<!--                </el-form-item>-->
<!--            </div>-->

        </el-form>

        <div  style="padding: 20px;" class="right-third">
            <el-table
                    :highlight-current-row="true"
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="num"
                        label="序号"
                        width="250">
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="标题"
                        width="250">
                </el-table-column>
                <el-table-column
                        prop="time"
                        label="发布时间">
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="类别">
                </el-table-column>
                <el-table-column
                        width="250" label="操作" style="display: flex">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
    </div>
</template>

<script>
    export default {
        name: "guidang",
        data(){
            return{
                input2: '',
                options1:{},
                value1: '',
                input123: '',
                input: '',
                tableData: [
                    {
                        num: 0,
                        title: '哈哈哈哈哈',
                        time: '2019-05-17',
                        type: 'news'
                    }
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
                form1:{
                    title: '',
                },
                dialogFormVisible: false,
                formLabelWidth: "90px",
                currentPage3: 1,
            }
        },
        methods:{
            handleEdit(index,row){
                console.log(index,row)
                this.dialogFormVisible = true

            },
            handleDelete(index,row){this.tableData.splice(index,1)},


            handleSizeChange3(){},
            handleCurrentChange3(){},
        }

    }
</script>

<style scoped lang="less">
    @shodow: -1px -1px 5px #ccc;
    @border: 0;
    .left-content1{
        min-width: 200px;
        min-height: 100vh;
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
    @media screen and (max-width: 1366px){
        .media{
            width: 100px !important;
        }
    }
    .right-content{
        background-color: #fdfdfd;
        border: 0;
        min-height: 300px !important;
        .right-first{
            display: flex;
            padding: 30px;
            align-items: center;
            margin-top: 30px;
        }
        .right-second{
            display: flex;
            justify-content: center;
            margin-top: 30px;
            button{
                margin-right: 10px;
            }
        }
        .right-third{
            padding: 20px;
        }
    }

    .left-content-wrap .el-menu-item.is-active { background-color: #fff !important; color: #333 !important; }
</style>
