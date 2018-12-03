<template>
<div>
        <el-card class="box-card  box-cardheader">
            <el-button  type="success" @click="dialogVisible=true">新增广告</el-button>
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
                             :show-overflow-tooltip='true'
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
                            :show-overflow-tooltip='true'
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
                            :show-overflow-tooltip='true'
                            label="跳转链接"
                            width="180">
                        </el-table-column>
                       
                       
                        <el-table-column
                       
                        label="操作"
                        width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                            <el-button @click="handleClicka(scope.row)"  type="text" size="small">禁用</el-button> 
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
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" >
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                        </div>          
                        
                        <!-- shurukuang -->
                        <el-form ref="form"  label-width="80px">
                            <el-form-item label="内容:">
                                <el-input v-model="form.con" style="width:70%;"></el-input>
                            </el-form-item>
                        </el-form>
                        <el-form ref="form"  label-width="80px">
                            <el-form-item label="链接:">
                                <el-input v-model="form.linj" style="width:70%;"></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="addpro">确 定</el-button>
                            <el-button @click="dialogVisible=true">取 消</el-button>
                              
                        </span>
                    </el-dialog>
                    <!-- 第四块 -->
                    <el-dialog
                         title="广告详情" 
                        :visible.sync="dialogVisiblea"
                        width="30%"
                        style="line-height:40px;"
                        :modal="false"
                        >
                        <!-- tupian -->
                        <div class="tanchuang">
                         <span>图片:</span>
                       <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccessa"
                                :before-upload="beforeAvatarUploada">
                                <img v-if="bimageUrl" :src="bimageUrl" style="width:200px;hieght:200px;">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        </div>          
                        
                        <!-- shurukuang -->
                       <el-form ref="form"  label-width="80px">
                            <el-form-item label="内容a:">
                                <el-input v-model="forma.con" style="width:70%;"></el-input>
                            </el-form-item>
                        </el-form>
                        <el-form ref="form"  label-width="80px">
                            <el-form-item label="链接:">
                                <el-input v-model="forma.linj" style="width:70%;"></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="addproa">确 定</el-button>
                            <el-button @click="dialogVisiblea=true">取 消</el-button>
                              
                        </span>
                    </el-dialog>        
            <!-- shurukuang -->
                   <div class="block">
                        
                        <el-pagination
                       
                        @current-change="handleCurrentChange"
                        :current-page.sync="data.pageNum"
                        :page-size="data.pageSize"
                        layout="prev, pager, next, jumper"
                        :total="data.total">
                        </el-pagination>
                </div>      
            </el-card>

</div>
    
</template>
<script>
    export default{
        data() {
            return {
                    msg:true,
                    dialogVisible:false,
                    dialogVisiblea:false,
                    imageUrl: '',
                    bimageUrl: '',
                   
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
                    con:'',
                    linj:'',
                },
                forma:{
                    con:'',
                    linj:'',
                    adCode:'',
                    adTitle:'',
                    adState:'',

                },
                data:{
                                    
                                        pageNum:1,
                                        pageSize:10,
                                        sort:'CRE_TIME',
                                        total:0,
                                        desc:'DESC',
                                    }
                     
            }
                              
        },
         methods: {
              handleCurrentChange(val) {
                   
                    this.data.pageNum=val
                    this.setdata()
                },
            handleClick(row) {
                console.log(row)
               this.dialogVisiblea=true
                this.forma.adCode=row.adCode
                this.forma.adTitle=row.adTitle
                this.forma.linj=row.adLinkAddress
                this.forma.con=row.adTitle
                this.forma.adState=row.adState
                this.bimageUrl=row.adImageAddress
                       
            },
             addproa(){
               this.xiugai(this.forma.adState)
             },
            xiugai( zhi){
                 var athis=this
                var data={
                       
                        adCode:this.forma.adCode,
                        adTitle:this.forma.adTitle,
                        adLinkAddress:this.forma.linj,
                        adImageAddress:this.bimageUrl,
                        adState:zhi,
                        }
                        this.dataApi.ajax('editSysAd',data, res => {
                                if(res.respState==='S'){
                                        this.$notify({
                                        title: '成功',
                                        message: '提交成功',
                                        type: 'success'
                                        });
                                athis.dialogVisiblea=false
                                }
                        })
            },
             handleClicka(row) {
                 this.forma.adCode=row.adCode
                this.forma.adTitle=row.adTitle
                this.forma.linj=row.adLinkAddress
                this.forma.con=row.adTitle
                 this.bimageUrl=row.adImageAddress
                if(row.adState==='T'){
                   this.xiugai('J')
                     
                }else{
                 this.$notify({
                                 title: '警告',
                                 message: '已禁用',
                                 type: 'success'
                                });   
                }
            },
            addpro(){
               
                var athis=this
                var data={
                       
                        adTitle:this.form.con,
                        adLinkAddress:this.form.linj,
                        adImageAddress:this.imageUrl,
                        adMark:'DESC',
                        }
                        this.dataApi.ajax('addSysAd',data, res => {
                                if(res.respState==='S'){
                                        this.$notify({
                                        title: '成功',
                                        message: '提交成功',
                                        type: 'success'
                                        });
                                     athis.dialogVisible=false
                                }
                        })
              
               
                },
                handleAvatarSuccess(res, file){
                            
                this.dataApi.upload('upload',file.raw,res=>{
                 if(res.respState==='S'){
                    this.imageUrl=res.localPath
                        this.$notify({
                             title: '成功',
                            message: '图片上传成功',
                             type: 'success'
                             });
                        }else{
                            this.$notify.error({
                            title: '错误',
                            message:res.respMsg,
                            });
                            }
                             })

                        },
                        beforeAvatarUpload(file) {
                            const isJPG = file.type === 'image/jpeg';
                            const isLt2M = file.size / 1024 / 1024 < 2;

                            if (!isJPG) {
                            this.$message.error('上传头像图片只能是 JPG 格式!');
                            }
                            if (!isLt2M) {
                            this.$message.error('上传头像图片大小不能超过 2MB!');
                            }
                            return isJPG && isLt2M;
                        },
                handleAvatarSuccessa(res, file){
                            
                this.dataApi.upload('upload',file.raw,res=>{
                 if(res.respState==='S'){
                    this.bimageUrl=res.localPath
                        this.$notify({
                             title: '成功',
                            message: '图片上传成功',
                             type: 'success'
                             });
                        }else{
                            this.$notify.error({
                            title: '错误',
                            message:res.respMsg,
                            });
                            }
                             })

                        },
                        beforeAvatarUploada(file) {
                            const isJPG = file.type === 'image/jpeg';
                            const isLt2M = file.size / 1024 / 1024 < 2;

                            if (!isJPG) {
                            this.$message.error('上传头像图片只能是 JPG 格式!');
                            }
                            if (!isLt2M) {
                            this.$message.error('上传头像图片大小不能超过 2MB!');
                            }
                            return isJPG && isLt2M;
                        },
                        setdata(){
                                    
                             
                            this.dataApi.ajax('pageSysAd',this.data, res => {
                                    
                            
                            //    console.log(res)
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
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
