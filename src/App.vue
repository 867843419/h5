<template>
  <router-view/>
</template>

<script>
import moment from 'moment';
export default {
  data(){
    return {
      token:''
    }
  },
  mounted(){
    const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (!isiOS) {
      this.token = window.android.invoke_native('getToken',1);
      this.$store.commit('getToken',this.token)
    }else{
      this.setupWebViewJavascriptBridge(bridge => {
        bridge.callHandler('getToken',(res) =>{
          this.token = res;
          this.$store.commit('getToken',this.token)
        })
      })
    }
    this.home()
  },
  methods:{
    home(){
      this.$http({
        method: 'post',
        url: `${this.$api.home}?time=${moment().format("YYYY-MM-DD")}&stationID=${4}`,
        headers:{
          'token':this.token
        }
      })
      .then(res => {
        this.$store.commit('homeList',res.data.data)
      })
    }
  }
}
</script>

<style lang="less">

</style>
