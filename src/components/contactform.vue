<template>
    <div>
        <div class="contact_form" v-if="sentStatus == false">
            <input type="text" v-model="name" placeholder="Full Name">
            <input type="text" v-model="email" placeholder="Email Address">
            <input type="text" v-model="subject" placeholder="What whoud you like to talk about?">
            <textarea name="" id="" v-model="comment" placeholder="Please specify in detail ..."></textarea>
            <button class="Btn-large" @click="sendForm()">Send</button>
        </div>

        <div v-if="sentStatus == true" class="alert-success">
            {{msg}}
        </div>
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
        ipaddress: '',
        msg: '',
        sentStatus: false
    }
  },
  created(){
    this.getIp()
  },
  methods: {
    getIp(json) {
    },
    sendForm() {
        console.log("Sent..", this.name, this.email, this.subject, this.comment);
        let _this = this;
        fetch('https://msugroo.firebaseio.com/contacts.json', {  
            method: 'POST',    
             body: JSON.stringify({
                name: this.name,
                email: this.email,
                subject: this.subject,
                comment: this.comment,
                date: Date.now()
            })
        })
        .then(function (data) {  
          console.log('Request success: ', data);  
          _this.msg = 'Thank you for contacting us we will get back to you shortly'
          _this.sentStatus = true
        })  
        .catch(function (error) {  
          console.log('Request failure: ', error);  
        });

    }
  },
  computed: {
    check_email() {
        console.log('Checking Email')
    }
  }
}
</script>
<style lang="scss" scope>
.alert-success {
    padding: 12px;
    background: #1dd1a1;
    color: white;
    border-radius: 3px;
}
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