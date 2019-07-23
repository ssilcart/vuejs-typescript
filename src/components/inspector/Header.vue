<template>
    <div class="header">
        <h1>Soy el header de {{name}}</h1>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class Header extends Vue {
        @Prop({ default: '' })
        name!: string;
    }

</script>

<style lang="scss" scoped>

</style>