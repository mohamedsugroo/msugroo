<template>
<div class="_page">

    <section class="sectionfiller">
        <div class="container boxIt">
            <h1 class="title">WHO WE ARE</h1>
            <p class="content">
                <strong>
                  We’re M-Sugroo. Our fully-loaded, London-based digital agency began as many of the best things do: across a sticky coffee table. We started life in 2018, thought up by two ex-colleagues on a mission: to offer the best of traditional web design blended with real commercial insight.
                </strong>
                <br><br>
                From a London public house, our founding fathers dreamed of a web design agency which operated with business acumen at its core, offering real value and measurable results to discerning clients who wanted both style and substance for their online business.
                <br><br>
                We’ve come a long way since then. From our web design chrysalis we’ve emerged as an all-singing, all-dancing, full service digital agency, offering design, development, marketing and consultation to businesses who take the web seriously.
                <br><br>
                We may have diversified and opened our doors to skilled web geniuses from across the industry, but we’ve kept things remarkably simple. At the heart of every digital service we offer lies the same drive to do digital with smart business sense informing every project.
                <br><br>
                But enough about us, we’d like to hear all about you! If you’d like to talk with Us about your online business, we’re all ears and full of great ideas for your next step on the web. We might love digital communication, but we’re comfortable using analogue phones too. You can reach here <router-link to="/lets-talk">Let's Talk</router-link>
            </p>
        </div>
    </section>
</div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Who We are',
    titleTemplate: '%s | M Sugroo',
    meta: [
      {name: 'description', content: 'We’re M-Sugroo. Our fully-loaded, London-based digital agency began as many of the best things do: across a sticky coffee table. We started life in 2018, thought up by two ex-colleagues on a mission: to offer the best of traditional web design blended with real commercial insight'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Who We Are | M Sugroo'},
      {property: 'og:site_name', content: 'M Sugroo'},
      {property: 'og:description', content: 'We’re M-Sugroo. Our fully-loaded, London-based digital agency began as many of the best things do: across a sticky coffee table. We started life in 2018, thought up by two ex-colleagues on a mission: to offer the best of traditional web design blended with real commercial insight'}
    ]
  }
}
</script>


<style lang="scss" scoped>
  strong {
    font-weight: 400;
  }
</style>
