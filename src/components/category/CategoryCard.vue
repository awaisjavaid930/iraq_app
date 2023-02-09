<template>
    <div>
        <v-container class="pa-0 grey lighten-5">
            <v-row no-gutters>
                
                <v-col cols="12" sm="2" class="ma-1">
                    <v-card :loading="loading" class="my-1">
                        <v-img height="150" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                        <v-card-title> Bike </v-card-title>
                        <v-divider class="mx-2"></v-divider>
                        <v-card-title>Tonight avail</v-card-title>
                        <v-card-actions>
                            <v-btn color="deep-purple lighten-2" text @click="reserve">
                                Reserve
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'CategoryCard',
    data: () => ({
        loading: false,
        selection: 1,
    }),

    methods: {
        reserve() {
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
        },
    },
}
</script>