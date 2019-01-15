<template>
<div class="_page">

    <section class="sectionfiller">
        <div class="container boxIt">
            <h1 class="title">WHAT WE DO</h1>
            <p class="content">
                We do Digital. We’re your web design company, web development agency and digital marketing team all rolled into one very special integrated digital service.
            </p>
        </div>
    </section>

    <section class="sectionfiller" v-for="item in resources" >
        <div class="featuredImage" v-bind:style="{ backgroundImage: 'url(' + item.cover + ')' }"></div>
        <div class="container boxIt">
            <h1 class="title">{{ item.title}}</h1>
            <p class="content">
                {{item.summary}}
            </p>
            <a class="itemLink" :href="item.link">
                {{ item.link_text }}
            <div class="btm"></div>
            </a>
        </div>
    </section>

</div>
</template>

<script>
export default {
    name: 'WhatWeDo',
    data() {
    return {
        resources: [
          {
            title: 'WE DESIGN',
            cover: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Beauty is only skin deep. Good design is based on thorough research and yields tangible results. From responsive web design that delights your visitors to digital marketing campaigns that drive traffic to your website, we design with style and substance.`,
            link: '/whatwedo/we-design',
            link_text: 'Learn More About Our Design Services'
          },
          {
            title: 'WE DEVELOP',
            cover: 'https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Intelligent development can change how you do business online. A CMS that works your way, an eCommerce store which integrates seamlessly with your order fulfilment system, smart apps which go viral – if you can imagine it, we can build it.`,
            link: '/whatwedo/we-develop',
            link_text: 'Learn More About Our Development Services'
          },
          {
            title: 'WE PROMOTE',
            cover: 'https://images.pexels.com/photos/1051744/pexels-photo-1051744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `“Build it and they will come” isn’t true on the web. You need to get out there. Smart SEO and social media campaigns will help your website get the attention it deserves. From content marketing to sensitive optimisation, we get traffic flowing.`,
            link: '/whatwedo/we-promote',
            link_text: 'Learn More About Our Promotion Services'
          },
          {
            title: 'WE SUPPORT',
            cover: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Bamboozled by digital? Don’t worry. Talk to us about your online objectives and we’ll suggest the best way to meet your targets. As an integrated digital agency we offer a full spectrum of solutions from responsive design to SEO.`,
            link: '/whatwedo/we-support',
            link_text: 'Learn More About Our Support Services'
          }
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
._page {
    padding-top: 30px;
    padding-bottom: 200px;
}

.sectionfiller {
    margin: 0 auto;
    padding-top: 60px;

    .boxIt {
        width: 800px;
    }

    .title {
        font-weight: 600;
        font-size: 1.7rem;
        text-transform: uppercase;
    }

    .content {
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.8rem;
    }

    .featuredImage {
        width: 100%;
        height: 400px;
        background: #4545bd;
        margin-bottom: 60px;
        background-position: center;
        background-size: cover;
    }

    .itemLink {
        text-decoration: none;
        color: inherit;
        text-transform: capitalize;
        .btm {
            width: 200px;
            height: 3px;
            margin-left: 6px;
            background: #4544bd94;
            margin-top: 10px;
        }
    }
}
</style>

