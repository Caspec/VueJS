<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers">
                Server # {{ server }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'Normal' },
                    { id: 2, status: 'Normal' },
                    { id: 3, status: 'Uormal' },
                    { id: 4, status: 'Offline' }
                ]
            };
        }
    }
</script>

<style>

</style>
