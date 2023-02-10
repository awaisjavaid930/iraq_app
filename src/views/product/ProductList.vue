<template>
    <div>
        <p class="font-weight-black">
            Product List
        </p>
        <v-btn to="/product/create" depressed color="primary" class="float-right">
            Add New
        </v-btn> <br /> <br />


        <v-card class="mx-auto">
          
            <v-list>
            
                <v-list-item>
                    <v-list-item-content style="width: 20% !important ;display: inline-block;">
                        <v-list-item-title>Id</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content style="width: 20% !important ;display: inline-block;">
                        <v-list-item-title>Category</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content style="width: 20% !important ;display: inline-block;">
                        <v-list-item-title>Product  </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content style="width: 20% !important ;display: inline-block;">
                        <v-list-item-title>Price</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content style="width: 20% !important ;display: inline-block;">
                        <v-list-item-title>Action</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-for="item in items" :key="item.title">
                    

                    <v-list-item-content style="width: 20% !important ;display: inline-block;">
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                    
                    <v-list-item-content style="width: 20% !important ;display: inline-block;">
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-content style="width: 20% !important ;display: inline-block;">
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                    
                    <v-list-item-content style="width: 20% !important ;display: inline-block;">
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                    
                    <v-list-item-content style="width: 20% !important ;display: inline-block;">
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
            
                    
                </v-list-item>
            </v-list>
        </v-card>

    </div>
</template>
<script>
export default {
    name: 'PoductList',
    data() {
        return {
            items: [
                { icon: true, title: 'Jason Oner' },
                { title: 'Travis Howard' },
                { title: 'Ali Connors' },
                { title: 'Cindy Baker' },
            ],
        }
    },

}
</script>