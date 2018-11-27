import axios from 'axios'
import CryptoJS from 'crypto-js'

import Vue from 'vue'
import md5 from 'js-md5'

const PUBLIC_KEY =
    '-----BEGIN PUBLIC KEY-----\
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAghxHQ\
    hL/ogCG/vX5OPJGDV2uyp484fBWYOkTv1pgLJQHoBYZrDP20h9\
    IoIYsfaWRSYWMRN3FrHvfwy9RLDzVNQ4+NvMFNZ3jlIFi3Ir0c1\
    zaKyoxm4rtR+Ya+ZwjfXBYPEKxJwk0SWlQ5KP5h/jWzE8HDc25po\
    x8E7+ocup1BuIvHM1lB18RvUs3zuHsOHkHRFgOfwrxBlHGJFGj8R\
    zFz+STkQLSTP9T1vqa63uGVNsci0LnD+UsJbkswisxsyvaxRRX2GM\
    ITdjxw1Xq+gKuPW9eaNfzaRiUNd35dn7PBy8rKoKyOMTBcXJ7SCzQ\
    uKyVmttTL9tjDETV4MX/1owYdQIDAQAB\
    -----END PUBLIC KEY-----';

//WebSocket请求地址
//const WSHOST='ws://47.100.33.4:9009'
//const WSHOST='ws://192.168.0.104:9009'
// const WSHOST='ws://www.miruohz.com:9009'

let vm = new Vue()
var TOKEN = "Natural&Miruo&Hz^GY^LJL^LLW^TJW^ZLJ";
let encrypt = new JSEncrypt();
encrypt.setPublicKey(PUBLIC_KEY);

function aesEncrypt(data) {
        var time=new Date().getTime().toString()
        var arr=[]
        var arr2=[]
        for ( var i = 0; i<time.length; i++) {
             arr.push(parseInt(time.substring(i,i+1))+(i+1))
        }
        if (localStorage.getItem('permission')) {
            var token=JSON.parse(localStorage.getItem('permission')).adminToken  
            for (var i = 0;i<arr.length; i++) {
                    arr2.push(token.substring(arr[i],arr[i]+1))
            }
        }    
        var str=data+arr2.join('')
       var encrypt=md5(str).toUpperCase()
      return encrypt.toString();
}

function getJsonData(data,key,AesKey) {
    let iv =  md5(TOKEN+key).substring(0, 16).toUpperCase();
    AesKey=CryptoJS.enc.Utf8.parse(AesKey)
    iv=CryptoJS.enc.Utf8.parse(iv)
    data = JSON.stringify(data);
    let encrypted = CryptoJS.AES.encrypt(data, AesKey, {
        iv:iv,
        mode:CryptoJS.mode.CBC,
        padding:CryptoJS.pad.Pkcs7
    });
    // console.log(encrypted.toString())
    return encrypted.toString();
}

function getHeadKey(AesKey) {
     //AESKey
    let RSAKey = encrypt.encrypt(AesKey);
    // console.log(AesKey,RSAKey.toString())
     return RSAKey.toString();
}

function sha1(arr) {
    
   arr.sort();
    let str = '';
    for (let i = 0; i < arr.length; i++) {

        str += arr[i] ;

    }
    let sign = CryptoJS.SHA1(str).toString().toUpperCase();
    return sign;
}

function aesDecrypt(encrypted, key) {
    let decrypted = CryptoJS.AES.decrypt(encrypted, key, {iv: iv});
    decrypted = CryptoJS.enc.Utf8.stringify(decrypted);// 转换为 utf8 字符串
    return decrypted;
}

function cryptData(data,act) {
    data = data || {};
    let reqChannel = 'web';
    let reqToken = generateMixed(32);
    // if (localStorage.getItem('permission')) {
    //     data.reqUser = JSON.parse(localStorage.getItem('permission')).adminCode;
    //     data.reqToken = JSON.parse(localStorage.getItem('permission')).adminToken;

    // }else{
    //      data.reqUser = 1;
    //      data.reqToken=reqToken
    //      location.hash = '/login';
    // }
    
    //默认数据
    data.reqToken='2cdc8e4007d54b5683bfef37bedc7c7c';
    data.reqUser='0000000018';

    let AesKey = generateMixed(16);
    data.reqChannel = reqChannel;
    data.reqIdent='D';
    data.body='';  

    data.key=getHeadKey(AesKey);  
    data.body=getJsonData(data,data.key,AesKey);
    var key=md5(data.key).toUpperCase()
    var body=md5(data.body).toUpperCase()
    var arr=[key,body,TOKEN]
    data.sign=sha1(arr);
    
    var aesData={
       askKey:data.key,
       askBody: data.body,
       askSign:data.sign,
       clientType:'web',
       askCode:act
    }
    //return data;
   
    return aesData;
}

