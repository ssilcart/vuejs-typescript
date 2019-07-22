<template>
    <div class="full-width center-content">
        <hello-component name="World"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import HelloComponent from './components/Hello.vue';

    @Component({
        components:{
            HelloComponent,
        }
    })
    export default class App extends Vue {
        constructor() {
            super();
        }
    }
</script>
