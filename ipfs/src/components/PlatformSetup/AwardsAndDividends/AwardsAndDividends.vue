<template>
<div>
 <el-card class="box-card  box-cardheader">
     <div class="tanchuang">
         <span>新用户默认头像:</span>
         <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
     </div>



     <el-form ref="form" :model="form" label-width="180px" >
            <el-form-item label="每日系统奖励个数：">
           
    <el-input v-model="form.name" size='smell' placeholder="每小时总奖励不能低于0.20个SEC，最小二位小数，每个奖励涨幅10%" style="width:50%"></el-input>
  </el-form-item>
           <el-button type="success" style="margin-left:40px">确定</el-button>
     </el-form>
         
</el-card>
</div>
    
</template>
<script>
    export default{
        data() {
            return {
                key: 'AwardsAndDividends',
                form: {
                        name: '',
                        
                        },
                dialogImageUrl: '',
                dialogVisible: false
                            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        },
         mounted() {
            var athis=this
             var data={
                        reqUser:getCookie('adminCode'), 
                        reqMobile :getCookie('Cantant'),
                        reqToken:getCookie('toke'),
                        dictCode:'JL',
                       
                        
                    }
            this.dataApi.ajax('selectChildDict',data, res => {
                    
            //    console.log(res.invitCount)
               console.log(res)
            //    athis.yaoqingren=res.invitCount
                athis.tablenumber=res.vos
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
  .tanchuang span{

      float: left;
      margin-left:4%;
      line-height:120px;
      padding-right: 22px;
  }
   .tanchuang{
       padding-bottom: 4%;
   }
</style>
