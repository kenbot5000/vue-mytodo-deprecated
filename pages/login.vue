<template>
  <v-card width="450" class="ma-auto">
    <v-card-title>
      <h1 class="display-1">Welcome!</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Username"></v-text-field>
        <v-text-field label="Password" type="password"></v-text-field>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="success">Register</v-btn>
      <v-btn color="info">Log In</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  layout: 'login'
}
</script>

<style>
  .v-application--wrap {
    background-image: url("./../static/loginbg3.webp");
    background-size: cover;
    background-position-y: -500px;
  }
</style>