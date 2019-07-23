<template>
    <div>
        <form action="" method="post">
            <div>
                <label for="">nombre Nodo</label>
                <input type="text">
            </div>
            <div>
                <label for="">Evento 1</label>
                <input type="text">
            </div>
            <div>
                <label for="">Evento 2</label>
                <input type="text">
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Body extends Vue {

    }
</script>

<style scoped>

</style>