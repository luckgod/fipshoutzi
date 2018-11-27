<template>
<div>
 <el-card class="box-card  box-cardheader">
     <el-form ref="form" :model="form" label-width="180px" :inline="true">
          <el-form-item label="每日系统奖励个数：">
    <el-input v-model="form.name" size='smell'></el-input>
  </el-form-item>
           <el-button type="success">确定</el-button>
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
          
        }
            }
        },
         mounted() {
            var athis=this
             var data={
                        reqUser:'pageSysNotice', 
                        reqMobile :'15070057175',
                        reqToken:'b5d9fc7fbaf74046b2a17c6c49590d10',
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
</style>
