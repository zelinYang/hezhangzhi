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
                    <div  style="display: flex;justify-content: space-between;width: 98%;padding: 20px;">
                        <el-form-item label="事件类型">
                            <el-select v-model="form.region" placeholder="请选择">

                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" icon="el-icon-search">搜索</el-button>
                            <el-button @click="uload" type="info" icon="el-icon-circle-plus-outline">批量添加</el-button>
                            <el-button type="danger" icon="el-icon-delete">清除</el-button>
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
                                label="上报时间"
                        width="250">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="地址"
                        width="400">
                        </el-table-column>
                        <el-table-column
                                prop="type"
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
                                    <td align="left"><img src="img/4.jpg" style="width: 167px;height: 120px;" alt=""></td>
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
            <el-tab-pane label="在办事件">
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
                            <el-button @click="uload1" type="info" icon="el-icon-circle-plus-outline">批量添加</el-button>
                            <el-button type="danger" icon="el-icon-delete">清除</el-button>
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
                                label="上报时间"
                                width="250">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="地址"
                                width="400">
                        </el-table-column>
                        <el-table-column
                                prop="type"
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
            <el-tab-pane label="办结事件">
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
                            <el-button @click="uload2" type="info" icon="el-icon-circle-plus-outline">批量添加</el-button>
                            <el-button type="danger" icon="el-icon-delete">清除</el-button>
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
                                label="上报时间"
                                width="250">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="地址"
                                width="400">
                        </el-table-column>
                        <el-table-column
                                prop="type"
                                label="事件类型">
                        </el-table-column>
                        <el-table-column width="250" label="操作" style="display: flex">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="success"
                                        @click="tankuang2">查看</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-dialog title="事件详情" :visible.sync="dialogFormVisible2" width="1000px">
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
                            <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
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
            <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
            <span slot="footer" class="dialog-footer">
    <el-button @click="shangchuan = false">取 消</el-button>
    <el-button type="primary" @click="shangchuan = false">确 定</el-button>
  </span>
        </el-dialog>

        <el-dialog
                title="上传文件"
                :visible.sync="shangchuan1"
                width="30%">
            <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview1"
                    :on-remove="handleRemove1"
                    :file-list="fileList1"
                    list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
            <span slot="footer" class="dialog-footer">
    <el-button @click="shangchuan1 = false">取 消</el-button>
    <el-button type="primary" @click="shangchuan1 = false">确 定</el-button>
  </span>
        </el-dialog>

        <el-dialog
                title="上传文件"
                :visible.sync="shangchuan2"
                width="30%">
            <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview2"
                    :on-remove="handleRemove2"
                    :file-list="fileList2"
                    list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
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
