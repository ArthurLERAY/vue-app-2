<template>
  <v-dialog
      v-model="dialog"
      max-width="1000px"
  >
    <template v-slot:activator="{ on }">
      <v-btn
          slot="activator"
          v-on="on"
          width="100%"
      >
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
        </svg>
      </v-btn>
    </template>
    <v-row>
      <v-col cols="7">
        <v-card>
          <v-card-title>
            <span class="headline">Créer une nouvelle tâche</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <v-text-field label="Auteur" required v-model="taskAuthor"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-select :items="taskPriorities" item-text="label" item-value="value" label="Priorité" required v-model="taskPriority"></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Titre de la tâche" required v-model="taskTitle"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-textarea label="Description de la tâche" counter="60" required v-model="taskDesc"></v-textarea>
                </v-col>
              </v-row>
            </v-container>
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
            <v-btn
                color="blue darken-1"
                text
                @click="validate"
            >
              Sauvegarder
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="5">
        <ChipGroup :tags="taskTypes" color="#5e5e5e" :selectedTypes="selectedTypes"/>
      </v-col>
    </v-row>
  </v-dialog>
</template>

<script>
import ChipGroup from "@/components/ChipGroup";
export default {
  name: "AddTask",
  props: ['todo', 'index', 'state'],

  data: () => ({
    dialog: false,
    taskTitle: "",
    taskDesc: "",
    taskAuthor: "",
    taskPriority: "",
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
    ],
    selectedTypes: [],
    taskPriorities: [
      {
        id: 1,
        label: "Basse",
        value: "green"
      }, {
        id: 2,
        label: "Moyenne",
        value: "orange"
      },
      {
        id: 3,
        label: "Haute",
        value: "red"
      }
    ]
  }),

  components: {
    ChipGroup
  },

  methods: {
    validate() {
      if (this.taskTitle.length > 0 && this.taskDesc.length > 0) {
        const item = {id: this.index+1, title: this.taskTitle, desc: this.taskDesc, author: this.taskAuthor, priority: this.taskPriority, taskTypes: this.selectedTypes}
        this.index++;
        this.todo.push(item);
        this.dialog = false;
      }
      this.taskTitle = "";
      this.taskDesc = "";
      this.selectedTypes = [];
    }
  }

}
</script>

<style scoped>

</style>