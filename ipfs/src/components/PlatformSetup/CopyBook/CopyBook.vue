<template>
<div>
        <el-card class="box-card  box-cardheader">
            <el-button type="success" @click="$router.push('/Index/CopyBook/TextEditing')">添加</el-button>
        </el-card>

            <!-- 第二块 -->
                  <el-card class="box-card box-card-two">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>文案列表</span>
                </div>
                <div>
                    <el-table
                        :data="tablenumber"
                         border
                        style="width: 100%">
                        <el-table-column
                            prop="codexCode"
                            label="编号"
                            >
                        </el-table-column>
                         <el-table-column
                            prop="codexTitle"
                            label="标题">
                        </el-table-column>
                     
                       
                       
                        <el-table-column
                       
                        label="操作"
                        width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                            <el-button @click="fonClick(scope.row)" type="text" size="small">删除</el-button>
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
                 
                 
                tableData: [
                            {          
                            Number:'123562',
                            Title:'邀请规则',
                            },
                            {          
                            Number:'2223562',
                            Title:'邀请规则',
                            },
                           
                           
                                    ],
                            tablenumber:[], 
            }
                              
        },
         methods: {
            handleClick(row) {
                console.log(row);
                  this.$router.push('/Index/CopyBook/TextEditing')
            },
            fonClick(row){
              
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
                        sort:'CRE_TIME',
                        desc:'DESC',
                        
                    }
            this.dataApi.ajax('pageCodex',data, res => {
                    
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
