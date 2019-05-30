<template>
    <div style="">
        <!--右边-->
        <el-col :span="24" class="right-content1">
            <el-col :span="24" class="right-top">
                <b>事件详情</b>
            </el-col>
        </el-col>
        <el-col class="content-first" :span="24">
<!--            <el-col :span="24" class="content-first-row">-->
<!--                <el-col :span="3">-->
<!--                    -->
<!--                </el-col>-->
<!--            </el-col>-->
            <table border="0" class="table-top">

            </table>
        </el-col>
        <el-col :span="24" class="content-second">
            <el-col :span="24" class="content-second-top">
                事件处理记录
            </el-col>
            <el-col :span="24" class="content-second-main">
                <el-steps direction="vertical" :active="1">
                    <el-step description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step></el-step>
                    <el-step></el-step>
                    <div style="width: 100%;display: flex;justify-content: center;height: 80px;">
                        <el-button size="mini" type="primary">关闭</el-button>
                    </div>
                </el-steps>
            </el-col>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: "work-tai",
        data(){
            return{
                activeName: 'first',
                input: '',
                options1: [],
                value1: '',
                input123: '',
                tableData: []

            }
        },
        methods:{
            handleClick(){

            }
        },
        mounted() {
            console.log(this.tableData);
        }
    }
</script>

<style scoped lang="less">
    @borderAll: 1px solid #ccc;
    .right-top{
        height: 40px;
        border-bottom: #919191 solid 1px;
        font-size: 1.2em;
    }
    .content-first{
        height: 550px;
        padding-top: 10px;
        .content-first-row{
            height: 80px;
            margin-bottom: 10px;
        }
        .table-top{

            tr{
                margin-top: 30px;
                height: 83px;
            }
            td{
                width: 200px;
                text-align: center;
                img{
                    height: 80%;
                }
            }
        }
    }
    .content-second{
        min-height: 300px;
        .content-second-top{
            padding: 0 20px 0 20px;
            background-color: #1867e7;
            height: 40px;
            color: #fff;
            line-height: 40px;
            margin-bottom: 20px;
        }
        .content-second-main{
            height: 300px;
            padding: 20px;
        }
    }

</style>
