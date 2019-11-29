<template>
    <div id="app">
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
        <router-view/>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        margin: 0;
        padding: 0;
    }

    .nav{
        height: 40px;
        text-align: center;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>
