<template>
    <div>
       <el-col :span="24" class="contennt-first">
           <i class="el-icon-tickets"></i>
           辖区考核
       </el-col>
        <el-col class="content-second">
            <el-col :span="12" class="content-second-first">
                <el-select v-model="value" placeholder="请选择" style="width: 150px">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value1" placeholder="请选择" style="width: 100px;margin-left: 20px">
                    <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value2" placeholder="请选择" style="width: 150px;margin-left: 20px">
                    <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="12" class="content-second-second" style="text-align: end">
                <span @click="classM" :class="[{tagBlue: iblue}]">月</span>
                <span @click="classJ" :class="[{tagBlue1: iblue1}]">季度</span>
                <span @click="classY" :class="[{tagBlue2: iblue2}]">年</span>
            </el-col>
        </el-col>
        <el-col :span="24" class="content-third">
            暂无匹配数据
        </el-col>
        <el-col class="contennt-fourth" :span="24">
            <el-col :span="8">
                <el-col :span="8">
                    <p style="text-align: center">
                        水源保护指标
                    </p>
                    <p style="text-align: center;font-size: 2em;color: #3ca51c">20</p>
                </el-col>
                <el-col :span="16">
                    整体评价区域内水资源消耗总量和强度双控制效果，水功能区限制纳污管理以及上游源水区和水源地保护工作成效
                </el-col>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="8">
                <el-col :span="8">
                    <p style="text-align: center">
                        水源保护指标
                    </p>
                    <p style="text-align: center;font-size: 2em;color: #3ca51c">20</p>
                </el-col>
                <el-col :span="16">
                    整体评价区域内水资源消耗总量和强度双控制效果，水功能区限制纳污管理以及上游源水区和水源地保护工作成效
                </el-col>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="8">
                <el-col :span="8">
                    <p style="text-align: center">
                        水源保护指标
                    </p>
                    <p style="text-align: center;font-size: 2em;color: #3ca51c">20</p>
                </el-col>
                <el-col :span="16">
                    整体评价区域内水资源消耗总量和强度双控制效果，水功能区限制纳污管理以及上游源水区和水源地保护工作成效
                </el-col>
            </el-col>
        </el-col>
        <el-col :span="24" style="height: 30px;background-color: #fff;"></el-col>
        <el-col class="contennt-fourth1" :span="24">
            <el-col :span="8">
                <el-col :span="8">
                    <p style="text-align: center">
                        水源保护指标
                    </p>
                    <p style="text-align: center;font-size: 2em;color: #3ca51c">20</p>
                </el-col>
                <el-col :span="16">
                    整体评价区域内水资源消耗总量和强度双控制效果，水功能区限制纳污管理以及上游源水区和水源地保护工作成效
                </el-col>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="8">
                <el-col :span="8">
                    <p style="text-align: center">
                        水源保护指标
                    </p>
                    <p style="text-align: center;font-size: 2em;color: #3ca51c">20</p>
                </el-col>
                <el-col :span="16">
                    整体评价区域内水资源消耗总量和强度双控制效果，水功能区限制纳污管理以及上游源水区和水源地保护工作成效
                </el-col>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="8">
                <el-col :span="8">
                    <p style="text-align: center">
                        水源保护指标
                    </p>
                    <p style="text-align: center;font-size: 2em;color: #3ca51c">20</p>
                </el-col>
                <el-col :span="16">
                    整体评价区域内水资源消耗总量和强度双控制效果，水功能区限制纳污管理以及上游源水区和水源地保护工作成效
                </el-col>
            </el-col>
        </el-col>
        <el-col :span="24" style="height: 80px; background-color: #fff;"></el-col>
    </div>
</template>

<script>
    export default {
        name: "assess",
        data(){
            return{
                options: [
                    {
                        label: '2019年',
                        value: 0
                    },
                    {
                        label: '2018年',
                        value: 1
                    },
                    {
                        label: '2017年',
                        value: 2
                    }
                ],
                value: '2019年',
                options1: [
                    {
                        label: '6月',
                        value: 0
                    },
                    {
                        label: '7月',
                        value: 1
                    },
                    {
                        label: '8月',
                        value: 2
                    }
                ],
                value1: '6月',
                options2: [
                    {
                        label: '由低到高',
                        value: 0,
                    },
                    {
                        label: '由高到低',
                        value: 1,
                    }
                ],
                value2: '由高到低',
                iblue: true,
                iblue1: false,
                iblue2: false,
            }
        },
        methods:{
            classM(){
                this.iblue = true;
                this.iblue1 = false
                this.iblue2 = false
            },
            classJ(){
                this.iblue = false;
                this.iblue1 = true
                this.iblue2 = false
            },
            classY(){
                this.iblue = false;
                this.iblue1 = false
                this.iblue2 = true
            }
        }
    }
</script>

