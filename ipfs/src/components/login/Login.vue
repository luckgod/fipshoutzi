<template>
    <div class="bg">
        <div style="position: absolute;color: white;top:20%;left: 40%;">
            <div style="font-size: 2.3vw;">IPFS后台管理系统</div>
            <!-- <div style="font-size: 1.5vw;margin-top: 18%">M+ red bonus</div>
            <div style="font-size: 1.5vw;">Background management system</div> -->
        </div>
        <el-card class="box-card login_card">
            <el-form :model="adminInfo" :rules="rules2" ref="adminInfo"  class="demo-ruleForm login_form">
                <el-form-item label="" prop="account_number">
                    <el-input type="text" v-model.trim="adminInfo.phone" :maxlength="32" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input type="password" v-model.trim="adminInfo.password"  :maxlength="32" placeholder="请输入密码"></el-input>
                </el-form-item>
               
                <el-form-item >
                    <!-- <el-button type="primary" @click="submitForm('adminInfo')" :loading="loading" style="width: 100%;">登录</el-button> -->
                    <div class="bt"  :loading="loading"  @click="denglu">登 录</div>
                     <!-- @click="submitForm('adminInfo')" -->
                    <!--<el-button type="default" @click="resetForm('adminInfo')">重置</el-button>-->
                </el-form-item>
            </el-form>
        </el-card> 
    </div>
    
</template>
<script>
    export default {
        data() {
            return {
              guding:{
                Cantant:'',
                code:'',
                toke:'',
                name:''
              } , 
               
               loading:false,
                adminInfo: {
                    phone: '',
                    password: '',
                    headUserId:'',
                   
                },
                rules2: {
                    phone: [
                        {required: true, message:'请填写账号', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message:'请填写密码', trigger: 'blur'}
                    ]

                },
                cantclick:false
            };
        },
         created() {
            document.addEventListener('keydown', this.keyDownLogin)
        },
        destroyed() {
            document.removeEventListener('keydown', this.keyDownLogin)
        },
        methods: {
            keyDownLogin(e) {
                if (!e) {
                    e = window.event;
                }
                if ((e.keyCode || e.which) === 13) {
                  this.denglu()
                }
            },
            denglu(){
                
                  
                var _this=this
                var password = this.dataApi.md5(this.adminInfo.password);
                    password=password.toUpperCase()
                        
                var data={
                        adminCantant:this.adminInfo.phone,
                        adminPwd:password
                    }
                this.dataApi.ajax('adminLogin',data, res => {
                    
              
                    if(res.respState==='S'){
                        localStorage.setItem('permission',JSON.stringify(res))
                         this.$router.push('/Index/Userlist')
                    }
                    
               })
            
              
            },
            
          
        },
     
        
    }
</script>
<style>

.el-form-item__label {
    text-align: center;
}

.bg{
    background: url(../../assets/images/bg2.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;

}
.login_form input{
    height:5vh;
    border: 1px solid #E7EAF1;
}
.bt{

    background:url(../../assets/images/btbg.png);
    background-size: 100% 100%;
    color: white;
    text-align: center;
    font-size: 16px;
    height:6vh;
    line-height: 5vh;
    cursor: pointer;
}
.login_card{
    width:23%;
    position: absolute;
    right:39%;
    top: 40%;
    height: 25%;
    border-radius: 0;
    box-shadow:0 8px 18px 0 rgba(0,0,0,.12), 0 0 20px 0 rgba(0,0,0,.04);
    padding-top: 2vh;
    padding-bottom: 1vh;
    min-width: 386px;
    max-height: 320px;
    border-radius:2px; 
}


</style>
