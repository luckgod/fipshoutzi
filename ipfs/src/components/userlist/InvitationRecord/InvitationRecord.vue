<template>
<div>
     <el-card class="box-card  box-cardeader">
         <span>邀请总人数：{{yaoqingren}}人</span>
      
            <el-button type="success">返回</el-button>
            
        </el-card>

            <!-- 第二块 -->
                  <el-card class="box-card box-card-two">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span> 邀请列表</span>
                </div>
                <div>
                    <el-table
                        :data="tablenumber"
                         border
                        style="width: 100%">
                        <el-table-column
                            prop="userMobile"
                            label="用户"
                            width="180">
                        </el-table-column>
                      
                       
                          <el-table-column
                            prop="userInvitTime"
                            label="变动时间">
                        </el-table-column>
                       
                       
                         
                        
                        </el-table>
                </div>
            </el-card>
</div>
    
</template>
<script>
    export default{
        data() {
            return {
                 ruleForm: {
                   
                    date1: '',
                   
                 },
                 rules: {
                       
                        date1: [
                            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                        ],
                      
                       
                 },
                 options: [{
                            value: '选项1',
                            label: '系统奖励'
                            }, ],
                value: '',
                tableData: [{          
                            userphone:'13359976958',
                            TimeToCollect:'2018年8月13日09:52:38',
                            },
                            {          
                            userphone:'13359976958',
                            TimeToCollect:'2018年8月13日09:52:38',
                            },
                            {          
                            userphone:'13359976958',
                            TimeToCollect:'2018年8月13日09:52:38',
                            },
                           
                           
                                   
                                    ],

                          tablenumber:[], 
                          yaoqingren:'',         
            }
                              
        },
         methods: {
            handleClick(row) {
                console.log(row);
            }
        },
        mounted() {
            var athis=this
             var data={
                        reqUser:'adminCode', 
                        reqMobile :'15070057175',
                        reqToken:'b5d9fc7fbaf74046b2a17c6c49590d10',
                        pageNum:'1',
                        pageSize:'10',
                        userMobile:'15070057175'
                    }
            this.dataApi.ajax('pageInvitUser',data, res => {
                    
               console.log(res.invitCount)
               console.log(res)
               athis.yaoqingren=res.invitCount
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
      margin-top:10px;
      height: 100vh; 
  }
  .el-table{
      line-height: 30px;   
  }
   .box-cardeader{
      text-align: left;
      font-size: 24px;
      line-height: 2px;
    padding:0 ; }
  .box-cardheaderthree{
       margin-top:10px;
  }
</style>
