<template>
<div class="nav">
    <h1>{{ msg }}</h1>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
    @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.nav {
    float: left;
}
</style>
