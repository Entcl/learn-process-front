<template>
    <div>
        <el-form ref="userInputForm" :model="userInputForm" class="LoginForm" :rules="rules">
            <h3 class="LoginTie">登录界面</h3>
            <el-form-item label="账号：" prop="userName">
                <el-input placeholder="请输入用户名：" prefix-icon="el-icon-user" v-model="userInputForm.userName" clearable>
                </el-input>
            </el-form-item>

            <el-form-item label="密码：" prop="userPasswd">
                <el-input placeholder="请输入密码：" prefix-icon="el-icon-lock" v-model="userInputForm.userPasswd"
                    show-password>
                </el-input>
            </el-form-item>

            <el-form-item label="验证码：" prop="captcha">
                <img :src="captchaUrl" alt="验证码aa">
                <el-input placeholder="请输入验证码：" prefix-icon="el-icon-lock" v-model.number="userInputForm.captcha">
                </el-input>
            </el-form-item>

            <div style="margin: 44px 0px;"></div>
            <el-button type="primary" round class="LoginBtn" v-on:click="Login('userInputForm')">登录</el-button>
            <div style="margin: 76px 0px;"></div>
            没有账号？
            <a href="#">点击注册</a>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: "Login",
    data() {
        return {
            captchaUrl: "",
            userInputForm: {
                userName: "",
                userPasswd: "",
                captcha: ""
            },
            rules: {
                userName: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' },
                ],
                userPasswd: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                ],
                captcha: [
                    { required: true, message: '验证码不能为空', trigger: 'blur' },
                    { type: 'number', message: '验证码必须为数字值' }
                ]
            },

        }
    },
    methods: {
        Login(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 放置登录逻辑
                    if (axios.interceptors.response({

                    })) {

                    }
                    sessionStorage.setItem("isLogin", "true")

                    this.$store.dispatch("asyncUpdateUser", { userName: this.userInputForm.userName });
                    this.$router.push({ name: "BackHome", params: { userName: this.userInputForm.userName } });
                    // this.$router.push("/backHome");
                } else {
                    this.$message.error('请输入用户名或者密码');
                    // alert('请输入用户名或者密码');
                    return false;
                }
            });
        },
    },

}
</script>

<style scoped>
.LoginForm {
    width: 350px;
    margin: 200px auto;
    /* text-align: center; */
    border: 1px solid #DCDFE6;
    padding: 30px;
    border-radius: 10px;
    /* h-shadow v-shadow blur color */
    box-shadow: 0 0 30px #909399;
}

.LoginTie {
    text-align: center
}

.LoginBtn {
    width: 100%;
}
</style>