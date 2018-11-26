<template>
<div>
    <el-card class="box-card  box-cardheader">
            <el-button type="success">添加</el-button>
    </el-card>

            <!-- 第二块 -->
                  <el-card class="box-card box-card-two">
                
                <div>
                    <el-table
                        :data="tableData"
                         border
                        style="width: 100%"
                        label-class-name='changebg'
                        >
                        <el-table-column
                            prop="PermissionGroupName"
                            label="权限组名称"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="FunctionDescription"
                            label="职能描述"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="ContactNumber"
                            label="创建时间">
                        </el-table-column>
                       
                        
                        <el-table-column
                       
                        label="操作"
                        width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button> 
                        </template>
                        </el-table-column>
                         <el-table-column
                            
                            label="状态">
                            <template slot-scope="scope" >
                                            <el-switch
                                             v-model="scope.row.State"
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
                            PermissionGroupName:'windir',
                            FunctionDescription:'大梨',
                            ContactNumber: '2017-08-05 15:47:44',
                            State:true,
                            },
                           {          
                            PermissionGroupName:'windir',
                            FunctionDescription:'大梨',
                            ContactNumber: '2017-08-05 15:47:44',
                            State:false,
                            },
                            {          
                            PermissionGroupName:'windir',
                            FunctionDescription:'大梨',
                            ContactNumber: '2017-08-05 15:47:44',
                            State:true,
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
      height: 30px;
      line-height: 30px;
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
.changebg{
    background: #ccc;
} 
</style>
