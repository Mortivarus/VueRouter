<script setup>
import GroceriesTable from '../../components/GroceriesTable.vue'
import {ref} from 'vue'

const groceries = ref([{
    id: 1,
    name: 'Brood',
    quantity: 0,
    price: 1.00}, 
{   
    id:2,
    name: 'Broccoli',
    quantity: 0,
    price: 0.99},
{
    id: 3,
    name: 'Krentenbollen',
    quantity: 0,
    price: 1.20
}, {
    id: 4,
    name: 'Noten',
    quantity: 0,
    price: 2.99
}])

</script>

<template>

    <GroceriesTable :groceries="groceries"/>

</template>


