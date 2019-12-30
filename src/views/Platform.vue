<template>
  <div class="platform">
    <Header :text="'选择台站'" :search="true" />
    <Container>
      <div class="text-orgin text-height margin-l">我的台站</div>
      <Platform-list :list="list" :flag="isMaster" />
    </Container>
  </div>
</template>

<script>
import Container from '../components/Container'
import PlatformList from '../components/Platform-list'
import { Toast, Indicator } from 'mint-ui';
export default {
  data(){
    return {
      list:[],
      isMaster:false,
      token:this.$store.state.token
    }
  },
  components: { Container, PlatformList },
  mounted(){
    this.stations();
  },
  methods:{
    stations(){
      this.$http({
        method: 'get',
        url: this.$api.stations,
        headers:{
          'token':this.token
        }
      })
      .then(res => {
        if(res.data.code == 0){
          this.list = res.data.data.stations;
          this.isMaster = res.data.data.user.isMaster;
        }else{
          Toast(res.data.msg)
        }
        Indicator.close();
      })
    }
  }
}
</script>
