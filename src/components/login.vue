<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">用户登录</div>
            <el-form :model="param" :rules="rule" ref="login" label-width="120px" class="ms-content">
                <el-form-item label="请输入用户名:" prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <!-- <el-button slot="prepend" icon="el-icon-lx-people"></el-button> -->
                    </el-input>
                </el-form-item>
                <el-form-item label="请输入密码:" prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                       
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            param: {
                username: 'admin',
                password: '123123',
            },
            rules:{
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            }
        };
    },
    methods: {
        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    this.$message.success('登录成功');
                    // 保存登录状态
                    localStorage.setItem('ms_username', this.param.username);
                    this.$router.push('/');
                } else {
                    this.$message.error('请输入账号和密码');
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: 100%;
}
.ms-title {
    /* width: 50%; */
    padding-top: 50px;
    line-height: 30px;
    text-align: center;
    font-size: 30px;
    /* border-bottom: 1px solid #ddd; */
} 
.ms-login {
    position: absolute;
    left: 40%;
    top: 60%;
    width: 350px;
    /* margin: -190px 0 0 -175px; */
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
} 
.ms-content {
    padding: 50px 50px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    /* color: #fff; */
} 
</style>
