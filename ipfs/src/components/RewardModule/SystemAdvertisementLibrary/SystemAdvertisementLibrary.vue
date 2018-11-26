<template>
<div>
        <el-card class="box-card  box-cardheader">
            <el-button type="success">新增广告</el-button>
        </el-card>
 
                  <el-card class="box-card box-card-two">
                <div class="user_header">
                   <i class="el-icon-menu"></i>
                  <span>领取记录</span>
                </div>
                <div>
                    <el-table
                        :data="tableData"
                         border
                        style="width: 100%">
                        <el-table-column
                            prop="AdvertisementSerialNumber"
                            label="广告序号"
                            width="180">
                        </el-table-column>
                         <el-table-column
                            prop="AdvertisementCover"
                            label="广告封面">
                        </el-table-column>
                         <el-table-column
                            prop="AdvertisingContent"
                            show-overflow-tooltip='true'
                            label="广告内容">
                        </el-table-column>
                         <el-table-column
                            prop="LastEditTime"
                            label="最后编辑时间">
                        </el-table-column>
                        <el-table-column
                            prop="RewardTransferTimes"
                            label="奖励调取次数 ">
                        </el-table-column>
                        <el-table-column
                            prop="AdvertingClicks"
                            label="广告点击次数"
                            width="180">
                        </el-table-column>
                         <el-table-column
                            prop="JumpLink"
                            show-overflow-tooltip='true'
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
            </el-card>
</div>
    
</template>
<script>
    export default{
        data() {
            return {
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
                value: '',
                tableData: [
                            {          
                            AdvertisementSerialNumber:'2',
                            AdvertisementCover:`<img src="" alt="">`,
                            AdvertisingContent:'ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤',
                            LastEditTime:'2018年11月9日18:33:10',
                            RewardTransferTimes:'2',
                            AdvertingClicks:'1235544',
                            JumpLink:'http：hdjfdk',
                            },
                            {          
                            AdvertisementSerialNumber:'2',
                            AdvertisementCover:`<img src="" alt="">`,
                            AdvertisingContent:'ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤',
                            LastEditTime:'2018年11月9日18:33:10',
                            RewardTransferTimes:'2',
                            AdvertingClicks:'1235544',
                            JumpLink:'http：hdjfdk',
                            },
                            {          
                            AdvertisementSerialNumber:'2',
                            AdvertisementCover:`<img src="" alt="">`,
                            AdvertisingContent:'ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤ipfs是时代在召唤',
                            LastEditTime:'2018年11月9日18:33:10',
                            RewardTransferTimes:'2',
                            AdvertingClicks:'1235544',
                            JumpLink:'http：hdjfdk',
                            },
                           
                                    ] 
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
</style>
