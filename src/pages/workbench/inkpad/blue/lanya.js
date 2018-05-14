var BLData = {
    openOK: false, //蓝牙是否打开
    BLZT: false, //蓝牙状态是否可用
    BLSO: false, //蓝牙是否正在搜索
    TS: "开始初始化蓝牙模块..."
};
var dayinji = {
    uuid: "",
    suuid: "",
    nuuid: ""
}; //已连接的蓝牙设备 uuid
var pingtai;
var BLSB = new Array(); //记录已搜索到的蓝牙设备
function GETData() {
    return BLData;
}
module.exports = {
    dayinji: dayinji, //连接的打印机信息
    OpenPrint: OpenP,
    GETData: GETData,
    GETSB: GETSB,
    stopBL: stopBL,
    lianjie: lianjie,
    duankai: duankai,
    pingtai: pingtai,
    getPT: getPT,
    zdlj: zdlianjie
};
function getPT() {
    wx.getSystemInfo({
        success: function(res) {
            pingtai = res.platform;
            console.log("getpt:", pingtai);
        }
    });
}
function OpenP() {
    getPT();
    BLSB = new Array();
    //初始化蓝牙模块
    wx.openBluetoothAdapter({
        success: function(res) {
            console.log(res.errMsg);
            if (res.errMsg == "openBluetoothAdapter:ok") {
                BLData.openOK = true;
                BLData.TS = "蓝牙模块初始化成功!";
                GetBLZT();
            } else {
                BLData.TS = "请先打开蓝牙开关!";
            }
        },
        fail: function(res) {
            BLData.TS = "请先打开蓝牙开关!";
        }
    });
    //wx.closeBluetoothAdapter 关闭蓝牙模块,使其进入未初始化状态
}

function GetBLZT() {
    //获取本机蓝牙适配器状态
    wx.getBluetoothAdapterState({
        success: function(res) {
            if (res.available) {
                BLData.BLZT = true;
                BLData.TS = "蓝牙适配器状态可用";
                SOBL();
            }
        }
    });

    //监听本机蓝牙适配器变化(蓝牙状态变化时触发)
    wx.onBluetoothAdapterStateChange(function(res) {
        if (res.available) {
            BLData.BLZT = true;
            BLData.TS = "蓝牙适配器状态可用";
            SOBL();
        } else {
            BLData.BLZT = false;
            BLData.TS = "蓝牙适配器当前不可用";
        }
    });
}

//开始搜索蓝牙设备
function SOBL() {
    BLData.TS = "开始搜索蓝牙设备";
    wx.startBluetoothDevicesDiscovery({
        success: function(res) {
            if (res.errMsg == "startBluetoothDevicesDiscovery:ok") {
                BLData.BLZT = true;
                BLData.TS = "开始搜索蓝牙设备";
                newSB();
            }
        }
    });
}
function newSB() {
    //监听搜索到新设备事件
    wx.onBluetoothDeviceFound(function(res) {
        //console.log(res)
        var SB = {
            name: "",
            id: "",
            tp: "",
            dis: false,
            LJ: "1",
            LJOK: "0"
        };
        BLData.TS = "搜索到蓝牙设备";
        console.log("localName:", res.devices[0].localName);
        if (res.devices[0].localName == "" || !res.devices[0].localName) {
            return;
        }
        if (chongfu(res.devices[0].deviceId)) {
            return;
        }
        SB.name = res.devices[0].localName;
        SB.id = res.devices[0].deviceId;
        var xh = res.devices[0].RSSI;
        if (xh > -70) {
            SB.tp = "xinhao5";
        } else if (xh > -85) {
            SB.tp = "xinhao4";
        } else if (xh > -90) {
            SB.tp = "xinhao3";
        } else if (xh > -100) {
            SB.tp = "xinhao2";
        } else {
            SB.tp = "xinhao1";
        }
        SB.dis = false;
        SB.LJ = "0";
        BLSB.push(SB);
        //console.log(SB)
    });
}

