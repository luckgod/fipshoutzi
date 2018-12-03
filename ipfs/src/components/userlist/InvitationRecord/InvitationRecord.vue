<template>
<div>
     <el-card class="box-card  box-cardeader">
         <span>邀请总人数：{{yaoqingren}}人</span>
      
            <el-button type="success"  @click="$router.go(-1)">返回</el-button>
            
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
                <div class="block">
                        
                        <el-pagination
                       
                        @current-change="handleCurrentChange"
                        :current-page.sync="data.pageNum"
                        :page-size="data.pageSize"
                        layout="prev, pager, next, jumper"
                        :total="data.total">
                        </el-pagination>
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
                          tablenumber:[], 
                          yaoqingren:'',
                 data:{
                       
                        pageNum:1,
                        pageSize:10,
                        total:0,
                        userMobile:'',
                    }         
            }
                              
        },
         methods: {
              handleCurrentChange(val) {
                    console.log(`当前页: ${val}`);
                    this.data.pageNum=val
                      this.seleca()
                },
            handleClick(row) {
                console.log(row);
            },
            seleca(){
                 
            this.data.userMobile=this.$route.query.queryId
            this.dataApi.ajax('pageInvitUser',this.data, res => {
                    
            
               console.log(res)
                this.data.total=res.count
                this.yaoqingren=res.invitCount
                this.tablenumber=res.vos
               })
            }
        },
        mounted() {
            this.seleca()
            
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
