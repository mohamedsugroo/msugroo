<template>
  <div class="portfolio">
    <ul class="container">
      <li class="items"></li>
      <li class="items"></li>
      <li class="items"></li>
      <li class="items"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
        posts: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.portfolio {
  width: 100%;
  height: 100vh;
  background: #060615;
  padding-top: 110px;

  .items {
    width: 29%;
    height: 300px;
    background: #1d1d32;
    list-style: none;
    float: left;
    margin: 3px;

    &:first-child {
      background: #1d1d32;
      width: 40%;
      height: 605px;
    }

    &:last-child {
      background: #1d1d32;
      width: 58.6%;
    }

  }
}
</style>
