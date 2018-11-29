<template>
<div>
   
<el-card class="box-card box-cardheaderthree">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>筛选查询</span>
                </div>
                <div class="user_con">
                    
                <el-form ref="form" :inline="true" :model="ruleForm" >
                    <el-form-item label="输入搜索：">
                        <el-input v-model="ruleForm.name" placeholder="账号/姓名"></el-input>
                    </el-form-item>
                   <el-form-item label="奖励类型 ：">
                       <el-select v-model="value" placeholder="系统奖励">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-button type="primary" @click="seledat">查询</el-button>
                                 <el-button type="success" @click="dialogVisible = true">添加</el-button>
                    </el-form-item>
                 </el-form>  
                </div>
            </el-card>
            <!-- 第二块 -->
                  <el-card class="box-card box-card-two">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>账号列表</span>
                </div>
                <div>
                    <el-table
                        :data="tablenumber"
                         border
                        style="width: 100%">
                        <el-table-column
                            prop="adminAcctNo"
                            label="账号"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="adminName"
                            label="姓名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="adminCantant"
                            label="联系电话">
                        </el-table-column>
                        <el-table-column
                            prop="powerName"
                            label="所属权限组">
                        </el-table-column>
                        <el-table-column
                            prop="creTime"
                            label="添加时间">
                        </el-table-column>
                        <el-table-column
                       
                        label="操作"
                        width="100">
                        <template slot-scope="scope">
                           
                            <el-button type="text"  @click="handleClickb(scope.row)">编辑</el-button>

                        </template>
                        </el-table-column>
                      
                          <el-table-column
                            
                            label="状态">
                            <template slot-scope="scope" >
                                            <el-switch
                                             v-model="scope.row.adminState"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949"
                                            active-value="D"
                                            inactive-value="Y"
                                            @change="changeSwitch(scope.row)"
                                            > 
                                            </el-switch>
                                        </template>
                        </el-table-column>
                        
                        </el-table>
                </div>
                <!-- 第三块 -->
                          <el-dialog
                         title="添加账号" 
                        :visible.sync="dialogVisible"
                        width="30%"
                        style="line-height:40px;"
                        :modal="false"
                        >
                        <el-form ref="form" :model="form" label-width="90px" >
                                <el-form-item label="账号：">
                                <el-input v-model="form.usernumber" ></el-input>
                                </el-form-item>
                                 <el-form-item label=" 姓名：">
                                <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                 <el-form-item label="联系方式：">
                                <el-input v-model="form.phone"></el-input>
                                </el-form-item>
                                 <el-form-item label="登录密码：">
                                <el-input v-model="form.password" type="password"></el-input>
                                </el-form-item>
                                 <el-form-item label="确认密码：">
                                <el-input v-model="form.password2" type="password"></el-input>
                                </el-form-item>
                     </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="handleClick">提 交</el-button>
                        </span>
                    </el-dialog>
                <!-- 第si块 -->
                     <el-dialog
                         title="编辑账号" 
                        :visible.sync="dialogVisiblea"
                        width="30%"
                        style="line-height:40px;"
                        :modal="false"
                        >
                        <el-form ref="form" :model="form" label-width="90px" >
                                <el-form-item label="账号：">
                                <el-input v-model="forma.usernumber" ></el-input>
                                </el-form-item>
                                 <el-form-item label=" 姓名：">
                                <el-input v-model="forma.name"></el-input>
                                </el-form-item>
                                 <el-form-item label="联系方式：">
                                <el-input v-model="forma.phone"></el-input>
                                </el-form-item>
                                 <el-form-item label="登录密码：">
                                <el-input v-model="forma.password" type="password"></el-input>
                                </el-form-item>
                                 <el-form-item label="确认密码：">
                                <el-input v-model="forma.password2" type="password"></el-input>
                                </el-form-item>
                     </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisiblea=false">取 消</el-button>
                            <el-button type="primary" @click="handleClicka">提 交</el-button>
                        </span>
                    </el-dialog>
                    

            </el-card>
  
</div>
    
