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
                    <el-button type="primary" :span="6" @click="$router.go(-1)">返回</el-button>
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
                        <el-input v-model="ruleForm.name" placeholder=" 文案标题" style="width:300px;"></el-input>
                        
                    </el-form-item>
                     <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    style='padding-left:65px;height:160px;'>
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                    <el-tabs type="border-card" style="line-height:0; margin-top:20px;">
                    <el-tab-pane label="图文">
                         <template>
                            <quill-editor 
                            v-model="content" 
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
                        <el-input v-model="ruleForm.name" placeholder="https：..." style="width:300px;"></el-input>
                        
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
                 dialogImageUrl: '',
                dialogVisible: false ,
                 content:null,
                editorOption:{}
                 
            }
        },
        components: {
      
        },
        methods: {
            handleRemove(file, fileList) {
        console.log(file, fileList);
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
             var athis=this
             var data={
                        reqUser:'pageSysNotice', 
                        reqMobile :'15070057175',
                        reqToken:'b5d9fc7fbaf74046b2a17c6c49590d10',
                        noticeTitle:'1aa',
                        noticeContent:'10aa',
                        noticeType:'Z',
                        noticeImage:'DESC',
                        noticeFalg:'T'
                       
                        
                    }
            this.dataApi.ajax('addSysNotice',data, res => {
                    
            //    console.log(res.invitCount)
               console.log(res)
            //    athis.yaoqingren=res.invitCount
                // athis.tablenumber=res.vos
               })    

        },
       
        }

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

