<template>
    <div>
        <div class="review" v-for="review in reviews" >
            <div class="userinfo">
                <div class="avatar" v-bind:style="{ backgroundImage: 'url(' + review.avatar + ')' }"></div>
                <label class="username"> {{review.company_name}} </label> <br>
                <label class="company_name">{{review.industry}}</label>
                <button class="close"><i class="fas fa-sync"></i></button>
            </div>
            <div class="content">
                {{ review.comment }}
            </div>
        </div>
    </div>
</template>

<script>

import { reviewRef } from '../firebase.js';

export default {
  name: 'RandomReview',
  data() {
    return {
      company: 'Zero Manga',
      industry: 'オンラインマンガ',
      avatar: 'https://via.placeholder.com/150',
      comment: `consistently produce high quality solutions, on-time and on-budget. They provide a responsive and effective support and maintenance service. We rely on them to deliver for our customers – and they do not let us down.`,
      reviews: []
    }
  },
  created(){
    this.getData();
    console.log(this.reviews)
    reviewRef.on('value', snap => {
        this.reviews = snap.val();
        console.log(this.reviews)
    })
  },
  methods: {
    getData() {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.review {
    background: #1d1d32;
    width: 100%;
    max-width: 500px;
    min-height: 150px;
    position: absolute;
    right: 50px;
    bottom: 20px;

    .content {
        padding: 20px;
        padding-top: 0;
        font-weight: 300;
        line-height: 1.2rem;
    }
}

.userinfo {
    // background: red;
    padding: 12px;

    .close {
        float: right;
        margin-top: -15px;
        padding: 8px;
        font-size: 1.2rem;
        border: none;
        background: none;
        color: #4545bd;
        cursor: pointer;
        outline: none;
    }
    .avatar {
        width: 70px;
        height: 70px;
        background: red;
        margin-top: -30px;
        margin-left: 4px;
        float: left;
        margin-right: 10px;
        background-position: center;
        background-size: cover;
    }

    .company_name {
        color: #9b9b9b;
    }

}
</style>
