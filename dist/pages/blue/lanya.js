"use strict";function GETData(){return BLData}function getPT(){wx.getSystemInfo({success:function(i){pingtai=i.platform,console.log("getpt:",pingtai)}})}function OpenP(){getPT(),BLSB=new Array,wx.openBluetoothAdapter({success:function(i){console.log(i.errMsg),"openBluetoothAdapter:ok"==i.errMsg?(BLData.openOK=!0,BLData.TS="蓝牙模块初始化成功!",GetBLZT()):BLData.TS="请先打开蓝牙开关!"},fail:function(i){BLData.TS="请先打开蓝牙开关!"}})}function GetBLZT(){wx.getBluetoothAdapterState({success:function(i){i.available&&(BLData.BLZT=!0,BLData.TS="蓝牙适配器状态可用",SOBL())}}),wx.onBluetoothAdapterStateChange(function(i){i.available?(BLData.BLZT=!0,BLData.TS="蓝牙适配器状态可用",SOBL()):(BLData.BLZT=!1,BLData.TS="蓝牙适配器当前不可用")})}function SOBL(){BLData.TS="开始搜索蓝牙设备",wx.startBluetoothDevicesDiscovery({success:function(i){"startBluetoothDevicesDiscovery:ok"==i.errMsg&&(BLData.BLZT=!0,BLData.TS="开始搜索蓝牙设备",newSB())}})}function newSB(){wx.onBluetoothDeviceFound(function(i){var e={name:"",id:"",tp:"",dis:!1,LJ:"1",LJOK:"0"};if(BLData.TS="搜索到蓝牙设备",console.log("localName:",i.devices[0].localName),""!=i.devices[0].localName&&i.devices[0].localName&&!chongfu(i.devices[0].deviceId)){e.name=i.devices[0].localName,e.id=i.devices[0].deviceId;var n=i.devices[0].RSSI;e.tp=n>-70?"xinhao5":n>-85?"xinhao4":n>-90?"xinhao3":n>-100?"xinhao2":"xinhao1",e.dis=!1,e.LJ="0",BLSB.push(e)}})}function chongfu(i){var e=!1;for(var n in BLSB)BLSB[n].id==i&&(e=!0);return e}function GETSB(){return BLSB}function stopSO(){console.log("停止搜索:"),wx.stopBluetoothDevicesDiscovery({success:function(i){console.log("停止搜索成功:",i),wx.onBluetoothAdapterStateChange(function(i){console.log("adapterState changed, now is",i)})},fail:function(i){console.log("停止搜索失败:",i)}})}function stopBL(){wx.stopBluetoothDevicesDiscovery({success:function(i){wx.closeBluetoothAdapter({success:function(i){console.log(i)}})}})}function lianjie(i){""!=dayinji.uuid&&dayinji.uuid!=i&&duankai(dayinji.uuid),lcs=0,cgcs=0,lianjiego(i),hidesb(i,"1")}function hidesb(i,e){for(var n in BLSB)BLSB[n].id==i&&(BLSB[n].LJ=e)}function lianjiego(i){lcs+=1,console.log("第"+lcs+"次尝试连接"),wx.createBLEConnection({deviceId:i,success:function(e){stopSO(),cgcs+=1,console.log("连接成功.第"+lcs+"次:",e),1==cgcs&&jtlj(),jianting=!1,hidesb(i,"2"),getFW(i)},fail:function(e){console.log("连接失败:",e),lcs>5?hidesb(i,"3"):lianjiego(i)}})}function duankai(i){hidesb(i,"0"),jianting=!0,wx.closeBLEConnection({deviceId:i,success:function(i){console.log("断开成功:",i)}})}function jtlj(){wx.onBLEConnectionStateChange(function(i){0==i.connected&&0==jianting&&(console.log("监测到断开,自动重连"),hidesb(i.deviceId,"1"),lianjiego(i.deviceId),jianting=!0)})}function getFW(i){wx.getBLEDeviceServices({deviceId:i,success:function(e){console.log("所有服务:",e);for(var n in e.services)getTZ(i,e.services[n].uuid)}})}function getTZ(i,e){wx.getBLEDeviceCharacteristics({deviceId:i,serviceId:e,success:function(n){console.log("所有特征值:",n);for(var o in n.characteristics){var t=n.characteristics[o].properties;if(t.notify&&t.read&&t.write)return dayinji.uuid=i,dayinji.suuid=e,dayinji.nuuid=n.characteristics[o].uuid,console.log("当前打印机:uuid:"+dayinji.uuid+"suuid:"+dayinji.suuid+"nuuid:"+dayinji.nuuid),void wx.setStorage({key:"dayinji",data:dayinji})}}})}function zdlianjie(){try{var i=wx.getStorageSync("dayinji");i&&wx.openBluetoothAdapter({success:function(e){lianjie(i.uuid)},fail:function(i){BLData.TS="请先打开蓝牙开关!"}})}catch(i){console.log("读取缓存数据错误:",i)}}var BLData={openOK:!1,BLZT:!1,BLSO:!1,TS:"开始初始化蓝牙模块..."},dayinji={uuid:"",suuid:"",nuuid:""},pingtai,BLSB=new Array;module.exports={dayinji:dayinji,OpenPrint:OpenP,GETData:GETData,GETSB:GETSB,stopBL:stopBL,lianjie:lianjie,duankai:duankai,pingtai:pingtai,getPT:getPT,zdlj:zdlianjie};var lcs=0,cgcs=0,jianting=!1;