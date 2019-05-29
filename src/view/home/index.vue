<template>
  <div style="display:flex;padding-top:30px">
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
          <span>时间:2019-05-27</span>
        </div>
      </div>
      <div class="imag">
        <img
          src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1558961087&di=0d47c994ed295bd779f83a89fac282a3&src=http://img0.ph.126.net/NFlgs9HTW4OB6847sge4UQ==/6630914933584550001.jpg"
          alt
        >
      </div>
      <div class="news" style="display:flex;justify-content: center;">
        <el-tabs style="width:90%" v-model="activeName1" @tab-click="handleClick">
          <el-tab-pane label="工作动态" name="first">工作动态</el-tab-pane>
          <el-tab-pane label="工作简报" name="second">工作简报</el-tab-pane>
          <el-tab-pane label="媒体聚焦" name="third">媒体聚焦</el-tab-pane>
        </el-tabs>
      </div>
      <div class="news" style="display:flex;justify-content: center;">
        <el-tabs style="width:90%" v-model="activeName2" @tab-click="handleClick">
          <el-tab-pane label="星级河长" name="first">星级河长</el-tab-pane>
          <el-tab-pane label="星级专管员" name="second">星级专管员</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- 中间 -->
    <el-col :span="19" class="center">
      <div class="m-first">
        <div id="map"></div>
        此处放水系地图
      </div>
      <div style="padding:20px">
        <div style="height: 50px;line-height:50px;font-size:1.2em;">
          <b>柳州市专项行动完成情况</b>
        </div>
        <el-tabs v-model="activeName3" @tab-click="handleClick">
          <el-tab-pane label="全面清障" name="first">
            <div style="width:100%;height:100%;display:flex">
              <el-col>
                <div id="myEcharts" style="width: 30vw;height: 400px;"></div>
              </el-col>
              <el-col style="position: relative">
                <div id="myEchartsType" style="width: 30vw;height: 400px;"></div>

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
          <el-tab-pane label="黑臭水体" name="third">角色管理</el-tab-pane>
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
            <span>
              <i></i>Ⅰ类水质
            </span>
            <span>
              <i></i>Ⅱ类水质
            </span>
            <span>
              <i></i>Ⅲ类水质
            </span>
          </div>
          <div>
            <span>
              <i></i>Ⅳ类水质
            </span>
            <span>
              <i></i>Ⅴ类水质
            </span>
            <span>
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
          <div id="main"style="width: 300px; height: 450px;"></div>
        </div>
      </div>
      <div class="right-fourth">
        <div>
          <b>河道专员巡河完成率</b>
        </div>
        <div>
          <el-col :span="8" class="rf-left">
            <div>城中区</div>
            <div>鱼峰区</div>
            <div>柳南区</div>
            <div>柳北区</div>
            <div>柳江区</div>
            <div>鹿寨县</div>
            <div>柳城县</div>
            <div>融水县</div>
            <div>融安县</div>
            <div>三江县</div>
          </el-col>
          <el-col :span="16" class="rf-right">
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
import BMap from 'BMap'
const data = require("../../../public/data/echartsData.js");
let echarts = require("echarts");
export default {
  name: "index",
  data() {
    return {
      activeName1: "first",
      activeName2: "first",
      activeName3: "first"
    };
  },
  methods: {
    handleClick() {},
    getEchartData() {
      // 右边第一个
      const myech = document.getElementById("main");
      let cate = data.default.pieData1;
      this.rander(myech, cate);
      //底部第一个echarts
      const myec = document.getElementById("myEcharts");
      let cate1 = data.default.cateData;
      this.rander(myec, cate1);
      // 底部第二个echarts
      const myecType = document.getElementById("myEchartsType");
      let cate2 = data.default.cateData2;
      this.rander(myecType, cate2);
    },
    // 渲染
    rander(el, option) {
      // 初始化
      let echart = echarts.init(el);
      // 渲染
      echart.setOption(option);
    },

    // createMap() {
    //   /* eslint-disable */
    //   // 创建Map实例
    //   var map = new BMap.Map("map");
    //   // 初始化地图,设置中心点坐标和地图级别
    //   map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    //   //添加地图类型控件
    //   //   map.addControl(new BMap.MapTypeControl({
    //   //     mapTypes:[BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    //   //   }))
    //   // 设置地图显示的城市 此项是必须设置的
    //   map.setCurrentCity("北京");
    //   //开启鼠标滚轮缩放
    //   map.enableScrollWheelZoom(true);
    //   /* eslint-enable */
    // }
  },
  mounted() {
    // this.createMap();
    this.getEchartData();
    console.log(data.default.cateData);
  }
};
</script>

<style scoped lang="less">
#main {
  height: 450px;
  width: 300px;
}

.bottom-second>span{

}

@bgc: #fff;
@shade: 1px 2px 5px rgb(170, 170, 170);
.leftContent,
.rightContent {
  max-width: 350px;
  min-width: 350px;
  min-height: 85vh;
  margin-left: 10px;
  margin-right: 10px;
  background-color: @bgc;
  box-shadow: @shade;
}
.center {
  min-height: 85vh;
  min-width: 400px;
  background-color: @bgc;
  box-shadow: @shade;
}

.leftContent {
  .weather {
    min-width: 350px;
    min-height: 200px;
    box-shadow: @shade;
    background-color: #8ba5ee;
    text-align: center;
    div {
      display: flex;
      justify-content: space-between;
      height: 30px;
      line-height: 30px;
      width: 330px;
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
    width: 350px;
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
    width: 310px;
    height: 230px;
    padding: 20px;
    box-shadow: @shade;
    .title-top {
      height: 20px;
      width: 100%;
      font-size: 1.2em;
      padding-bottom: 20px;
    }
    .right-firstd {
      margin-top: 20px;
      height: 110px;
      padding: 20px;
      div {
        height: 25px;
        display: flex;
        justify-content: space-around;
        span {
          i {
            display: inline-block;
            width: 10px;
            height: 10px;
          }
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
    height: 400px;
    padding: 15px;
    div:nth-child(1) {
      height: 25px;
    }
    div:nth-child(2) {
      height: 360px;
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
      }
      .rf-right {
        display: flex;
        flex-direction: column;
        border-left: #d9d9d9 1px solid;
        div {
          text-align: right;
        }
      }
    }
  }
}

.center {
  .m-first {
    width: 100%;
    min-height: 600px;
    box-shadow: @shade;
  }
  .m-second {
    margin-top: 10px;
    min-height: 300px;
    box-shadow: @shade;
    min-width: 100%;
  }
}
</style>
