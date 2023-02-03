<template>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <v-form ref="form" v-model="valid" lazy-validation class="pa-5">
            
            <p class="font-weight-medium text-center py-2">
                Login Form
            </p>
            
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

            <v-btn to="/dashboard" color="success" class="mr-4" @click="validate">
                Submit
            </v-btn>

            <v-btn to="/register" color="error" class="mr-4" @click="reset">
                register
            </v-btn>
        </v-form>
    </v-card>
</template>
<script>
export default {
    name: 'LoginForm'
}
</script>