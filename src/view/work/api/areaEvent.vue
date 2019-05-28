<template>
    <div style="display: flex;justify-content: center;">

        <!--右边-->
        <el-col :span="20" class="right-content">
            
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
        }
    }
</script>

<style scoped lang="less">
    @border: #ccc 1px solid;
    .left-content {
        width: 350px;
        height: 800px;
        border: @border;
        margin-right: 10px;
        padding: 30px;
        background-color: #fff;

        a {
            text-decoration: none;
            color: #1d1d1d;
        }

        div {
            width: 100%;
            border-radius: 10px;
            height: 80px;
            margin-top: 50px;
            border: @border;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .right-content{
        padding: 30px;
        background-color: #fff;

        .right-first{
            display: flex;
            align-items: center;
        }

        .right-third{
            padding: 20px;
            margin-top: 30px;
        }
    }
    @media screen and (max-width: 1366px){
        .media{
            width: 100px !important;
        }
    }
    .row-cal{
        height: 60px;
    }
</style>
