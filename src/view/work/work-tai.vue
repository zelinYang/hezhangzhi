<template>
    <div style="display: flex;">
        <div class="left-content1">
            <el-col class="left-content-wrap" :span="24">
                <el-menu default-active="1-1" background-color="#545c64" text-color="#fff" active-text-color="#000" style="width: 100%;" class="el-menu-vertical-demo">

                    <router-link to="/work/workTai/banli">
                        <el-menu-item index="1-1">
                            <i class="el-icon-coordinate"></i>
                            <span>事件办理</span>
                        </el-menu-item>
                    </router-link>

                    <router-link to="/work/workTai/index">
                        <el-menu-item index="1-2">
                            <i class="el-icon-folder"></i>
                            <span>辖区事件</span>
                        </el-menu-item>
                    </router-link>

                </el-menu>
            </el-col>
        </div>

        <!--右边-->
        <el-col :span="22" class="right-content">
            <router-view></router-view>
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
    .left-content1{
        min-width: 200px;
        margin-right: 10px;
        min-height: 93vh;
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
    .left-content-wrap .el-menu-item.is-active { background-color: #fff !important; color: #333 !important; }
    .right-content{
        margin-top: 30px;
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
