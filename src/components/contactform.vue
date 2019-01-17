<template>
    <div class="contact_form">
        <input type="text" v-model="name" placeholder="Full Name">
        <input type="text" v-model="email" placeholder="Email Address">
        <input type="text" v-model="subject" placeholder="What whoud you like to talk about?">
        <textarea name="" id="" v-model="comment" placeholder="Please specify in detail ..."></textarea>
        <button class="Btn-large">Send</button>

    </div>
</template>
<script>
export default {
  data() {
    return {
        name: '',
        email: '',
        subject: '',
        comment: '',
    }
  }
}
</script>
<style lang="scss" scope>
.contact_form {
    margin-bottom: 60px;
    margin-top: 60px;
    input[type="text"], textarea {
        width: 100%;
        padding: 12px;
        border-radius: 3px;
        border: 2px solid #f1f1f1;
        max-width: 100%;
        min-width: 100%;
        margin-bottom: 12px;
        font-size: 1.2rem;
        outline: none;
        &:focus {
            border-color: #4545bd;
        }
    }

    textarea {
        min-height: 160px;
    }
    .Btn-large {
        padding: 12px;
        padding-left: 30px;
        padding-right: 30px;
        background: #4545bd;
        color: white;
        border: none;
        font-size: 1.2rem;
        border-radius: 3px;
    }
}
</style>