<template>
  <div id="app">
    <div class="header">平台数据统计</div>
    <div class="body">
      <!-- 左 -->
      <div class="left">
        <div class="left-top">
          <div class="title relative">
            <span>工会组织登记</span>
            <div class="left-top-title">
              <div class="left-top-item mr-8">
                <span class="circle-line" style="background-color: #11c0ff;"></span>
                <span class="circle" style="background-color: #11c0ff;"></span>
                <span class="circle-line mr-1" style="background-color: #11c0ff;"></span>
                <span class="fs-2">基层以上工会</span>
              </div>
              <div class="left-top-item mr-8">
                <span class="circle-line" style="background-color: #ffbb29;"></span>
                <span class="circle" style="background-color: #ffbb29;"></span>
                <span class="circle-line mr-1" style="background-color: #ffbb29;"></span>
                <span class="fs-2">基层工会</span>
              </div>
              <div class="left-top-item">
                <span class="circle-line" style="background-color: #ff5550;"></span>
                <span class="circle" style="background-color: #ff5550;"></span>
                <span class="circle-line mr-1" style="background-color: #ff5550;"></span>
                <span class="fs-2">工会干部</span>
              </div>
            </div>
          </div>
          <div class="content" ref="leftTop"></div>
        </div>
        <div class="left-bottom">
          <div class="title">工会会员</div>
          <div class="content">
            <div class="flex align-center h-33">
              <div class="flex-1 flex column align-center fs-2">
                <span class="circle-icon icon-huiyuan" style="background-color: #e23e61;"></span>
                <span class="mt-1 mb-1">批量导入会员</span>
                <span class="mb-2"><span class="fs-3" style="color: #e23e61;">1000</span>人</span>
                <div class="flex align-center">
                  <span class="circle-line" style="background-color: #e23e61;"></span>
                  <span class="circle" style="background-color: #e23e61;"></span>
                  <span class="circle-line mr-1" style="background-color: #e23e61;"></span>
                  <span>批量导入会员</span>
                </div>
              </div>
              <div class="flex-1 flex column align-center fs-2">
                <span class="circle-icon icon-huiyuan" style="background-color: #1cbdae;"></span>
                <span class="mt-1 mb-1">实名注册会员</span>
                <span class="mb-2"><span class="fs-3" style="color: #1cbdae;">1000</span>人</span>
                <div class="flex align-center">
                  <span class="circle-line" style="background-color: #1cbdae;"></span>
                  <span class="circle" style="background-color: #1cbdae;"></span>
                  <span class="circle-line mr-1" style="background-color: #1cbdae;"></span>
                  <span>实名注册会员</span>
                </div>
              </div>
              <div class="flex-1 flex column align-center fs-2">
                <span class="circle-icon icon-huiyuan" style="background-color: #f0a61f;"></span>
                <span class="mt-1 mb-1">实名注册用户</span>
                <span class="mb-2"><span class="fs-3" style="color: #f0a61f;">1000</span>人</span>
                <div class="flex align-center">
                  <span class="circle-line" style="background-color: #f0a61f;"></span>
                  <span class="circle" style="background-color: #f0a61f;"></span>
                  <span class="circle-line mr-1" style="background-color: #f0a61f;"></span>
                  <span>实名注册用户</span>
                </div>
              </div>
            </div>
            <div class="h-33" ref="leftBottomCenter"></div>
            <div class="h-33" ref="leftBottomBottom"></div>
          </div>
        </div>
      </div>
      <!-- 中 -->
      <div class="center">
        <div class="center-top">
          <div class="center-top-item">
            <div class="fs-6 fw-600" style="color: #ffa881;">16,012</div>
            <div class="fs-3">工会总数</div>
            <span class="line"></span>
          </div>
          <div class="center-top-item">
            <div class="fs-6 fw-600" style="color: #feff9a;">30,000,000</div>
            <div class="fs-3">会员总数</div>
            <span class="line"></span>
          </div>
          <div class="center-top-item">
            <div class="fs-6 fw-600" style="color: #a0ffa4;">916,012</div>
            <div class="fs-3">用户总数</div>
          </div>
        </div>
        <div class="center-center" ref="centerCenter"></div>
        <div class="center-bottom">
          <div class="title relative">
            <span>《工会》APP</span>
            <select class="select" style="position:absolute;top:120%;right:1.5%;">
              <option value="">2019年10月</option>
            </select>
          </div>
          <div class="content" ref="centerBottom"></div>
        </div>
      </div>
      <!-- 右 -->
      <div class="right">
        <div class="title">下一级工会</div>
        <div class="content">
          <div class="right-top">
            <div class="right-top-top">
              <div class="flex">
                <select class="select flex-1 mr-4 ml-4">
                  <option value="" selected>市总工会</option>
                </select>
                <select class="select flex-1 mr-4">
                  <option value="" selected>区总工会</option>
                </select>
                <select class="select flex-1 mr-4">
                  <option value="" selected>全部</option>
                </select>
              </div>
              <div class="flex justify-center">
                <div class="flex justify-center align-center mr-8">
                  <span class="circle-line" style="background-color: #bdff70;"></span>
                  <span class="circle" style="background-color: #bdff70;"></span>
                  <span class="circle-line mr-1" style="background-color: #bdff70;"></span>
                  <span class="fs-2">基层以上工会</span>
                </div>
                <div class="flex justify-center align-center mr-8">
                  <span class="circle-line" style="background-color: #3ef4ff;"></span>
                  <span class="circle" style="background-color: #3ef4ff;"></span>
                  <span class="circle-line mr-1" style="background-color: #3ef4ff;"></span>
                  <span class="fs-2">基层工会</span>
                </div>
                <div class="flex justify-center align-center">
                  <span class="circle-line" style="background-color: #d56fff;"></span>
                  <span class="circle" style="background-color: #d56fff;"></span>
                  <span class="circle-line mr-1" style="background-color: #d56fff;"></span>
                  <span class="fs-2">工会干部</span>
                </div>
              </div>
            </div>
            <div class="right-top-bottom" ref="rightTopBottom"></div>
          </div>
          <div class="right-bottom">
            <div class="right-bottom-title title">&nbsp;&nbsp;工会会员&nbsp;&nbsp;</div>
            <div style="height: calc(100% - 1.2rem);">
              <div class="flex align-center h-33">
                <div class="flex-1 flex column align-center fs-2">
                  <span class="circle-icon icon-huiyuan" style="background-color: #ff5dc4;"></span>
                  <span class="mt-1 mb-1">批量导入会员</span>
                  <span class="mb-2"><span class="fs-3" style="color: #ff5dc4;">1000</span>人</span>
                  <div class="flex align-center">
                    <span class="circle-line" style="background-color: #ff5dc4;"></span>
                    <span class="circle" style="background-color: #ff5dc4;"></span>
                    <span class="circle-line mr-1" style="background-color: #ff5dc4;"></span>
                    <span>批量导入会员</span>
                  </div>
                </div>
                <div class="flex-1 flex column align-center fs-2">
                  <span class="circle-icon icon-huiyuan" style="background-color: #33ebc2;"></span>
                  <span class="mt-1 mb-1">实名注册会员</span>
                  <span class="mb-2"><span class="fs-3" style="color: #33ebc2;">1000</span>人</span>
                  <div class="flex align-center">
                    <span class="circle-line" style="background-color: #33ebc2;"></span>
                    <span class="circle" style="background-color: #33ebc2;"></span>
                    <span class="circle-line mr-1" style="background-color: #33ebc2;"></span>
                    <span>实名注册会员</span>
                  </div>
                </div>
                <div class="flex-1 flex column align-center fs-2">
                  <span class="circle-icon icon-huiyuan" style="background-color: #9570ff;"></span>
                  <span class="mt-1 mb-1">实名注册用户</span>
                  <span class="mb-2"><span class="fs-3" style="color: #9570ff;">1000</span>人</span>
                  <div class="flex align-center">
                    <span class="circle-line" style="background-color: #9570ff;"></span>
                    <span class="circle" style="background-color: #9570ff;"></span>
                    <span class="circle-line mr-1" style="background-color: #9570ff;"></span>
                    <span>实名注册用户</span>
                  </div>
                </div>
              </div>
              <div class="h-33" ref="rightBottomCenter"></div>
              <div class="h-33" ref="rightBottomBottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vue-particles class="particles" color="#dedede" />
  </div>
