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
                        :data="tableData"
                         border
                        style="width: 100%">
                        <el-table-column
                            prop="SerialNumber"
                            label="流水号"
                            width="180">
                        </el-table-column>
                         <el-table-column
                            prop="ActionItem"
                            label="操作项">
                        </el-table-column>
                         <el-table-column
                            prop="ChangeAValue"
                            label="改变值">
                        </el-table-column>
                         <el-table-column
                            prop="OperatorName"
                            label="操作人姓名">
                        </el-table-column>
                        <el-table-column
                            prop="RewardTransferTimes"
                            label="操作时间">
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
                    date2: '',
                   
                 },
                 rules: {
                       
                        date1: [
                            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                        ],
                         date2: [
                            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                        ],
                      
                       
                 },
                 options: [{
                            value: '选项1',
                            label: '全部'
                            },
                            {
                            value: '选项2',
                            label: '未领取'
                            },
                            {
                            value: '选项3',
                            label: '已领取'
                            },
                             ],
                value: '',
                tableData: [
                            {          
                            SerialNumber:'565626',
                            ActionItem:'每日系统奖励个数',
                            ChangeAValue:'100000',
                            OperatorName:'管理员A',
                            RewardTransferTimes:'2018年11月15日11:32:42',
                            },
                             {          
                            SerialNumber:'565626',
                            ActionItem:'每日系统奖励个数',
                            ChangeAValue:'100',
                            OperatorName:'管理员A',
                            RewardTransferTimes:'2018年11月15日11:32:42',
                            },
                             {          
                            SerialNumber:'565626',
                            ActionItem:'每日系统奖励个数',
                            ChangeAValue:'2000',
                            OperatorName:'管理员A',
                            RewardTransferTimes:'2018年11月15日11:32:42',
                            },
                           
                                    ] 
            }
                              
        },
         methods: {
            handleClick(row) {
                console.log(row);
            }
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
