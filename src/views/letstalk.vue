<template>
    <div class="_page">
        <section class="sectionfiller">
            <div class="container boxIt">
                <h1 class="title">Let's talk</h1>
                <p class="content">
                    Get in touch with us to kick off your new project using our contact form.
                </p>
                <contact-form />
            </div>
        </section>
    </div>
</template>
<script>
import ContactForm from '@/components/contactform.vue'
export default {
  name: 'Footer',
  components: {
    ContactForm
  },
  data() {
    return {
        posts: []
    }
  },
  metaInfo: {
    title: 'Lets Talk',
    titleTemplate: '%s | M Sugroo',
    meta: [
      {name: 'description', content: 'Get in touch with us to kick off your new project using our contact form.'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Lets Talk | M Sugroo'},
      {property: 'og:site_name', content: 'M Sugroo'},
      {property: 'og:description', content: 'Get in touch with us to kick off your new project using our contact form.'}
    ]
  }
}
</script>
