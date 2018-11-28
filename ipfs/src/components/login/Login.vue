<template>
    <div class="bg">
        <div style="position: absolute;color: white;top:35%;left: 20%;">
            <div style="font-size: 2.3vw;">LPFS包后台管理系统</div>
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
        methods: {
            denglu(){
                
                  
                var _this=this
                var password = this.dataApi.md5(this.adminInfo.password);
                    password=password.toUpperCase()
                        
                var data={
                        adminCantant:this.adminInfo.phone,
                        adminPwd:password,
                        reqUser:'ipfs',
                        reqMobile :'ipfs'
                    }
                this.dataApi.ajax('adminLogin',data, res => {
                    
              
                    if(res.respState==='F'){
                           this.$notify({
                        title: '警告',
                        message: res.respMsg,
                        type: 'warning'
                        }); 
                    }else{
                    
                    _this.guding.code=res.adminCode
                    _this.guding.Cantant=res.adminCantant
                    _this.guding.toke=res.adminToken
                    _this.guding.name=res.adminName
                    
                   
                    setCookie('adminCode',res.adminCode)
                    setCookie('Cantant',res.adminCantant)
                    setCookie('toke',res.adminToken)
                    setCookie('name',res.adminName)
                    // _this.guding.name=res.adminToken
                    // console.log(_this._data.guding.Cantant)
                    // console.log(_this._data.guding.toke)
                    // console.log(_this._data.guding.code)
                    // console.log(res)
                         
                    _this.$store.commit('login',_this.guding)
                    //  console.log(_this.$store.state)

                    this.$notify({
                        title: '成功登录',
                        message:'开始管理',
                        type: 'success'
                        });
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
    background-size: 100% 90%;
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
    right:20%;
    top: 35%;
    height: 25%;
    border-radius: 0;
    box-shadow:0 8px 18px 0 rgba(0,0,0,.12), 0 0 20px 0 rgba(0,0,0,.04);
    padding-top: 2vh;
    min-width: 386px;
    max-height: 320px;
}


</style>
