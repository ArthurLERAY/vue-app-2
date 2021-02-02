<template>
  <v-container>
    <v-row class="text-center title-wrapper">
      <v-col justify="center" cols="12">
        <h1 class="login-title">Connexion</h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="3"></v-col>
      <v-col cols="6" justify="center">
        <LoginCard/>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginCard from "@/components/LoginCard";
  export default {
    name: 'Login',

    data: () => ({

    }),
    components: {
      LoginCard
    }
  }
</script>
