<template>
    <div class="user-container">
      
<div class="card">
    <LeaveComponent/>
    <div class="taskss">
        <h2>{{ userName }}</h2>
    <h2>Задачи</h2>
<div class="sortedTask ">
  
  <div class="active">
  <h3>  Не Активные</h3>
  <div  v-for="(task, index) in tasks" :key="index" >
 
<div class="" v-if="task.selected==='inactive'">
    <GreyMark/>
  <h2>   {{ task.title }}</h2>
                <p >{{ task.description }}</p>
                
</div>
</div>
</div>
<div class="inactive">
  <h3>Активные</h3>
  <div  v-for="(task, index) in tasks" :key="index" >

<div class="" v-if="task.selected==='active'">
    <GreenMark/>
  <h2>   {{ task.title }}</h2>
                <p >{{ task.description }}</p>
             
</div>
</div>
</div>
</div>
   </div>
</div>
       
    </div>
</template>
<script>
import GreenMark from '@/components/GreenMark.vue';
import GreyMark from '@/components/GreyMark.vue';
import LeaveComponent from '@/components/LeaveComponent.vue';

export default{
    data() {
        return {
            tasks: []
        };
    },
    
    created() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            this.tasks = JSON.parse(storedTasks);
        }
    },
    computed: {
    userName() {
      return this.$route.params.name;
    },
  },
    components: { LeaveComponent, GreyMark, GreenMark }
}
</script>