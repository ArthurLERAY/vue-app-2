<template>
  <div class="login-card">
    <v-card
        elevation="5"
        outlined
        shaped
        class="login-card"
    >
      <v-form>
        <v-row>
          <v-col
              cols="12"
              md="12"
          >
            <v-text-field
                label="Email"
                required
                v-model="email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="12"
              md="12"
          >
            <v-text-field
                label="Mot de passe"
                required
                v-model="password"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-btn to="/dashboard" class="ma-2 submit-login" :loading="loading" :disabled="loading" @click="loading = true"><b>Se connecter</b></v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginCard",

  data: () => ({
    loading: false,
    email: '',
    password: '',
  })

}
</script>

<style scoped>

</style>