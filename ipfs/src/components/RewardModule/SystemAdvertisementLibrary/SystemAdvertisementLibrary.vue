<template>
<div>
        <el-card class="box-card  box-cardheader">
            <el-button  type="success" @click="addpro">新增广告</el-button>
        </el-card>
 
                  <el-card class="box-card box-card-two">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>领取记录</span>
                </div>
                <div>
                    <el-table
                        :data="tablenumber"
                         border
                        style="width: 100%">
                        <el-table-column
                            prop="adCode"
                            label="广告序号"
                            width="180">
                        </el-table-column>
                         <el-table-column
                            prop="adImageAddress"
                            label="广告封面">
                             <template slot-scope="scope">
                                <img  :src="scope.row.adImageAddress" alt="" style="width: 100px;height: 50px;">
                              
                            </template>
                        </el-table-column>
                         <el-table-column
                            prop="adTitle"
                           
                            label="广告内容">
                        </el-table-column>
                         <el-table-column
                            prop="updTime"
                            label="最后编辑时间">
                        </el-table-column>
                        <el-table-column
                            prop="clickNUm"
                            label="奖励调取次数 ">
                        </el-table-column>
                        <el-table-column
                            prop="adClick"
                            label="广告点击次数"
                            width="180">
                        </el-table-column>
                         <el-table-column
                            prop="adLinkAddress"
                           
                            label="跳转链接"
                            width="180">
                        </el-table-column>
                       
                       
                        <el-table-column
                       
                        label="操作"
                        width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                            <el-button type="text" size="small">禁用</el-button> 
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
                        <!-- tupian -->
                        <div class="tanchuang">
                         <span>图片:</span>
                        <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                                </el-upload>
                                <el-dialog >
                                   
                                <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                        </div>          
                        
                        <!-- shurukuang -->
                        <el-form ref="form"  label-width="80px">
                            <el-form-item label="内容:">
                                <el-input v-model="form.name" style="width:70%;"></el-input>
                            </el-form-item>
                        </el-form>
                        <el-form ref="form"  label-width="80px">
                            <el-form-item label="链接:">
                                <el-input v-model="form.name" style="width:70%;"></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible='false'">取 消</el-button>
                        </span>
                    </el-dialog>
            </el-card>
</div>
    
</template>
<script>
    export default{
        data() {
            return {
                    msg:true,
                 dialogVisible: false,
                dialogImageUrl: '',
               
                 ruleForm: {
                   
                    date1: '',
                    date2: '',
                   
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
                value:'',
                tablenumber:[], 
                form:{
                    name:''
                },
                     
            }
                              
        },
         methods: {
            handleClick(row) {
                console.log(row);
                this.dialogVisible=true
            },
            addpro(){
                this.dialogVisible=true
                var data={
                        reqUser:getCookie('adminCode'), 
                        reqMobile :getCookie('Cantant'),
                        reqToken:getCookie('toke'),
                        adTitle:'1',
                        adLinkAddress:'10',
                        adImageAddress:'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/20d5c57e839fa986939e2e6aec94728b_222_222.jpg',
                        adMark:'DESC',
                    }
            this.dataApi.ajax('addSysAd',data, res => {
                    
             
               console.log(res)
            //    athis.yaoqingren=res.invitCount
            //     athis.tablenumber=res.vos
               })
            },
            handleRemove(file, fileList) {
            console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            
      }
        },
        mounted() {
            var athis=this
             var data={
                        reqUser:getCookie('adminCode'), 
                        reqMobile :getCookie('Cantant'),
                        reqToken:getCookie('toke'),
                        pageNum:'1',
                        pageSize:'10',
                        sort:'CRE_TIME',
                        desc:'DESC',
                    }
            this.dataApi.ajax('pageSysAd',data, res => {
                    
             
               console.log(res)
              
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
  /* tanchaung */
  .tanchuang span{

      float: left;
      margin-left:10%;
      line-height:120px;
  }
   .tanchuang{
       padding-bottom: 8%;
   }
</style>
