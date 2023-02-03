<template>
    <v-container>
        <div>
            <v-app-bar color="deep-purple accent-4" dense dark>

                <v-toolbar-title>IRAQ AUCTION</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-menu left bottom>
                    <v-list>
                        <v-list-item v-for="n in 5" :key="n" @click="() => { }">
                            <v-list-item-title>Option {{ n }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-btn to="/register">
                    Register
                </v-btn>
                <v-btn to="/login">
                    Login
                </v-btn>
                <v-btn>
                    Logout
                </v-btn>
            </v-app-bar>
        </div>
    </v-container>
</template>

<script>

export default {
    name: 'HelloWorld',

    data: () => ({
        
    }),
    
    
}
</script>
