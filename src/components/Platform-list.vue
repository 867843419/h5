<template>
    <div class="list">
        <div class="parent" @click="jumpTatol()">
            <img src="../assets/ion/list.png" class="img">
            <div class="content">
                <div class="content-t">
                    <div class="white-ion">
                        <img src="../assets/ion/white.png" class="img">
                    </div>
                    <div class="text-platform margin-l-sm">管理中心</div>
                </div>
                <div class="content-b flex-bet">
                    <div class="text-orgin white">马丽萍</div>
                    <div class="text-orgin white">0472-1234567</div>
                </div>
            </div>
        </div>
        <div class="child" v-for="item in list" :key="item.sid" @click="jump(item.sid,item.stationname)">
            <div class="content">
                <div class="content-t">
                    <div class="white-ion">
                        <img src="../assets/ion/blue.png" class="img">
                    </div>
                    <div class="text-blue margin-l-sm">{{item.stationname}}</div>
                </div>
                <div class="content-b flex-bet">
                    <div class="text-orgin gray">{{item.contacts}}</div>
                    <div class="text-orgin gray">{{item.phonenum}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    props:{
        list:{
            type:Array,
            default:[]
        },
        flag:Boolean
    },
    data(){
        return {}
    },
    methods:{
        jumpTatol(){
            const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            if (!isiOS) {
                window.android.invoke_native('jumpStation',JSON.stringify({
                    status:2
                }))
            }else{
                this.setupWebViewJavascriptBridge(bridge => {
                    bridge.callHandler('jumpStation',JSON.stringify({
                        status:2
                    }))
                })
            }
        },
        jump(id,name){
            const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            if (!isiOS) {
                window.android.invoke_native('jumpStation',JSON.stringify({
                    id,
                    name,
                    status:1
                }))
            }else{
                this.setupWebViewJavascriptBridge(bridge => {
                    bridge.callHandler('jumpStation',JSON.stringify({
                        id,
                        name,
                        status:1
                    }))
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.parent{
    width: 100%;
    height: 200px;
    position: relative;
    margin-bottom: 32px;

    .content{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 200px;
        padding: 32px 34px 32px 38px;
        
        .content-t{
            padding-bottom: 30px;
            padding-left: 6px;
            border-bottom: 1px solid @bg-white;
            margin-bottom: 26px;

            div{
                display: inline-block;
                vertical-align: top;

                &.white-ion{
                    width: 20px;
                    height: 40px;
                }
            }
        }
        .content-b{
            padding-left: 6px;
        }
    }
}

.child{
    width: 100%;
    height: 180px;
    position: relative;
    background: #fff;
    box-shadow:0px 0px 13px 0px rgba(68,68,68,0.1);
    border-radius:10px;
    margin-bottom: 20px;

    .content{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 180px;
        padding: 26px 34px 26px 38px;
        
        .content-t{
            padding-bottom: 24px;
            padding-left: 6px;
            border-bottom: 1px solid @bg-gray;
            margin-bottom: 20px;

            div{
                display: inline-block;
                vertical-align: top;

                &.white-ion{
                    width: 20px;
                    height: 40px;
                }
            }
        }
        .content-b{
            padding-left: 6px;
        }
    }
}
</style>