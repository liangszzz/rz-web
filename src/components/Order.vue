<template>
    <div class="order">
        <el-form label-width="100px" :label-position="left" :rules="rules" :model="ruleForm" ref="ruleForm">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>我要预约</span>
                    <span class="text-1">免费预约</span>
                </div>
                <div>
                    <el-form-item label="手机号码" prop="phoneNo">
                        <el-input type="phoneNo" v-model="ruleForm.phoneNo" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submit('ruleForm')">立即预约</el-button>
                    </el-form-item>

                </div>
            </el-card>
        </el-form>
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

        ruleForm = {
            phoneNo: ""
        };

        validatePass = (rule: any, value: string, callback: any) => {
            const telReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;
            if (value.trim() === '') {
                callback(new Error('请输入手机号!'));
            } else if (!telReg.test(value)) {
                callback(new Error('请输入正确的手机号!'));
            } else {
                callback();
            }
        };

        rules = {
            phoneNo: [{validator: this.validatePass, trigger: 'blur'}],
        };


        submit(formName: string) {
            let el: any = this.$refs['' + formName + ''];
            el.validate((valid: any) => {
                if (valid) {
                    alert(this.ruleForm.phoneNo);
                } else {
                    return false;
                }
            });
        }
    }
</script>

<style scoped>

    .btn-1 {

    }

    .text-1 {
        font-size: 12px;
        float: right;
        padding: 3px 0;
    }

    .order {
        width: 500px;
        height: 400px;

    }
</style>
