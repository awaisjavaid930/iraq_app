<template>
    <p class="font-weight-black">
        Add New Category
    </p> <br />

    <v-form ref="form" v-model="valid" lazy-validation>

        <v-text-field v-model="name" label="Name" required></v-text-field>

        <v-file-input show-size counter multiple label="File input"></v-file-input>


        <v-btn depressed color="primary" class="float-right">
            Save
        </v-btn>

    </v-form>
</template>
<script>
export default {
    name: 'CategoryCreate',
}
</script>