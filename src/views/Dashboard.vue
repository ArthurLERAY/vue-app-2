<template>
  <v-container>
    <v-row class="justify-center title-wrapper">
      <v-col cols="5">
        <h1>Mon projet</h1>
      </v-col>
      <v-col v-if="showDelete" cols="3">
        <span style="color :red;">Supprimer la tâche <v-icon>mdi-delete</v-icon></span>
        <v-list v-model="toDelete">
          <draggable group="tasks" style="min-height: 10px; max-height: 10px; visibility: hidden;">
          </draggable>
        </v-list>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="col-area text-center">
      <v-col cols="3">
        <h2 style="margin-bottom: 15px;">À faire</h2>
        <div data-app>
          <AddTask :todo="todo" :index="index" :state="todoState" />
        </div>
        <v-list>
          <Card v-for="task of todo" :currentState="todo" :nextState="inProgress" :nextStateConf="inProgressState" v-bind:key="task.id" :task="task" @dragStarted="showDeleteBtn" @dragEnded="hideDeleteBtn" />
        </v-list>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="3">
        <h2 style="margin-bottom: 15px;">En cours</h2>
        <div data-app>
          <AddTask :todo="inProgress" :index="index" :state="inProgressState" />
        </div>
        <v-list>
          <Card v-for="task of inProgress" :currentState="inProgress" :nextState="finished" :nextStateConf="finishedState" v-bind:key="task.id" :task="task" @dragStarted="showDeleteBtn" @dragEnded="hideDeleteBtn" />
        </v-list>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="3">
        <h2 style="margin-bottom: 15px;">Fini</h2>
        <div data-app>
          <AddTask :todo="finished" :index="index" :state="finishedState" />
        </div>
        <v-list>
          <Card v-for="task of finished" :currentState="finished" :isLast="true" :key="task.id" :task="task" @dragStarted="showDeleteBtn" @dragEnded="hideDeleteBtn" />
        </v-list>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import AddTask from "@/components/AddTask";
import Card from "@/components/Card";
import draggable from "vuedraggable";

export default {
  name: "Dashboard",

  data: () => ({
    dialog: false,
    index: 2,
    todoState: {
      label: "todo",
    },
    inProgressState: {
      label: "inProgress",
    },
    finishedState: {
      label: "finished",
    },
    todo: [
      {
        id: 0,
        title: 'Exemple de titre',
        desc: 'Exemple de description',
        author: "Author 1",
        priority: 'red',
        taskTypes: [
          {
            id: 1,
            label: "Développement",
          },
          {
            id: 2,
            label: "Correction de bug",
          },
          {
            id: 3,
            label: "Review de code",
          }
        ]
      }
    ],
    inProgress: [
      {
        id: 1,
        title: 'Exemple de titre',
        desc: 'Exemple de description',
        author: "Author 2",
        priority: 'green',
        taskTypes: [
          {
            id: 3,
            label: "Review de code",
          }
        ]
      }
    ],
    finished: [
      {
        id: 2,
        title: 'Exemple de titre',
        desc: 'Exemple de description',
        author: "Author 1",
        priority: 'red',
        taskTypes: []
      }
    ],
    showDelete: false,
    toDelete: [],
  }),

  methods: {
    showDeleteBtn() {
      this.showDelete = true;
    },
    hideDeleteBtn() {
      this.showDelete = false;
      console.log(this.toDelete);
    }
  },

  components: {
    AddTask,
    Card,
    draggable
  },
}
</script>

<style scoped>

</style>