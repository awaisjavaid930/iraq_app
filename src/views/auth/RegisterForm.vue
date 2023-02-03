<template>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <v-form ref="form" v-model="valid" lazy-validation class="pa-5">
        
            <p class="font-weight-medium text-center py-2">
                Register Form
            </p>
            
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

            <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item"
                required></v-select>

            <v-btn color="success" class="mr-4" @click="validate">
                Submit
            </v-btn>

            <v-btn to="/login" color="error" class="mr-4" @click="reset">
                Login
            </v-btn>
        </v-form>
    </v-card>

</template>
<script>
export default {
    name: 'RegisterForm'
}
</script>