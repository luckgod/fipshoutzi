<template>
<div>
        <el-card class="box-card  box-cardheader">
            <el-button type="success" @click="tianjian">添加</el-button>
        </el-card>

            <!-- 第二块 -->
                  <el-card class="box-card box-card-two">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>资讯列表</span>
                </div>
                <div>
                    <el-table
                        :data="tablenumber"
                         border
                        style="width: 100%">
                        <el-table-column
                            prop="noticeCode"
                            label="编号"
                            >
                        </el-table-column>
                         <el-table-column
                            prop="noticeTitle"
                            label="标题">
                        </el-table-column>
                         <el-table-column
                            prop="Imges"
                            label="图片">
                                 <template slot-scope="scope">
                                <img  :src="scope.row.noticeImage" alt="" style="width: 100px;height: 50px;">
                              
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="noticeSort"
                            label="排序值">
                                  <template slot-scope="scope">
                                    <el-button
                                    size="mini"
                                  @click="handleClicka(scope.row)" >{{scope.row.noticeSort}}</el-button>
                                   
                                </template>
                        </el-table-column>
                        <el-table-column
                                prop="updTime"
                                label="更新时间">
                        </el-table-column>
                        <el-table-column
                       
                        label="操作"
                        width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small" >编辑</el-button>
                            <el-button @click="handleClickb(scope.row)" type="text" size="small">删除</el-button>
                        </template>
                        </el-table-column>
                        
                         
                        
                        </el-table>
                </div>
                 <div class="block">
                        
                        <el-pagination
                       
                        @current-change="handleCurrentChange"
                        :current-page.sync="form.pageNum"
                        :page-size="form.pageSize"
                        layout="prev, pager, next, jumper"
                        :total="form.total">
                        </el-pagination>
                </div>
            </el-card>
</div>
    
</template>
<script>
    export default{
        data() {
            return {
                form:{
                        pageNum:1,
                        pageSize:10,
                        sort:'NOTICE_SORT',
                        desc:'DESC',
                        total:0,
                        noticeType:'Z'
                },
                data:{
                    noticeCode:'',
                    noticeTitle:'',
                    noticeContent:'',
                    noticeState:'',
                    noticeSort:'',
                    noticeImage:'',
                    noticeFalg:'',

                },
                noticeCode:'',
                tablenumber:[],
            }                              
        },
         methods: {
               handleCurrentChange(val){
                   
                    this.form.pageNum=val
                    this. updata()
                },
            handleClick(row) {
               
               
                 this.$router.push({
                             path:'/Index/InformationSetup/DatainformationEditor',
                             query:{
                             noticeCode:row.noticeCode,
                             tip:'B'
                             }
                         })
            },
            tianjian(){
              
                this.$router.push({
                             path:'/Index/InformationSetup/DatainformationEditor',
                             query:{
                            
                             tip:'T'
                             }
                         })
            },
             handleClicka(scope) {
                // console.log(scope);
                
                 
                this.$prompt('排序值', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    
                    }).then(({ value }) => {
                this.data.noticeSort=value
                this.data.noticeCode=scope.noticeCode
                this.data.noticeTitle=scope.noticeTitle
                this.data.creTime=scope.creTime
                this.data.noticeImage=scope.noticeImage
                this.data.noticeType=scope.noticeType
               
                this.xiugai() 
                    this.$message({
                        type: 'success',
                        message: '排序值: ' + value
                    });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });       
                    });
                  
            },
            handleClickb(row){
                   
                   
                 this.dataApi.ajax('delSysNotice',row, res => {
                // console.log(res.respState)
                if(res.respState=='S'){
                    this.$notify({
                            title: '成功',
                            message: '删除成功',
                            type: 'success'
                            });
                             this. updata()
                }
               
               })
            },
            updata(){
                this.dataApi.ajax('pageSysNotice',this.form, res => {
                this.form.total=res.count
                this.tablenumber=res.vos
               })
            },
            xiugai(){
                this.dataApi.ajax('editSysNotice',this.data, res => {
            //    console.log(res)
               }) 
            }
        },
        mounted() {
           this.updata()
            
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
