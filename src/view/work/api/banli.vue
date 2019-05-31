<template>
    <div style="">
        <el-tabs type="border-card">
            <el-tab-pane label="代办事件">
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
                    <el-dialog title="事件详情" :visible.sync="dialogFormVisible" width="1000px">
                        <div class="tankuang">
                            <table width="100%" valign="top"  style="text-align: center">
                                <tr style="height: 50px" class="fl">
                                    <td valign="top">事件编号：</td>
                                    <td valign="top">201905031</td>
                                    <td valign="top">行政区域：</td>
                                    <td valign="top">城中区</td>
                                    <td valign="top">事发地点：</td>
                                    <td valign="top" style="width: 250px; text-align: left;;">广西壮族自治区南宁市青秀区东盟商务区桂花路9号香港园</td>
                                    <td valign="top">河段名称</td>
                                    <td valign="top">某某某江河湖海</td>
                                </tr>
                                <tr class="fl">
                                    <td>所属流域：</td>
                                    <td>西江</td>
                                    <td>事件来源：</td>
                                    <td>河长上报</td>
                                    <td>事件类型：</td>
                                    <td>水面异常，侵占河道</td>
                                    <td>上报人：</td>
                                    <td>管理员</td>
                                </tr>
                                <tr class="fl">
                                    <td>上报时间：</td>
                                    <td>2019-05-31 1：47：36</td>
                                    <td>联系方式：</td>
                                    <td>17687576301</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="fl">
                                    <td>事件内容：</td>
                                    <td>测试</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr style="height: 120px">
                                    <td>事件图片：</td>
                                    <td><img src="img/4.jpg" style="width: 167px;height: 120px;" alt=""></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="fl">
                                    <td>事件视频：</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                        <div style="margin-top: 30px">
                            <div class="top" style="height: 40px;line-height: 40px;border-bottom: #ccc 1px solid;font-size: 1.2em">事件处理记录</div>
                            <div style="height: 300px;margin-top: 10px;overflow: auto">
                                <el-timeline>
                                    <el-timeline-item timestamp="接收时间：2019-05-31 2：37" placement="top">
                                        <el-card>
                                            <div class="shijianx">
                                                <span style="margin-right: 70px;">
                                                    处理人：--
                                                </span>
                                                <span style="margin-right: 70px;">
                                                    处理时间：--
                                                </span>
                                                <span style="margin-right: 70px;">
                                                    下一处理人：--
                                                </span><br/>
                                                <span style="margin-right: 70px;margin-top: 30px;display:block;">
                                                    下一处理单位：--
                                                </span><br/>
                                                <span style="margin-right: 70px;margin-top: 30px;display:block">
                                                    处理内容：--
                                                </span><br/>
                                                <span style="margin-right: 70px;margin-top: 30px;display:block">
                                                    处理照片：--
                                                </span>
                                            </div>
                                        </el-card>
                                    </el-timeline-item>
                                </el-timeline>
                            </div>
                        </div>
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
            <el-tab-pane label="在办事件">
                <el-form ref="form"  :model="form" style="background-color: rgb(244, 244, 249);border-radius: 5px;padding: 42px 10px 10px;" label-width="80px">
                    <div  style="display: flex;padding: 20px;;">
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
                    </div>
                    <div  style="display: flex;justify-content: center;width: 100%;">
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
                                label="类别"
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
                    <el-dialog title="事件详情" :visible.sync="dialogFormVisible" width="1000px">
                        <div class="tankuang">
                            <table width="100%" valign="top"  style="text-align: center">
                                <tr style="height: 50px" class="fl">
                                    <td valign="top">事件编号：</td>
                                    <td valign="top">201905031</td>
                                    <td valign="top">行政区域：</td>
                                    <td valign="top">城中区</td>
                                    <td valign="top">事发地点：</td>
                                    <td valign="top" style="width: 250px; text-align: left;;">广西壮族自治区南宁市青秀区东盟商务区桂花路9号香港园</td>
                                    <td valign="top">河段名称</td>
                                    <td valign="top">某某某江河湖海</td>
                                </tr>
                                <tr class="fl">
                                    <td>所属流域：</td>
                                    <td>西江</td>
                                    <td>事件来源：</td>
                                    <td>河长上报</td>
                                    <td>事件类型：</td>
                                    <td>水面异常，侵占河道</td>
                                    <td>上报人：</td>
                                    <td>管理员</td>
                                </tr>
                                <tr class="fl">
                                    <td>上报时间：</td>
                                    <td>2019-05-31 1：47：36</td>
                                    <td>联系方式：</td>
                                    <td>17687576301</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="fl">
                                    <td>事件内容：</td>
                                    <td>测试</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr style="height: 120px">
                                    <td>事件图片：</td>
                                    <td><img src="img/4.jpg" style="width: 167px;height: 120px;" alt=""></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="fl">
                                    <td>事件视频：</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                        <div style="margin-top: 30px">
                            <div class="top" style="height: 40px;line-height: 40px;border-bottom: #ccc 1px solid;font-size: 1.2em">事件处理记录</div>
                            <div style="height: 300px;margin-top: 10px;overflow: auto">
                                <el-timeline>
                                    <el-timeline-item timestamp="接收时间：2019-05-31 2：37" placement="top">
                                        <el-card>
                                            <div class="shijianx">
                                                <span style="margin-right: 70px;">
                                                    处理人：--
                                                </span>
                                                <span style="margin-right: 70px;">
                                                    处理时间：--
                                                </span>
                                                <span style="margin-right: 70px;">
                                                    下一处理人：--
                                                </span><br/>
                                                <span style="margin-right: 70px;margin-top: 30px;display:block;">
                                                    下一处理单位：--
                                                </span><br/>
                                                <span style="margin-right: 70px;margin-top: 30px;display:block">
                                                    处理内容：--
                                                </span><br/>
                                                <span style="margin-right: 70px;margin-top: 30px;display:block">
                                                    处理照片：--
                                                </span>
                                            </div>
                                        </el-card>
                                    </el-timeline-item>
                                </el-timeline>
                            </div>
                        </div>
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
            <el-tab-pane label="办结事件">
                <el-form ref="form"  :model="form" style="background-color: rgb(244, 244, 249);border-radius: 5px;padding: 42px 10px 10px;" label-width="80px">
                    <div  style="display: flex;padding: 20px;">
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
                    </div>
                    <div  style="display: flex;justify-content: center;width: 100%;">
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
                                label="类别"
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
                    <el-dialog title="事件详情" :visible.sync="dialogFormVisible" width="1000px">
                        <div class="tankuang">
                            <table width="100%" valign="top"  style="text-align: center">
                                <tr style="height: 50px" class="fl">
                                    <td valign="top">事件编号：</td>
                                    <td valign="top">201905031</td>
                                    <td valign="top">行政区域：</td>
                                    <td valign="top">城中区</td>
                                    <td valign="top">事发地点：</td>
                                    <td valign="top" style="width: 250px; text-align: left;;">广西壮族自治区南宁市青秀区东盟商务区桂花路9号香港园</td>
                                    <td valign="top">河段名称</td>
                                    <td valign="top">某某某江河湖海</td>
                                </tr>
                                <tr class="fl">
                                    <td>所属流域：</td>
                                    <td>西江</td>
                                    <td>事件来源：</td>
                                    <td>河长上报</td>
                                    <td>事件类型：</td>
                                    <td>水面异常，侵占河道</td>
                                    <td>上报人：</td>
                                    <td>管理员</td>
                                </tr>
                                <tr class="fl">
                                    <td>上报时间：</td>
                                    <td>2019-05-31 1：47：36</td>
                                    <td>联系方式：</td>
                                    <td>17687576301</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="fl">
                                    <td>事件内容：</td>
                                    <td>测试</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr style="height: 120px">
                                    <td>事件图片：</td>
                                    <td><img src="img/4.jpg" style="width: 167px;height: 120px;" alt=""></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="fl">
                                    <td>事件视频：</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                        <div style="margin-top: 30px">
                            <div class="top" style="height: 40px;line-height: 40px;border-bottom: #ccc 1px solid;font-size: 1.2em">事件处理记录</div>
                            <div style="height: 300px;margin-top: 10px;overflow: auto">
                                <el-timeline>
                                    <el-timeline-item timestamp="接收时间：2019-05-31 2：37" placement="top">
                                        <el-card>
                                            <div class="shijianx">
                                                <span style="margin-right: 70px;">
                                                    处理人：--
                                                </span>
                                                <span style="margin-right: 70px;">
                                                    处理时间：--
                                                </span>
                                                <span style="margin-right: 70px;">
                                                    下一处理人：--
                                                </span><br/>
                                                <span style="margin-right: 70px;margin-top: 30px;display:block;">
                                                    下一处理单位：--
                                                </span><br/>
                                                <span style="margin-right: 70px;margin-top: 30px;display:block">
                                                    处理内容：--
                                                </span><br/>
                                                <span style="margin-right: 70px;margin-top: 30px;display:block">
                                                    处理照片：--
                                                </span>
                                            </div>
                                        </el-card>
                                    </el-timeline-item>
                                </el-timeline>
                            </div>
                        </div>
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
                        address: '广西壮族自治区南宁市青秀区东盟商务区桂花路9号香港园',
                        num: 0,
                        title: '哈哈哈哈哈',
                        time: '2019-05-17',
                        type: '水面异常，侵占河道'
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


            },
            handleDelete(index,row){
                console.log(index,row);
                this.dialogFormVisible = true
            },


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
    .tankuang>div{
        height: 70px;
        line-height: 70px;display: flex;
    }
    .tankuang>div>span{
        margin-right: 40px;
    }
    .fl{
        td{
            height: 70px;
        }
    }
    .shijianx{
        span{
            margin-top: 30px;
        }
    }
    .left-content-wrap .el-menu-item.is-active { background-color: #fff !important; color: #333 !important; }
</style>
