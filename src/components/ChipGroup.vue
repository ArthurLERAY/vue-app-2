<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-sheet
          elevation="10"
          rounded="xl"
          class="rounded-sheet"
      >
        <v-sheet
            class="pa-3 primary text-right rounded-top-sheet"
            rounded="t-xl"
            min-height="35px"
            :style="'background-color:' + sheetColor"
        >
        </v-sheet>

        <div class="pa-4">
          <v-chip-group
              active-class="primary--text"
              column
              multiple
          >
            <v-chip
                v-for="tag in tags"
                :key="tag.id"
                @click="addTaskType(tag)"
            >
              {{ tag.label }}
            </v-chip>
          </v-chip-group>
        </div>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ChipGroup",
  props: ['tags', 'color', 'taskTypes', 'selectedTypes'],

  data: () => ({
    tagToRemoveIndex: 0,
  }),

  methods: {
    addTaskType(tag) {
      const isTagInArray = this.selectedTypes.filter(x => x.id === tag.id);
      if (isTagInArray.length === 0) {
        this.selectedTypes.push(tag);
      } else {
        this.selectedTypes.splice(this.selectedTypes.indexOf(tag), 1);
      }
    }
  },

  computed: {
    sheetColor() {
      return this.color;
    }
  }
}
</script>

<style scoped>

</style>