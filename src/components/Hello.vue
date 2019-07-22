<template>
    <div>
        <h1> Hola {{name}} </h1>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class HelloComponent extends Vue {
        @Prop({ default: 'World' })
        name!: String
    };
</script>

<style scoped>

</style>