<template>
  <div class="helloworld">
    <h1>{{ title }}</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'LONDON DIGITAL AGENCY',
      msg: `We’re a London web design and web development agency, providing fresh, creative digital services to businesses who want to grow online. Focusing on results, we use our technical skill and industry insight to help you meet your digital goals. Whether that’s lowering your bounce rate with interactive web design or bringing brand new traffic and income streams to your website. Talk to us about your project to get started.`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.helloworld {
  width: 600px;
  color: #1d1d32;;
  margin: 0 auto;
  margin-top: 20px;
  padding-top: 15vh;
  text-align: center;
}
</style>
