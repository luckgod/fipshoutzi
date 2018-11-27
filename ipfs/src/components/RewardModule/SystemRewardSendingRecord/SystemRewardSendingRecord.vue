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
                       <el-select v-model="value" placeholder="系统奖励">
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
                <el-form-item label="领取时间：" >
                   
                    <el-form-item prop="date2">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                   
                    <el-button type="primary">查询</el-button>
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
                         border
                        style="width: 100%">
                        <el-table-column
                            prop="userRedCode"
                            label="奖励编号"
                            width="180">
                        </el-table-column>
                         <el-table-column
                            prop="amount"
                            label="奖励SEC数量">
                        </el-table-column>
                         <el-table-column
                            prop="sendTime"
                            label="发放时间">
                        </el-table-column>
                         <el-table-column
                            prop="receiveTime"
                            label="领取时间">
                        </el-table-column>
                        <el-table-column
                            prop="userMobile"
                            label="领取用户">
                        </el-table-column>
                        <el-table-column
                            prop="redState"
                            label="领取状态"
                            width="180">
                        </el-table-column>
                        
                       
                       
                        <el-table-column
                       
                        label="广告详情"
                        width="100">
                        <template slot-scope="scope">
                            <el-button type="text" size="small"  @click="handleClick(scope.row)">查看</el-button> 
                        </template>
                        </el-table-column>
                        
                         
                        
                        </el-table>
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
                            <li><span>封面：</span><img :src=taoimg style="width:50px;height:50px;" alt=""> </li>
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
                   
                    date1: '',
                    date2: '',
                   
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
                            AwardNumber:'10002564',
                            NumberOfSECRecipients:'3',
                            TimeToCollect:'2018年11月9日18:33:10',
                            PaymentTime:'2018年11月9日18:33:10',
                            ReceivingUsers:'13320589624',
                            ReceivingStatus:'未领取',
                            },
                             {          
                            AwardNumber:'10002564',
                            NumberOfSECRecipients:'4',
                            TimeToCollect:'2018年11月9日18:33:10',
                            PaymentTime:'2018年11月9日18:33:10',
                            ReceivingUsers:'13320589624',
                            ReceivingStatus:'未领取',
                            },
                             {          
                            AwardNumber:'10002564',
                            NumberOfSECRecipients:'5',
                            TimeToCollect:'2018年11月9日18:33:10',
                            PaymentTime:'2018年11月9日18:33:10',
                            ReceivingUsers:'13320589624',
                            ReceivingStatus:'未领取',
                            },     
                                    ],
                            tablenumber:[], 
                            zongjin:'',
                            taoimg:null,
                            conne:'',        
            }
                              
        },
         methods: {
            handleClick(row){
                
                 this.dialogVisible = true
                 this.taoimg=row.redImageAddre
                 this.conne=row.redContent
            }
        },
         mounted() {
            var athis=this
             var data={
                        redTypeFlag:'T',
                        reqUser:'adminCode', 
                        reqMobile :'15070057175',
                        reqToken:'b5d9fc7fbaf74046b2a17c6c49590d10',
                        pageNum:'1',
                        pageSize:'10',
                        sort:'CRE_TIME',
                        desc:'DESC',
                        redCode:'',
                        startTime:'',
                        endTime:'',
                        userMobile:'',
                        sendTime:'',
                        sendEnd:'',
                    }
            this.dataApi.ajax('pageUserReceiveRed',data, res => {
                athis.zongjin=res.sysTotalNumber
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
