<template>
    <div>
            <el-card class="box-card">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>基本信息</span>
                </div>
                <div class="user_con">
                <el-form ref="form" :inline="true" :model="ruleForm" >

                  
                     <el-form-item  >
                     <el-button type="success" @click="addw">提交</el-button>
                    </el-form-item> 
                     <el-form-item  >
                    <!-- <el-button type="primary" :span="6" @click="$router.go(-1)">返回</el-button> -->
                    </el-form-item>
                   
                </el-form-item>  
               
                 </el-form>  
                </div>
            </el-card>
            <el-card class="box-card box-card-two">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>文案正文</span>
                </div>
              
                     <el-form ref="form"  :model="ruleForm"  style=" text-align: left;">

                   <el-form-item label="文案标题" style="padding-top:50px">
                        <el-input v-model="data.noticeTitle" placeholder=" 文案标题" style="width:300px;"></el-input>
                        
                    </el-form-item>
                    <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                           
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="data.noticeImage" :src="data.noticeImage" style="width:200px;hieght:200px;">
                                <i v-else class="el-icon-plus avatar-uploader-icon" style="width:200px;hieght:200px;"></i>
                                </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="" >
                            </el-dialog>
                                <el-tabs type="border-card" style="line-height:0; margin-top:20px;" v-model="activeName2" @tab-click="handleClicke">
                                        <el-tab-pane label="图文">
                                            <template>
                                                <quill-editor 
                                                v-model="titcon" 
                                                ref="myQuillEditor" 
                                                :options="editorOption" 
                                                @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                                                @change="onEditorChange($event)"
                                                style="line-height:0; text-align: left;"
                                                >
                                                </quill-editor>
                                            </template> 
                                        </el-tab-pane>
                                        <el-tab-pane label="链接">
                                            <el-form-item label="链接" style="padding-top:20px">
                                            <el-input v-model="linkcon" placeholder="https：..." style="width:300px;"></el-input>
                                
                                        </el-form-item>
                                        </el-tab-pane>
                        
                            </el-tabs>
                
                </el-form> 
                  
             
                 
            </el-card>
    </div>
</template>
<script>
 import { quillEditor } from 'vue-quill-editor'
    export default{
        data(){
            return{
                 ruleForm: {
                    name:'', 
                    newsContent: "",
                   
                 },
                 imageUrl:'',
                 dialogImageUrl: '',
                 activeName2:'',
                dialogVisible: false ,
                 content:null,
                editorOption:{},
                titcon:'',
                linkcon:'',
                data:{
                        noticeTitle:'',
                        noticeContent:'',
                        noticeType:'Z',
                        noticeImage:'',
                        noticeFalg:'T'  
                },
               
                 
            }
        },
        components: {
      
        },
        methods: {
            handleClicke(tab, event){
                // console.log(this.activeName2==0);
                if(this.activeName2==0){
                    this.data.noticeFalg='T'
                   
                   
                }else{
                    this.data.noticeFalg='L'
                   
                }
                
            },
            handleRemove(file, fileList) {
                // console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            },
         addw(){
            if( this.$route.query.tip=='T'){
                        if(this.data.noticeFalg=='T'){
                        this.data.noticeContent=this.titcon
                    }else{
                        this.data.noticeContent=this.linkcon
                    }

                    this.dataApi.ajax('addSysNotice',this.data, res => {
                            
                
                    // console.log(this.data.noticeImage)
                    if(res.respState=='S'){
                            this.$notify({
                            title: '成功',
                            message: '这是一条成功的提示消息',
                            type: 'success'
                            });
                            this.$router.push('/Index/InformationSetup')
                            // router.go(-1)
                    }else{
                        this.$notify.error({
                                title: '错误',
                                message: respMsg,
                                });
                    }
                   
                    })   
        }else{
             if(this.data.noticeFalg=='T'){
                        this.data.noticeContent=this.titcon
                    }else{
                        this.data.noticeContent=this.linkcon
                    }
                   
                        var data={
                            noticeCode:this.$route.query.noticeCode,
                            noticeTitle:this.data.noticeTitle,
                            noticeContent:this.data.noticeContent,
                            noticeImage:this.data.noticeImage,
                            noticeFalg:this.data.noticeFalg,

                        }
                    this.dataApi.ajax('editSysNotice',data, res => {
                            
                
                    
                    if(res.respState=='S'){
                            this.$notify({
                            title: '成功',
                            message: '这是一条成功的提示消息',
                            type: 'success'
                            });
                            this.$router.push('/Index/InformationSetup')
                            // router.go(-1)
                    }else{
                        this.$notify.error({
                                title: '错误',
                                message: respMsg,
                                });
                    }
                   
                    })     
        }


             

        },
        bianji(){
           
            var data={
                noticeCode: this.$route.query.noticeCode,
            }
             this.dataApi.ajax('singleSysNotice',data, res => {
                        // console.log(res)
                        this.data.noticeImage=res.noticeImage
                        this.data.noticeTitle=res.noticeTitle
                        
                        if(this.activeName2==0){
                             this.titcon=res.noticeContent   
                        }else{
                             this.linkcon=res.noticeContent  
                        }
              
                   
               })    
        },
        handleAvatarSuccess(res, file){
                            
        this.dataApi.upload('upload',file.raw,res=>{
                 if(res.respState==='S'){
                    
                        this.$notify({
                            title: '成功',
                            message: '图片上传成功',
                            type: 'success'
                        });
                            this.data.noticeImage=res.localPath  
                           
                        }else{
                            this.$notify.error({
                            title: '错误',
                            message:res.respMsg,
                            })
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
       
        },
        mounted() {
            if(this.$route.query.tip=='B'){
                this.bianji()
            }
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