</template>
<script>
    export default{
        data() {
            return {
                tablenumber:[],
                 ruleForm: {
                    name:'',
                    date1: '',
                   
                 },
                 rules: {
                       
                        date1: [
                            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                        ],
                      
                       
                 },
                  dialogVisible:false,
                  dialogVisiblea:false,
                    
                 options: [{
                            value: '选项1',
                            label: '系统奖励'
                            }, ],
                value: '',
               
                
                    form: {
                            usernumber: '',
                            name: '',
                            phone: '',
                            password: '',
                            password2: '',
                            adminCode:'',
                            adminName:'',
                            adminCantant:'',
                            adminAcctNo:'',
                            adminState:'',
                            adminPwd:'',
                    },
                    forma: {
                            usernumber: '',
                            name: '',
                            phone: '',
                            password: '',
                            password2: '',
                            adminCode:'',
                            adminName:'',
                            adminCantant:'',
                            adminAcctNo:'',
                            adminState:'',
                            adminPwd:'',                         
                    },
                    formLabelWidth: '120px'                     
            }
                              
        },
         methods: {
         
            handleClick(row) {
                if(this.form.password !== this.form.password2){
                     this.$notify({
                            title: '提示',
                            message: '俩次密码不一致',
                            offset: 100
                            });
                            this.form.password=null
                            this.form.password2=null
                }else{
                var athis=this
                 var password = this.dataApi.md5(this.form.password);
                        password=password.toUpperCase()
                var data={
                       
                        adminCantant:this.form.phone,
                        adminName:this.form.name,
                        adminAcctNo:this.form.usernumber,
                        adminPwd:password,    
                        
                    }
            this.dataApi.ajax('adminAdd',data, res => {
               if(res.respState==='S'){
                   this.$notify({
                            title: '提示',
                            message: '操作成功',
                            offset: 100
                            });
                  this.dialogVisible = false
               }else{
                    this.$notify({
                            title: '提示',
                            message: res.respMsg,
                            offset: 100
                            });
               }     
               })
                }
            },
            seledat(){ 
                    var athis=this
                    var data={
                                
                                pageNum:'1',
                                pageSize:'10',
                                sort:'CRE_TIME',
                                desc:'DESC',
                                adminName:this.ruleForm.name,
                            
                                
                                }
                    this.dataApi.ajax('adminPage',data, res => {
                      
                        athis.tablenumber=res.vos
               })
            },
            bianji(data){
                    this.dataApi.ajax('adminEdit',data, res => {
                       
                        if(res.respState==='S'){
                          
                            

                        }else{
                            this.$notify({
                                        title: '警告',
                                        message: res.respMsg,
                                        type: 'warning'
                                        });
                        }
                       
               })
            },
            changeSwitch(row){
               
                 var data={
                                
                                adminCode:row.adminCode,
                                adminName:row.adminName,
                                adminCantant:row.adminCantant,
                                adminAcctNo:row.adminAcctNo,
                                adminState:row.adminState,
                                adminPwd:row.adminPwd,
                            
                                
                            }
                        this.bianji(data)
            },
            handleClicka(){
               
                var data={
                                
                    adminCode:this.forma.adminCode,
                    adminName:this.forma.name,
                    adminCantant:this.forma.phone,
                    adminAcctNo:this.forma.usernumber,
                    adminState:this.forma.adminState,
                    adminPwd:this.forma.password2,
                            
                                
                            }
                  this.bianji(data)
                  this.dialogVisiblea = false            
            },
            handleClickb(row){
               

                this.dialogVisiblea=true
                this.forma.adminCode=row.adminCode
                this.forma.usernumber=row.adminAcctNo
                this.forma.phone=row.adminCantant
                this.forma.adminState=row.adminState
                this.forma.creUser=row.creUser
                this.forma.creTime=row.creTime
                this.forma.name=row.adminName
                this.forma.password=row.adminPwd
                this.forma.password2=row.adminPwd
                this.forma.adminAcctNo=row.adminAcctNo
                this.forma.adminCantant=row.adminCantant
                this.forma.adminName=row.adminName
                this.forma.adminPwd=row.adminPwd
            }
        },
        mounted() {
           this.seledat()
            
        },
    }

</script>
<style scoped>
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
      margin-top:5px;
      height: 100vh; 
  }
  .el-table{
      line-height: 30px;
      
  }
    .box-cardheader{
      text-align: left;
      font-size: 24px;
      line-height: 2px;
    padding:0 ; 
  }
  .box-cardheaderthree{
       margin-top:5px;
  }
  .el-dialog__header{
      line-height: 50px;
  }
</style>