<style scoped lang="less">
    @bgc: #fff;
    .tagBlue{
        color: #fff;
        background-color: #5993ee;
    }
    .tagBlue1{
        color: #fff;
        background-color: #5993ee;
    }
    .tagBlue2{
        color: #fff;
        background-color: #5993ee;
    }
    .contennt-first{
        padding: 10px;
        font-size: 1.3em;
        border-bottom: #ccc 1px solid;
        background-color: @bgc;
        padding-left: 20px;
    }
    .content-second{
        display: flex;
        padding: 20px;
        background-color: @bgc;
        .content-second-first{
            display: flex;
            div{
                div{
                    input{
                        background-color: #5993ee;
                        color: #fff;
                    }
                }
            }
        }
        .content-second-second{
            span{
                display: inline-block;
                width: 70px;
                height: 40px;
                border-radius: 5px;
                margin-left: 10px;
                text-align: center;
                line-height: 40px;
            }
            span:hover{
                cursor: pointer;
                color: #fff;
                background-color: #5993ee;
            }
        }
    }
    .content-third{
        height: 30vh;
        background-color: @bgc;
        padding: 20px;
        text-align: center;
        line-height: 350px;
        color: #bfbfbf;
    }
    @boder: 1px solid #eeeeee;
    @shadow: 1px 1px 3px #b4b4b4;
    .contennt-fourth{
        padding: 0 20px 0 20px;
        background-color: @bgc;
        height: 150px;
        display: flex;
        justify-content: center;
        border: @boder;
        div{
            height: 100%;
            border-bottom: 1px solid #eeeeee;
            border-left: @boder;
            border-right: @boder;
        }
        div:nth-child(1){
            border-top: #066dff 3px solid;
            box-shadow: @shadow;
            display: flex;
            div:nth-child(1){
                height: 100%;
                border-right: @boder;
                line-height: 150px;
                display: flex;
                flex-direction: column;
                P{
                    height: 26px;
                }
            }
            div:nth-child(2){
                display: flex;
                align-items: center;
                padding: 0 20px 0 20px;
                border-top: #066dff 3px solid;
            }
        }
        div:nth-child(3) {
            border-top: #ffdb8c 3px solid;
            box-shadow: @shadow;
            div:nth-child(1){
                height: 100%;
                border-top: #ffdb8c 3px solid;
                border-right: @boder;
                line-height: 150px;
                display: flex;
                flex-direction: column;
                P{
                    height: 26px;
                }
            }
            div:nth-child(2){
                display: flex;
                align-items: center;
                padding: 0 20px 0 20px;
                border-top: #ffdb8c 3px solid;
            }
        }
        div:nth-child(5){
            border-top: #baffda 3px solid;
            box-shadow: @shadow;
            div:nth-child(1){
                border-top: #baffda 3px solid;
                height: 100%;
                border-right: @boder;
                line-height: 150px;
                display: flex;
                flex-direction: column;
                P{
                    height: 26px;
                }
            }
            div:nth-child(2){
                display: flex;
                align-items: center;
                padding: 0 20px 0 20px;
                border-top: #baffda 3px solid;
            }
        }
    }
    .contennt-fourth1{
        padding: 0 20px 0 20px;
        background-color: @bgc;
        height: 150px;
        display: flex;
        justify-content: center;
        border: @boder;
        div{
            height: 100%;
            border-bottom: 1px solid #eeeeee;
            border-left: @boder;
            border-right: @boder;
        }
        div:nth-child(1){
            border-top: #ff8689 3px solid;
            box-shadow: @shadow;
            display: flex;
            div:nth-child(1){
                height: 100%;
                border-right: @boder;
                line-height: 150px;
                display: flex;
                flex-direction: column;
                P{
                    height: 26px;
                }
            }
            div:nth-child(2){
                display: flex;
                align-items: center;
                padding: 0 20px 0 20px;
                border-top: #ff8689 3px solid;
            }
        }
        div:nth-child(3) {
            border-top: #ff475b 3px solid;
            box-shadow: @shadow;
            div:nth-child(1){
                height: 100%;
                border-top: #ff475b 3px solid;
                border-right: @boder;
                line-height: 150px;
                display: flex;
                flex-direction: column;
                P{
                    height: 26px;
                }
            }
            div:nth-child(2){
                display: flex;
                align-items: center;
                padding: 0 20px 0 20px;
                border-top: #ff475b 3px solid;
            }
        }
        div:nth-child(5){
            border-top: #0effbb 3px solid;
            box-shadow: @shadow;
            div:nth-child(1){
                border-top: #0effbb 3px solid;
                height: 100%;
                border-right: @boder;
                line-height: 150px;
                display: flex;
                flex-direction: column;
                P{
                    height: 26px;
                }
            }
            div:nth-child(2){
                display: flex;
                align-items: center;
                padding: 0 20px 0 20px;
                border-top: #0effbb 3px solid;
            }
        }
    }

</style>
