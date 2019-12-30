<template>
    <div class="help">
        <Header :text="'帮助中心'" />
        <Container>
            <div class="help-title">
                <div class="ion inline">
                    <img src="../assets/ion/wen.png" class="img">
                </div>
                <div class="text-blue inline">热心问题</div>
            </div>
            <router-link to="/help-detail">
                <div class="help-box flex-bet">
                    <div class="text-orgin">
                        PB紧急关机按钮故障
                    </div>
                    <div class="pre">
                        <img src="../assets/ion/pre.png" class="img">
                    </div>
                </div>
            </router-link>
        </Container>
    </div>
</template>

<script>
import Container from '../components/Container'
import { Indicator } from 'mint-ui';
export default {
    data(){
    return {}
  },
  components: { Container },
  mounted(){
      Indicator.close();
  }
}
</script>

<style lang="less" scoped>
.help-title{
    width: 100%;
    margin-top: 32px;

    .ion{
        width: 29px;
        height: 28px;
        margin-right: 10px;
    }
}
.help-box{
    margin-top: 20px;
    background: #fff;
    height: 110px;
    padding: 0 30px;
    box-shadow:0px 0px 8px 0px rgba(0,78,142,0.16);
    border-radius:6px;

    .pre{
        width: 18px;
        height: 30px;
    }
}
</style>