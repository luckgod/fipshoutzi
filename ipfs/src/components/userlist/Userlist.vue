<template>
    <div>
            <el-card class="box-card">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>筛选查询</span>
                </div>
                <div class="user_con">
                <el-form ref="form" :inline="true" :model="ruleForm" >
                   <el-form-item label="用户名" >
                        <el-input v-model="ruleForm.name" placeholder="用户名" ></el-input>
                    </el-form-item>
                    <el-form-item label="手机号">
                        <el-input v-model="ruleForm.phone" placeholder="手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="推荐人">
                        <el-input v-model="ruleForm.user" placeholder="推荐人手机号"></el-input>
                    </el-form-item>

                     <el-form-item label="用户状态 ：">
                       <el-select v-model="value" placeholder="全部">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                    </el-form-item>


                    <el-form-item label="注册时间" >
                    <el-col :span="16">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    </el-col>
                    
                    <el-button type="primary" :span="6">查询</el-button>
                    
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
                                             v-model="scope.row.Enabled"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949"> 
                                            </el-switch>
                                        </template>
                        </el-table-column>
                         
                        </el-table>
                        <div class="block" >
                            
                            <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage3"
                            :page-size="100"
                            layout="prev, pager, next, jumper"
                            :total="1000"
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
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                     value1: true,
                    value2: true,
                 ruleForm: {
                    name:'',
                    phone:'',
                    user:'',   
                    date1: '',
                    date2: '',
                 },
                 yingchang:true,
                 options: [{
                            value: '选项1',
                            label: '全部'
                            },
                            {
                            value: '选项2',
                            label: '已启用'
                            }, 
                            {
                            value: '选项3',
                            label: '未启用'
                            },
                            ],
                value: '',
                 rules: {
                     name: [
                            { required: true, message: '请输入活动名称', trigger: 'blur' },
                            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                        ],
                        region: [
                            { required: true, message: '请选择活动区域', trigger: 'change' }
                        ],
                        date1: [
                            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                        ],
                        date2: [
                            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                        ],
                       
                 },
               
                msg:'userlist',
                formInline: {
                        user: '',
                        region: ''
                        },
                        tableData: [{                                       
                                        name:{imgPath:'http://192.168.31.64:8080/upload/1d7a8dae745b492491a9c771b7d85559.jpg',username:'aaaa'},
                                        phone:'13320589624',
                                        address: 'SQFyDKf5J79hSBqnPn4SwxcNV8TCuUCBRD',
                                        account:'1000.35',
                                        operation:'',
                                        invitation:'NR6852',
                                        referee:'13356895623',
                                        registration:'2018年8月13日09:52:38',
                                        Enabled:true,
                                        operation:'false',
                                    },
                                    {                                       
                                       name:{imgPath:'https://storage.360buyimg.com/i.imageUpload/636a363539393131353032373536313139393835_sma.jpg',username:'aaaa'},
                                        phone:'13320589624',
                                        address: 'SQFyDKf5J79hSBqnPn4SwxcNV8TCuUCBRD',
                                        account:'1000.35',
                                        operation:'',
                                        invitation:'NR6852',
                                        referee:'13356895623',
                                        registration:'2018年8月13日09:52:38',
                                        Enabled:true,
                                        operation:'false',
                                    },
                                    {
                                       
                                       name:{imgPath:'https://storage.360buyimg.com/i.imageUpload/636a363539393131353032373536313139393835_sma.jpg',username:'aaaa'},
                                        phone:'13320589624',
                                        address: 'SQFyDKf5J79hSBqnPn4SwxcNV8TCuUCBRD',
                                        account:'1000.35',
                                        operation:'',
                                        invitation:'NR6852',
                                        referee:'13356895623',
                                        registration:'2018年8月13日09:52:38',
                                        Enabled:true,
                                        operation:'false',
                                    },
                                   
                                    ]        
            }
        },
        methods: {
            onSubmit(){
                        console.log('submit!');
            },
            handleEdit(index, row) {
                console.log(index, row);
                this.$router.push('/Index/Userlist/IndividualAccount')
            },
             handleSizeChange(val) {
                    console.log(`每页 ${val} 条`);
                },
                handleCurrentChange(val) {
                    console.log(`当前页: ${val}`);
                }
        },
        mounted() {
            var athis=this
             var data={
                        reqUser:'adminCode', 
                        reqMobile :'15070057175',
                        reqToken:'b5d9fc7fbaf74046b2a17c6c49590d10',
                        pageNum:1,
                        pageSize:'20',
                        sort:'CRE_TIME',
                        desc:'DESC',
                        userMobile:'',
                        //
                        userInvitMobile:'',
                        //
                        userNickName:'',
                        userState:'',
                        startTime:'',
                        endTime:'',
                    }
            this.dataApi.ajax('pageUser',data, res => {
                    
               console.log(res.vos)
                athis.shuju=res.vos
               })
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
