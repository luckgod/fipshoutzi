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
                    
                    <el-button type="primary" :span="8" @click="selec">查询</el-button>
                    
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
            }
                             
        },
         methods: {
            handleClick(row) {
                console.log(row);
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
             
                var athis=this
             var data={
                         reqUser:getCookie('adminCode'), 
                        reqMobile :getCookie('Cantant'),
                        reqToken:getCookie('toke'),
                        userMobile:athis.$route.query.queryId, 
                    }
            this.dataApi.ajax('singleUserNode',data, res => {
                athis.rewardNumber=res.rewardNodeNumber
               })
                 var datb={
                        reqUser:getCookie('adminCode'), 
                        reqMobile :getCookie('Cantant'),
                        reqToken:getCookie('toke'),
                        pageNum:'1',
                        pageSize:'10',
                        sort:'CRE_TIME',
                        desc:'DESC',
                        userMobile:athis.$route.query.queryId,
                        changeType:'Sys_Reward',
                        startTime:'',
                        endTime:'',
                        changeCode:athis.ruleForm.user,
                    }
            this.dataApi.ajax('pageNodeChange',datb, res => {
                    
            //    console.log(res.vos)
              athis.tabanumber=res.vos
               })   
            }
        },
         mounted() {
             this.selec()
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
