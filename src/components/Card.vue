<template>
  <v-dialog
      v-model="dialog"
      max-width="700px"
      content-class="v-dialog"
  >
    <template v-slot:activator="{ on }">
      <draggable group="tasks" style="min-height: 100px" @start="beginDrag" @end="endDrag">
        <v-card v-on="on" tile :class="dragClass + ' inside-card'" :style="lineColor">
          <v-card-title>{{ task.title }}</v-card-title>
          <v-card-text>{{ task.desc }}</v-card-text>
        </v-card>
      </draggable>
    </template>
    <v-row>
      <v-col cols="2">
        <v-card>
<!--          <v-tooltip bottom v-if="isLast !== true">-->
<!--            <template v-slot:activator="{ on }">-->
<!--              <v-btn icon @click="upgrade" v-on="on" class="inside-icon"><v-icon>mdi-arrow-up-box</v-icon></v-btn>-->
<!--            </template>-->
<!--            <span>Upgrade la tâche</span>-->
<!--          </v-tooltip>-->
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon @click="deleteTask" v-on="on" class="inside-icon"><v-icon>mdi-delete</v-icon></v-btn>
            </template>
            <span>Supprimer la tâche</span>
          </v-tooltip>
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-card class="card-task-types">
          <TaskTypeList :tags="task.taskTypes"/>
        </v-card>
      </v-col>
    </v-row>
    <v-card class="mt-4" elevation="4">
      <div class="btn-action">
      </div>
      <v-card-title>
        <v-col cols="12" class="float-left" justify="left">
          <h3>{{ task.title }}</h3>
        </v-col>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text style="margin-top: 15px !important;">
        {{ task.desc }}
      </v-card-text>
      <v-card-actions>
        <v-col cols="8" class="float-left justify-left">
          <p class="float-left"><u>{{ task.author }}</u></p>
        </v-col>
        <v-spacer></v-spacer>
        <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
        >
          Annuler
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import TaskTypeList from "@/components/TaskTypeList";
import draggable from "vuedraggable";

export default {
  name: "Card",

  props: ['task', 'isLast', 'currentState', 'nextState', 'index', 'nextStateConf'],

  data: () => ({
    dialog: false,
    dragClass: ""
  }),

  methods: {
    // upgrade() {
    //   const item = {
    //     id: this.task.id,
    //     title: this.task.title,
    //     desc: this.task.desc,
    //     author: this.task.author,
    //     color: this.nextStateConf.color,
    //     taskTypes: this.task.taskTypes
    //   };
    //   this.nextState.push(item);
    //   this.deleteTask();
    //   this.dialog = false;
    // },
    deleteTask() {
      for (let task of this.currentState) {
        console.log(`flyTaskId: ${task.id}, this.task.id: ${this.task.id}`);
        if (task.id === this.task.id) {
          console.log(`flyTaskId: ${task.id}, this.task.id: ${this.task.id}`);
          const index = this.currentState.indexOf(task);
          this.currentState.splice(index, 1);
        }
      }
    },
    beginDrag() {
      this.dragClass = "beginDrag";
      this.$emit('dragStarted');
    },
    endDrag() {
      this.$emit('dragEnded');
    }
  },
  computed: {
    lineColor() {
      return {
        'border-top': 'solid 2px ' + this.task.priority
      }
    }
  },
  components: {
    TaskTypeList,
    draggable
  }
}
</script>