<template>
    <article>
        <button @click="addToOrder(menuItem)">+</button>
        <p>{{menuItem.title}}</p>
        <p>{{menuItem.desc}}</p>
        <p>{{menuItem.price}}</p>
    </article>
</template>

<script>
export default {
    props: {
        menuItem: Object
        
    },
    methods: {
        addToOrder(menuItem) {
            this.$store.dispatch('addToOrder', menuItem )
        }
    }
 
};
</script>

<style>
</style>