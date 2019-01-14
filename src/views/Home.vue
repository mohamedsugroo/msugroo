<template>
  <div class="home">
    <div class="carousel">
      <RandomReview />
    </div>
    <div class="slider">
      <HelloWorld />
    </div>
    <div class="services">
      <div class="container">
        <div class="row">
          <div class="col">
            <router-link to="/we-design">
              <div class="we-symbol we-design"></div>
              WE DESIGN
            </router-link>
          </div>
          <div class="col">
            <router-link to="/we-develop">
              <div class="we-symbol we-develop"></div>
              WE DEVELOP
            </router-link>
          </div>
          <div class="col">
            <router-link to="/we-promote">
              <div class="we-symbol we-promote"></div>
              WE PROMOTE
            </router-link>
          </div>
          <div class="col">
            <router-link to="/we-support">
              <div class="we-symbol we-support"></div>
              WE SUPPORT
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <portfolio></portfolio>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Portfolio from '@/components/portfolio.vue'
import Footer from '@/components/footer.vue'
import RandomReview from '@/components/randomreview.vue'


export default {
  name: 'home',
  components: {
    HelloWorld,
    Portfolio,
    Footer,
    RandomReview
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin-top: -30px;
}

.carousel {
  width: 100%;
  height: 100vh;
  background-image: url('/img/123.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: inherit;
}

.slider {
    width: 100%;
    height: 60vh;
    min-height: 500px;
    background: white;
    margin: 0;
    margin-top: -20px;
  }

.services{
  padding: 32px;
  text-align: center;
}

.we-symbol {
  width: 90%;
  height: 160px;
  margin-bottom: 12px;
  margin-top: 12px;
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
}
.we-design {
  background-image: url('/svg/tools.svg');
}

.we-develop {
  background-image: url('/svg/code.svg');
}

.we-promote {
  background-image: url('/svg/stats.svg');
}

.we-support {
  background-image: url('/svg/lifesaver.svg');
}


</style>

