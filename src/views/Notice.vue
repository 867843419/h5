<template>
    <div class="power-monitoring">
        <Header :text="'通知公告'" />
        <div class="power-monitoring-content">
            <div class="power-monitoring-title">{{data.title}}</div>
            <div class="text-date margin-t">{{data.showTime}}</div>
            <div class="xian"></div>
            <div class="power-monitoring-box" v-html="this.data.content"></div>
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
        this.notice()
    },
    methods:{
        notice(){
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
                url: `${this.$api.noticeDetail}?id=${id}`,
                headers:{
                  'token':this.token
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
.power-monitoring-content{
    padding: 168px 58px 40px 48px;

    .xian{
        width: 100%;
        height:2px;
        background:@bg-light;
        margin: 20px 0;
    }

    .power-monitoring-title{
        font-size:32px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
    }

    .power-monitoring-box{
        font-size:28px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:50px;
        margin-bottom: 10px;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
    }
}
</style>