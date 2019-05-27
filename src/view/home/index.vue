<template>
    <div style="display:flex;padding-top:30px"> 
         <!-- 左边 -->
        <div class="leftContent">
            <div class="weather">
                <div><span><b>当前在线人数</b></span><span>[柳州市]</span></div>
                <div><span>河长：0</span><span>小雨</span></div>
                <div><span>河道专员：0</span><span>20℃~30℃</span></div>
                <div><span><b>今日巡河人数：0</b></span><span>时间:2019-05-27</span></div>
            </div>
            <div class="imag">
                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1558961087&di=0d47c994ed295bd779f83a89fac282a3&src=http://img0.ph.126.net/NFlgs9HTW4OB6847sge4UQ==/6630914933584550001.jpg" alt="">
            </div>
            <div class="news"style="display:flex;justify-content: center;">
                <el-tabs style="width:90%" v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="工作动态" name="first">工作动态</el-tab-pane>
                    <el-tab-pane label="工作简报" name="second">工作简报</el-tab-pane>
                    <el-tab-pane label="媒体聚焦" name="third">媒体聚焦</el-tab-pane>
                </el-tabs>
            </div>
            <div class="news"style="display:flex;justify-content: center;">
                <el-tabs style="width:90%" v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="工作动态" name="first">工作动态</el-tab-pane>
                    <el-tab-pane label="工作简报" name="second">工作简报</el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <!-- 中间 -->
        <el-col :span="19" class="center"></el-col>
        <!-- 右边 -->
        <div class="rightContent">
            <div class="right-first">
                <div class="title-top"><b>柳州市水质概况</b></div>
                柳州市主要河流水质类型分布情况：（2019年-第0周）
                <div class="right-firstd">
                    <div>
                        <span><i></i>Ⅰ类水质</span>
                        <span><i></i>Ⅱ类水质</span>
                        <span><i></i>Ⅲ类水质</span>
                    </div>
                    <div>
                        <span><i></i>Ⅳ类水质</span>
                        <span><i></i>Ⅴ类水质</span>
                        <span><i></i>Ⅵ类水质</span>
                    </div>
                    <div>数据来源：环卫厅公开数据</div>
                </div>
            </div>

            <div class="right-secondd">
                <b>柳州市事件类型分布情况</b>
                <div>
                    本月柳州市上报事件共1件，事件类型分布情况如下图所示，其中重点问题类型为<a href="#">河道有垃圾</a>
                </div>
                <div>
                    <div id="main"></div>
                </div>
            </div>
            <div class="right-fourth">
                <div><b>河道专员巡河完成率</b></div>
                <div>
                    <el-col :span="6">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </el-col>
                    <el-col :span="18"></el-col>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const data = require('../../../public/data/echartsData.js');
    let echarts = require('echarts');
    export default {
        name: "index",
        data() {
            return {
                activeName: 'first',
            }
        },
        methods:{
            handleClick(){
            },
            getEchartData(){
                // 右边第一个
                const myec = document.getElementById('main');
                let cate1 = data.default.pieData1;
                this.rander(myec, cate1);
                // 底部第一个echarts
                // const myec = document.getElementById('myEcharts');
                // let cate1 = data.default.cateData;
                // this.rander(myec, cate1);
                // // 底部第二个echarts
                // const myecType = document.getElementById('myEchartsType');
                // let cate2 = data.default.cateData2;
                // this.rander(myecType,cate2)
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
            this.getEchartData();
            console.log(data.default.cateData);
        }
    }
</script>

<style scoped lang="less">
    #main{
        height: 450px;
        width: 300px;
    }
    @bgc: #fff;
    @shade: 1px 2px 5px rgb(170, 170, 170);
    .leftContent,.rightContent{
        max-width: 350px;
        min-width: 350px;
        min-height: 85vh;
        margin-left: 10px;
        margin-right: 10px;
        background-color: @bgc;
        box-shadow: @shade;
    }
    .center{
        min-height: 85vh;
        min-width: 400px;
        background-color: @bgc;
        box-shadow: @shade;
    }

    .leftContent{
        .weather{
            min-width: 350px;
            min-height: 200px;
            box-shadow: @shade;
            background-color: #8ba5ee;text-align:center;
            div{
                display: flex;
                justify-content: space-between;
                height: 30px;
                line-height: 30px;
                width: 330px;
                color: #fff;
                padding-left:10px;
                padding-top: 10px;
                padding-right: 10px;
            }
            div:nth-child(1){
                height: 40px;
                span:nth-child(1){
                    font-size: 1.1em;
                }
            }
            div:nth-child(4){
                height: 40px;
                span:nth-child(1){
                    font-size: 1.1em;
                }
            }
        }
        .imag{
            width: 350px;
            height: 200px;
            box-shadow: @shade;
            margin-top: 10px;
            img{
                height: 100%;
                width: 100%;
            }
        }
        .news{
            width: 100%;
            min-height: 400px;
            box-shadow: @shade;
            margin-top: 10px;
            background-color: @bgc;
        }
    }

    .rightContent{
        .right-first{
            width: 310px;
            height: 230px;
            padding: 20px;
            box-shadow: @shade;
            .title-top{
                height: 20px;
                width: 100%;
                font-size: 1.2em;
                padding-bottom: 20px ;
            }
            .right-firstd{
                margin-top: 20px;
                height: 110px;
                padding: 20px;
                div{
                    height: 25px;
                    display: flex;
                    justify-content: space-around;
                    span{
                        i{
                            display: inline-block;
                            width: 10px;
                            height: 10px;
                        }
                    }
                }
                div:nth-child(1){
                     span:nth-child(1){
                        i{
                            background-color: rgb(190, 94, 94);
                        }
                    }
                    span:nth-child(2){
                        i{
                            background-color: rgb(108, 219, 126);
                        }
                    }
                    span:nth-child(3){
                        i{
                            background-color: rgb(115, 166, 224);
                        }
                    }
                }
                div:nth-child(2){
                     span:nth-child(1){
                        i{
                            background-color: rgb(106, 224, 122);
                        }
                    }
                    span:nth-child(2){
                        i{
                            background-color: rgb(236, 112, 129);
                        }
                    }
                    span:nth-child(3){
                        i{
                            background-color: rgb(224, 173, 115);
                        }
                    }
                }
                div:nth-child(3){
                    margin-top: 20px;
                    text-align: right;
                    display: flex;
                    justify-content: flex-end;
                    color: #666
                }
            }
        }
        .right-secondd{
            box-shadow: @shade;
            padding: 10px;
            margin-top: 10px;
            div:nth-child(1){
                font-size: 1.2em;
                height: 25px;
            }
            div:nth-child(2){
                margin-top: 20px;
                height: 50px;
            }
            div:nth-child(3){
                margin-top: 20px;
                height: 400px;
            }
        }
        .right-fourth{
            box-shadow: @shade;
            margin-top: 10px;
            height: 400px;
            padding: 15px;
            div:nth-child(1){
                height: 25px;
            }
            div:nth-child(2){
                margin-top: 20px;
                height: 360px;
                display: flex;
                div{
                    height: 100%;
                    div{
                        height: 35px;
                    }
                }
                div:nth-child(1){
                    text-align: left;
                }
                 div:nth-child(2){
                     
                    border-left: #666 1px solid;
                    text-align: right;
                }
            }
        }
    }
</style>