<template>
    <div>
        <SidebarView />
        <CategoryCard />
        
        <div>
            <ProductCard />
        </div>
        
    </div>
</template>
<script>
import SidebarView from '@/components/sidebar/SidebarView.vue';
import CategoryCard from '@/components/category/CategoryCard.vue';
import ProductCard from '@/components/product/ProductCard.vue';
export default {
    name: "DashboardViews",
    components : {
        SidebarView,
        CategoryCard,
        ProductCard
    }
}
</script>