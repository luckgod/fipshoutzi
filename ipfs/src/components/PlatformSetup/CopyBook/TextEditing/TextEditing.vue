<template>
    <div>
            <el-card class="box-card">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>基本信息</span>
                </div>
                <div class="user_con">
                <el-form ref="form" :inline="true" :model="ruleForm" >

                   <el-form-item label="文案标题" >
                        <el-input v-model="ruleForm.name" placeholder=" 文案标题" style="width:400px;"></el-input>
                        
                    </el-form-item>
                     <el-form-item  >
                     <el-button type="success">提交</el-button>
                    </el-form-item> 
                     <el-form-item  >
                    <el-button type="primary" :span="6">返回</el-button>
                    </el-form-item>
                   
                </el-form-item>  
               
                 </el-form>  
                </div>
            </el-card>
            <el-card class="box-card box-card-two" >
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>文案正文</span>
                </div>
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
                content:null,
                editorOption:{}
            }
        },
        components: {
      
        },
        methods: {
            onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            }

        },
        mounted() {
            var athis=this
             var data={
                        reqUser:'adminCode', 
                        reqMobile :'15070057175',
                        reqToken:'b5d9fc7fbaf74046b2a17c6c49590d10',
                        codexTitle:'1',
                        codexType:'B',
                        codexContent:'1111',
                       
                        
                    }
            this.dataApi.ajax('addCodex',data, res => {
                    
            //    console.log(res.invitCount)
               console.log(res)
            //    athis.yaoqingren=res.invitCount
                athis.tablenumber=res.vos
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

