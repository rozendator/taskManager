<template>
  <div class="admin-container center">
    <div class="card">
      <LeaveComponent/>
      <div class="create">
        <h2>Admin</h2>
        <h1>Создать метку</h1>
        <div class="validation">
          <input type="text" v-model="title" placeholder="Заголовок">
          <input type="text" v-model="description" placeholder="Описание">
          <label for="status-select">
            Выберите статус задачи
            <select v-model="selected" id="status-select">
              <option value="active">активный</option>
              <option value="inactive">не активный</option>
            </select>
          </label>
          <button @click="addTask" class="btn-main">Создать</button>
        </div>
      </div>
      <div class="taskss">
        <h2>Задачи</h2>
        <div class="sortedTask" >
          <div   class="active"
    @dragover.prevent="onDragOver('active')"
    @dragenter="onDragEnter('active')"
    @dragleave="onDragLeave"
    @drop="onDrop('active')">
            <h3>Не Активные</h3>
            <div
            
              v-for="(task, index) in filteredTasks('inactive') "
              :key="index"
              class="drag-item"
              draggable="true"
              @dragover.prevent="onDragOver" @drop="onDrop('inactive')"
              @dragstart="onDragStart($event, task)"
              @dragend="onDragEnd"
            >
           <GreyMark/>
              <h2>{{ task.title }}</h2>
              <p>{{ task.description }}</p>
              <button class="change-btn" @click="change(task)">Изменить</button>
              <button class="change-btn" @click="delTask(index)">Удалить</button>
            </div>
          </div>
          <div class="inactive"
    @dragover.prevent="onDragOver('inactive')"
    @dragenter="onDragEnter('inactive')"
    @dragleave="onDragLeave"
    @drop="onDrop('inactive')">
            <h3>Активные</h3>
            <div
              v-for="(task, index) in filteredTasks('active')"
              :key="index"
              class="drag-item"
              @dragover.prevent="onDragOver" @drop="onDrop('active')"
              draggable="true"
              @dragstart="onDragStart($event, task)"
              @dragend="onDragEnd"
            >
            <GreenMark/>
              <h2>{{ task.title }}</h2>
              <p>{{ task.description }}</p>
              <button class="change-btn" @click="change(task)">Изменить</button>
              <button class="change-btn" @click="delTask(index)">Удалить</button>
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

export default {
    data() {
        return {
            title: '',
            description: '',
            newItem: {},
            tasks: [],
            selected: 'active',
            changeSelected: '',
            draggingTask: null,
            dragOverStatus: null,
        };
    },
    created() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            this.tasks = JSON.parse(storedTasks);
        }
    },
    methods: {
        addTask() {
            if (!this.title || !this.description) {
                alert('Пожалуйста, заполните все обязательные поля.');
                return;
            }
            this.newItem = {
                id: Math.round(Math.random() * 32),
                title: this.title,
                description: this.description,
                selected: this.selected,
            };
            this.tasks.push(this.newItem);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            this.title = '';
            this.description = '';
        },
        delTask(index) {
            this.tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        change(task) {
            task.selected = task.selected === 'active' ? 'inactive' : 'active';
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        filteredTasks(status) {
            return this.tasks.filter((task) => task.selected === status);
        },
        onDragStart(e, task) {
            e.dataTransfer.dropEffect = 'move';
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('task', JSON.stringify(task));
            this.draggingTask = task;
        },
        onDragEnd() {
            this.draggingTask = null;
        },
        onDragOver(status) {
            this.dragOverStatus = status;
        },
        onDragLeave() {
            this.dragOverStatus = null;
        },
        onDragEnter(status) {
            this.dragOverStatus = status;
        },
        onDrop(status) {
            if (this.draggingTask) {
                this.draggingTask.selected = status;
                const index = this.tasks.findIndex((task) => task.id === this.draggingTask.id);
                if (index !== -1) {
                    this.tasks.splice(index, 1, this.draggingTask);
                    localStorage.setItem('tasks', JSON.stringify(this.tasks));
                }
                this.draggingTask = null;
                this.dragOverStatus = null;
            }
        },
        onDragEnd() {
            if (this.draggingTask && !this.dragOverStatus) {
                this.draggingTask.selected = this.draggingTask.selected === 'active' ? 'inactive' : 'active';
                const index = this.tasks.findIndex((task) => task.id === this.draggingTask.id);
                if (index !== -1) {
                    this.tasks.splice(index, 1, this.draggingTask);
                    localStorage.setItem('tasks', JSON.stringify(this.tasks));
                }
                this.draggingTask = null;
                this.dragOverStatus = null;
            }
        },
    },
    components: { LeaveComponent, GreenMark, GreyMark }
};
</script>
<style lang="scss">
label{
  font-size: 24px;
}
select{
  border: none;
  background-color: rgb(208, 207, 207);
  margin: 2px;
  font-size: 16px;
}
.create{
text-align: center;
input{
  border: none;
      border-radius: 4px;
      background-color: rgb(208, 207, 207);
      color: #fff;
      font-size: 24px;
      padding: 18px 64px;
      margin: 8px;
}
}

.none{
  opacity: 0;
}
.drag-item {
  margin: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  cursor: grab;
}
.drag-over {
  background-color: #e6e6e6; 
}
</style>
