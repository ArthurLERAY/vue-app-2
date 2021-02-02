<template>
  <v-dialog
      v-model="dialog"
      max-width="500px"
  >
    <template v-slot:activator="{ on }">
      <v-card v-on="on" tile class="inside-card" :style="lineColor">
        <v-card-title>{{ task.title }}</v-card-title>
        <v-card-text>{{ task.desc }}</v-card-text>
      </v-card>
    </template>
    <v-card>
      <v-row class="float-left p-1">
        <v-col cols="12">
          <v-tooltip bottom v-if="isLast !== true">
            <template v-slot:activator="{ on }">
              <v-icon @click="upgrade" v-on="on" class="inside-icon">mdi-arrow-up-box</v-icon>
            </template>
            <span>Upgrade la tâche</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon @click="deleteTask" v-on="on" class="inside-icon">mdi-delete</v-icon>
            </template>
            <span>Supprimer la tâche</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-card-title>
        <v-col cols="12" class="float-left" justify="left">
          <v-row class="float-left">
            <v-col cols="12">
              <h3>{{ task.title }}</h3>
            </v-col>
          </v-row>
          <v-row class="float-left">
            <v-col cols="12">
              <p><u>Auteur</u></p>
            </v-col>
          </v-row>
        </v-col>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text style="margin-top: 15px !important;">
        {{ task.desc }}
      </v-card-text>
      <v-card-actions>
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
export default {
  name: "Card",

  props: ['task', 'isLast', 'currentState', 'nextState', 'index', 'nextStateConf'],

  data: () => ({
    dialog: false,
  }),

  methods: {
    upgrade() {
      const item = {
        id: this.task.id,
        title: this.task.title,
        desc: this.task.desc,
        color: this.nextStateConf.color
      };
      this.nextState.push(item);
      this.deleteTask();
      this.dialog = false;
    },
    deleteTask() {
      for (let task of this.currentState) {
        if (task.id === this.task.id) {
          const index = this.currentState.indexOf(task);
          this.currentState.splice(index, 1);
        }
      }
    }
  },
  computed: {
    lineColor() {
      return {
        'border-top': 'solid 2px ' + this.task.color
      }
    }
  }
}
</script>