<template>
    <div class="help-detail">
        <Header :text="'帮助中心'" />
        <Container>
            <div class="help-box flex-bet">
                <div>
                    <span class="text-orgin red">Ｑ：</span>
                    <span class="text-orgin">PB紧急关机按钮故障</span>
                </div>
            </div>
            <div class="help-content">
                <div class="help-content-list">
                    <div class="help-content-title">
                        故障描述： 
                    </div>
                    <div class="help-content-box">
                        PB无法开机，LED板显示“外部联锁”故障，PB接口板上DS3-2和DS3-5亮红灯，MMI显示屏中联锁通路上显示“PB1联锁故障”。
                    </div>
                </div>
                <div class="help-content-list">
                    <div class="help-content-title">
                        解决方法： 
                    </div>
                    <div class="help-content-box">
                        <p>
                            1、将紧急关机按钮拉至断开状态。
                        </p>
                        <p>
                            2、测其主副节点输入输出端，确定已断开。
                        </p>
                        <p>
                            3、开启发射机确认机器正常运行。
                        </p>
                    </div>
                </div>
            </div>
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
.help-box{
    margin-top: 30px;
    background: #fff;
    height: 110px;
    padding: 0 30px;
    box-shadow:0px 0px 8px 0px rgba(0,78,142,0.16);
    border-radius:6px;
    margin-bottom: 20px;
}
.help-content{
    width: 100%;
    height:1006px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 8px 0px rgba(0,78,142,0.16);
    border-radius:6px;
    padding:30px;

    .help-content-list{
        margin-bottom: 20px;

        .help-content-title{
            font-size:32px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(22,130,251,1);
            line-height:45px;
            margin-bottom: 10px;
        }

        .help-content-box{
            font-size:28px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:45px;
        }
    }

    
}
</style>