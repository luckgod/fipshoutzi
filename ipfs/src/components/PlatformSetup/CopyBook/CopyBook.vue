<template>
<div>
        <el-card class="box-card  box-cardheader">
            <el-button type="success" @click="$router.push({path:'/Index/CopyBook/TextEditing',query: {tip:'A'}})">添加</el-button>
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
                            
                        </template>
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
                
                tablenumber:[],
                    data:{
                       
                        pageNum:1,
                        pageSize:10,
                        tatal:0,
                        sort:'CRE_TIME',
                        desc:'DESC',
                        
                    } 
            }                    
        },
         methods: {
              handleCurrentChange(val){
                   
                    this.data.pageNum=val
                    this.setdata()
                },
            handleClick(row) {
                // console.log(row);
                  
                   this.$router.push({
                                 path:'/Index/CopyBook/TextEditing',
                                 query: {
                                     queryId:row.codexCode,
                                     
                                     tip:'B'                                    
                                 }
                             })
            },
          
            setdata(){
                    this.dataApi.ajax('pageCodex',this.data, res => {  
                        // console.log(res)              
                this.data.total=res.count
                this.tablenumber=res.vos
               })
            }
        },
         mounted() {
             this.setdata()
           
              
           
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
