<template>
<div>
   
<el-card class="box-card box-cardheaderthree">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>筛选查询</span>
                </div>
                <div class="user_con">
                    
                <el-form ref="form" :inline="true" :model="ruleForm" >
                    <el-form-item label="输入搜索：">
                        <el-input v-model="ruleForm.name" placeholder="账号/姓名"></el-input>
                    </el-form-item>
                   <el-form-item label="奖励类型 ：">
                       <el-select v-model="value" placeholder="系统奖励">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-button type="primary">查询</el-button>
                                 <el-button type="success">添加</el-button>
                    </el-form-item>
                   
                
                
                    
                   
                    
               
               
                 </el-form>  
                </div>
            </el-card>
            <!-- 第二块 -->
                  <el-card class="box-card box-card-two">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>账号列表</span>
                </div>
                <div>
                    <el-table
                        :data="tableData"
                         border
                        style="width: 100%">
                        <el-table-column
                            prop="Number"
                            label="账号"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="Name"
                            label="姓名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="ContactNumber"
                            label="联系电话">
                        </el-table-column>
                        <el-table-column
                            prop="AuthorityGroup"
                            label="所属权限组">
                        </el-table-column>
                        <el-table-column
                            prop="AddTime"
                            label="添加时间">
                        </el-table-column>
                        <el-table-column
                       
                        label="操作"
                        width="100">
                        <template slot-scope="scope">
                           
                            <el-button type="text" @click="dialogVisible = true" >编辑</el-button>

                        </template>
                        </el-table-column>
                      
                          <el-table-column
                            
                            label="状态">
                            <template slot-scope="scope" >
                                            <el-switch
                                             v-model="scope.row.State"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949"> 
                                            </el-switch>
                                        </template>
                        </el-table-column>
                        
                        </el-table>
                </div>
                <!-- 第三块 -->
                          <el-dialog
                         title="添加/编辑账号" 
                        :visible.sync="dialogVisible"
                        width="30%"
                        style="line-height:40px;"
                        :modal="false"
                        >
                        <el-form ref="form" :model="form" label-width="90px" >
                                <el-form-item label="账号：">
                                <el-input v-model="form.name" ></el-input>
                                </el-form-item>
                                 <el-form-item label=" 姓名：">
                                <el-input v-model="form.namea"></el-input>
                                </el-form-item>
                                 <el-form-item label="联系方式：">
                                <el-input v-model="form.nameb"></el-input>
                                </el-form-item>
                                 <el-form-item label="登录密码：">
                                <el-input v-model="form.namec" type="password"></el-input>
                                </el-form-item>
                                 <el-form-item label="确认密码：">
                                <el-input v-model="form.named" type="password"></el-input>
                                </el-form-item>
                     </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogVisible = false">提 交</el-button>
                        </span>
                    </el-dialog>
                     <!-- 第三块 -->
                          <el-dialog
                         title="广告详情" 
                        :visible.sync="dialogVisible"
                        width="30%"
                        style="line-height:40px;"
                        :modal="false"
                        >
                        <ul style="list-style:none;  text-align: left;">
                            <li><span>封面：</span><img src="http://img13.360buyimg.com/n2/jfs/t26332/324/2072791091/226362/bcdee29c/5bf6a21aN995e8132.jpg" style="width:50px;height:50px;" alt=""> </li>
                            <li><span>内容：</span><span>京东JD.COM-专业的综合网上购物商城，销售超数万品牌、4020万种商品，囊括家电、手机、电脑、母婴、服装等13大品类。秉承客户为先的理念，京东所售商品为正品行货、全国联保、机打发票。</span></li>
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
                   
                 },
                 rules: {
                       
                        date1: [
                            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                        ],
                      
                       
                 },
                  dialogVisible: false,
                    
                 options: [{
                            value: '选项1',
                            label: '系统奖励'
                            }, ],
                value: '',
                tableData: [{          
                            Number:'windir',
                            Name:'大梨',
                            ContactNumber: '13353339635',
                            AuthorityGroup:'产品部',
                            AddTime:'2017-08-05 15:47:44',
                            State:true,
                            },
                            {          
                            Number:'windir',
                            Name:'大梨',
                            ContactNumber: '13353339635',
                            AuthorityGroup:'产品部',
                            AddTime:'2017-08-05 15:47:44',
                            State:false,
                            },
                           
                                    ],
                
                    form: {
                    name: '',
                    namea: '',
                    nameb: '',
                    namec: '',
                    named: '',
                         

                    },
                    formLabelWidth: '120px'                     
            }
                              
        },
         methods: {
         
            handleClick(row) {
                console.log(row);
             
            
            }
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
      margin-top:5px;
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
       margin-top:5px;
  }
  .el-dialog__header{
      line-height: 50px;
  }
</style>
