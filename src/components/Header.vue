<template>
    <div class="nav-header">
        <div class="nav"></div>
        <div class="header flex-bet">
            <div class="back" @click="back">
                <img src="../assets/ion/back.png" class="img">
            </div>
            <div class="text-title">{{text}}</div>
            <div class="search">
                <img src="../assets/ion/search.png" class="img" v-show="search">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        text:{
            type:String,
            default:'塔台'
        },
        search:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        back(){
            const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            if (!isiOS) {
                window.android.invoke_native('finish',1)
            }else{
                this.setupWebViewJavascriptBridge(bridge => {
                    bridge.callHandler('finish')
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.nav-header{
    width:100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    .nav{
        width:100%;
        height:28px;
        background:linear-gradient(-90deg,rgba(77,138,252,1),rgba(80,203,252,1));
    }
    .header{
        width:100%;
        height:100px;
        background:linear-gradient(-90deg,rgba(77,138,252,1),rgba(80,203,252,1));
        padding: 0 32px;

        .back{
            width: 18px;
            height: 32px;
        }

        .search{
            width: 32px;
            height: 32px;
        }
    }
}
</style>