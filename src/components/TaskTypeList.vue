<template>
  <v-slide-group
      multiple
      show-arrows
  >
    <v-slide-item
        v-for="tag in tags"
        :key="tag.id"
    >
      <v-chip>
        {{ tag.label }}
      </v-chip>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  name: "TaskTypeList",
  props: ['tags']
}
</script>

<style scoped>

</style>