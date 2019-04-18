<template>
  <div id="HeroDetails">
    <div class="container">
      <h2>提莫</h2>
      <div class="carousel">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="https://ossweb-img.qq.com/images/lol/web201310/skin/big266008.jpg" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-row :gutter="20" class="info">
        <el-col :span="12">
          <div class="module">
            <el-alert title="背景故事" type="info" :closable="false"></el-alert>
            <div class="txt">
              亚托克斯和他的同胞们曾是恕瑞玛对抗虚空之地时满载荣耀的守护者一族，最终却变成了符文之地的一个更大的威胁，并且仅被击败于被诡诈的致命巫术。但在被囚禁了数个世纪后，亚托克斯率先找到重获自由之法，那就是对那些蠢得妄图尝试挥舞那把含有他灵魂精华的神奇武器的愚妄之徒进行腐蚀和转化。现在，凭借偷来的血肉躯体，他以一种近似他之前形态的凶残外表行走于符文之地中，寻求着一次毁天灭地且久未兑现的复仇。
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="module">
            <el-alert title="使用技巧" type="info" :closable="false"></el-alert>
            <div class="txt">
              <p>
                <span>当你使用：</span>在施放【暗裔利刃】时使用【暗影冲决】可提升你命中敌人的几率。诸如【恶火束链】或你友军的定身效果等控制技能，将有助于你【暗裔利刃】的起手。在你确保能够逼迫对方一战时施放【大灭】。
              </p>
              <p>
                <span>当敌方使用：</span>亚托克斯的攻击非常具有波段性，所以要利用好时间来规避他的命中区域。亚托克斯的【恶火束链】在朝着边界或亚托克斯奔跑时会更容易离开。在亚托克斯使用他的终极技能时，保持距离以防止他复活。
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeroDetails',
    data () {
      return {}
    }
  }
</script>

<style lang="sass" scoped>
  #HeroDetails {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .container {
      width: 100%;
      max-width: 1200px;
      height: 85%;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      & > h2 {
        text-align: center;
        line-height: 50px;
      }
      .carousel, .info {
        padding: 0 30px;
        .module {
          font-size: 14px;
          color: #666;
          .txt {
            max-height: 150px;
            padding: 10px 20px;
            text-indent: 20px;
            & > p {
              margin-bottom: 10px;
              & > span {
                color: #409EFF;
              }
            }
          }
        }
      }
    }
  }
</style>


