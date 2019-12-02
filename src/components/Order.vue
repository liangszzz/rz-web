<template>
    <div class="order">
        <div class="info-box">
            <div class="box-head">
                <h5>在线预约</h5>
            </div>
            <div class="box-body">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" maxlength="11" placeholder="请填写手机号码" v-model="ruleForm.phoneNo">
                    </div>
                    <br>
                    <br>
                    <div class="form-group">
                        <input type="button" value="立即预约" class="btn" @click="submit">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Prop,
        Vue
    } from 'vue-property-decorator';
    import { Message } from 'element-ui';

    @Component
    export default class Nav extends Vue {

        ruleForm = {
            phoneNo: "",
        };


        submit() {
            const value=this.ruleForm.phoneNo;
            const telReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;
            if (value.trim() === '') {
                this.notice("请填入手机号!",false);
            } else if (!telReg.test(value)) {
                this.notice("请填入正确的手机号!",false);
            }
            else {
                this.notice('预约成功!',true);
            }
        }

        private notice(str: string,success:boolean) {
            if (success){
                this.$message({
                    message: str,
                    type: 'success'
                });
            }
            else {
                this.$message({
                    message: str,
                    type: 'warning'
                });
            }
            this.ruleForm.phoneNo="";
        }
    }
</script>

