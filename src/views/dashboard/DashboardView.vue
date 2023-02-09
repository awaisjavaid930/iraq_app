<template>
    <div>
        <CategoryCard />
        <div>
            <ProductCard />
        </div>
    </div>
</template>
<script>
import CategoryCard from '@/components/category/CategoryCard.vue';
import ProductCard from '@/components/product/ProductCard.vue';
export default {
    name: "DashboardViews",
    components : {
        CategoryCard,
        ProductCard
    }
}
</script>