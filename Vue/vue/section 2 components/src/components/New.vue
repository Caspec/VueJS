<template>
<div>
   <h3>New Quote</h3>
   <button @click="counter++">Inc</button>
   <p>{{ counter }}</p>
</div>
</template>

<script>
    export default {
        data: function () {
            return {
                counter: 0
            }
        },
        destroyed() {
                console.log('Destroyed');
        },
        deactivated() {
            console.log('Deactived')
        },
        activated() {
            console.log('Actived')
        }

    }
</script>

<style scoped>

</style>
