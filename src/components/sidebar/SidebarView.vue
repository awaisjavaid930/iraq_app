<template>
    <v-card>
        <v-navigation-drawer permanent expand-on-hover>
            <v-list>
                
                <v-list-item class="px-2">
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            Awais Javaid
                        </v-list-item-title>
                        <v-list-item-subtitle>Awais Javaid</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav dense>
                
                <v-list-item link>
                    <v-list-item-title>
                        <v-btn to="/dashboard" block>
                            Home
                        </v-btn>
                    </v-list-item-title>
                </v-list-item>
                
                <v-list-item link>
                    <v-list-item-title>
                        <v-btn to="/category" block>
                            Category
                        </v-btn>
                    </v-list-item-title>
                </v-list-item>
                
                <v-list-item link>
                    <v-list-item-title>
                        <v-btn to="/product" block>
                            Product
                        </v-btn>
                    </v-list-item-title>
                </v-list-item>
                
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
export default {
    name: 'SidebarView'
}
</script>