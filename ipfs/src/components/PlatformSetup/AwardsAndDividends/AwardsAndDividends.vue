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
    }

</script>
<style scoped>
.box-cardheader{
    text-align: left;
    line-height: 40px;
}
</style>
