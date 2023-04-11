const { createApp } = Vue;

createApp({
    data(){
        return{
            title: 'Generatore di E-mail',
            randomMail: [],
        }
    },
    methods: {
        generator(){
            this.randomMail = [];
            for(let i = 0; i < 10; i++){
              axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                console.log(result.data.response);
                this.randomMail.push(result.data.response);
            });  
            }    
        }
    },
    mounted(){

    },
}).mount('#app')