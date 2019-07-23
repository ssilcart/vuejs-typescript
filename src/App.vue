<template>
    <div class="full-width center-content">
        {{name}}
        <inspector name="Email"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { mapState, mapMutations } from 'vuex';
    import Component from 'vue-class-component';
    import Inspector from './components/Inspector.vue';

    @Component({
        components:{
            Inspector,
        },

        computed: mapState([ 
            'name'
        ]),

        methods: mapMutations([
            'changeName'
        ])
    })
    export default class App extends Vue {
        name!: string
        changeName!: () => void

        constructor() {
            super();
            this.changeNodeName('sms');
        }

        changeNodeName(param: String){
            this.$store.dispatch('changeName', param);
        }

    }
</script>
