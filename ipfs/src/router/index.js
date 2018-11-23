import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/shouye/Index.vue'
import login from '@/components/login/Login.vue'
import Userlist from '@/components/userlist/Userlist.vue'
import RewardModule from '@/components/RewardModule/RewardModule.vue'
import SystemRewardSendingRecord from '@/components/RewardModule/SystemRewardSendingRecord/SystemRewardSendingRecord.vue'
import SystemAdvertisementLibrary from '@/components/RewardModule/SystemAdvertisementLibrary/SystemAdvertisementLibrary.vue'
import AccountList from '@/components/AccountManagement/AccountList/AccountList.vue'
import AuthorizationList from '@/components/AccountManagement/AuthorizationList/AuthorizationList.vue'
import AwardsAndDividends from '@/components/PlatformSetup/AwardsAndDividends/AwardsAndDividends.vue'
import CopyBook from '@/components/PlatformSetup/CopyBook/CopyBook.vue'
import InformationSetup from '@/components/PlatformSetup/InformationSetup/InformationSetup.vue'
import OperationLog from '@/components/PlatformSetup/OperationLog/OperationLog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/Index',
      name:'Index',
      component:Index,
      redirect: {name: 'Userlist'},
      children:[
            {
              name: 'Userlist',
							path: '/Index/Userlist',   
							component: Userlist
            },
            {
              name: 'RewardModule',
              path: '/Index/RewardModule',   
              component: RewardModule
            },
            {
              name: 'SystemRewardSendingRecord',
              path: '/Index/SystemRewardSendingRecord',   
              component: SystemRewardSendingRecord
            },
            {
              name: 'SystemAdvertisementLibrary',
              path: '/Index/SystemAdvertisementLibrary',   
              component: SystemAdvertisementLibrary
            },
            {
              name: 'AccountList',
              path: '/Index/AccountList',   
              component: AccountList
            },
            {
              name: 'AuthorizationList',
              path: '/Index/AuthorizationList',   
              component: AuthorizationList
            },
            {
              name: 'AwardsAndDividends',
              path: '/Index/AwardsAndDividends',   
              component: AwardsAndDividends
            },
            {
              name: 'CopyBook',
              path: '/Index/CopyBook',   
              component: CopyBook
            },
            {
              name: 'InformationSetup',
              path: '/Index/InformationSetup',   
              component: InformationSetup
            },
            {
              name: 'OperationLog',
              path: '/Index/OperationLog',   
              component: OperationLog
            },
      ]
    },
    {
      path:'*',
      redirect:'/Index'
    }
  ]
})

