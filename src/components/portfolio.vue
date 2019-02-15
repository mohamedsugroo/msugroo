<template>
  <div class="portfolio">
    <ul class="container">
      
      <li class="items" v-for="item in posts.slice(0, 4)" v-bind:style="{ backgroundImage: 'url(' + item.jetpack_featured_media_url + ')' }">
        <a :href="item.link">
          <div class="cover">
            <p class="company_name">{{item.title.rendered}}</p>
            <p class="site_name" v-html="item.excerpt.rendered"></p>
        </div>
        </a>
      </li>

    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Portfolio',
  data() {
    return {
        posts: []
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      let posts_url = 'https://en.blogs.msugroo.com/wp-json/wp/v2/posts'
      console.log(posts_url)


      axios.get(posts_url)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  text-decoration: none;
  color: inherit;
}
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
      background: rgba(0, 0, 0, 0.39);
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
