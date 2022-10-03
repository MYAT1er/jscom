<template>
<div>
    <font-awesome-icon icon="fa-solid fa-user" class="user"/>
    <p>{{name}}</p>
                     
</div>
  
</template>

<script>
export default {
    name:"profile",

    data() {
        return {
            name:'',
        }
    },

    mounted() {
        this.name = sessionStorage.getItem("name");
    },
}
</script>

<style scoped>
div 
{
    border-radius: 16px;
    margin-left: 2.5rem;
    background-color: rgb(113, 221, 113);
    align-items: center;
    display: flex;
    padding: 0.4rem 1.4rem;
    
}

p
{
    font-family: "Poppins", sans-serif;
    margin-left: 15px;
}
</style>