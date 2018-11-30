<template>
<div>
     <el-card class="box-card  box-cardeader">
         <span>当前奖励余额：{{rewardNumber}} SEC</span>
         <el-button type="info"  @click="yaoqingyemian">邀请记录</el-button>
            <el-button type="success" @click="$router.go(-1)">返回</el-button>
            
        </el-card>
<el-card class="box-card box-cardheaderthree">
                <div class="user_header ">
                   <i class="el-icon-menu"></i>
                  <span>筛选查询</span>
                </div>
                <div class="user_con">
                <el-form ref="form" :inline="true" :model="ruleForm" label-width="80px" label-hieght="40px">
                     <el-form-item label="流水号">
                        <el-input v-model="ruleForm.user" placeholder="流水号"></el-input>
                    </el-form-item>
                   <el-form-item label="变动类型 ：">
                       <el-select v-model="ruleForm.value" placeholder="系统奖励">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                    </el-form-item>
                   
                <el-form-item label="奖励时间 ：">
                         <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                </el-form-item>
                <el-form-item  >
                    <el-col :span="16">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    </el-col>
                    
                    <el-button type="primary" :span="8" @click="seleac">查询</el-button>
                    
                </el-form-item>  
               
                 </el-form>  
                </div>
            </el-card>
            <!-- 第二块 -->
                  <el-card class="box-card box-card-two">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>奖励列表</span>
                </div>
                <div>
                    <el-table
                        :data="tabanumber"
                         border
                        style="width: 100%">
                        <el-table-column
                            prop="changeCode"
                            label="流水号"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="sourceUserMobile"
                            label="关联账号"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="changeValue"
                            label="变动类型">
                        </el-table-column>
                        <el-table-column
                            prop="changeNumber"
                            label="变动数量">
                        </el-table-column>
                       
                          <el-table-column
                            prop="creTime"
                            label="变动时间">
                        </el-table-column>
                        </el-table>
                </div>
                <!-- fenye -->
                <div class="block">
                        
                        <el-pagination
                       
                        @current-change="handleCurrentChange"
                        :current-page.sync="datb.pageNum"
                        :page-size="datb.pageSize"
                        layout="prev, pager, next, jumper"
                        :total="datb.total">
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
                        user:'',
                        value:'',
                        date1:'',
                        date2:'',
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
                            label: '系统奖励'
                            }, ],
                value: '',
               
                rewardNumber:"",
                tabanumber:[],
                datb:{
                        
                        pageNum:1,
                        pageSize:1,
                        sort:'CRE_TIME',
                        desc:'DESC',
                        total:0,
                        userMobile:this.$route.query.queryId,
                        changeType:'Sys_Reward',
                        startTime:'',
                        endTime:'',
                        changeCode:'',
                    } 
            }
                             
        },
         methods: {
           
            handleCurrentChange(val) {
                  
                    this.datb.pageNum=val
                      this.seleca()
                },
            handleClick(row) {
              
            },
            yaoqingyemian(){
                
                this.$router.push({
                                path:'/Index/Userlist/InvitationRecord',
                                query: {
                                    queryId:this.$route.query.queryId,                                    
                                }
                            })
            },
           
            selec(){
             
                
             var data={
                        
                        userMobile:this.$route.query.queryId, 
                    }
            this.dataApi.ajax('singleUserNode',data, res => {
                console.log(res)
                this.rewardNumber=res.rewardNodeNumber
               })
                  
             
            },
             seleca(){
                    this.datb.changeCode=this.ruleForm.user
                   this.dataApi.ajax('pageNodeChange',this.datb, res => {
                    
                console.log(res)
                this.datb.total=res.count
            this.tabanumber=res.vos
                }) 
             },
             seleac(){
                   2
                   this.datb.changeCode=this.ruleForm.user
                   this.dataApi.ajax('pageNodeChange',this.datb, res => {
                    
                console.log(res)
                this.datb.total=res.count
                this.tabanumber=res.vos
                }) 
             }
        },
         mounted() {
             this.selec()
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
