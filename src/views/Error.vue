<template>
    <div class="error">
        <Header :text="'报警消息'" />
        <div class="error-content">
            <div class="error-content-title">
                高温警告！
            </div>
            <div class="flex-bet">
                <div class="error-content-date">{{data.sCrtime}}</div>
                <div class="error-content-city">{{data.machine}}</div>
            </div>
            <div class="xian"></div>
            <div class="url-box">
                <div class="url">
                    <img src="../assets/ion/error.png" class="img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui';
export default {
    data(){
        return{
            data:{},
            token:this.$store.state.token
        }
    },
    mounted(){
        this.alarm()
    },
    methods:{
        alarm(){
            const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            if (!isiOS) {
                const id = window.android.invoke_native('getId',1);
                this.list(id)
            }else{
                this.setupWebViewJavascriptBridge(bridge => {
                    bridge.callHandler('getId',(res) =>{
                        this.list(res)
                    })
                })
            }
        },
        list(id){
            this.$http({
                method: 'post',
                url: this.$api.alarmDetail,
                headers:{
                  'token':this.token
                },
                data:{
                    id
                }
            })
            .then(res => {
                if(res.data.code == 0){
                    this.data = res.data.data;
                }else{
                    Toast(res.data.msg)
                }
                Indicator.close();
            })
        }
    }
}
</script>

<style lang="less" scoped>
.error-content{
    padding: 164px 58px 0 48px;

    .error-content-title{
        font-size:32px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(227,11,32,1);
    }

    .xian{
        width: 100%;
        height:2px;
        background:@bg-light;
        margin: 20px 0;
    }

    .error-content-date{
        font-size:24px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
        margin-top: 10px;
    }

    .error-content-city{
        font-size:24px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(78,154,252,1);
    }

    .url-box{
        position: relative;
        min-height: calc(100vh - 128px - 166px);
        .url{
            width: 317px;
            height: 588px;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%,-50%)
        }
    }
}
</style>