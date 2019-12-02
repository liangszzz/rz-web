<template>
    <!-- Header -->
    <header id="header">
        <!-- Navigation -->
        <nav id="navigatio-_bar" class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <div class="logo"><img src="" alt="网站LOGO" /> </div>
                    <!-- /Logo -->

                    <button id="menu-slide" data-target="#navigation" aria-expanded="false" data-toggle="collapse" class="navbar-toggle collapsed"
                            type="button"> <span class="icon-bar"/> <span class="icon-bar"/> <span class="icon-bar"/>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navigation">
                    <ul class="nav navbar-nav">
                        <li><a href="/">主页</a></li>
<!--                        <li><a href="/about">关于我们</a></li>-->
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Navigation end -->
    </header>
    <!-- /Header -->
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


