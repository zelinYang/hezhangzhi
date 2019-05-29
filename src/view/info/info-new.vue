<template>
    <div>
        <div id="map"></div>
        <div class="left-side">
            <div class="left-side-first">
                <el-tag
                        v-for="tag in tags"
                        :key="tag.name"
                        closable
                        :type="tag.type">
                    {{tag.name}}
                </el-tag>
            </div>
            <div class="left-side-second">
                <el-tabs type="border-card">
                    <el-tab-pane label="" class="werr">
                        <span slot="label"><i class="el-icon-s-unfold"></i> 选择图层</span>
                        <div style="padding-right: 22px">
                            <el-switch
                                    style="display: block"
                                    v-model="valuesw0"
                                    active-text="水质">
                            </el-switch>
                            <el-switch
                                    style="display: block"
                                    v-model="valuesw1"
                                    active-text="污染源">
                            </el-switch>
                        </div>
                        <div style="padding-right: 10px">
                        <el-switch
                                style="display: block"
                                v-model="valuesw1"
                                active-text="水利工程">
                        </el-switch>
                        <el-switch
                                style="display: block"
                                v-model="valuesw1"
                                active-text="生态流量">
                        </el-switch>
            </div>
            <div style="padding-right: 22px">
                <el-switch
                        style="display: block"
                        v-model="valuesw1"
                        active-text="排污口">
                </el-switch>
                <el-switch
                        style="display: block"
                        v-model="valuesw1"
                        active-text="取水口">
                </el-switch>
            </div>
            <div style="padding-right: 37px">
                <el-switch
                        style="display: block"
                        v-model="valuesw1"
                        active-text="水位">
                </el-switch>
                <el-switch
                        style="display: block"
                        v-model="valuesw1"
                        active-text="雨情">
                </el-switch>
            </div>
            <div style="padding-right: 22px">
                <el-switch
                        style="display: block"
                        v-model="valuesw1"
                        active-text="水量">
                </el-switch>
                <el-switch
                        style="display: block"
                        v-model="valuesw1"
                        active-text="公示牌">
                </el-switch>
            </div>
            </el-tab-pane>
            </el-tabs>

        </div>
        <div class="left-side-third">
            <el-tabs type="border-card" style="height: 100%">
                <el-tab-pane label="" class="werty">
                    <span slot="label"><i class="el-icon-s-unfold"></i> 选择区域</span>
                    <div class="left-side3-item">
                        <span>柳州市</span>
                        <el-radio v-model="radio" label="1"></el-radio>
                    </div>
                    <div>
                        <span>城中区</span>
                        <el-radio v-model="radio" label="2"></el-radio>
                    </div>
                    <div>
                        <span>鱼峰区</span>
                        <el-radio v-model="radio" label="3"></el-radio>
                    </div>
                    <div>
                        <span>柳南区</span>
                        <el-radio v-model="radio" label="4"></el-radio>
                    </div>
                    <div>
                        <span>柳北区</span>
                        <el-radio v-model="radio" label="5"></el-radio>
                    </div>
                    <div>
                        <span>柳江区</span>
                        <el-radio v-model="radio" label="6"></el-radio>
                    </div>
                    <div>
                        <span>鹿寨县</span>
                        <el-radio v-model="radio" label="7"></el-radio>
                    </div>
                    <div>
                        <span>柳城县</span>
                        <el-radio v-model="radio" label="8"></el-radio>
                    </div>
                    <div>
                        <span>融安县</span>
                        <el-radio v-model="radio" label="9"></el-radio>
                    </div>
                    <div>
                        <span>三江侗族自治县</span>
                        <el-radio v-model="radio" label="10"></el-radio>
                    </div>
                    <div>
                        <span>融水苗族自治县</span>
                        <el-radio v-model="radio" label="11"></el-radio>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
    <div class="right-bottom">
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-water-cup"></i></span>
                <span class="card-text">水质</span>
                <span style="color: #00CED1">I类水质</span>
                <span style="color: #81d14d">II类水质</span>
                <span style="color: #d1cd59">III类水质</span>
                <span style="color: #d1b05d">IV类水质</span>
                <span style="color: #d17f62">V类水质</span>
                <span style="color: #d13532">劣V类水质</span>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-help"></i></span>
                <span class="card-text">污染源</span>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-guide"></i> </span>
                <span class="card-text">水利工程</span>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-picture-outline-round"></i></span>
                <span class="card-text">生态流量</span>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-receiving"></i></span>
                <span class="card-text">排污口</span>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-wind-power"></i></span>
                <span class="card-text">取水口</span>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-ship"></i></span>
                <span class="card-text">水位</span>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-heavy-rain"></i></span>
                <span class="card-text">雨情</span>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-moon-night"></i></span>
                <span class="card-text">水量</span>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-data-board"></i></span>
                <span class="card-text">公示牌</span>
            </el-tab-pane>
        </el-tabs>
        <div class="end-clos">
            <i class="el-icon-close"></i>
        </div>
    </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend({
        name: 'info-new',
        data() {
            return {
                tags: [
                    {name: '关闭预警', type: ''}
                ],
                valuesw1: true,
                valuesw0: true,
                radio: '1',
            }
        }

    })
</script>
<style>
    .el-radio__label {
        display: none;
    }
</style>
<style>
    .el-switch__label {
        vertical-align: baseline;
    }
    .el-tabs--border-card {
        height: 100%;
    }
</style>

<style scoped lang="less">
    .left-side3-item {
        padding-left: 10px !important;
    }

    @border: 3px #4169E1 solid;
    @shadow: 1px 1px 10px #909399;
    .werr > div {
        display: flex;
        box-shadow: 0 0 0;
        min-height: 6.5vh;
        justify-content: space-between;
    }

    .werr {
        box-shadow: 0 0 0;
        height: 100%;
    }

    .werty > div {
        display: flex;
        justify-content: space-between;
        padding-left: 30px;
        height: 3.5vh;
    }

    .left-side {
        max-width: 280px;
        min-width: 280px;
        min-height: 90vh;
        position: fixed;
        left: 10px;
        top: 70px;

    }

    .left-side > div {
        box-shadow: @shadow;
        margin-bottom: 10px;
    }

    .left-side-first {
        height: 50px;
        padding: 10px 10px 0 10px;
        line-height: 40px;
        background-color: #fff;
        border-top: @border;
    }

    .left-side-second {
        border-top: @border;
        min-height: 300px;
        height: 40vh;
    }

    .left-side-third {
        min-height: 400px;
        height: 45vh;
        border-top: @border;
    }

    .left-side-third > div {

    }

    .left-side-second > div {
        height: 100%;
    }

    .right-bottom {
        height: 90px;
        width: 700px;
        position: fixed;
        right: 0;
        bottom: 20px;
        display: flex;
        justify-content: flex-end;
    }

    .card-text {
        color: #409EFF;
        margin-right: 20px;
    }

    .card-text ~ span {
        margin-right: 20px;
    }

    .end-clos {
        width: 15px;
        height: 100%;
        background-color: #fff;
    }

    .end-clos:hover {
        cursor: pointer;
    }

    .card-text ~ span:hover {
        cursor: pointer;
        color: #409EFF !important;
    }

</style>
