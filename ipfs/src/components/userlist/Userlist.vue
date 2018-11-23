<template>
    <div>
            <el-card class="box-card">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>筛选查询</span>
                </div>
                <div class="user_con">
                <el-form ref="form" :inline="true" :model="ruleForm" >
                   <el-form-item label="用户名" >
                        <el-input v-model="ruleForm.name" placeholder="用户名" ></el-input>
                    </el-form-item>
                    <el-form-item label="手机号">
                        <el-input v-model="ruleForm.phone" placeholder="手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="推荐人">
                        <el-input v-model="ruleForm.user" placeholder="推荐人手机号"></el-input>
                    </el-form-item>
                
                <el-form-item label="注册时间" >
                    <el-col :span="16">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    </el-col>
                    
                    <el-button type="primary" :span="6">查询</el-button>
                    
                </el-form-item>  
               
                 </el-form>  
                </div>
            </el-card>
            <el-card class="box-card box-card-two">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>用户列表</span>
                </div>
                <div>
                    <el-table
                        :data="tableData"
                         border
                        style="width: 100%">
                        <el-table-column  
                            label="用户名"
                            >
                               <template slot-scope="scope">
                                
                              
                                
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="phone"
                            label="手机号"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="SEC地址">
                        </el-table-column>
                        <el-table-column
                            prop="account"
                            label="账户">
                        </el-table-column>
                        <el-table-column
                            prop="invitation"
                            label="个人邀请码">
                        </el-table-column>
                         <el-table-column
                            prop="referee"
                            label="推荐人">
                        </el-table-column>
                         <el-table-column
                            prop="registration"
                            label="注册时间">
                        </el-table-column>
                         <el-table-column
                             prop="Enabled"
                            label="是否启用">
                                    
                                        
                        </el-table-column>
                         <el-table-column
                            
                            label="操作">
                            <template slot-scope="scope" >
                                            <el-switch
                                             v-model="scope.row.Enabled"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949"> 
                                            </el-switch>
                                        </template>
                        </el-table-column>
                         
                        </el-table>
                </div>
            </el-card>
    </div>
</template>
<style scoped>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  
  .box-card {
    width: 100%;
  }
  .user_header{
      height: 60px;
      line-height: 60px;
      text-align: left;
        background:#eee;
        border-radius:2px;
        text-indent: 8px; 

  }
  .el-form .el-form--inline{
        line-height: 40px;  
  }
  .el-form-item {
  line-height: 40px;  
  }
  .el-form-item__label{
     
  }
  .user_con{
      text-align: left;
      height: 40px;
     
      margin:15px 0 0;
  }
  .box-card-two{
      margin-top:10px;
      height: 100vh; 
  }
  .el-table{
      line-height: 30px;
      
  }
  .el-table__header-wrapper{
      background: #aaaaaa;
  }
</style>
<script>
    export default{
        data(){
            return{
                     value1: true,
                    value2: true,
                 ruleForm: {
                    name:'',
                    phone:'',
                    user:'',   
                    date1: '',
                    date2: '',
                 },
                 rules: {
                     name: [
                            { required: true, message: '请输入活动名称', trigger: 'blur' },
                            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                        ],
                        region: [
                            { required: true, message: '请选择活动区域', trigger: 'change' }
                        ],
                        date1: [
                            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                        ],
                        date2: [
                            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                        ],
                       
                 },

                msg:'userlist',
                formInline: {
                        user: '',
                        region: ''
                        },
                        tableData: [{
                                       
                                        name:'https://avatar.csdn.net/6/5/1/3_qq_43141894.jpg',
                                        phone:'13320589624',
                                        address: 'SQFyDKf5J79hSBqnPn4SwxcNV8TCuUCBRD',
                                        account:'1000.35',
                                        operation:'',
                                        invitation:'NR6852',
                                        referee:'13356895623',
                                        registration:'2018年8月13日09:52:38',
                                        Enabled:true,
                                        operation:'false',
                                    },
                                    {
                                       
                                        name:'天难撒',
                                        phone:'13320589624',
                                        address: 'SQFyDKf5J79hSBqnPn4SwxcNV8TCuUCBRD',
                                        account:'1000.35',
                                        operation:'',
                                        invitation:'NR6852',
                                        referee:'13356895623',
                                        registration:'2018年8月13日09:52:38',
                                        Enabled:true,
                                        operation:'false',
                                    },  
                                    {
                                       
                                        name:'天太难',
                                        phone:'13320589624',
                                        address: 'SQFyDKf5J79hSBqnPn4SwxcNV8TCuUCBRD',
                                        account:'1000.35',
                                        operation:'',
                                        invitation:'NR6852',
                                        referee:'13356895623',
                                        registration:'2018年8月13日09:52:38',
                                        Enabled:'是',
                                        operation:'false',
                                    }, 
                                    ]        
            }
        },
        methods: {
            onSubmit(){
                        console.log('submit!');
            }
        },

    }


</script>
