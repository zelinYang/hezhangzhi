<template>
    <div style="display: flex;">
        <div class="left-content1">
        <el-col class="left-content-wrap" :span="24">
            <el-menu default-active="1-1" background-color="#545c64" text-color="#fff" active-text-color="#000" style="width: 100%;" class="el-menu-vertical-demo">

                <router-link to="/river/allclear">
                    <el-menu-item index="1-1">
                        <i class="el-icon-folder"></i>
                        <span>全面清障进度</span>
                    </el-menu-item>
                </router-link>

                <router-link to="/river/pig">
                    <el-menu-item index="1-2">
                        <i class="el-icon-coordinate"></i>
                        <span>生猪养殖污染防治</span>

                    </el-menu-item>
                </router-link>
                <router-link to="/river/sewage">
                    <el-menu-item index="1-3">
                        <i class="el-icon-s-cooperation"></i>
                        <span>黑臭水体整治</span>
                    </el-menu-item>
                </router-link>
            </el-menu>
        </el-col>
    </div>
            <!--            <span style="margin-bottom: 10px">选择下列任务</span>-->
            <!--            <router-link to="/affairChildren/affairRiver/allClear"><div>全面清障进度</div></router-link>-->
            <!--            <router-link to="/affairChildren/affairRiver/pig"><div>生猪养殖污染防治</div></router-link>-->
            <!--            <router-link to="/affairChildren/affairRiver/sewage"><div>黑臭水体整治</div></router-link>-->


        <!--右边-->
        <el-col :span="22" class="right-content">
            <router-view></router-view>
        </el-col>
    </div>
</template>

<script>
// zhushi
    export default {
        name: "affair-river",

    }
</script>

<style lang="less" >
    @shodow: -1px -1px 5px #ccc;
    @border: 0;
    .left-content1{
        min-width: 200px;
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
    .left-content-wrap{
        ul{
            li{
                color: #fff;
                a{
                    /*color: #fff;*/
                }
            }
        }
    }
    .left-content-wrap .el-menu-item.is-active { background-color: #fff !important; color: #333 !important; }

    .right-content{
        padding: 35px;
        background-color: #fff;
        div{
            .top-left{
                i{
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    margin-right: 10px;
                    background-color: #a7dcff;
                }
            }
        }
    }
    .top_title{
        margin-bottom: 30px;
        div{
            div{
                input{
                    width: 100px;
                }
            }
        }
    }
    .right-m{
        display: flex;
        div{ margin-right: 1vw;

        }
    }
    .mInp{
        display: flex;
        align-items: center;
        div{
            div{
                width: 150px;
                input{
                }
            }
        }
    }
</style
