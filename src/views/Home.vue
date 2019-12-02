<template>
  <div class="about">
    <!-- Header -->
    <Nav/>

    <!-- Intro -->
    <section id="intro">
      <div class="owl-carousel">
        <div class="item dark-overlay" :style="{backgroundImage:'url('+require('../assets/image/car-1.jpg')+')'}" style="background-image:url(../assets/image/car-1.jpg); background-size:100% 100%;">
          <div class="container">
            <div class="intro-text z-index text-center">
              <h1></h1>
              <a href="#"></a>
            </div>
          </div>
        </div>
        <div class="item dark-overlay" :style="{backgroundImage:'url('+require('../assets/image/intro-img1.jpg')+')'}">
          <div class="container">
            <div class="intro-text z-index text-center">
              <h1></h1>
              <a href="#"></a>
            </div>
          </div>
        </div>
        <div class="item dark-overlay" :style="{backgroundImage:'url('+require('../assets/image/intro-img2.jpg')+')'}">
          <div class="container">
            <div class="intro-text z-index text-center">
              <h1></h1>
              <a href="#"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Intro -->

    <section class="section-padding gray-bg">
      <div class="container">
        <div class="section-header text-center">
          <h2>产品优势</h2>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="features-box text-center">
              <div class="features-icon"> <i class="fa fa-money"></i> </div>
              <h5>1成首付，占用资金少！</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="features-box text-center">
              <div class="features-icon"> <i class="fa fa-car"></i> </div>
              <h5>手续包办，当天提车！</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="features-box text-center">
              <div class="features-icon"> <i class="fa fa-address-card"></i> </div>
              <h5>极速审批、拒绝等候！</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="features-box text-center">
              <div class="features-icon"> <i class="fa fa-lock"></i> </div>
              <h5>厂商直供，车源有保障！</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="features-box text-center">
              <div class="features-icon"> <i class="fa fa-automobile"></i> </div>
              <h5>低门槛，让人人都开得起车！</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="features-box text-center">
              <div class="features-icon"> <i class="fa fa-heart"></i> </div>
              <h5>量身定制，灵活选择！</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h2>业务模式</h2>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="image-box"> <img src="../assets/image/progress-2.png" alt="image"> </div>
          </div>
          <div class="col-lg-6">
            <div class="image-box"> <img src="../assets/image/progress-1.png" alt="image"> </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section id="proecess" class="section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h3>快速申请</h3>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="steps">
              <div class="icon-wrap"> <img src="../assets/image/choose-loan.png" alt="image"> <span class="steps-number">1</span>
              </div>
              <h5>在线预约</h5>
              <p>您可以通过官网、APP、微信免费在线预约，或拨打电话：400-188-5678。</p>
            </div>
            <div class="steps">
              <div class="icon-wrap"> <img src="../assets/image/get-loan.png" alt="image"> <span class="steps-number">2</span>
              </div>
              <h5>提交资料</h5>
              <p>携带有效的身份证、驾驶证及银行卡。填写资料并提交审核。</p>
            </div>
            <div class="steps">
              <div class="icon-wrap"> <img src="../assets/image/business-loan.png" alt="image"> <span class="steps-number">3</span>
              </div>
              <h5>办理成功</h5>
              <p>交完首付后，现车可立即提走，需要调配的车型2-3日内可提走。</p>
            </div>
          </div>

          <div class="col-lg-4">
            <Order/>
          </div>

        </div>
      </div>
    </section>
    <!-- /Process -->

    <!-- About-us -->
<!--    <section id="about-us" class="section-padding">-->
<!--      <div class="container">-->
<!--        <div class="section-header text-center">-->
<!--          <h3>关于乐颂</h3>-->
<!--        </div>-->
<!--        <div class="row">-->
<!--          <div class="col-lg-6 order-12">-->
<!--            <div class="image-box"> <img src="../assets/image/700x510.jpg" alt="image"> </div>-->
<!--          </div>-->
<!--          <div class="col-lg-6">-->
<!--            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乐颂融资租赁（深圳）有限公司（简称“乐颂融租”）是国内资深助力中小银行为代表的传统金融机构，实现互联网转型的平台服务商，为传统中小银行，提供合规安全的互联网金融资产一站式解决方案。-->
<!--            </p>-->
<!--            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乐颂融租核心团队全部来自国内一线互金平台的高管，从2013年起投身于互联网金融行业当中，2017年成立乐颂融租，立志要成为小而专业的精英型企业。-->
<!--            </p>-->
<!--            <a href="/about" class="btn">查看详情</a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
    <!-- /About-us -->


    <!-- Partners-Logo -->
    <section id="partners" class="section-padding">
    </section>
    <!-- /Partners-Logo -->

    <!-- Footer -->
   <Footer/>

  </div>
</template>

<script  lang="ts">
  // @ is an alias to /src
  import Nav from '@/components/Nav.vue'
  import Footer from '@/components/Footer.vue'
  import Order from '@/components/Order.vue'

  export default {
    name: 'home',
    components: {
      Nav,Footer,Order
    }
  }
</script>
