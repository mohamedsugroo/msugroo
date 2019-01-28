<template>
  <div id="app">
    <div id="nav">
      <div class="brand">
        <router-link to="/">
        <div class="symbol"></div>
        <h1 class="sitename">MSUGROO</h1>
        </router-link>
      </div>
      <div class="right">
        <router-link class="NavLink" to="/whoweare">WHO WE ARE</router-link>
        <router-link class="NavLink" to="/whatwedo">WHAT WE DO</router-link>
        <a class="NavLink" href="https://blog.msugroo.com/">OUR TWO CENTS</a> 
        <router-link class="NavLink" to="/ourwork">OUR WORK</router-link>
        <router-link class="NavButton" to="/lets-talk">LET'S TALK</router-link>
      </div>
    </div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer.vue'
export default {
  components: {
    Footer
  }
}
</script>


<style lang="scss">
  body {
    background: #1d1d32;
    color: #ecf0f1;
    font-family: sans-serif;
    padding: 0;
    margin: 0;
  }


  #nav {
    background: white;
    padding: 20px;
    position: relative;
    z-index: 100;
    
    a {
      color: inherit;
      text-decoration: none;
    }

    .brand {
      float: left;
      font-weight: 400;
      color: #1d1d32;
      margin-top: -10px;

      .symbol {
        // background: red;
        width: 40px;
        height: 40px;
        background-image: url('/logo.svg');
        float: left;
      }

      .sitename {
        display: inline-block;
        font-weight: bold;
        font-size: 1.3rem;
        padding: 0px;
        margin: 8px;
          
      }
    }

    .right {
      text-align: right;
    }
    .NavLink {
      color: #1d1d32;
      padding: 12px;
      // background: white;
      margin-left: 2px;
      font-weight: 600;
    }
    .NavButton {
      background: #4545bd;
      color: #ecf0f1;
      padding: 12px;
      border-radius: 3px;
      margin-left: 10px;
    }
  }

  ._page {
    width: 100%;
    min-height: 800px;
    background: white;
    margin-top: -25px;
    margin-bottom: -20px;
    color: #1d1d32;
  }

</style>
