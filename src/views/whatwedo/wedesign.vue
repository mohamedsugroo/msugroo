<template>
<div class="_page">

    <section class="sectionfiller">
        <div class="container boxIt">
            <h1 class="title">WE DESIGN</h1>
            <h2 class="subheader">RESPONSIVE WEBSITES, MOBILE APPS & FORWARD FACING DIGITAL DESIGN</h2>
            <p class="content">
                Beauty is only skin deep. Good design is based on thorough research and yields tangible results. From responsive web design that delights your visitors to digital marketing campaigns that drive traffic to your website, we design with style and substance.
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
            title: 'RESPONSIVE WEB DESIGN',
            cover: 'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `The mobile revolution is here. More than 50% of the UK owns a smartphone and sales via mobile are skyrocketing daily. Get mobile-ready with responsive design for iOS and Android phones, tablets and many more devices to open up your online world to as many new customers as possible.`,
            link: '/whatwedo/we-design/responsive-webdesign',
            link_text: 'More on Responsive Web Design'
          },
          {
            title: 'INTERACTIVE WEB DESIGN',
            cover: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Stand out from the crowd. Show visitors what you are made of with engaging interactive design. It’s a big world out there and attention-grabbing interactive web design is a great way to demonstrate what’s special about what you do. Our interactive designs are developed to offer visual appeal, ROI, user friendliness and superb functionality too.`,
            link: '/whatwedo/we-design/',
            link_text: 'Read More About Interactive Web Design'
          },
          {
            title: 'USER EXPERIENCE',
            cover: 'https://images.pexels.com/photos/256425/pexels-photo-256425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Maximise conversions and boost customer engagement with a Ux focussed website. We use a smart blend of market analysis, persona creation, user testing, user flows and extensive research to make your website as user friendly as possible. Wave goodbye to your high bounce rate.`,
            link: '/whatwedo/we-design/',
            link_text: 'Read More About User Experience'
          },
          {
            title: 'BRANDING',
            cover: 'https://images.pexels.com/photos/811108/pexels-photo-811108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Bamboozled by digital? Don’t worry. Talk to us about your online objectives and we’ll suggest the best way to meet your targets. As an integrated digital agency we offer a full spectrum of solutions from responsive design to SEO.`,
            link: '/whatwedo/we-design/',
            link_text: 'Read More About Branding'
          },
          {
            title: 'PRINT',
            cover: 'https://images.pexels.com/photos/701771/pexels-photo-701771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `There’s more to life than the internet. We create attention-grabbing print material that turns potential customers on, even when the WiFi is off. Our creative graphic designers will help you to produce business cards, brochures, magazines and more. And, because we handle online branding too, your print materials and online design will work together seamlessly.`,
            link: '/whatwedo/we-design/',
            link_text: 'Read More About Print'
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

