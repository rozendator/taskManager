
<template>
 <div class="center">
  <div class="card-login">
    <h2>Task Builder</h2>
      <h2>Вход</h2>
      <form @submit.prevent="login" class="validation">
        <input type="text" v-model="user.name" placeholder="Имя">
       
        <input type="text" v-model="user.email" placeholder="E-mail">
        <input type="text" v-model="user.password" placeholder="Пароль">
        <button type="submit" class="btn-main">Войти</button>
      </form>
    </div>
 </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name:'',
          email: '',
          password: '',
        },
      };
    },
    methods: {
      login() {
  if (!this.user.name || !this.user.email || !this.user.password) {
    alert('Пожалуйста, заполните все обязательные поля.');
    return;
  } else {
    this.$store.dispatch('register', this.user);
    if (this.user.email === 'admin' && this.user.password === 'admin') {
      this.$router.push('/admin');
    } else {
      this.$router.push({ name: 'user', params: { name: this.user.name } });
    
    }
  }
},
}
  };
  </script>

  <style scoped lang="scss">
.card-login{
        margin: auto;
        width: 458px;
        height: 620px;
        background-color: #fff;
        border-radius: 12px;
        margin: 12px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h2{
          font-size: 32px;

        }

    }
    input{
      border: none;
      border-radius: 4px;
      background-color: rgb(208, 207, 207);
      color: #fff;
      font-size: 18px;
      padding: 18px 64px;
      margin: 8px;
    }
    </style>