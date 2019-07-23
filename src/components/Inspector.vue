<template>
    <div class="full-width center-content">
        <Header :name="name" />
        <Body />
        <Footer />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';
    import Header from './inspector/Header.vue';
    import Footer from './inspector/Footer.vue';
    import Body from './inspector/Body.vue';

    @Component({
        components: {
            Header,
            Footer,
            Body,
        }
    })
    export default class Inspector extends Vue {
        @Prop({ default: 'World' })
        name!: String
    };
</script>

<style scoped>

</style>