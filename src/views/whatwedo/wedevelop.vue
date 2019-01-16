<template>
<div class="_page">

    <section class="sectionfiller">
        <div class="container boxIt">
            <h1 class="title">WE DEVELOP</h1>
            <p class="content">
                Intelligent development can change how you do business online. A CMS that works your way, an eCommerce store which integrates seamlessly with your order fulfilment system, smart apps which go viral – if you can imagine it, we can build it.
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
    name: 'WeDevelop',
    data() {
    return {
        resources: [
          {
            title: 'WEB DEVELOPMENT',
            cover: 'https://images.pexels.com/photos/214221/pexels-photo-214221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Speed, usability, functionality; our web development service keeps your website on its toes and at the top of its game – now and with one eye firmly on the future. From a slick CMS to responsive design for E-commerce, our web development agency use their technical skill and industry insight to help you reach your full potential on the web.`,
            link: '/whatwedo/we-develop/website-development',
            link_text: 'Read More About Web Development'
          },
          {
            title: 'E-COMMERCE',
            cover: 'https://images.pexels.com/photos/264554/pexels-photo-264554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Between July 2012 and July 2013, online retail sales rose by 10.7%. It’s high time to sell better online. Simple CMS, top-notch customer engagement, integrated stock management services, clever catalogue management, SEO-friendly development – find out what JBi can do to help you lower bounce rates, boost conversions and optimise your E-commerce store.`,
            link: '/whatwedo/we-develop/e-commerce',
            link_text: 'Read More About E-Commerce'
          },
          {
            title: 'CMS',
            cover: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Frustrated with your unintuitive, clunky CMS? It’s time to wave goodbye to poor design and limited functionality. We develop CMS websites with sophisticated functionality and straightforward, usable admin panels. Give yourself complete control over your content to reap the benefits of frequent, fresh updates on search engine rankings and customer engagement.`,
            link: '/whatwedo/we-develop/cms',
            link_text: 'Read More About CMS'
          },
          {
            title: 'MOBILE APPS',
            cover: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `We live in the communications age and mobile is bigger business than ever before. Don’t miss the boat and this important new revenue stream. Talk to JBI about mobile app development today to give your visitors greater flexibility, top quality user experience and even better accessibility. We specialise in mobile development for both iOS and Android.`,
            link: '/whatwedo/we-develop/mobile-apps',
            link_text: 'Read More About Mobile Apps'
          },
          {
            title: 'WEB APPLICATIONS',
            cover: 'https://images.pexels.com/photos/461146/pexels-photo-461146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Stand out on the web. Get creative with your website and enjoy a reputation for forward-thinking design and industry-leading user experience. An attractive website is no longer the only way to get attention, building web applications which make your offering fun and flawlessly functional is a great step towards real online success. Talk to us about your big ideas today and we’ll make it happen.`,
            link: '/whatwedo/we-develop/web-applications',
            link_text: 'Read More About Web Applications'
          },
          {
            title: 'WEB SERVICES & INTEGRATION',
            cover: 'https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Stand out on the web. Get creative with your website and enjoy a reputation for forward-thinking design and industry-leading user experience. An attractive website is no longer the only way to get attention, building web applications which make your offering fun and flawlessly functional is a great step towards real online success. Talk to us about your big ideas today and we’ll make it happen.`,
            link: '/whatwedo/we-develop/web-services-and-integration',
            link_text: 'Read More About Web Services & Integration'
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

    .subheader {
        font-weight: 400;
        margin-bottom: 1px;
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
            width: 170px;
            height: 3px;
            margin-left: 6px;
            background: #4544bd94;
            margin-top: 10px;
        }

        &:hover {

            .btm {
                background: #4545bdde;
            }

        }
    }
}
</style>

