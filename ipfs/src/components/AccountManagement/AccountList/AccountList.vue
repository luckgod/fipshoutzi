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
                                <el-button type="primary">查询</el-button>
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
                           
                            <el-button type="text"  >编辑</el-button>

                        </template>
                        </el-table-column>
                      
                          <el-table-column
                            
                            label="状态">
                            <template slot-scope="scope" >
                                            <el-switch
                                             v-model="scope.row.adminState=='Y'?true:false"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949"
                                            @click="scope.row.adminState=!scope.row.adminState"
                                            > 
                                            </el-switch>
                                        </template>
                        </el-table-column>
                        
                        </el-table>
                </div>
                <!-- 第三块 -->
                          <el-dialog
                         title="添加/编辑账号" 
                        :visible.sync="dialogVisible"
                        width="30%"
                        style="line-height:40px;"
                        :modal="false"
                        >
                        <el-form ref="form" :model="form" label-width="90px" >
                                <el-form-item label="账号：">
                                <el-input v-model="form.name" ></el-input>
                                </el-form-item>
                                 <el-form-item label=" 姓名：">
                                <el-input v-model="form.namea"></el-input>
                                </el-form-item>
                                 <el-form-item label="联系方式：">
                                <el-input v-model="form.nameb"></el-input>
                                </el-form-item>
                                 <el-form-item label="登录密码：">
                                <el-input v-model="form.namec" type="password"></el-input>
                                </el-form-item>
                                 <el-form-item label="确认密码：">
                                <el-input v-model="form.named" type="password"></el-input>
                                </el-form-item>
                     </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="handleClick">提 交</el-button>
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
                   
                    date1: '',
                   
                 },
                 rules: {
                       
                        date1: [
                            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                        ],
                      
                       
                 },
                  dialogVisible: false,
                    
                 options: [{
                            value: '选项1',
                            label: '系统奖励'
                            }, ],
                value: '',
                tableData: [{          
                            Number:'windir',
                            Name:'大梨',
                            ContactNumber: '13353339635',
                            AuthorityGroup:'产品部',
                            AddTime:'2017-08-05 15:47:44',
                            State:true,
                            },
                            {          
                            Number:'windir',
                            Name:'大梨',
                            ContactNumber: '13353339635',
                            AuthorityGroup:'产品部',
                            AddTime:'2017-08-05 15:47:44',
                            State:false,
                            },
                           
                                    ],
                
                    form: {
                    name: '',
                    namea: '',
                    nameb: '',
                    namec: '',
                    named: '',
                         

                    },
                    formLabelWidth: '120px'                     
            }
                              
        },
         methods: {
         
            handleClick(row) {
                
                this.dialogVisible = false
                var athis=this
             var data={
                        reqUser:'pageSysNotice', 
                        reqMobile :'15070057175',
                        reqToken:'b5d9fc7fbaf74046b2a17c6c49590d10',
                         adminCantant:'12345678901',
                        adminName:'111',
                        adminAcctNo:'111',
                        adminPwd:'111',
                        adminName:'11',
                       
                        
                    }
            this.dataApi.ajax('adminAdd',data, res => {
                    
            //    console.log(res.invitCount)
               console.log(res)
            //    athis.yaoqingren=res.invitCount
                athis.tablenumber=res.vos
               })
            }
        },
        mounted() {
            var athis=this
             var data={
                        reqUser:'pageSysNotice', 
                        reqMobile :'15070057175',
                        reqToken:'b5d9fc7fbaf74046b2a17c6c49590d10',
                         pageNum:'1',
                        pageSize:'10',
                        sort:'CRE_TIME',
                        desc:'DESC',
                        adminName:'',
                       
                        
                    }
            this.dataApi.ajax('adminPage',data, res => {
                    
            //    console.log(res.invitCount)
               console.log(res)
            //    athis.yaoqingren=res.invitCount
                athis.tablenumber=res.vos
               })
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
