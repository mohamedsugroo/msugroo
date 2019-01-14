<template>
  <div class="portfolio">
    <ul class="container">
      
      <li class="items" v-for="item in posts.slice(0, 4)" v-bind:style="{ backgroundImage: 'url(' + item.avatar + ')' }">
        <div class="cover">
          <p class="company_name">{{item.company_name}}</p>
          <p class="site_name">{{item.industry}}</p>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
        posts: [
          {
            company_name: 'EA Sports Deutschland',
            industry: 'Video Games Company',
            avatar: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            comment: `consistently produce high quality solutions, on-time and on-budget. They provide a responsive and effective support and maintenance service. We rely on them to deliver for our customers – and they do not let us down.`
          },
          {
            company_name: 'EA Sports Deutschland 2',
            industry: 'Video Games Company',
            avatar: 'https://images.pexels.com/photos/264554/pexels-photo-264554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            comment: `consistently produce high quality solutions, on-time and on-budget. They provide a responsive and effective support and maintenance service. We rely on them to deliver for our customers – and they do not let us down.`
          },
          {
            company_name: 'EA Sports Deutschland 3',
            industry: 'Video Games Company',
            avatar: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            comment: `consistently produce high quality solutions, on-time and on-budget. They provide a responsive and effective support and maintenance service. We rely on them to deliver for our customers – and they do not let us down.`
          },
          {
            company_name: 'EA Sports Deutschland 4',
            industry: 'Video Games Company',
            avatar: 'https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            comment: `consistently produce high quality solutions, on-time and on-budget. They provide a responsive and effective support and maintenance service. We rely on them to deliver for our customers – and they do not let us down.`
          }
        ]
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
    text-align: center;
    background-position: top;
    background-size: cover;

    .company_name {
      font-size: 1.4rem;
    }

    &:first-child {
      // background: #1d1d32;
      width: 40%;
      height: 605px;
      .cover {
        padding-top: 50%;
      }
    }

    &:last-child {
      // background: #1d1d32;
      width: 58.6%;

      .cover {
        padding-top: 20%;
      }
    }

    .cover {
      background: rgba(0, 0, 0, 0.29);
      width: 100%;
      height: 100%;
      padding-top: 30%;
      cursor: pointer;

      &:hover {
        background: rgba(0, 0, 0, 0.59);
      }
    }


  }
}
</style>
