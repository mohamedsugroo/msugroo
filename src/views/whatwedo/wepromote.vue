<template>
<div class="_page">

    <section class="sectionfiller">
        <div class="container boxIt">
            <h1 class="title">WE PROMOTE</h1>
            <p class="content">
                “Build it and they will come” isn’t true on the web. You need to get out there. Smart SEO and social media campaigns will help your website get the attention it deserves. From content marketing to sensitive optimisation, we get traffic flowing.
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
    name: 'WePromote',
    data() {
    return {
        resources: [
          {
            title: 'SOCIAL MEDIA',
            cover: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Are you being talked about online? With so many diverse social platforms available, you should be. Our social-savvy digital marketers work with your brand to help you tweet, like and share your way to a prominent online presence, better customer interaction and a brilliant brand identity.`,
            link: '/whatwedo/we-promote/social-media',
            link_text: 'Read More About Social Media'
          },
          {
            title: 'SEO',
            cover: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Built a beautiful website with all the bells and whistles? It’s time to invite the whole world wide web to the party. Without search engine optimisation, how do you tell your digital audience you exist? You need to shout about it with SEO. Ask Us about optimisation, guest blogging, web 2.0s and everything in between.`,
            link: '/whatwedo/we-promote/seo',
            link_text: 'Read More About SEO'
          },
          {
            title: 'PAID SEARCH',
            cover: 'https://images.pexels.com/photos/33972/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `We squeeze every last conversion from your PPC marketing campaign to make sure that every click counts. Our pay per click specialists use insightful market and keyword research, AB testing, landing page optimisation and more to make your click budget go further and to send your conversions skyrocketing.`,
            link: '/whatwedo/we-promote/paid-search',
            link_text: 'Read More About Paid Search'
          },
          {
            title: 'EMAIL MARKETING',
            cover: 'https://images.pexels.com/photos/147408/pexels-photo-147408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Your updates and offers, delivered directly under your target market’s nose. We design, develop and implement top-notch email marketing campaigns which hit your customers’ inbox at the perfect time, striking the perfect chord. Ready to brighten up inboxes with effective email marketing? Let’s get going…`,
            link: '/whatwedo/we-promote/email-marketing',
            link_text: 'Read More About Email Marketing'
          },
          {
            title: 'DIGITAL COPYWRITING',
            cover: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `The pen may be mightier than the sword, but the keyboard is all powerful. Creative, well crafted content doesn’t just sell your stuff, it speaks volumes about who you are as a business. For pitch perfect prose with SEO value, speak with our digital agency about sensitively optimised content today.`,
            link: '/whatwedo/we-promote/digital-copywriting',
            link_text: 'Read More About Digital Copywriting'
          },
          {
            title: 'VIDEO',
            cover: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Lights, camera, action! If you want to build a digital buzz around your online brand, video is a powerful tool. We build video which intrigues and inspires, boosting brand loyalty and creating real audience engagement. From product videos to ‘how tos’ and screencasts, talk to Us about your video marketing ideas.`,
            link: '/whatwedo/we-promote/video',
            link_text: 'Read More About Video'
          }
        ]
    }
  }
}
</script>