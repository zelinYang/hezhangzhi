<template>
    <div style="">
        <el-tabs type="border-card">
            <el-tab-pane label="上报事件">
                <el-form ref="form"  :model="form" style="background-color: rgb(244, 244, 249);border-radius: 5px;padding: 42px 10px 10px;" label-width="80px">
                    <div  style="display: flex;padding: 20px;;">
                        <el-form-item label="行政区域">
                            <el-select v-model="form.region" placeholder="请选择">

                            </el-select>
                        </el-form-item>
                        <el-form-item label="事件来源">
                            <el-select v-model="form.region" placeholder="请选择">

                            </el-select>
                        </el-form-item>
                        <el-form-item label="上报时间">
                            <el-date-picker
                                    v-model="form.date2"
                                    type="daterange"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    default-value="2010-10-01">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                    <div  style="display: flex;justify-content: space-between;width: 700px;padding: 20px;">
                        <el-form-item label="事件类型">
                            <el-select v-model="form.region" placeholder="请选择">

                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" icon="el-icon-search">搜索</el-button>
                            <el-button type="danger" icon="el-icon-delete">删除</el-button>
                        </el-form-item>
                    </div>

                </el-form>

                <div  style="padding: 20px;" class="right-third">
                    <el-table
                            :highlight-current-row="true"
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                prop="time"
                                label="上报时间">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="地址">
                        </el-table-column>
                        <el-table-column
                                prop="type"
                                label="事件类型"
                                width="250">
                        </el-table-column>
                        <el-table-column label="操作" style="display: flex">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="success"
                                        @click="handleDelete(scope.$index, scope.row)">查看</el-button>
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
            </el-tab-pane>
            <el-tab-pane label="专管员处理事件">
                <el-form ref="form"  :model="form" style="background-color: rgb(244, 244, 249);border-radius: 5px;padding: 42px 10px 10px;" label-width="80px">
                    <div  style="display: flex;padding: 20px;;">
                        <el-form-item label="行政区域">
                            <el-select v-model="form.region" placeholder="请选择">

                            </el-select>
                        </el-form-item>
                        <el-form-item label="事件来源">
                            <el-select v-model="form.region" placeholder="请选择">

                            </el-select>
                        </el-form-item>
                        <el-form-item label="上报时间">
                            <el-date-picker
                                    v-model="form.date2"
                                    type="daterange"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    default-value="2010-10-01">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                    <div  style="display: flex;justify-content: space-between;width: 98%;padding: 20px;">
                        <el-form-item label="事件类型">
                            <el-select v-model="form.region" placeholder="请选择">

                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" icon="el-icon-search">搜索</el-button>
                            <el-button type="danger" icon="el-icon-delete">删除</el-button>
                        </el-form-item>
                    </div>

                </el-form>

                <div  style="padding: 20px;" class="right-third">
                    <el-table
                            :highlight-current-row="true"
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                prop="time"
                                label="上报时间">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="地址">
                        </el-table-column>
                        <el-table-column
                                prop="type"
                                label="事件类型"
                                width="250">
                        </el-table-column>
                        <el-table-column label="操作" style="display: flex">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="success"
                                        @click="handleDelete(scope.$index, scope.row)">查看</el-button>
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
            </el-tab-pane>
        </el-tabs>

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
                        type: 'news',
                        address: '广西壮族自治区南宁市青秀区东盟商务区桂花路9号香港园',
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
            handleDelete(index,row){},


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
        margin-right: 10px;
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
        margin-top: 30px;
        background-color: #fdfdfd;
        border: 0;
        box-shadow: @shodow;
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