function chongfu(uuid) {
    var iscf = false;
    for (var x in BLSB) {
        if (BLSB[x].id == uuid) {
            iscf = true;
        }
    }
    return iscf;
}
function GETSB() {
    return BLSB;
}
function stopSO() {
    console.log("停止搜索:");
    wx.stopBluetoothDevicesDiscovery({
        success: function(res) {
            console.log("停止搜索成功:", res);
            wx.onBluetoothAdapterStateChange(function(res) {
                console.log(`adapterState changed, now is`, res);
            });
        },
        fail: function(res) {
            console.log("停止搜索失败:", res);
        }
    });
}
function stopBL() {
    wx.stopBluetoothDevicesDiscovery({
        success: function(res) {
            wx.closeBluetoothAdapter({
                success: function(resx) {
                    console.log(resx);
                }
            });
        }
    });
}
var lcs = 0; //尝试连接的次数
var cgcs = 0; //成功连接的次数
var jianting = false;
function lianjie(uuid) {
    if (dayinji.uuid != "" && dayinji.uuid != uuid) {
        duankai(dayinji.uuid);
    } //如果有已连接的打印,并且uuid 不等于现在要连接的uuid 则 先断开之前的打印机
    lcs = 0;
    cgcs = 0;
    lianjiego(uuid);
    hidesb(uuid, "1");
}
function hidesb(uuid, h) {
    for (var x in BLSB) {
        if (BLSB[x].id == uuid) {
            BLSB[x].LJ = h;
        }
    }
}
function lianjiego(deviceId) {
    lcs += 1;
    console.log("第" + lcs + "次尝试连接");
    wx.createBLEConnection({
        deviceId: deviceId,
        success: function(res) {
            //stopSO();
            stopSO();
            cgcs += 1;
            console.log("连接成功.第" + lcs + "次:", res);
            if (cgcs == 1) {
                jtlj();
            }
            jianting = false;
            hidesb(deviceId, "2");
            getFW(deviceId);
        },
        fail: function(res) {
            console.log("连接失败:", res);
            if (lcs > 5) {
                hidesb(deviceId, "3");
            } else {
                lianjiego(deviceId);
            }
        }
    });
}
function duankai(deviceId) {
    hidesb(deviceId, "0");
    jianting = true;
    wx.closeBLEConnection({
        deviceId: deviceId,
        success: function(res) {
            console.log("断开成功:", res);
        }
    });
}
function jtlj() {
    wx.onBLEConnectionStateChange(function(res) {
        if (res.connected == false && jianting == false) {
            console.log("监测到断开,自动重连");
            hidesb(res.deviceId, "1");
            lianjiego(res.deviceId);
            jianting = true;
        }
    });
}
//获取蓝牙设备所有 service（服务）
function getFW(deviceId) {
    wx.getBLEDeviceServices({
        deviceId: deviceId,
        success: function(res) {
            console.log("所有服务:", res);
            for (var p in res.services) {
                getTZ(deviceId, res.services[p].uuid, p);
            }
        }
    });
}
//获取蓝牙设备某个服务中的所有 characteristic（特征值）
function getTZ(xuuid, xsuuid, index) {
    wx.getBLEDeviceCharacteristics({
        deviceId: xuuid,
        serviceId: xsuuid,
        success: function(res) {
            console.log(`----------第${index}服务值------------`);
            for (var p in res.characteristics) {
                var rr = res.characteristics[p].properties;
                dayinji.uuid = xuuid;
                dayinji.suuid = xsuuid;
                // if (rr.notify) {
                //     dayinji.notify_id = res.characteristics[p].uuid;
                // }

                if (rr.write && index == 4) {
                    console.log("入参：" + xuuid, xsuuid);
                    console.log("所有特征值:", res);
                    // dayinji.write_id = res.characteristics[p].uuid;
                    dayinji.nuuid = res.characteristics[p].uuid;
                    console.log(
                        "蓝牙值：",
                        dayinji,
                        `第${parseInt(p) + 1}组特征`
                    );
                }
                // if (rr.read) {
                //     dayinji.read_id = res.characteristics[p].uuid;
                // }

                // console.log(rr);
                // if (rr.notify && rr.read && rr.write) {
                //     dayinji.uuid = xuuid;
                //     dayinji.suuid = xsuuid;
                //     dayinji.nuuid = res.characteristics[p].uuid;
                //     console.log(
                //         "当前打印机:uuid:" +
                //             dayinji.uuid +
                //             "suuid:" +
                //             dayinji.suuid +
                //             "nuuid:" +
                //             dayinji.nuuid
                //     );
                //     wx.setStorage({
                //         key: "dayinji",
                //         data: dayinji
                //     });

                //     return;
                // }
                wx.setStorage({
                    key: "dayinji",
                    data: dayinji
                });

                // console.log("=============");
                if (rr.notify && index == 4) {
                    wx.notifyBLECharacteristicValueChange({
                        state: true,
                        deviceId: xuuid,
                        serviceId: xsuuid,
                        characteristicId: res.characteristics[p].uuid,
                        complete(res) {
                            console.log(res);
                            wx.onBLECharacteristicValueChange(res => {
                                console.log(res);
                                // setTimeout(() => {
                                //     console.log(
                                //         "complete:",
                                //         res.characteristicId,
                                //         dayinji
                                //     );

                                //     // dayinji = {
                                //     //     uuid: dayinji.uuid,
                                //     //     suuid: dayinji.suuid,
                                //     //     nuuid: res.characteristicId
                                //     // };

                                //     dayinji.nuuid = res.characteristicId;

                                //     wx.setStorage({
                                //         key: "dayinji",
                                //         data: dayinji
                                //     });
                                // }, 2000);
                            });
                        },
                        fail(res) {
                            // console.log("fail:", res);
                        }
                    });
                }
            }
        }
    });
}
function zdlianjie() {
    try {
        var value = wx.getStorageSync("dayinji");
        if (value) {
            wx.openBluetoothAdapter({
                success: function(res) {
                    lianjie(value.uuid);
                },
                fail: function(res) {
                    BLData.TS = "请先打开蓝牙开关!";
                }
            });
        }
    } catch (e) {
        console.log("读取缓存数据错误:", e);
    }
}
