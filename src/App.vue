<template>
  <nav>
  
  </nav>
  <router-view/>
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(235,228,236,1) 0%, rgba(242,229,241,1) 0%, rgba(235,216,235,1) 3%, rgba(120,31,157,1) 97%);
  background-size: 100%;


}
.card{
        margin: auto;
     
  

        text-align: center;
        padding-top: 24px;
        overflow: auto; 
        
 
    }
    .validation{
            display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
        }
    .center{
      display: flex;
      justify-content: center;
      align-items: center;
    }

.btn-main{
  background-color: #8B4789;
  border: none;
  width: 120px;
  height: 60px;
  font-size: 18px;
  cursor: pointer;
  color: #fff;

  border-radius: 12px;
}
.sortedTask {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.active .inactive{
  width: 350px;
  height: 800px;

}
.change-btn{
  border: 2px solid #8B4789;
  border-radius: 12px;
  margin: 4px;
  background-color: transparent;
  width: 80px;
  height: 40px;
  cursor: pointer;
}
.mark{
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
</style>
<script>
export default{
  
}
    </script>