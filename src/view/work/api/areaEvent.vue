<template>
    <div style="">
        <el-breadcrumb style="margin-bottom: 20px;" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>工作台</el-breadcrumb-item>
            <el-breadcrumb-item>辖区事件</el-breadcrumb-item>
        </el-breadcrumb>
        <el-tabs type="border-card">
            <el-tab-pane label="上报事件">
                <el-form ref="form"  :model="form" style="background-color: rgb(244, 244, 249);border-radius: 5px;padding: 20px 10px 10px;" label-width="80px">
                    <div  style="display: flex;padding: 20px;;">
                        <el-form-item label="行政区域">
                            <el-select v-model="form.region1" placeholder="请选择">
                                <el-option value="城中区">城中区</el-option>
                                <el-option value="鱼峰区">鱼峰区</el-option>
                                <el-option value="柳北区">柳北区</el-option>
                                <el-option value="柳南区">柳南区</el-option>
                                <el-option value="柳江区">柳江区</el-option>
                                <el-option value="鹿寨县">鹿寨县</el-option>
                                <el-option value="柳城县">柳城县</el-option>
                                <el-option value="融水苗族自治县">融水苗族自治县</el-option>
                                <el-option value="融安县">融安县</el-option>
                                <el-option value="三江侗族自治县">三江侗族自治县</el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="事件来源">
                            <el-select v-model="form.region2" placeholder="请选择">
                                <el-option value="河长上报">河长上报</el-option>
                                <el-option value="专管员巡河">专管员巡河</el-option>
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
                            <el-select v-model="form.region3" placeholder="请选择">
                                <el-option value="娱乐、餐饮等">娱乐、餐饮等</el-option>
                                <el-option value="违章建筑">违章建筑</el-option>
                                <el-option value="弃土废渣等">弃土废渣等</el-option>
                                <el-option value="洗沙治沙等">洗沙治沙等</el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="search" icon="el-icon-search">搜索</el-button>
                            <el-button @click="uload" type="info" icon="el-icon-circle-plus-outline">批量添加</el-button>
                            <el-button type="danger" @click="clean" icon="el-icon-delete">清除</el-button>
                        </el-form-item>
                    </div>

                </el-form>

                <div  style="padding: 20px;" class="right-third">
                    <el-table
                            :highlight-current-row="true"
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                type="selection"></el-table-column>
                        <el-table-column
                                prop="time"
                                label="上报时间"
                                width="400">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="行政地点">
                        </el-table-column>
                        <el-table-column
                                prop="type"
                                width="400"
                                label="事件类型">
                        </el-table-column>
                        <el-table-column width="250" label="操作" style="display: flex">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="success"
                                        @click="tankuang">查看</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-dialog  title="事件详情"  :visible.sync="dialogFormVisible" width="1000px">
                        <div class="tankuang">
                            <table width="100%" valign="top"  style="text-align: center">
                                <tr style="height: 50px" class="fl">
                                    <td align="left" valign="top">事件编号：</td>
                                    <td align="left" valign="top">201905031</td>
                                    <td align="left" valign="top">行政区域：</td>
                                    <td align="left" valign="top">城中区</td>
                                    <td align="left" valign="top">事发地点：</td>
                                    <td align="left" valign="top" style="width: 250px; text-align: left;;">广西壮族自治区南宁市青秀区东盟商务区桂花路9号香港园</td>
                                    <td align="left" valign="top">河段名称</td>
                                    <td align="left" valign="top">某某某江河湖海</td>
                                </tr>
                                <tr class="fl">
                                    <td align="left">所属流域：</td>
                                    <td align="left">西江</td>
                                    <td align="left">事件来源：</td>
                                    <td align="left">河长上报</td>
                                    <td align="left">事件类型：</td>
                                    <td align="left">水面异常，侵占河道</td>
                                    <td align="left">上报人：</td>
                                    <td align="left">管理员</td>
                                </tr>
                                <tr class="fl">
                                    <td align="left">上报时间：</td>
                                    <td align="left">2019-05-31 1：47：36</td>
                                    <td align="left">联系方式：</td>
                                    <td align="left">17687576301</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="fl">
                                    <td align="left">事件内容：</td>
                                    <td align="left">测试</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr style="height: 120px">
                                    <td align="left">事件图片：</td>
                                    <td align="left"><img src="img/0.jpg" style="width: 167px;height: 120px;" alt=""></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="fl">
                                    <td align="left">事件视频：</td>
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
            <el-tab-pane label="专管员处理事件">
                <el-form ref="form"  :model="form" style="background-color: rgb(244, 244, 249);border-radius: 5px;padding: 20px 10px 10px;" label-width="80px">
                    <div  style="display: flex;padding: 20px;;">
                        <el-form-item label="行政区域">
                            <el-select v-model="form.region4" placeholder="请选择">
                                <el-option value="城中区">城中区</el-option>
                                <el-option value="鱼峰区">鱼峰区</el-option>
                                <el-option value="柳北区">柳北区</el-option>
                                <el-option value="柳南区">柳南区</el-option>
                                <el-option value="柳江区">柳江区</el-option>
                                <el-option value="鹿寨县">鹿寨县</el-option>
                                <el-option value="柳城县">柳城县</el-option>
                                <el-option value="融水苗族自治县">融水苗族自治县</el-option>
                                <el-option value="融安县">融安县</el-option>
                                <el-option value="三江侗族自治县">三江侗族自治县</el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="上报时间">
                            <el-date-picker
                                    v-model="form.date3"
                                    type="daterange"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    default-value="2010-10-01">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="事件类型">
                            <el-select v-model="form.region5" placeholder="请选择">
                                <el-option value="娱乐、餐饮等">娱乐、餐饮等</el-option>
                                <el-option value="违章建筑">违章建筑</el-option>
                                <el-option value="弃土废渣等">弃土废渣等</el-option>
                                <el-option value="洗沙治沙等">洗沙治沙等</el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div  style="display: flex;justify-content:flex-end;width: 98%;padding: 20px;">
                        <el-form-item>
                            <el-button type="primary" @click="search" icon="el-icon-search">搜索</el-button>
                            <el-button @click="uload1" type="info" icon="el-icon-circle-plus-outline">批量添加</el-button>
                            <el-button type="danger" @click="clean" icon="el-icon-delete">清除</el-button>
                        </el-form-item>
                    </div>

                </el-form>

                <div  style="padding: 20px;" class="right-third">
                    <el-table
                            :highlight-current-row="true"
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                type="selection"></el-table-column>
                        <el-table-column
                                prop="time"
                                label="上报时间"
                                width="350">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="行政地点">
                        </el-table-column>
                        <el-table-column
                                prop="type"
                                width="350"
                                label="事件类型">
                        </el-table-column>
                        <el-table-column width="250" label="操作" style="display: flex">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="success"
                                        @click="tankuang1">查看</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-dialog title="事件详情" :visible.sync="dialogFormVisible1" width="1000px">
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
                                    <td><img src="img/0.jpg" style="width: 167px;height: 120px;" alt=""></td>
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
                            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
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
        <el-dialog
                title="上传文件"
                :visible.sync="shangchuan"
                width="30%">
            <el-form :model="form1">
                <div style="width: 100%;">
                    <el-form-item :required="true" prop="title" label="文件名称" :label-width="formLabelWidth"
                                  style="width: 100%;">
                        <el-input v-model="form1.title3" placeholder="请输入" auto-complete="off"></el-input>
                    </el-form-item>
                </div>
                <div style="width: 100%; display: flex;padding-left: 90px">
                    <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </div>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="shangchuan = false">取 消</el-button>
    <el-button type="primary" @click="shangchuan = false">确 定</el-button>
  </span>
        </el-dialog>

        <el-dialog
                title="上传文件"
                :visible.sync="shangchuan1"
                width="30%">
            <el-form :model="form1">
                <div style="width: 100%;">
                    <el-form-item :required="true" prop="title" label="文件名称" :label-width="formLabelWidth"
                                  style="width: 100%;">
                        <el-input v-model="form1.title2" placeholder="请输入" auto-complete="off"></el-input>
                    </el-form-item>
                </div>
                <div style="width: 100%; display: flex;padding-left: 90px">
                    <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview1"
                            :on-remove="handleRemove1"
                            :file-list="fileList1"
                            list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </div>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="shangchuan1 = false">取 消</el-button>
    <el-button type="primary" @click="shangchuan1 = false">确 定</el-button>
  </span>
        </el-dialog>

        <el-dialog
                title="上传文件"
                :visible.sync="shangchuan2"
                width="30%">
            <el-form :model="form1">
                <div style="width: 100%;">
                    <el-form-item :required="true" prop="title" label="文件名称" :label-width="formLabelWidth"
                                  style="width: 100%;">
                        <el-input v-model="form1.title4" placeholder="请输入" auto-complete="off"></el-input>
                    </el-form-item>
                </div>
                <div style="width: 100%; display: flex;padding-left: 90px">
                    <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview2"
                            :on-remove="handleRemove2"
                            :file-list="fileList2"
                            list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </div>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="shangchuan2 = false">取 消</el-button>
    <el-button type="primary" @click="shangchuan2 = false">确 定</el-button>
  </span>
        </el-dialog>
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
                        title: '事件1',
                        time: '2019-05-17',
                        type: '水面异常，侵占河道'
                    }
                ],
                form: {
                    name: '',
                    region: '',
                    title: '',
                    date1: '',
                    date2: '',
                    date3: '',
                    date4: '',
                    date5: '',
                    date6: '',
                    delivery: false,
                    type: {},
                    resource: '',
                    desc: '',
                    region1: '',
                    region2: '',
                    region3: '',
                    region4: '',
                    region5: '',
                    region6: '',
                    region7: '',
                    region8: '',
                },
                form1:{
                    title: '',
                    title1: '',
                    title2: '',
                    title3: '',
                    title4: '',
                },
                dialogFormVisible: false,
                dialogFormVisible1: false,
                dialogFormVisible2: false,
                formLabelWidth: "90px",
                currentPage3: 1,
                fileList:[],
                fileList1:[],
                fileList2:[],
                shangchuan: false,
                shangchuan1: false,
                shangchuan2: false,
            }
        },
        methods:{
            handleEdit(index,row){


            },
            tankuang(){
                this.dialogFormVisible = true
            },
            tankuang1(){
                this.dialogFormVisible1 = true
            },

            tankuang2(){
                this.dialogFormVisible2 = true
            },
            uload(){
                this.shangchuan = true
            },
            uload1(){
                this.shangchuan1 = true
            },
            uload2(){
                this.shangchuan2 = true
            },

            clean(){
                this.$message({
                    message: '功能正在开发中',
                    type: 'warning'
                });
            },
            search(){

                // let title = this.form.title;
                // let stat = this.form.infoStAt_value;
                // let date = this.form.date;
                // let type = this.form.fileTypeF_value
                // let arr = [];
                // this.tableData.forEach(item => {
                //     let obj = {};
                //     if(item.title === title){
                //         obj.title = title
                //     }else if (item.time.indexOf(date) !== -1){
                //         obj.date = date
                //     }else if(item.stat === stat){
                //         obj.stat = stat
                //     }else if(item.type === type){
                //         obj.type = type
                //     }
                //     console.log(obj);
                //     return obj;
                // })
                this.$message({
                    message: '功能正在开发中',
                    type: 'warning'
                });
            },
            handleSizeChange3(){},
            handleCurrentChange3(){},

            handlePreview(file, fileList){
                console.log(file,fileList)
            },
            handlePreview1(file, fileList){
                console.log(file,fileList)
            },
            handlePreview2(file, fileList){
                console.log(file,fileList)
            },

            handleRemove(file){
                console.log(file)
            },
            handleRemove1(file){
                console.log(file)
            },
            handleRemove2(file){
                console.log(file)
            },
        }

    }
</script>
<style>
    .right-content[data-v-4337a3cd]{
        margin-top: 0;
    }
    .left-content1[data-v-4337a3cd]{
        margin-right: 0;
    }
</style>
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
