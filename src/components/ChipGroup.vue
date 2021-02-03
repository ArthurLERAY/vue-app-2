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
  props: ['tags', 'color', 'selectedTypes'],

  data: () => ({
    tagToRemoveIndex: 0,
  }),

  methods: {
    addTaskType(tag) {
      const isTagInArray = this.selectedTypes.map(x => {
        if (x.id === tag.id) {
          this.tagToRemoveIndex = this.selectedTypes.indexOf(x);
          return true;
        }
      });
      if (!isTagInArray) {
        this.selectedTypes.push(tag);
      } else {
        this.selectedTypes.slice(this.tagToRemoveIndex, 1);
      }
      console.log(this.selectedTypes);
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