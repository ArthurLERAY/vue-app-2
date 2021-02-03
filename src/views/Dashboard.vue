<template>
  <v-container>
    <v-row class="justify-center title-wrapper">
      <v-col cols="12">
        <h1>Mon projet</h1>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="col-area text-center">
      <v-col cols="3">
        <h2 style="margin-bottom: 15px;">À faire</h2>
        <div data-app>
          <AddTask :todo="todo" :index="index" :state="todoState" />
        </div>
        <Card v-for="task of todo" :currentState="todo" :nextState="inProgress" :nextStateConf="inProgressState" v-bind:key="task.id" :task="task" />
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="3">
        <h2 style="margin-bottom: 15px;">En cours</h2>
        <div data-app>
          <AddTask :todo="inProgress" :index="index" :state="inProgressState" />
        </div>
        <Card v-for="task of inProgress" :currentState="inProgress" :nextState="finished" :nextStateConf="finishedState" v-bind:key="task.id" :task="task" />
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="3">
        <h2 style="margin-bottom: 15px;">Fini</h2>
        <div data-app>
          <AddTask :todo="finished" :index="index" :state="finishedState" />
        </div>
        <Card v-for="task of finished" :currentState="finished" :isLast="true" v-bind:key="task.id" :task="task" />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import AddTask from "@/components/AddTask";
import Card from "@/components/Card";
export default {
  name: "Dashboard",

  data: () => ({
    dialog: false,
    index: 2,
    todoState: {
      label: "todo",
      color: "blue"
    },
    inProgressState: {
      label: "inProgress",
      color: "orange"
    },
    finishedState: {
      label: "finished",
      color: "green"
    },
    todo: [
      {
        id: 0,
        title: 'Exemple de titre',
        desc: 'Exemple de description',
        author: "Author 1",
        color: 'blue',
        taskTypes: []
      }
    ],
    inProgress: [
      {
        id: 1,
        title: 'Exemple de titre',
        desc: 'Exemple de description',
        author: "Author 2",
        color: 'orange',
        taskTypes: []
      }
    ],
    finished: [
      {
        id: 2,
        title: 'Exemple de titre',
        desc: 'Exemple de description',
        author: "Author 1",
        color: 'green',
        taskTypes: []
      }
    ],
  }),

  components: {
    AddTask,
    Card,
  },
}
</script>

<style scoped>

</style>