<template>
<div class="_page">

    <section class="sectionfiller">
        <div class="container boxIt">
            <h1 class="title">WE SUPPORT</h1>
            <p class="content">
                Bamboozled by digital? Don’t worry. Talk to us about your online objectives and we’ll suggest the best way to meet your targets. As an integrated digital agency we offer a full spectrum of solutions from responsive design to SEO.
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
            title: 'DIGITAL STRATEGY',
            cover: 'https://images.pexels.com/photos/1353346/pexels-photo-1353346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Sit down with our team of specialists to plan your new digital direction. Working with your budget, your brand and your big ideas, we help businesses of all shapes and sizes to build smart, actionable digital strategies which give them the roadmap required to flourish online.`,
            link: '/whatwedo/we-support/digital-strategy',
            link_text: 'Read More About Digital Strategy'
          },
          {
            title: 'HOSTING MANAGEMENT',
            cover: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Build your website or application on a firm foundation. We work as digital matchmakers to find the best and most cost-effective hosting solutions for your business, then get the two of you together. Whether you’re a new venture or simply need a change, ask us for swift implementation and vigilant support.`,
            link: '/whatwedo/we-support/hosting-managment',
            link_text: 'Read More About Hosting Management'
          },
          {
            title: 'DATA MIGRATION',
            cover: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `Don’t lose sleep over data migration. Whether you’re moving hundreds of product pages but want to maintain their current SEO value or need to transport thousands of customer addresses to a new CRM system, we can make it happen seamlessly and securely, with no stress and no slip ups.`,
            link: '/whatwedo/we-support/data-migration',
            link_text: 'Read More About Data Migration'
          },
          {
            title: 'PROACTIVE SUPPORT',
            cover: 'https://images.pexels.com/photos/7095/people-coffee-notes-tea.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            summary: `For an online support service which doesn’t rest on its laurels, call JBi. We do everything in our extensive power to keep your website performing perfectly and at the top of its game. From fixing glitches before they strike to keeping you informed of competitor activity and even recommending your next move…`,
            link: '/whatwedo/we-support/proactive-support',
            link_text: 'Read More About Proactive Support'
          }
        ]
    }
  }
}
</script>