function cryptFormData(file) {
    let data = new FormData();
    let timestamp = +new Date();
    let headSerialNo = generateOrderNum();
    let headChannel = 1;
    let headAuthToken = generateMixed(40);
    data.append('image', file);
    data.append('headTrTime', timestamp);
    data.append('headSerialNo', headSerialNo);
    data.append('headChannel', headChannel);
    data.append('headAuthToken', headAuthToken);
    return data;
}


let showMessage = function (res) {
    if (res.responseType === 300) {
        // vm.$message({
        //     message: res.respmsg,
        //     type: 'warning'
        // });
        location.hash = '/login';
    } else if (res.responseType >= 600 && res.code < 700) {
        // vm.$message({
        //     message: res.respmsg,
        //     type: 'warning'
        // });
    } else if (res.respState =='F') {
        if(res.respCode == 'TK-INVALID'){
            //  vm.$message({
            //         message: '请重新登录',
            //         type: 'warning'
            //     });
              localStorage.removeItem('permission')
              location.hash = '/login';
              return
        }
        // vm.$message({
        //     message: res.respMsg,
        //     type: 'warning'
        // });
    }else if (res.responseType > 0) {
        
        if (res.respcode==30006) {
              location.hash = '/login';
            //   vm.$message({
            //         message: '请重新登录',
            //         type: 'warning'
            //     });
              return
        }
        // vm.$message({
        //     message: res.respmsg,
        //     type: 'warning'
        // });
        
    } else if (res.responseType < 0) {
        // vm.$message({
        //     message: '系统繁忙: ' + res.respmsg,
        //     type: 'warning'
        // });
    }
}

/**
 * 数据接口
 */

let ajax = function (act, data, callback, progressFunc) {
  
    return axios({
        method: 'post',
        url: '/gateWay',
        baseURL: HOST,
        headers: {},
        withCredentials: true,
        timeout: 30000,
        data: JSON.stringify(cryptData(data,act)),
        //data: 'i=1',
        progress: function (progressEvent) {
            // Do whatever you want with the native progress event
            progressFunc(progressEvent)
        }
    }).then(response => {
         let res = response.data.params;
//         if (res.pageNum=='0') {     //分页0条时pageNum=0
//             res.pageNum=1
//         }
        callback(res)
        // showMessage(res)
    }).catch(response => {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            //console.log('Error: ', response.message);
            if (response.message=="Cannot read property 'getAttribute' of null") {
                return;
            }
            // vm.$message({
            //     message: 'Error: ' + response.message,
            //     type: 'error'
            // });
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
            // vm.$message({
            //     message: '服务器异常' + response.status + ':' + response.data,
            //     type: 'error'
            // });
        }

    });
};


let upload = function (act, data, callback, progressFunc) {

    return axios({
        method: 'post',
        url: '/'+act,
        baseURL: URL,
        headers: {},
        withCredentials: true,
        timeout: 30000,
        data: cryptFormData(data),
        progress: function (progressEvent) {
            // Do whatever you want with the native progress event
            progressFunc(progressEvent)
        }
    }).then(response => {
        let res = response.data.params;
        //console.log(res)
        callback(res)
        showMessage(res)
    }).catch(response => {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error: ', response.message);
            // vm.$message({
            //     message: 'Error: ' + response.message,
            //     type: 'error'
            // });
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(response);
            // vm.$message({
            //     message: '服务器异常' + response.status + ':' + response.data,
            //     type: 'error'
            // });
        }

    });
};

/**
**删除对象空属性
**/
function removeProperty(object){
        for(var k in object){
            if (object[k]==='') {
                delete object[k]
            }
        }
        return object;
};

export default {
    ajax: ajax,
    upload:upload,
    md5:md5
}
