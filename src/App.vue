<template>
  <div id="app">
    <!--[if lte IE 9]>
      <p class="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please
        <a href="https://browsehappy.com/">upgrade your browser</a> to improve
        your experience and security.
      </p>
    <![endif]-->

    <!-- header-->
    <header>
      <div class="header-area ">
        <div id="sticky-header" class="main-header-area">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-3 col-lg-3">
                <div class="logo-img">
                  <a href="index.html">
                    <img src="./assets/nomes.png" height="60" alt="" />
                  </a>
                </div>
              </div>
              <div class="col-xl-9 col-lg-9">
                <div class="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><a class="active" href="index.html">home</a></li>
                      <li><a href="#">Nossa História</a></li>
                      <li><a href="#">Galeria</a></li>
                      <li><a href="#">Contato</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!--/ header-->

    <!-- slider_area -->
    <div class="slider_area ">
      <div class="slider_area_inner slider_bg_1 overlay2">
        <div class="slider_text text-center">
          <div class="text_inner">
            <img src="/assets/img/bg-title.png" alt="" />
            <h4>25 de Outubro de 2020</h4>
            <h3>
              <img src="./assets/title-white.png" width="400" alt="" />
            </h3>
            <span>vão se casar</span>
          </div>
        </div>
      </div>
    </div>
    <!--/ slider_area -->

    <WeddingCountdown></WeddingCountdown>

    <LoveStory></LoveStory>

    <ProgramDetails></ProgramDetails>

    <AttendingArea></AttendingArea>

    <LocationArea></LocationArea>

    <!-- footer_start -->
    <footer class="footer">
      <div class="footer_top">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="quick_links">
                <ul>
                  <li><a href="#">Início</a></li>
                  <li><a href="#">Nossa História</a></li>
                  <li><a href="#">Contato</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copy-right_text">
        <div class="container">
          <div class="footer_border"></div>
          <div class="row">
            <div class="col-xl-12">
              <p class="copy_right text-center">
                Copyright &copy; All rights reserved | This template is made
                with <i class="fa fa-heart-o" aria-hidden="true"></i> by
                <a href="https://colorlib.com" target="_blank">Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer_end -->
  </div>
</template>

<script>
import ProgramDetails from "./components/ProgramDetails.vue";
import AttendingArea from "./components/AttendingArea";
import LocationArea from "./components/LocationArea";
import LoveStory from "./components/LoveStory";
import WeddingCountdown from "./components/WeddingCountdown";

export default {
  name: "App",
  components: {
    ProgramDetails,
    AttendingArea,
    LocationArea,
    LoveStory,
    WeddingCountdown,
  },
  data: () => ({
    //
  }),
};
</script>