</template>

<script>
import guangdong from '@/utils/guangdong'
export default {
  name: 'App',
  data() {
    return {
      leftTop: null,
      leftBottomCenter: null,
      leftBottomBottom: null,
      centerCenter: null,
      centerBottom: null,
      rightTopBottom: null,
      rightBottomCenter: null,
      rightBottomBottom: null
    }
  },
  created() {
    window.addEventListener('resize', () => {
      this.leftTop.resize()
      this.leftBottomCenter.resize()
      this.leftBottomBottom.resize()
      this.centerCenter.resize()
      this.centerBottom.resize()
      this.rightTopBottom.resize()
      this.rightBottomCenter.resize()
      this.rightBottomBottom.resize()
    })
  },
  mounted() {
    setTimeout(() => {
      this.renderLeftTop()
      this.renderLeftBottomCenter()
      this.renderLeftBottomBottom()
      this.renderCenterCenter()
      this.renderCenterBottom()
      this.renderRightTopBottom()
      this.renderRightBottomCenter()
      this.renderRightBottomBottom()
    }, 100)
  },
  beforeDestroy() {
    window.removeEventListener('resize', () => {})
  },
  methods: {
    renderLeftTop() {
      this.leftTop = this.$echarts.init(this.$refs.leftTop)
      this.leftTop.setOption({
        grid: {
          top: '30%',
          right: '10%',
          bottom: '15%',
          left: '15%'
        },
        xAxis: {
          data: ['基层以上工会', '基层工会', '工会干部'],
          axisLine: { lineStyle: { color: '#fff' } }
        },
        yAxis: {
          axisLine: { lineStyle: { color: '#fff' } }
        },
        series: [
          {
            type: 'bar',
            data: [
              { name: '基层以上工会', value: 1000, itemStyle: { color: '#11c0ff' } },
              { name: '基层工会', value: 1100, itemStyle: { color: '#ffbb29' } },
              { name: '工会干部', value: 820, itemStyle: { color: '#ff5550' } }
            ],
            barWidth: '25%'
          }
        ],
        textStyle: {
          color: '#fff'
        }
      })
    },
    renderLeftBottomCenter() {
      this.leftBottomCenter = this.$echarts.init(this.$refs.leftBottomCenter)
      this.leftBottomCenter.setOption({
        grid: {
          top: '5%',
          right: '5%',
          bottom: '5%',
          left: '5%'
        },
        xAxis: {
          show: false,
          type: 'value',
          max: 2000,
          axisLine: { lineStyle: { color: '#fff' } }
        },
        yAxis: {
          type: 'category',
          axisLine: { lineStyle: { color: '#fff' } }
        },
        series: [
          {
            type: 'bar',
            data: [
              { name: '工会干部', value: 890, itemStyle: { color: '#f0a61f' } },
              { name: '基层工会', value: 750, itemStyle: { color: '#1cbdae' } },
              { name: '基层以上工会', value: 1000, itemStyle: { color: '#e23e61' } }
            ],
            barWidth: '50%'
          }
        ],
        textStyle: {
          color: '#fff'
        }
      })
    },
    renderLeftBottomBottom() {
      this.leftBottomBottom = this.$echarts.init(this.$refs.leftBottomBottom)
      this.leftBottomBottom.setOption({
        series: [
          {
            name: '实名注册会员性别比例',
            type: 'pie',
            radius: ['45%', '90%'],
            label: { show: true, position: 'outside' },
            labelLine: { show: true },
            data: [
              { value: 50, name: '男会员: 50%', itemStyle: { color: '#33ecff' } },
              { value: 50, name: '女会员: 50%', itemStyle: { color: '#d164ff' } }
            ],
            right: '60%',
            left: '15%'
          },
          {
            name: '实名注册用户性别比例',
            type: 'pie',
            radius: ['45%', '90%'],
            label: { show: true, position: 'outside' },
            labelLine: { show: true },
            data: [
              { value: 35, name: '男用户: 35%', itemStyle: { color: '#00edff' } },
              { value: 65, name: '女用户: 65%', itemStyle: { color: '#a8ff43' } }
            ],
            right: '15%',
            left: '60%'
          }
        ]
      })
    },
    renderCenterCenter() {
      this.$echarts.registerMap('guangdong', guangdong)
      this.centerCenter = this.$echarts.init(this.$refs.centerCenter)
      this.centerCenter.setOption({
        visualMap: {
          min: 1500,
          max: 100,
          text: ['1500', '100'],
          textStyle: { color: '#fff' },
          inRange: { color: ['#88cfe8', '#bee57f', '#ff4500'] },
          top: '10px',
          right: '0'
        },
        series: [
          {
            type: 'map',
            mapType: 'guangdong',
            label: { show: true, color: '#fff' },
            data: [
              { name: '广州市', value: 1350 },
              { name: '深圳市', value: 1190 },
              { name: '东莞市', value: 825 },
              { name: '佛山市', value: 743 },
              { name: '湛江市', value: 724 },
              { name: '茂名市', value: 608 },
              { name: '揭阳市', value: 605 },
              { name: '汕头市', value: 555 },
              { name: '惠州市', value: 475 },
              { name: '江门市', value: 451 },
              { name: '梅州市', value: 434 },
              { name: '肇庆市', value: 405 },
              { name: '清远市', value: 383 },
              { name: '中山市', value: 320 },
              { name: '河源市', value: 307 },
              { name: '汕尾市', value: 302 },
              { name: '韶关市', value: 293 },
              { name: '潮州市', value: 264 },
              { name: '阳江市', value: 251 },
              { name: '云浮市', value: 246 },
              { name: '珠海市', value: 167 }
            ]
          }
        ]
      })
    },
    renderCenterBottom() {
      this.centerBottom = this.$echarts.init(this.$refs.centerBottom)
      this.centerBottom.setOption({
        legend: {
          top: '8%',
          itemGap: 30,
          data: [
            { name: 'APP访问量', icon: 'circle', textStyle: { color: '#fff' } },
            { name: '活跃用户', icon: 'circle', textStyle: { color: '#fff' } },
            { name: '活跃会员', icon: 'circle', textStyle: { color: '#fff' } }
          ]
        },
        grid: {
          top: '30%',
          right: '8%',
          bottom: '20%',
          left: '12%'
        },
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
          axisLine: { lineStyle: { color: '#fff' } }
        },
        yAxis: {
          type: 'value',
          axisLine: { lineStyle: { color: '#fff' } }
        },
        series: [
          {
            name: 'APP访问量',
            type: 'line',
            data: [100, 80, 60, 20, 100, 90, 40, 100, 40, 120, 110, 100, 100, 20, 100, 80, 100, 90, 40, 100, 40, 120, 110, 100, 40, 100, 40, 120, 110, 100],
            itemStyle: { color: '#ffff00' }
          },
          {
            name: '活跃用户',
            type: 'line',
            data: [60, 0, 60, 20, 70, 20, 90, 40, 70, 50, 40, 80, 40, 60, 0, 60, 20, 70, 20, 90, 40, 70, 50, 40, 80, 40, 40, 70, 50, 40, 80, 40],
            itemStyle: { color: '#e74a67' }
          },
          {
            name: '活跃会员',
            type: 'line',
            data: [20, 70, 40, 60, 50, 70, 50, 100, 20, 90, 50, 90, 20, 70, 40, 60, 50, 70, 50, 100, 20, 90, 50, 90, 50, 100, 20, 90, 50, 90],
            itemStyle: { color: '#6ec062' }
          }
        ],
        textStyle: {
          color: '#fff'
        }
      })
    },
    renderRightTopBottom() {
      this.rightTopBottom = this.$echarts.init(this.$refs.rightTopBottom)
      this.rightTopBottom.setOption({
        grid: {
          top: '10%',
          right: '10%',
          bottom: '15%',
          left: '15%'
        },
        xAxis: {
          data: ['基层以上工会', '基层工会', '工会干部'],
          axisLine: { lineStyle: { color: '#fff' } }
        },
        yAxis: {
          axisLine: { lineStyle: { color: '#fff' } }
        },
        series: [
          {
            type: 'bar',
            data: [
              { name: '基层以上工会', value: 1000, itemStyle: { color: '#bdff70' } },
              { name: '基层工会', value: 1100, itemStyle: { color: '#3ef4ff' } },
              { name: '工会干部', value: 820, itemStyle: { color: '#d56fff' } }
            ],
            barWidth: '25%'
          }
        ],
        textStyle: {
          color: '#fff'
        }
      })
    },
    renderRightBottomCenter() {
      this.rightBottomCenter = this.$echarts.init(this.$refs.rightBottomCenter)
      this.rightBottomCenter.setOption({
        grid: {
          top: '5%',
          right: '5%',
          bottom: '5%',
          left: '5%'
        },
        xAxis: {
          show: false,
          type: 'value',
          max: 2000,
          axisLine: { lineStyle: { color: '#fff' } }
        },
        yAxis: {
          type: 'category',
          axisLine: { lineStyle: { color: '#fff' } }
        },
        series: [
          {
            type: 'bar',
            data: [
              { name: '工会干部', value: 890, itemStyle: { color: '#9570ff' } },
              { name: '基层工会', value: 750, itemStyle: { color: '#33ebc2' } },
              { name: '基层以上工会', value: 1000, itemStyle: { color: '#ff5dc4' } }
            ],
            barWidth: '50%'
          }
        ],
        textStyle: {
          color: '#fff'
        }
      })
    },
    renderRightBottomBottom() {
      this.rightBottomBottom = this.$echarts.init(this.$refs.rightBottomBottom)
      this.rightBottomBottom.setOption({
        series: [
          {
            name: '实名注册会员性别比例',
            type: 'pie',
            radius: ['45%', '90%'],
            label: { show: true, position: 'outside' },
            labelLine: { show: true },
            data: [
              { value: 50, name: '男会员: 50%', itemStyle: { color: '#33ecff' } },
              { value: 50, name: '女会员: 50%', itemStyle: { color: '#d164ff' } }
            ],
            right: '60%',
            left: '15%'
          },
          {
            name: '实名注册用户性别比例',
            type: 'pie',
            radius: ['45%', '90%'],
            label: { show: true, position: 'outside' },
            labelLine: { show: true },
            data: [
              { value: 35, name: '男用户: 35%', itemStyle: { color: '#00edff' } },
              { value: 65, name: '女用户: 65%', itemStyle: { color: '#a8ff43' } }
            ],
            right: '15%',
            left: '60%'
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
  /* 布局 */
  #app {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #007dbc, #004c7d);
    color: #fff;
    font-family: "Hiragino Sans GB";
    overflow: hidden;
  }
  .header {
    height: 1.5rem;
    border-bottom: 5px solid;
    border-image: linear-gradient(to right, transparent, #11e3fd, transparent) 1;
    font-size: .75rem;
    text-align: center;
    line-height: 1.5rem;
  }
  .body {
    height: calc(100% - 1.5rem);
    padding: 0 .8rem .8rem;
    overflow: hidden;
  }
  .left, .right {
    float: left;
    width: 25%;
    height: 100%;
  }
  .center {
    float: left;
    width: calc(50% - 1.6rem);
    height: 100%;
    margin: 0 .8rem;
  }
  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  /* 左 */
  .left-top {
    height: 40%;
  }
  .left-top-title {
    position: absolute;
    top: 110%;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
  }
  .left-top-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-bottom {
    height: 60%;
  }
  /* 中 */
  .center-top {
    display: flex;
    height: calc(20% - 1.2rem);
    margin-top: 1.2rem;
    border: 1px solid #11e3fd;
    box-shadow: 0 0 6px rgba(17, 227, 253, .8);
  }
  .center-top-item {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #11e3fd;
    font-size: .5rem;
    text-align: center;
  }
  .center-center {
    height: 50%;
  }
  .center-bottom {
    height: 30%;
  }
  /* 右 */
  .right-top {
    height: 38%;
  }
  .right-top-top {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 30%;
  }
  .right-top-bottom {
    height: 70%;
  }
  .right-bottom {
    height: 62%;
  }
  .right-bottom-title.title::before,
  .right-bottom-title.title::after {
    content: '———'
  }
  /* 通用类 */
  .line {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 2px;
    height: 50%;
    background-color: #11e3fd;
  }
  .circle {
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
  }
  .circle-line {
    width: .1rem;
    height: 2px;
  }
  .circle-icon {
    width: .8rem;
    height: .8rem;
    background-color: #fff;
    border-radius: 50%;
    font-size: .4rem;
    text-align: center;
    line-height: .8rem;
  }
  .title {
    height: 1.2rem;
    color: #11e3fd;
    font-size: .35rem;
    text-align: center;
    line-height: 1.2rem;
  }
  .content {
    height: calc(100% - 1.2rem);
    border: 1px solid #11e3fd;
    box-shadow: 0 0 6px rgba(17, 227, 253, .8);
  }
  .select {
    background: transparent;
    border: 1px solid #11e3fd;
    color: #11e3fd;
    z-index: 99;
  }
  /* 工具类 */
  .relative { position: relative; }
  .h-33 { height: 33.33%; }
  .mt-1 { margin-top: .1rem; }
  .mr-1 { margin-right: .1rem; }
  .mr-2 { margin-right: .2rem; }
  .mr-4 { margin-right: .4rem; }
  .mr-8 { margin-right: .8rem; }
  .mb-1 { margin-bottom: .1rem; }
  .mb-2 { margin-bottom: .2rem; }
  .ml-2 { margin-left: .2rem; }
  .ml-4 { margin-left: .4rem; }
  .pt-2 { padding-top: .2rem; }
  .pt-4 { padding-top: .4rem; }
  .pr-2 { padding-right: .2rem; }
  .pb-2 { padding-bottom: .2rem; }
  .pb-4 { padding-bottom: .4rem; }
  .pl-2 { padding-left: .2rem; }
  .red { color: #ff5550; }
  .blue { color: #11c0ff; }
  .blue-light { color: #3ef4ff; }
  .green { color: #a0ffa4; }
  .green-light { color: #bdff70; }
  .orange { color: #ffa881; }
  .yellow { color: #ffbb29; }
  .yellow-light { color: #feff9a; }
  .bg-red { background-color: #ff5550; }
  .bg-blue { background-color: #11c0ff; }
  .bg-yellow { background-color: #ffbb29; }
  .fs-2 { font-size: .2rem; }
  .fs-3 { font-size: .3rem; }
  .fs-6 { font-size: .6rem; }
  .fw-600 { font-weight: 600; }
  .flex { display: flex; }
  .flex-1 { flex: 1; }
  .column { flex-direction: column; }
  .justify-center { justify-content: center; }
  .align-center { align-items: center; }
</style>

<style scoped>
  @media screen and (max-width: 768px) {
    #app { height: auto; min-height: 100%; }
    .header { height: 44px; margin-bottom: 10px; border-top: 0; border-bottom: 1px solid; font-size: 18px; line-height: 44px; }
    .left, .center, .right { width: 100%; height: 100vh; margin: 0; }
    .left-top-title { top: 150%; }
    .circle { width: 10px; height: 10px; }
    .circle-line { width: 5px; height: 2px; }
    .circle-icon { width: 30px; height: 30px; font-size: 14px; line-height: 30px; }
    .title { height: 30px; font-size: 14px; line-height: 30px; }
    .content { height: calc(100% - 30px); }
    .fs-2 { font-size: 12px; }
    .fs-3 { font-size: 13px; }
    .fs-6 { font-size: 16px; }
  }
</style>
