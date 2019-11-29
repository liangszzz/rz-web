<template>
    <div class="nav">
        <el-dropdown>
              <span class="el-dropdown-link">
                  <router-link to="/">Home</router-link>
              </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item></el-dropdown-item>
                <el-dropdown-item>
                    <router-link to="/about">About</router-link>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
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

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    .nav {
        height: 40px;
        text-align: center;
    }
</style>
