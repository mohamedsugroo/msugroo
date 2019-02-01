<template>
    <div class="footer">
        <div class="callToAction">
            <div class="row">
                <div class="col msg">
                    If you're a forward-thinking business with an interesting branding or web design concept, drop us a line.
                </div>
                <div class="col-md-3 btnSpace">
                    <router-link class="callToActionBTN" to="/lets-talk">Let's Talk</router-link>
                </div>
            </div>
        </div>   

        <div class="container">
            <div class="row">
                <div class="col">

                    <div class="row">
                        <div class="col">
                            <h3 class="resource_title">Key Services</h3>
                            <li class="resource_link"><router-link to="/whatwedo/we-design">We Design </router-link></li>
                            <li class="resource_link"><router-link to="/whatwedo/we-develop">We Develop </router-link></li>
                            <li class="resource_link"><router-link to="/whatwedo/we-promote">We Promote </router-link></li>
                            <li class="resource_link"><router-link to="/whatwedo/we-support">We Support</router-link></li>
                        </div>
                        <div class="col">
                            <h3 class="resource_title">Who We Are</h3>
                            <li class="resource_link"><router-link to="/ourwork">Our Work</router-link></li>
                            <li class="resource_link"><router-link to="/ourwork">Our Process</router-link></li>
                            <li class="resource_link"><a href="https://blog.msugroo.com/">Our Two Cents</a></li>
                            <li class="resource_link"><router-link to="/privacypolicy">Privacy Policy</router-link></li>
                        </div>
                        <div class="col">
                            <h3 class="resource_title">Resources</h3>
                            <li class="resource_link"><router-link to="#">Careers</router-link></li>
                            <li class="resource_link"><router-link to="#">Terms</router-link></li>
                            <li class="resource_link"><a href="/sitemap.xml">Sitemap</a></li>
                            <li class="resource_link"><router-link to="/lets-talk">Lets Talk</router-link></li>
                        </div>
                    </div>

                </div>
                <div class="col-md-5">
                    <RandomReview />
                </div>
            </div>
            
        </div>
        <div class="made_ldn">
            Made With <i class="fas fa-heart color-red"></i> In London
        </div>
    </div>
</template>
<script>
import RandomReview from '@/components/randomreview.vue'
export default {
  name: 'Footer',
  components: {
    RandomReview
  },
  data() {
    return {
        posts: []
    }
  }
}
</script>

<style lang="scss" scoped>
$red: #ff3333;
.footer {
    padding-top: 150px;
    padding-bottom: 10px;
    background: #141428;
}

.made_ldn {
    text-align: center;
    margin-top: 60px;
    text-transform: capitalize;
}
.color-red {
    color: $red;
}

.resource_title {
    font-weight: 300;
    font-size: 1.4rem;
}

.resource_link {
    list-style: none;
    margin-bottom: 10px;

    a {
        color: white;
        text-decoration: none;
    }
    
}

.review {
    background: #1d1d32;
    width: 100%;
    min-height: 150px;

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

.callToAction {
    padding: 60px;
    background: #1d1d32;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 100px;
    margin-top: -190px;

    .msg {
        font-size: 1.2rem;
    }
    
    .btnSpace {
        text-align: right;
        padding-top: 20px;
    }

    a {
        text-decoration: none;
        outline: none;
    }
    
    .callToActionBTN {
        background: #4545bd;
        padding: 19px;
        color: white;
        width: 100%;
        border-radius: 3px;
    }
}

</style>
