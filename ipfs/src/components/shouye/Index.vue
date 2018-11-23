<template>
  <div>
      <el-container>
          <el-header style="height:65px">
           
            <div class="header">
              <div class="header_left">
                <img src="https://img02.sogoucdn.com/app/a/100520093/3c28af542f2d49f7-da1566425074a021-49652b4db4e26f742bdf91d5ddf65e2f.jpg" alt="">
                <span> IPFS-SEC管理后台</span>
              </div>
              <div class="header_right">

                <span>先生</span>
            </div>
            </div>
          </el-header>
          <el-container>
            <el-aside style="width: 200px;height:100vh" >
                                <el-row class="tac">
                                  <el-col >
                                   
                                    <el-menu
                                      default-active="2"
                                      class="el-menu-vertical-demo"
                                      @open="handleOpen"
                                      @close="handleClose"
                                      :unique-opened='true'
                                      background-color="#545c64"
                                      text-color="#fff"
                                      active-text-color="#ffd04b"
                                      >
                                      <!-- <el-submenu index="1">
                                        <template slot="title">
                                          <i class="el-icon-goods"></i>
                                          <span slot="title">用户列表</span>
                                        </template>
                                   
                                      </el-submenu> -->
                                       <el-menu-item index="1"  @click="$router.push('/Index/Userlist')">
                                          <i class="el-icon-goods"></i>
                                          <span slot="title" >用户列表</span>
                                        </el-menu-item>
                                      <el-submenu index="2">
                                        <template slot="title">
                                          <i class="el-icon-news"></i>
                                          <span>奖励模块</span>
                                        </template>
                                        <el-menu-item-group>
                                          <el-menu-item index="2-1" @click="$router.push('/Index/RewardModule')">领取记录</el-menu-item>
                                          <el-menu-item index="2-2" @click="$router.push('/Index/SystemRewardSendingRecord')">系统奖励发送记录</el-menu-item>
                                          <el-menu-item index="2-3" @click="$router.push('/Index/SystemAdvertisementLibrary')">系统广告库</el-menu-item>
                                        </el-menu-item-group>
                                      </el-submenu>
                                      <el-submenu index="3">
                                        <template slot="title">
                                          <i class="el-icon-setting"></i>
                                          <span>平台设置</span>
                                        </template>
                                        <el-menu-item-group>
                                          <el-menu-item index="3-1" @click="$router.push('/Index/AwardsAndDividends')">奖励及分红设置</el-menu-item>
                                          <el-menu-item index="3-2" @click="$router.push('/Index/CopyBook')">文案设置</el-menu-item>
                                          <el-menu-item index="3-3" @click="$router.push('/Index/InformationSetup')">资讯设置</el-menu-item>
                                           <el-menu-item index="3-4" @click="$router.push('/Index/OperationLog')">操作日志</el-menu-item>
                                        </el-menu-item-group>
                                      </el-submenu>
                                      <el-submenu index="4">
                                        <template slot="title">
                                          <i class="el-icon-tickets"></i>
                                          <span>账号管理</span>
                                        </template>
                                        <el-menu-item-group>
                                          <el-menu-item index="4-1" @click="$router.push('/Index/AccountList')">账号列表</el-menu-item>
                                          <el-menu-item index="4-2" @click="$router.push('/Index/AuthorizationList')">权限列表</el-menu-item>
                                         
                                        </el-menu-item-group>
                                      </el-submenu>
                                      
                                    </el-menu>
                                  </el-col>
                                </el-row>
                                
            </el-aside>
            <el-main style="100vh">
               <router-view/>
            </el-main>
          </el-container>
      </el-container>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Index'
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header{
    background-color: #0F7BEA;
    color: #333;
    text-align: center;
    line-height: 65px;
    height: 65px;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    position:fixed;
    top: 65px;
    bottom: 0;
    left: 0;
   
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .header{
  
  height: 65px;
  overflow: hidden;
  font-size: 14px;
  
 
}
.header_left{
  float: left;
   font-size: 14px;
   line-height: 65px;
   
    position: relative;
    padding-left:50px; 
    color:#ffffff;
}
.header_left img{
  width:30px;
  height:30px;
  border-radius: 15px;
  position: absolute;
  top: 16px;
  left: 0;
}
.header_right{
  float: right;
   font-size: 14px;
   line-height: 65px;
   padding: 0 20px;
   background: #409EFF;
   color: #ffffff;
}
 .el-main{
   position:fixed;
   top: 65px;
   left: 200px;
   bottom: 0;
   right: 0;
   
 }
 
</style>
