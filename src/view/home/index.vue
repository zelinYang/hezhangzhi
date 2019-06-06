<template>
  <div style="display:flex;padding-top:10px;min-width: 1360px">
    <!-- 左边 -->
    <div class="leftContent">
      <div class="weather">
        <div>
          <span>
            <b>当前在线人数</b>
          </span>
          <span>[柳州市]</span>
        </div>
        <div>
          <span>河长：0</span>
          <span>小雨</span>
        </div>
        <div>
          <span>河道专员：0</span>
          <span>20℃~30℃</span>
        </div>
        <div>
          <span>
            <b>今日巡河人数：0</b>
          </span>
          <span v-text="getdate()">时间:2019-05-27</span>
        </div>
      </div>
      <div class="imag">
          <el-carousel height="200px">
              <el-carousel-item v-for="item in imgData" :key="item">
                  <img :src="item" style="width: 100%;height: 100%;" alt="">
              </el-carousel-item>
          </el-carousel>
      </div>
      <div class="news" style="display:flex;justify-content: center;">
        <el-tabs style="width:90%" v-model="activeName1" @tab-click="handleClick">
          <el-tab-pane label="工作动态" class="tabFirst" name="first">
              <div @click="newclick">
              <i class="el-icon-caret-right"></i>
              <div>海安县清水工程达标村推磨拉网式第三次摘牌督查结果公示（顺序从差到好）</div>
              <span>03-27</span>
            </div>
            <div @click="newclick">
              <i class="el-icon-caret-right"></i>
              <div>市级河长徐新民巡视如海河</div>
              <span>03-29</span>
            </div>
            <div @click="newclick">
              <i class="el-icon-caret-right"></i>
              <div>柳州日报：《人民日报》刊发长篇通讯报道我市清水工程探索之路</div>
              <span>03-31</span>
            </div>
            <div @click="newclick">
              <i class="el-icon-caret-right"></i>
              <div>全市畜禽养殖污染治理工作推磨拉网式督查活动顺利开展</div>
              <span>04-02</span>
            </div>
            <div @click="newclick">
              <i class="el-icon-caret-right"></i>
              <div>省纪委副书记江里程一行来海安视察清水工程建设</div>
              <span>04-06</span>
            </div>
            <div @click="newclick">
              <i class="el-icon-caret-right"></i>
              <div>三江县八江乡唐水村通过清水工程达标村验收</div>
              <span>04-10</span>
            </div>
              <div @click="newclick">

                <i class="el-icon-caret-right"></i>
                <div>关于对清水工程长效管理工作不力县实施摘牌和通报批评的决定</div>
                <span>04-11</span>

              </div>
            <div>
              <span style="color: #2f2bff">查看更多>></span>
            </div>
          </el-tab-pane>
          <el-tab-pane label="工作简报" class="tabFirst" name="second">
              <div @click="newclick">
                  <i class="el-icon-caret-right"></i>
                  <div>海安县清水工程达标村推磨拉网式第三次摘牌督查结果公示（顺序从差到好）</div>
                  <span>03-27</span>
              </div>
              <div @click="newclick">
                  <i class="el-icon-caret-right"></i>
                  <div>市级河长徐新民巡视如海河</div>
                  <span>03-29</span>
              </div>
              <div @click="newclick">
                  <i class="el-icon-caret-right"></i>
                  <div>柳州日报：《人民日报》刊发长篇通讯报道我市清水工程探索之路</div>
                  <span>03-31</span>
              </div>
              <div @click="newclick">
                  <i class="el-icon-caret-right"></i>
                  <div>全市畜禽养殖污染治理工作推磨拉网式督查活动顺利开展</div>
                  <span>04-02</span>
              </div>
              <div @click="newclick">
                  <i class="el-icon-caret-right"></i>
                  <div>省纪委副书记江里程一行来海安视察清水工程建设</div>
                  <span>04-06</span>
              </div>
              <div @click="newclick">
                  <i class="el-icon-caret-right"></i>
                  <div>三江县八江乡唐水村通过清水工程达标村验收</div>
                  <span>04-10</span>
              </div>
              <div @click="newclick">

                  <i class="el-icon-caret-right"></i>
                  <div>关于对清水工程长效管理工作不力县实施摘牌和通报批评的决定</div>
                  <span>04-11</span>

              </div>
              <div>
                  <span style="color: #2f2bff">查看更多>></span>
              </div>
          </el-tab-pane>
          <el-tab-pane label="媒体聚焦" class="tabFirst" name="third">
              <div @click="newclick">
                  <i class="el-icon-caret-right"></i>
                  <div>海安县清水工程达标村推磨拉网式第三次摘牌督查结果公示（顺序从差到好）</div>
                  <span>03-27</span>
              </div>
              <div @click="newclick">
                  <i class="el-icon-caret-right"></i>
                  <div>市级河长徐新民巡视如海河</div>
                  <span>03-29</span>
              </div>
              <div @click="newclick">
                  <i class="el-icon-caret-right"></i>
                  <div>柳州日报：《人民日报》刊发长篇通讯报道我市清水工程探索之路</div>
                  <span>03-31</span>
              </div>
              <div @click="newclick">
                  <i class="el-icon-caret-right"></i>
                  <div>全市畜禽养殖污染治理工作推磨拉网式督查活动顺利开展</div>
                  <span>04-02</span>
              </div>
              <div @click="newclick">
                  <i class="el-icon-caret-right"></i>
                  <div>省纪委副书记江里程一行来海安视察清水工程建设</div>
                  <span>04-06</span>
              </div>
              <div @click="newclick">
                  <i class="el-icon-caret-right"></i>
                  <div>三江县八江乡唐水村通过清水工程达标村验收</div>
                  <span>04-10</span>
              </div>
              <div @click="newclick">

                  <i class="el-icon-caret-right"></i>
                  <div>关于对清水工程长效管理工作不力县实施摘牌和通报批评的决定</div>
                  <span>04-11</span>

              </div>
              <div>
                  <span style="color: #2f2bff">查看更多>></span>
              </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="news" style="display:flex;justify-content: center;">
        <el-tabs style="width:90%" v-model="activeName2" @tab-click="handleClick">
          <el-tab-pane label="星级河长" class="tabFirst" name="first">
              <div @click="startsClick">
                  <div>管理员</div>
                  <el-rate v-model="value1231"></el-rate>
              </div>
              <div @click="startsClick">
                  <div>管理员</div>
                  <el-rate v-model="value1231"></el-rate>
              </div>
              <div @click="startsClick">
                  <div>管理员</div>
                  <el-rate v-model="value1231"></el-rate>
              </div>
              <div @click="startsClick">
                  <div>管理员</div>
                  <el-rate v-model="value1231"></el-rate>
              </div>
              <div @click="startsClick">
                  <div>管理员</div>
                  <el-rate v-model="value1231"></el-rate>
              </div>
              <div @click="startsClick">
                  <div>管理员</div>
                  <el-rate v-model="value1231"></el-rate>
              </div>
          </el-tab-pane>
          <el-tab-pane label="星级专管员" class="tabFirst" name="second">
              <div @click="startsClick">
                  <div>管理员</div>
                  <el-rate v-model="value1231"></el-rate>
              </div>
              <div @click="startsClick">
                  <div>管理员</div>
                  <el-rate v-model="value1231"></el-rate>
              </div>
              <div @click="startsClick">
                  <div>管理员</div>
                  <el-rate v-model="value1231"></el-rate>
              </div>
              <div @click="startsClick">
                  <div>管理员</div>
                  <el-rate v-model="value1231"></el-rate>
              </div>
              <div @click="startsClick">
                  <div>管理员</div>
                  <el-rate v-model="value1231"></el-rate>
              </div>
              <div @click="startsClick">
                  <div>管理员</div>
                  <el-rate v-model="value1231"></el-rate>
              </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <!-- 中间 -->
    <el-col :span="19" class="center">
      <div class="m-first" style="position: relative;">
        <div id="map" style="width: 100%;height: 100%;">
