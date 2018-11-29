<template>
<div>
 <el-card class="box-card  box-cardheader">
      <el-form ref="form" :model="form" label-width="180px" >
            <el-form-item label="每日系统奖励个数：">
           
    <el-input v-model="shuzi" size='smell' placeholder="每小时总奖励不能低于0.20个SEC，最小二位小数，每个奖励涨幅10%" style="width:50%"></el-input>
     <div class="tanchuang">
         <span>新用户默认头像:</span>
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



    
</el-form-item>
    <el-button type="success" style="margin-left:40px" @click="shangchan">确定</el-button>
</el-form>
         
</el-card>
</div>
    
</template>
<script>
    export default{
        data() {
            return {
                form:{},
                shuzi: '',
                imageUrl: '',
                dialogVisible: false
                            }
        },
        methods: {
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
                        shangchan(){
                                var athis=this
                                var data={
                                           dictCode:'Sys_Image',
                                           dictValue:this.imageUrl
                                        }
                                this.dataApi.ajax('editDict',data, res => {
                                
                                   console.log(res)
                               
                                })
                                  var datab={ 
                                           dictCode:'Every_Hour',
                                           dictValue:this.shuzi
                                        }
                                this.dataApi.ajax('editDict',datab, res => {
                                
                                   console.log(res)
                                
                                })
                        },
                      
        },
         mounted() {
            var athis=this
             var data={
                        dictCode:'JL', 
                    }
            this.dataApi.ajax('selectChildDict',data, res => {
               console.log(res)
                this.imageUrl=res.vos[0].dictValue
                this.shuzi=res.vos[1].dictValue
              
               })
        },
    }

</script>
<style scoped>
.box-cardheader{
    text-align: left;
    line-height: 40px;
}
 /* tanchaung */

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
  .tanchuang{
      padding:30px 0;
  }
.tanchuang span{
     float: left;
     margin-left: -120px;
   }  
</style> 
