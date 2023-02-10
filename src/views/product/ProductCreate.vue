<template>
    <div>
        <p class="font-weight-black">
            Add New Product
        </p> <br />

        <v-form ref="form" v-model="valid" lazy-validation>

            <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="items" label="Standard"></v-select>
            </v-col>

            <v-col class="d-flex" cols="12" sm="12">
                <v-text-field v-model="name" label="Price" required class="mx-1"></v-text-field>
                <v-text-field v-model="name" label="Year" required class="mx-1"></v-text-field>
                <v-text-field v-model="name" label="name" required class="mx-1"></v-text-field>
            </v-col>
            
            <v-col class="d-flex" cols="12" sm="12">
                <v-text-field v-model="name" label="area" required class="mx-1"></v-text-field>
                <v-text-field v-model="name" label="location" required class="mx-1"></v-text-field>
                <v-text-field v-model="name" label="description" required class="mx-1"></v-text-field>
            </v-col>
            
            <v-col class="d-flex" cols="12" sm="12">
                <v-text-field v-model="name" label="quantity" required class="mx-1"></v-text-field>
                <v-text-field v-model="name" label="start_time" required class="mx-1"></v-text-field>
                <v-text-field v-model="name" label="end_time" required class="mx-1"></v-text-field>
            </v-col>
            

            <v-file-input show-size counter multiple label="File input"></v-file-input>

            <v-btn depressed color="primary" class="float-right">
                Save
            </v-btn>

        </v-form>
    </div>
</template>
<script>
export default {
    name: 'ProductCreate',
    data() {
        return {
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }
    },
}
</script>