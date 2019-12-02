<template>
  <div class="about">
    <!-- Header -->
    <Nav/>

    <!-- Intro -->
    <section id="intro">
      <div class="owl-carousel">
        <div class="item dark-overlay" style="background-image:url(../assets/image/car-1.jpg); background-size:100% 100%;">
          <div class="container">
            <div class="intro-text z-index text-center">
              <h1></h1>
              <a href="#"></a>
            </div>
          </div>
        </div>
        <div class="item dark-overlay" style="background-image:url(../assets/image/intro-img2.jpg)">
          <div class="container">
            <div class="intro-text z-index text-center">
              <h1></h1>
              <a href="#"></a>
            </div>
          </div>
        </div>
        <div class="item dark-overlay" style="background-image:url(../assets/image/intro-img3.jpg)">
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

    <!-- Our-Services -->
    <section id="services" class="section-padding gray-bg">
      <div class="container">
        <div class="section-header text-center">
          <h3>产品与服务</h3>
        </div>
        <div id="our-services">
          <div class="owl-carousel">
            <div class="item text-center">
              <div class="service-icon"> <img src="assets/images/home-loan.png" alt="image"> </div>
              <h5>信用贷款</h5>
              <p>信用贷款简介</p>
              <a href="#" class="btn btn-sm">了解详情</a>
            </div>
            <div class="item text-center">
              <div class="service-icon"> <img src="assets/images/business-loan.png" alt="image"> </div>
              <h5>企业贷款</h5>
              <p>企业贷款简介</p>
              <a href="#" class="btn btn-sm">了解详情</a>
            </div>
            <div class="item text-center">
              <div class="service-icon"> <img src="assets/images/car-loan.png" alt="image"> </div>
              <h5>车贷</h5>
              <p>车贷简介</p>
              <a href="#" class="btn btn-sm">了解详情</a>
            </div>
            <div class="item text-center">
              <div class="service-icon"> <img src="assets/images/education-loan.png" alt="image"> </div>
              <h5>教育贷款</h5>
              <p>教育贷款简介</p>
              <a href="#" class="btn btn-sm">了解详情</a>
            </div>
            <div class="item text-center">
              <div class="service-icon"> <img src="assets/images/personal-loan.png" alt="image"> </div>
              <h5>个人贷款</h5>
              <p>个人贷款简介</p>
              <a href="#" class="btn btn-sm">了解详情</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Our-Services -->


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
    <section id="about-us" class="section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h3>关于乐颂</h3>
        </div>
        <div class="row">
          <div class="col-lg-6 order-12">
            <div class="image-box"> <img src="../assets/image/700x510.jpg" alt="image"> </div>
          </div>
          <div class="col-lg-6">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乐颂融资租赁（深圳）有限公司（简称“乐颂融租”）是国内资深助力中小银行为代表的传统金融机构，实现互联网转型的平台服务商，为传统中小银行，提供合规安全的互联网金融资产一站式解决方案。
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乐颂融租核心团队全部来自国内一线互金平台的高管，从2013年起投身于互联网金融行业当中，2017年成立乐颂融租，立志要成为小而专业的精英型企业。
            </p>
            <a href="about.html" class="btn">查看详情</a>
          </div>
        </div>
      </div>
    </section>
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
