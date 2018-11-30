<template>
<div>
        <el-card class="box-card  box-cardheader">
            <el-button type="success" @click="$router.go(-1)">返回</el-button>
        </el-card>
      
                  <el-card class="box-card box-card-two">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>操作日志</span>
                </div>
                <div>
                    <el-table
                        :data="tablenumber"
                         border
                         :stripe='true'
                        
                        style="width: 100%">
                        <el-table-column
                            prop="editCode"
                            label="流水号"
                            :show-overflow-tooltip='true'
                            width="180">
                        </el-table-column>
                         <el-table-column
                            prop="editRemark"
                            label="操作项">
                        </el-table-column>
                         <el-table-column
                            prop="editValue"
                            :show-overflow-tooltip='true'
                            label="改变值">
                        </el-table-column>
                         <el-table-column
                            prop="adminName"
                            label="操作人姓名">
                        </el-table-column>
                        <el-table-column
                            prop="creTime"
                            label="操作时间">
                        </el-table-column>
                       
                        </el-table>
                </div>
                <div class="block">
    
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="ruleForm.wen"
                :page-size="ruleForm.pageSize"
                layout="prev, pager, next, jumper"
                :total="ruleForm.total">
                </el-pagination>
            </div>
            </el-card>
</div>
    
</template>
<script>
    export default{
        data() {
            return {
                tablenumber:[],
                 ruleForm: {
                        pageNum:1,
                        pageSize:5,
                        sort:'CRE_TIME',
                        desc:'DESC',
                        editModel:'A-D',
                        total:1,
                        wen:2,
                      
                   
                 },
                   
                      
                       
                 
                 
               
               
            }
                              
        },
         methods: {
             handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                  
                
                 this.ruleForm.pageNum=val
                
                 this.inita()
                 
            },
            inita(){
                 this.dataApi.ajax('selectSysEdit',this.ruleForm, res => {
                this.ruleForm.total=res.count
               
                
               
              
                console.log(res)
                this.tablenumber=res.vos
               })
            }
        },
        mounted() {
           
             this.inita()
           
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
  .box-cardheader{
      text-align: left;
      font-size: 24px;
      line-height: 2px;
    padding:0 ; 
  }
  .box-cardheaderthree{
       margin-top:10px;
  }
</style>
