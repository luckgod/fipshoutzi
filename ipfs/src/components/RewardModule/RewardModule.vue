<template>
<div>
<el-card class="box-card">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>筛选查询</span>
                </div>
                <div class="user_con">
                    <el-form ref="form" :inline="true" :model="ruleForm" label-width="80px" label-hieght="40px">
                    <el-form-item label="奖励类型 ：">
                        <el-select v-model="value" placeholder="系统奖励">
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                        </el-form-item>
                        <el-form-item label="领取时间 ：" >
                            <el-col >
                                <el-form-item prop="date1">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                                           
                        </el-form-item>                  
                        <el-form-item >
                            <el-col >
                                <el-form-item prop="date1">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                                            
                        </el-form-item>
                        <el-form-item >
                          <el-button type="primary" :span="8" @click="setdata" >查询</el-button>
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
                            prop="redCode"
                            label="奖励类型"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="userMobile"
                            label="领取用户">
                        </el-table-column>
                        <el-table-column
                            prop="sendUserMobile"
                            label="关联用户">
                        </el-table-column>
                        <el-table-column
                            prop="amount"
                            label="领取SEC数量">
                        </el-table-column>
                        <el-table-column
                       
                        label="广告详情"
                        width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> 
                        </template>
                        </el-table-column>
                         <el-table-column
                            prop="receiveTime"
                            label="领取时间">
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
                tablenumber:[],
                 ruleForm: {
                   
                    date1: '',
                   
                 },
                 rules: {
                       
                        date1: [
                            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                        ],
                      
                       
                 },
                 data:{
                        
                        pageNum:1,
                        pageSize:1,
                        total:0,
                        sort:'CRE_TIME',
                        desc:'DESC',
                        redCode:'',
                        redState:'L',
                        redTypeFlag:'',
                        startTime:'',
                        endTime:'',
                        userMobile:'',
                        sendTime:'',
                        sendEnd:'',
                    },
                 options: [{
                            value: '选项1',
                            label: '系统奖励'
                            }, ],
                value: '',
                dialogVisible:false,
                taoimg:'',
                conne:'',
               
            }
                              
        },
         methods: {
              handleCurrentChange(val) {
                    console.log(`当前页: ${val}`);
                    this.data.pageNum=val
                    this.setdata()
                },
            handleClick(row) {
                console.log(row);
                this.dialogVisible=true
                this.taoimg=row.redImageAddre
                this.conne=row.redContent
            },
            setdata(){           
             
                this.dataApi.ajax('pageUserReceiveRed',this.data, res => {                
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
      margin-top:20px;
      height: 100vh; 
  }
  .el-table{
      line-height: 30px;
      
  }
</style>
