<template>
    <div class="review">
        <div class="userinfo">
            <div class="avatar" v-bind:style="{ backgroundImage: 'url(' + avatar + ')' }"></div>
            <label class="username"> {{company}} </label> <br>
            <label class="company_name">{{industry}}</label>
            <button class="close"><i class="fas fa-times"></i></button>
        </div>
        <div class="content">
            {{comment}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'RandomReview',
  data() {
    return {
      company: 'Zero Manga',
      industry: 'オンラインマンガ',
      avatar: 'https://lh4.googleusercontent.com/bYBJXbCrwcVKMhxcMvIZ7wGvsfctcPo1i-2Ni2DTwNCDyL_e92iy958GYBU7LWwY9L0hpPHkMwTejg=w2880-h1574',
      comment: `consistently produce high quality solutions, on-time and on-budget. They provide a responsive and effective support and maintenance service. We rely on them to deliver for our customers – and they do not let us down.`
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
