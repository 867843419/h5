<template>
    <div class="power-monitoring">
        <Header :text="'电力监测'" />
        <Container v-show="$store.state.pageList.dianli.length > 0">
            <div>
                <div class="text-orgin text-height margin-l blue">主路</div>
                <div class="list">
                    <div class="child">
                        <img src="../assets/ion/em02.png" class="img">
                        <div class="content">
                            <div class="box">
                                <div><span class="font-size-md">1</span><span class="font-size">A</span></div>
                                <div class="font-size-sm">电流</div>
                            </div>
                            <div class="xian"></div>
                            <div class="box">
                                <div><span class="font-size-md">1</span><span class="font-size">A</span></div>
                                <div class="font-size-sm">电压</div>
                            </div>
                        </div>
                    </div>
                    <div class="child">
                        <img src="../assets/ion/em02.png" class="img">
                        <div class="content">
                            <div class="box">
                                <div><span class="font-size-md">1</span><span class="font-size">B</span></div>
                                <div class="font-size-sm">电流</div>
                            </div>
                            <div class="xian"></div>
                            <div class="box">
                                <div><span class="font-size-md">1</span><span class="font-size">B</span></div>
                                <div class="font-size-sm">电压</div>
                            </div>
                        </div>
                    </div>
                    <div class="child">
                        <img src="../assets/ion/em02.png" class="img">
                        <div class="content">
                            <div class="box">
                                <div><span class="font-size-md">1</span><span class="font-size">C</span></div>
                                <div class="font-size-sm">电流</div>
                            </div>
                            <div class="xian"></div>
                            <div class="box">
                                <div><span class="font-size-md">1</span><span class="font-size">C</span></div>
                                <div class="font-size-sm">电压</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="text-orgin text-height margin-l" style="color:#50C1FC;">备路</div>
                <div class="list">
                    <div class="child ts">
                        <div class="content">
                            <div class="box">
                                <div><span class="font-size-md">2</span><span class="font-size">A</span></div>
                                <div class="font-size-sm">电流</div>
                            </div>
                            <div class="xian"></div>
                            <div class="box">
                                <div><span class="font-size-md">2</span><span class="font-size">A</span></div>
                                <div class="font-size-sm">电压</div>
                            </div>
                        </div>
                    </div>
                    <div class="child ts">
                        <div class="content">
                            <div class="box">
                                <div><span class="font-size-md">2</span><span class="font-size">B</span></div>
                                <div class="font-size-sm">电流</div>
                            </div>
                            <div class="xian"></div>
                            <div class="box">
                                <div><span class="font-size-md">2</span><span class="font-size">B</span></div>
                                <div class="font-size-sm">电压</div>
                            </div>
                        </div>
                    </div>
                    <div class="child ts">
                        <div class="content">
                            <div class="box">
                                <div><span class="font-size-md">2</span><span class="font-size">C</span></div>
                                <div class="font-size-sm">电流</div>
                            </div>
                            <div class="xian"></div>
                            <div class="box">
                                <div><span class="font-size-md">2</span><span class="font-size">C</span></div>
                                <div class="font-size-sm">电压</div>
                            </div>
                        </div>
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
        return{}
    },
    components: { Container },
    mounted(){
      Indicator.close();
    }
}
</script>

<style lang="less" scoped>
.list{
    display:flex;
    justify-content: space-between;

    .child{
        width: 220px;
        height: 300px;
        position: relative;
        border-radius:10px;

        &.ts{
            background:rgba(80,193,252,1);
        }

        .content{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 20px 45px;
            text-align: center;
            color: #fff;

            .xian{
                width:100%;
                height:1px;
                background:rgba(255,255,255,1);
                margin: 28px 0 20px 0;
            }
        }
    }
}
</style>