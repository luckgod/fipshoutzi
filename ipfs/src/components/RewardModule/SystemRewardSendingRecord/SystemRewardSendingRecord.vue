<template>
<div>
    <el-card class="box-card  box-cardheader">
    <h1>平台累计发送奖励：{{zongjin}} SEC</h1>    
    </el-card>
<el-card class="box-card box-cardheaderthree">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>筛选查询</span>
                </div>
                <div class="user_con">
                <el-form ref="form" :inline="true" :model="ruleForm" label-width="100px" label-hieght="40px">
                   <el-form-item label="领取状态：">
                       <el-select v-model="ruleForm.value" placeholder="系统奖励">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                    </el-form-item>
                <el-form-item label="领取时间：" >   
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>  
                </el-form-item>  
                <el-form-item >                   
                    <el-form-item prop="date2">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-button type="primary" @click="setdata">查询</el-button>
                </el-form-item> 
                 </el-form>  
                </div>
            </el-card>
            <!-- 第二块 -->
                  <el-card class="box-card box-card-two">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>用户列表</span>
                </div>
                <div>
                    <el-table
                        :data="tablenumber"
                         v-loading="ruleForm.loading"
                         border
                        style="width: 100%">
                        <el-table-column
                            prop="userRedCode"
                            label="奖励编号"
                             :show-overflow-tooltip='true'
                            width="180">
                        </el-table-column>
                         <el-table-column
                            prop="amount"
                            label="奖励SEC数量">
                        </el-table-column>
                         <el-table-column
                            prop="creTime"
                            label="发放时间">
                        </el-table-column>
                         <el-table-column
                            prop="sendTime"
                            label="领取时间">
                        </el-table-column>
                        <el-table-column
                            prop="userMobile"
                            label="领取用户">
                        </el-table-column>
                        <el-table-column
                           
                            label="领取状态"
                            width="180">
                         <template slot-scope="scope">
                          {{ scope.row.redState|capitalize }}
                        </template>

                        </el-table-column>
                        <el-table-column
                        label="广告详情"
                        width="100">
                        <template slot-scope="scope">
                            <el-button type="text" size="small"  @click="handleClick(scope.row)">查看</el-button> 
                        </template>
                        </el-table-column>
                         
                        </el-table>
                        <div class="block">
                        
                        <el-pagination
                       
                        @current-change="handleCurrentChange"
                        :current-page.sync="data.pageNum"
                        :page-size="data.pageSize"
                        layout="prev, pager, next, jumper"
                        :total="data.total">
                        </el-pagination>
                </div>
                </div>
                 <!-- 第三块 -->
                          <el-dialog
                         title="广告详情" 
                        :visible.sync="dialogVisible"
                        width="30%"
                        style="line-height:40px;"
                        :modal="false"
                        >
                        <ul style="list-style:none;  text-align: left;">
                            <li><span style="float:left; line-height: 150px;padding-right:20px;">封面:</span><img :src=taoimg style="width:150px;height:150px;" alt=""> </li>
                            <li><span>内容：</span><span>{{conne}}</span></li>
                        </ul>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                        </span>
                    </el-dialog>

            </el-card>
</div>
    
</template>
<script>
    export default{
        data() {
            return {
                 ruleForm: {
                    value:'',
                    date1: '',
                    date2: '',
                    loading:true,
                   
                 },
                 dialogVisible: false,
                 rules: {
                       
                        date1: [
                            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                        ],
                         date2: [
                            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                        ],    
                 },
                 options: [{
                            value: '',
                            label: '全部'
                            },
                            {
                            value: 'F',
                            label: '未领取'
                            },
                            {
                            value: 'L',
                            label: '已领取'
                            },
                             ],
                           
                            tablenumber:[], 
                            zongjin:'',
                            taoimg:null,
                            conne:'',
                 data:{
                            
                          
                            pageNum:1,
                            pageSize:10,
                            sort:'CRE_TIME',
                            desc:'DESC',
                            redTypeFlag:'T',
                            redCode:'',
                            total:0,
                            startTime:'',
                            endTime:'',
                            redState:'',
                            userMobile:'',
                            sendTime:'',
                            sendEnd:'',
                        }                    
            }
                              
        },
         methods: {
              handleCurrentChange(val) {
                   
                    this.data.pageNum=val
                    this.setdata()
                },
            handleClick(row){                
                 this.dialogVisible = true
                 this.taoimg=row.redImageAddre
                 this.conne=row.redContent
            },
            setdata(){
                if (this.ruleForm.date1&&!this.ruleForm.date2) {
                     this.showMsg('请选择结束时间','warning');
                     return;
                }
                if (!this.ruleForm.date1&&this.ruleForm.date2) {
                     this.showMsg('请选择开始时间','warning');
                     return;
                }
               
                if (this.ruleForm.date1 && this.ruleForm.date2) {
                    
                    if (this.ruleForm.date1>this.ruleForm.date2) {
                         this.showMsg('开始时间不能大于结束时间','warning');
                         return;
                    }else{
                    this.data.startTime=dateFormat(this.ruleForm.date1)
                    this.data.endTime=dateFormat(this.ruleForm.date2)
                    }
                }else{
                    this.data.startTime=''
                    this.data.endTime=''
                }
               
              
                
               
                this.data.redState=this.ruleForm.value,
                this.dataApi.ajax('pageUserReceiveRed',this.data, res => {
                 if(res.respState=='S'){
                      this.ruleForm.loading=false
                      this.data.total=res.count
                this.zongjin=res.sysTotalNumber
                this.tablenumber=res.vos
                 }
               
               })
            }
        },
         mounted() {
             this.setdata()     
        },
        filters: {
        capitalize: function (value) {
            if (value!=='F'){
                return '已领取'
            }else{
                return '未领取' 
            } 
           
        }
        }
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
