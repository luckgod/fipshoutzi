<template>
    <div>
            <el-card class="box-card">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>筛选查询</span>
                </div>
                <div class="user_con">
                <el-form ref="form" :inline="true" :model="ruleForm" >
                   <el-form-item label="用户名">
                        <el-input v-model="ruleForm.name" placeholder="用户名" style="width:80px"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号">
                        <el-input v-model="ruleForm.phone" placeholder="手机号" style="width:125px"></el-input>
                    </el-form-item>
                    <el-form-item label="推荐人">
                        <el-input v-model="ruleForm.user" placeholder="推荐人手机号" style="width:125px"></el-input>
                    </el-form-item>
                     <el-form-item label="用户状态 ：" >
                       <el-select v-model="ruleForm.value" placeholder="全部" style="width:100px">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                    </el-form-item>
                    <el-form-item label="注册时间" >
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="开始日期" v-model="startTime1" style="width:140px"></el-date-picker>
                        </el-form-item>
                    </el-col>  
                    </el-form-item>
                    <el-form-item>
                            <el-col :span="11">
                                <el-form-item prop="date2">
                                    <el-date-picker type="date" placeholder="结束日期" v-model="endTime1" style="width: 140px;"></el-date-picker>
                                </el-form-item>
                        </el-col>
                    </el-form-item>
                     <el-form-item  >
                          <el-button type="primary" :span="6" @click="cha">查询</el-button>
                     </el-form-item>
                 </el-form>  
                </div>
            </el-card>
            <el-card class="box-card box-card-two">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>用户列表</span>
                </div>
                <div>
                    <el-table
                        :data="shuju"
                         border
                       
                        style="width: 100%">
                       
                        <el-table-column
                            prop="userNickName"
                            label="用户名"
                            width="180"
                            
                            >

                            <template slot-scope="scope">
                                <img  :src="scope.row.userImage" alt="" style="width: 30px;height: 30px;borderRadius:15px;  display:inline-block; vertical-align:middle;">
                                <span style=" display:inline-block;vertical-align:middle;">{{scope.row.userNickName}}</span>
                            </template>
                            
                           
                                
                        </el-table-column>
                        <el-table-column
                            prop="userMobile"
                            label="手机号"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="secAddress"
                           :show-overflow-tooltip="true"
                            label="SEC地址">
                        </el-table-column>
                        <el-table-column
                            prop="totalSec"
                            label="账户">
                            <template slot-scope="scope">
                                    <el-button
                                    size="mini"
                                   @click="handleEdit(scope.$index, scope.row)">{{scope.row.totalSec}}</el-button>
                                   
                                </template>

                        </el-table-column>
                        <el-table-column
                            prop="userCode"
                            label="个人邀请码">
                        </el-table-column>
                         <el-table-column
                            prop="userInvitMobile"
                            label="推荐人">
                        </el-table-column>
                         <el-table-column
                            prop="creTime"
                            label="注册时间">
                        </el-table-column>
                       
                         <el-table-column
                            
                            label="操作">
                            <template slot-scope="scope" >
                                            <el-switch
                                            v-model="scope.row.userState"
                                            active-color="#ff4949"
                                            inactive-color="#13ce66"
                                            active-value="D"
                                            inactive-value="Y"
                                            @change="changeSwitch(scope.row)"
                                            > 
                                            
                                            </el-switch>
                                           
                                        </template>
                        </el-table-column>
                         
                        </el-table>
                        <div class="block" >
                            
                            <el-pagination
                           
                            @current-change="handleCurrentChange"
                            :current-page.sync="ruleForm.wen"
                            :page-size="ruleForm.pageSize"
                            layout="prev, pager, next, jumper"
                            :total="ruleForm.total"
                            style="padding-top:40px"
                            >
                            </el-pagination>
                        </div>
                </div>
            </el-card>
    </div>
</template>
<script>
    export default{
        data(){
            return{
              
                shuju:[],
                
                value1: true,
                value2: true,
                value6: '',
                 ruleForm: { 
                    name:'',
                    phone:'',
                    user:'',
                    value:'',   
                    date1: '',
                    date2: '',
                    pageNum:1,
                    pageSize:1,
                    total:0,
                    wen:1,
                    sort:'CRE_TIME',
                    desc:'DESC',
                    startTime:'',
                    endTime:'',
                 },
                
                 options: [
                            {
                            value: '',
                            label: '全部'
                            },
                            {
                            value: 'D',
                            label: '未启用'
                            },
                            
                            {
                            value: 'Y',
                            label: '已启用'
                            }, 
                           
                            ],
                    value: '',
                formInline: {
                        user: '',
                        region: ''
                        },
                        startTime1:'',
                        endTime1:''
                        
            }
        },
        methods: {
            onSubmit(){
                console.log('submit!');
            },
            handleEdit(index, row) {
                // console.log(index, row.userMobile);
             
                this.$router.push({
                                path:'/Index/Userlist/IndividualAccount',
                                query: {
                                    queryId:row.userMobile,                                    
                                }
                            })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log( this.ruleForm.wen);
                this.ruleForm.wen=val
                this.cha()
               
            },
            cha(){

             if (this.startTime1&&!this.endTime1) {
                     this.showMsg('请选择结束时间','warning');
                     return;
                }
                if (!this.startTime1&&this.endTime1) {
                     this.showMsg('请选择开始时间','warning');
                     return;
                }
                if (this.startTime1 && this.endTime1) {
                   this.ruleForm.startTime=dateFormat(this.startTime1)
                   this.ruleForm.endTime=dateFormat(this.endTime1) 
                    if (this.ruleForm.startTime>this.ruleForm.endTime) {
                         this.showMsg('开始时间不能大于结束时间','warning');
                         return;
                    }
                }else{
                    this.ruleForm.startTime=''
                    this.ruleForm.endTime=''
                }
                
            
            this.dataApi.ajax('pageUser',this.ruleForm, res => {
                if(res.respState==='S'){
              
                 this.ruleForm.pageNum=res.pageNum  
                 this.ruleForm.pageSize=res.pageSize             
                 this.ruleForm.total=res.pageCount
                
              
                this.shuju=res.vos
                }    
               

                
               })
            },
            changeSwitch(a){
               
                  var athis=this
                    var data={
                                
                                userMobile:a.userMobile,
                                userState:a.userState,
                               
                            }
                    this.dataApi.ajax('editUserByAdmin',data, res => {  
                           console.log(res)  
                      if(res.respState==='S'){
                       
                            this.$notify({
                                            title: '成功',
                                            message: '修改成功',
                                            type: 'success'
                                            });
                      }else{
                          this.$notify({
                                        title: '警告',
                                        message: res.respMsg,
                                        type: 'warning'
                                        });
                      }
                    })
            },
        },
       
        
        mounted() {
            this.cha()
            
        },

    }


</script>

<style scoped>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  
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
  .el-table__header-wrapper{
      background: #aaaaaa;
  }
  .fistlie{
      width: 20px;
      height:20px;
       
  }
</style>