<!--          <img src="../../../public/img/1.png" alt="" v-if="istrue" style="width: 100%;height: 100%;">-->
<!--          <img src="../../../public/img/2.png" alt="" v-if="!istrue" style="width: 100%;height: 100%;">-->
        </div>
<!--        <div style="position: absolute;left: 60px;top: 20px;">-->
<!--          <el-radio-group @change="mapChange" v-model="radio123">-->
<!--            <el-radio-button label="1">摄影图</el-radio-button>-->
<!--            <el-radio-button label="2">卫星图</el-radio-button>-->
<!--          </el-radio-group>-->
<!--        </div>-->
        <div style="width: 100px;position: absolute;left: 60px; top: 60px;">
          <el-select v-model="value" placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="m-second" style="padding:20px;margin-top: 10px;">
        <div style="height: 50px;line-height:50px;font-size:1.2em;">
          <b>柳州市专项行动完成情况</b>
        </div>
        <el-tabs v-model="activeName3" @tab-click="handleClick">
          <el-tab-pane label="全面清障" name="first">
            <div style="width:100%;height:100%;display:flex">
              <el-col :span="12">
                <div id="myEcharts" style="width: 25vw;height: 400px;"></div>
              </el-col>
              <el-col :span="12" style="position: relative">
                <div id="myEchartsType" style="width: 25vw;height: 400px;"></div>
                <div style="width: 142px;position: absolute;right: 90px; top: 0;white-space: nowrap;">
                  清障类型：
                  <el-select v-model="value2" placeholder="请选择">
                    <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
            </div>
          </el-tab-pane>
          <el-tab-pane label="生猪污染" name="second">
            <el-col class="right-m" style="display: block">
              <div style>
                <el-col :span="10" class="bottom-second" style="height: 500px; ">
                  <el-col style="font-size: 1.2em">禁养区</el-col>
                  <el-col style="margin-top: 20px"><span>已关闭拆除0.00%</span><span>未关闭拆除0.00%</span></el-col>
                  <el-col><span>消灭生猪0.00%</span><span>存栏生猪0.00%</span></el-col>
                  <el-col style="font-size: 1.2em;margin-bottom: 10px">可养区(250头以上)</el-col>
                  <el-progress :text-inside="true"
                               :stroke-width="18"
                               :show-text="false"
                               style="height: 20px"
                               :percentage="100"
                               status="success">
                  </el-progress>
                  <el-col><span>已关闭拆除100.00%</span><span>未关闭拆除0.00%</span></el-col>
                  <el-progress :text-inside="true"
                               :stroke-width="18"
                               :show-text="false"
                               style="height: 20px"
                               :percentage="100"
                               status="success">
                  </el-progress>
                  <el-col><span>消灭生猪100.00%</span><span>存栏生猪0.00%</span></el-col>
                  <el-col style="font-size: 1.2em;margin-bottom: 10px">可养区(1500-5000头)</el-col>
                  <el-col style="margin-top: 20px"><span>已改造0.00%</span><span>未改造0.00%</span></el-col>
                </el-col>
                <el-col :span="2" style="height: 500px;"></el-col>


                <el-col :span="10" class="bottom-second" style="height: 500px;">
                  <el-col style="font-size: 1.2em">可养区(250头以下)</el-col>
                  <el-col style="margin-top: 20px"><span>已关闭拆除0.00%</span><span>已改造0.00%</span><span>未完成0.00%</span>
                  </el-col>
                  <el-col><span>消灭生猪0.00%</span><span>存栏生猪0.00%</span><span>改造0.00%</span></el-col>
                  <el-col style="font-size: 1.2em;margin-bottom: 10px">可养区(250-1500头)</el-col>
                  <el-col style=""><span>已改造0.00%</span><span>未改造0.00%</span></el-col>
                  <el-col style="height: 20px"></el-col>
                  <el-col style="font-size: 1.2em;margin-bottom: 10px">可养区(5000头以上)</el-col>
                  <el-col style="margin-top: 20px"><span>已改造0.00%</span><span>未改造0.00%</span></el-col>
                </el-col>
              </div>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="黑臭水体" name="third" style="width: 100%;">
            <div style="display: flex; position: relative; margin-top: 30px;">
              <div style="display: flex;">
                <el-col :span="10">
                  <div id="myEchartsPie" style="width: 20vw;height: 400px;"></div>
                </el-col>
                <el-col :span="14">
                  <div id="myEchartsLine" style="width: 30vw;height: 400px;"></div>
                </el-col>
              </div>
              <div class="echartsSelect">
                <label >水体整治：</label>
                <el-select v-model="value5"  style="width: 140px;" placeholder="请选择">
                  <el-option
                          v-for="item in options5"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div></el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
    <!-- 右边 -->
    <div class="rightContent">
      <div class="right-first">
        <div class="title-top">
          <b>柳州市水质概况</b>
        </div>柳州市主要河流水质类型分布情况：（2019年-第0周）
        <div class="right-firstd">
          <div>
            <span @click="startsClick">
              <i></i>Ⅰ类水质
            </span>
            <span @click="startsClick">
              <i></i>Ⅱ类水质
            </span>
            <span @click="startsClick">
              <i></i>Ⅲ类水质
            </span>
          </div>
          <div>
            <span @click="startsClick">
              <i></i>Ⅳ类水质
            </span>
            <span @click="startsClick">
              <i></i>Ⅴ类水质
            </span>
            <span @click="startsClick">
              <i></i>Ⅵ类水质
            </span>
          </div>
          <div>数据来源：环卫厅公开数据</div>
        </div>
      </div>

      <div class="right-secondd">
        <b>柳州市事件类型分布情况</b>
        <div>
          本月柳州市上报事件共1件，事件类型分布情况如下图所示，其中重点问题类型为
          <a href="#">河道有垃圾</a>
        </div>
        <div>
          <div id="main" style="min-width: 200px; height: 300px;"></div>
        </div>
      </div>
      <div class="right-fourth">
        <div>
          <b>河道专员巡河完成率</b>
        </div>
        <div style="margin-top: 20px">
          <el-col :span="6" class="rf-left">
            <div @click="startsClick">城中区</div>
            <div @click="startsClick">鱼峰区</div>
            <div @click="startsClick">柳南区</div>
            <div @click="startsClick">柳北区</div>
            <div @click="startsClick">柳江区</div>
            <div @click="startsClick">鹿寨县</div>
            <div @click="startsClick">柳城县</div>
            <div @click="startsClick">融水县</div>
            <div @click="startsClick">融安县</div>
            <div @click="startsClick">三江县</div>
          </el-col>
          <el-col :span="18" class="rf-right">
            <div>0.0%</div>
            <div style="display: flex;justify-content:flex-end">0.0%</div>
            <div>0.0%</div>
            <div>0.0%</div>
            <div>0.0%</div>
            <div>0.0%</div>
            <div>0.0%</div>
            <div>0.0%</div>
            <div>0.0%</div>
            <div>0.0%</div>
          </el-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    // const BMap = require('BMap');
    // import BMap from 'BMap'
  const data = require("../../../public/data/echartsData.js");
  let echarts = require("echarts");
  export default {
    name: "index",
    data() {
      return {
        imgData:[],
        activeName1: "first",
        activeName2: "first",
        activeName3: "first",
        radio123: '1',
          dialogVisible: false,
          value1231: 5,
        istrue: true,
          tableData1:[],
        value: '',
        options: [
          {
            label: '水质',
            value: 1
          },
          {
            label: '污染源',
            value: 2
          },
          {
            label: '水利工程',
            value: 3
          },
          {
            label: '生态流量',
            value: 5
          },
          {
            label: '取水口',
            value: 6
          },
          {
            label: '排污口',
            value: 7
          },
          {
            label: '水量',
            value: 8
          },
          {
            label: '雨情',
            value: 9
          },
          {
            label: '水位',
            value: 10
          },
          {
            label: '公示牌',
            value: 11
          },
        ],
        value2: '',
        options1:[
          {
            label: '违章建筑',
            value: 1
          },
          {
            label: '餐饮、娱乐等',
            value: 2
          },
          {
            label: '弃土废渣等',
            value: 3
          },
          {
            label: '违章建筑',
            value: 4
          },
          {
            label: '洗沙治沙等',
            value: 5
          }
        ],
        value5: '',
        options5: [
          {
            label: '前期整治',
            value: 1,
          },
          {
            label: '实施整治',
            value: 2,
          },
          {
            label: '完工整治',
            value: 3,
          },
        ],
        number:0
      };
    },
    methods: {
        newclick(){
            this.$message({
                message: '页面正在开发中',
                type: 'warning'
            });
        },
        startsClick(){
            this.$message({
                message: '功能正在开发中',
                type: 'warning'
            });
        },
        handleClose(){
            this.dialogVisible = false
        },
      handleClick() {
          this.getEchartData()
      },
      getEchartData() {
        // 右边第一个
        const myech = document.getElementById("main");
        let cate = data.default.pieData1;
        // this.rander(myech, cate);
        let myecha = echarts.init(myech);
        myecha.setOption(cate);
        //底部第一个echarts
        const myec = document.getElementById("myEcharts");
        console.log(myec);
        let cate1 = data.default.cateData;

        let catea = echarts.init(myec);
        catea.setOption(cate1);
        // this.rander(myec, cate1);
        // 底部第二个echarts
        const myecType = document.getElementById("myEchartsType");
        let cate2 = data.default.cateData2;
        let catea2 = echarts.init(myecType);
        catea2.setOption(cate2);


        const ecpie = document.getElementById('myEchartsPie')
        let ecData = data.default.pieData2;
        let ecInit = echarts.init(ecpie);
        ecInit.setOption(ecData);


        const ecline = document.getElementById('myEchartsLine')
        let ecData1 = data.default.lineData;
        let ecInit1 = echarts.init(ecline);
        ecInit1.setOption(ecData1);
        // this.rander(myecType, cate2);


          // echarts缩放
        window.onresize = function () {
          catea.resize();
          catea2.resize();
          myecha.resize();
          ecInit.resize();
          ecInit1.resize();
          // .resize后加括号哦，这里还可以写其他的事件
        }
      },
      // mapChange(i){
      //   console.log(i)
      //   if(i === '1'){
      //     this.istrue = true;
      //   }else {
      //     this.istrue = false;
      //   }
      //   console.log(this.istrue)
      // },
      // 渲染
      // rander(el, option) {
      //   // 初始化
      //   let echart = echarts.init(el);
      //   // 渲染
      //   echart.setOption(option);
      //
      // },


      createMap() {
        /* eslint-disable */
        // 创建Map实例
        var map = new BMap.Map("map");
        // 初始化地图,设置中心点坐标和地图级别
        map.centerAndZoom(new BMap.Point(109.434425, 24.331961), 11);
        //添加地图类型控件
          map.addControl(new BMap.MapTypeControl({
              mapTypes:[BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
              offset: new BMap.Size(60, 10),
              anchor: BMAP_ANCHOR_TOP_LEFT

          }));

          map.addControl(new BMap.NavigationControl({
              type: BMAP_NAVIGATION_CONTROL_ZOOM,
              anchor:BMAP_ANCHOR_TOP_LEFT
          }));
          // 设置地图显示的城市 此项是必须设置的
        map.setCurrentCity("柳州");
        //开启鼠标滚轮缩放
        map.enableScrollWheelZoom(true);
        /* eslint-enable */
      },
      getdate(){
        const date = new Date();
        let YY = date.getFullYear();
        let MM = date.getMonth() < 10? `0${date.getMonth() + 1}` :  date.getMonth() + 1;
        let DD = date.getDate() < 10? `0${date.getDate()}` :  date.getDate()

        return `时间：${YY}-${MM}-${DD}`
      },

        getTreeData() {

            this.axios.get('data/tableData.json').then(res => {
                this.tableData1 = res.data
                console.log(res.data)
            }).catch(err => {
                console.log(`错误${err}`)
            })
        },
        getImgData(){
            this.axios.get('data/imgData.json').then(res => {
                this.imgData = res.data
                console.log(res.data);
            }).catch(err => {
                console.log(`错误:${err}`);
            })
        }
    },
    mounted() {
      this.createMap();
      this.getEchartData();
      this.getImgData();
      console.log(data.default.cateData);
    }
  };
</script>

<style>
    .BMap_noprint>div>div{
        height: 30px;
        width: 50px;
        line-height: 30px !important;
    }
</style>
<style scoped lang="less">
  .tabFirst>div{
    display: flex;
    height: 40px;
    position: relative;
    align-items: center;
  }
  .tabFirst>div:hover{
    color: #1793e6 !important;
      cursor: pointer;
  }
  .tabFirst>div:hover>span{
    color: #1793e6 !important;
  }
  .tabFirst>div>span{
    position: absolute;
    right: 10px;
    color: #cccccc;
  }
  .tabFirst>div>div{
    width: 72%;
    height: 23px;
    overflow :hidden
  }
  #main {
    height: 450px;
    width: 300px;
  }
  @bgc: #FFF;


  @bgc: #fff;
  @shade: 1px 2px 5px rgb(170, 170, 170);
  .leftContent,
  .rightContent {
    max-width: 350px;
    min-width: 300px;
    min-height: 85vh;
    margin-left: 10px;
    margin-right: 10px;
  }
  .center {
    min-height: 85vh;
    min-width: 886px;
  }

  .leftContent {
    .weather {
      min-height: 200px;
      box-shadow: @shade;
      background-color: #8ba5ee;
      text-align: center;
      div {
        display: flex;
        justify-content: space-between;
        height: 30px;
        line-height: 30px;
        color: #fff;
        padding-left: 10px;
        padding-top: 10px;
        padding-right: 10px;
      }
      div:nth-child(1) {
        height: 40px;
        span:nth-child(1) {
          font-size: 1.1em;
        }
      }
      div:nth-child(4) {
        height: 40px;
        span:nth-child(1) {
          font-size: 1.1em;
        }
      }
    }
    .imag {
      height: 200px;
      box-shadow: @shade;
      margin-top: 10px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .news {
      width: 100%;
      min-height: 400px;
      box-shadow: @shade;
      margin-top: 10px;
      background-color: @bgc;
    }
  }

  .rightContent {
    .right-first {
      height: 230px;
      background-color: #fff;
      padding: 20px;
      box-shadow: @shade;
      .title-top {
        height: 20px;
        width: 100%;
        font-size: 1.2em;
        padding-bottom: 20px;
      }
      .right-firstd {
        background-color: #fff;
        margin-top: 16px;
        height: 110px;
        div {
          height: 25px;
          display: flex;
          padding: 0;
          white-space: nowrap;
          justify-content: space-around;
          span {
            i {
              display: inline-block;
              width: 10px;
              height: 10px;
                margin-right: 3px;
            }
          }
            span:hover{
                cursor: pointer;
                color: #1793e6 !important; ;
            }
        }
        div:nth-child(1) {
          span:nth-child(1) {
            i {
              background-color: rgb(190, 94, 94);
            }
          }
          span:nth-child(2) {
            i {
              background-color: rgb(108, 219, 126);
            }
          }
          span:nth-child(3) {
            i {
              background-color: rgb(115, 166, 224);
            }
          }
        }
        div:nth-child(2) {
          span:nth-child(1) {
            i {
              background-color: rgb(106, 224, 122);
            }
          }
          span:nth-child(2) {
            i {
              background-color: rgb(236, 112, 129);
            }
          }
          span:nth-child(3) {
            i {
              background-color: rgb(224, 173, 115);
            }
          }
        }
        div:nth-child(3) {
          margin-top: 20px;
          text-align: right;
          display: flex;
          justify-content: flex-end;
          color: #666;
        }
      }
    }
    .right-secondd {
      box-shadow: @shade;
      padding: 10px;
      margin-top: 10px;
      background-color: #fff;
      div:nth-child(1) {
        font-size: 1.2em;
        height: 25px;
      }
      div:nth-child(2) {
        margin-top: 20px;
        height: 50px;
      }
      div:nth-child(3) {
        margin-top: 20px;
        height: 400px;
      }
    }
    .right-fourth {
      box-shadow: @shade;
      margin-top: 10px;
      height: 380px;
      background-color: #fff;
      padding: 15px;
      div:nth-child(1) {
        height: 25px;
      }
      div:nth-child(2) {
        height: 344px;
        display: flex;
        div {
          height: 100%;
          div {
            height: 35px;
          }
        }
        .rf-left {
          div {
            text-align: left;
          }
            div:hover{
                color: #1793e6;
                cursor: pointer;
            }
        }
        .rf-right {
          display: flex;
          flex-direction: column;
          border-left: #d9d9d9 1px solid;
          div {
            text-align: right;
            color: #2f2bff;
          }
            div:hover{
                color: #1793e6;
                cursor: pointer;
            }
        }
      }
    }
  }



  .center {
    .m-first {
      width: 100%;
      height: 600px;
      box-shadow: @shade;
      background-color: #fff;
    }
    .m-second {
      margin-top: 10px;
      min-height: 580px;
      box-shadow: @shade;
      background-color: #fff;
    }
  }

  .bottom-second {
    div {
      height: 50px;
      display: flex;
      padding: 0 10px 0 10px;
      justify-content: space-between;

      span {
        color: #8c939d;
      }
    }
  }
</style>
