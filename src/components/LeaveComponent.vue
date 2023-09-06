<template>
    <div class="leave">
        <button  class="btn-leave" @click="logout">Выйти</button>
    </div>
</template>
<script>
export default{
    methods:{
  logout(){
    this.$store.dispatch('logout')
    this.$router.push('/')
  }
}
}
</script>
<style>

.leave{
    display: flex;
    justify-content: flex-end;
}
.btn-leave{
background-color: #8B4789;
  border: none;
  border-radius: 5px;
  margin: 12px;
  width: 60px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  color: #fff;

}
</style>