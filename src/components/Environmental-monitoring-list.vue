<template>
    <div class="list">
        <div class="child">
            <img src="../assets/ion/em.png" class="img">
            <div class="content">
                <div class="box">
                    <div class="flex-bet box-width-l">
                        <div class="inline">
                            <div class="text-platform">温度1</div>
                            <div class="text-md">{{parseInt(list['r温度1'])}}℃</div>
                        </div>
                        <div class="inline" style="margin-left: 40px;">
                            <div class="text-platform">湿度1</div>
                            <div class="text-md">{{parseInt(list['r湿度1'])}}RH</div>
                        </div>
                    </div>
                    <div class="flex-bet box-width-r">
                        <div class="inline">
                            <div class="text-platform">烟感1</div>
                            <div class="ion">
                                <img src="../assets/ion/deng.png" class="img" v-if="list['r烟感1']">
                                <img src="../assets/ion/red-deng.png" class="img" v-else>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="child">
            <img src="../assets/ion/em.png" class="img">
            <div class="content">
                <div class="box">
                    <div class="flex-bet box-width-l">
                        <div class="inline">
                            <div class="text-platform">温度2</div>
                            <div class="text-md">{{parseInt(list['r温度2'])}}℃</div>
                        </div>
                        <div class="inline" style="margin-left: 40px;">
                            <div class="text-platform">湿度2</div>
                            <div class="text-md">{{parseInt(list['r湿度2'])}}RH</div>
                        </div>
                    </div>
                    <div class="flex-bet box-width-r">
                        <div class="inline">
                            <div class="text-platform">烟感2</div>
                            <div class="ion">
                                <img src="../assets/ion/deng.png" class="img" v-if="list['r烟感2']">
                                <img src="../assets/ion/red-deng.png" class="img" v-else>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="child">
            <img src="../assets/ion/em.png" class="img">
            <div class="content">
                <div class="box">
                    <div class="flex-bet box-width-l">
                        <div class="inline">
                            <div class="text-platform">温度3</div>
                            <div class="text-md">{{parseInt(list['r温度3'])}}℃</div>
                        </div>
                        <div class="inline" style="margin-left: 40px;">
                            <div class="text-platform">湿度3</div>
                            <div class="text-md">{{parseInt(list['r湿度3'])}}RH</div>
                        </div>
                    </div>
                    <div class="flex-bet box-width-r">
                        <div class="inline">
                            <div class="text-platform">烟感3</div>
                            <div class="ion">
                                <img src="../assets/ion/deng.png" class="img" v-if="list['r烟感3']">
                                <img src="../assets/ion/red-deng.png" class="img" v-else>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="child">
            <img src="../assets/ion/em.png" class="img">
            <div class="content">
                <div class="box">
                    <div class="flex-bet box-width-l">
                        <div class="inline">
                            <div class="text-platform">温度4</div>
                            <div class="text-md">{{parseInt(list['r温度4'])}}℃</div>
                        </div>
                        <div class="inline" style="margin-left: 40px;">
                            <div class="text-platform">湿度4</div>
                            <div class="text-md">{{parseInt(list['r湿度4'])}}RH</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="child">
            <img src="../assets/ion/em.png" class="img">
            <div class="content">
                <div class="box">
                    <div class="flex-bet box-width-l">
                        <div class="inline">
                            <div class="text-platform">温度5</div>
                            <div class="text-md">{{parseInt(list['r温度5'])}}℃</div>
                        </div>
                        <div class="inline" style="margin-left: 40px;">
                            <div class="text-platform">湿度5</div>
                            <div class="text-md">{{parseInt(list['r湿度5'])}}RH</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="child">
            <img src="../assets/ion/em.png" class="img">
            <div class="content">
                <div class="box">
                    <div class="flex-bet box-width-l">
                        <div class="inline">
                            <div class="text-platform">温度6</div>
                            <div class="text-md">{{parseInt(list['r温度6'])}}℃</div>
                        </div>
                        <div class="inline" style="margin-left: 40px;">
                            <div class="text-platform">湿度6</div>
                            <div class="text-md">{{parseInt(list['r湿度6'])}}RH</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="child">
            <img src="../assets/ion/em.png" class="img">
            <div class="content">
                <div class="box">
                    <div class="flex-bet box-width-l">
                        <div class="inline">
                            <div class="text-platform">温度7</div>
                            <div class="text-md">{{parseInt(list['r温度7'])}}℃</div>
                        </div>
                        <div class="inline" style="margin-left: 40px;">
                            <div class="text-platform">湿度7</div>
                            <div class="text-md">{{parseInt(list['r湿度7'])}}RH</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="child">
            <img src="../assets/ion/em.png" class="img">
            <div class="content">
                <div class="box">
                    <div class="flex-bet box-width-l">
                        <div class="inline">
                            <div class="text-platform">温度8</div>
                            <div class="text-md">{{parseInt(list['r温度8'])}}℃</div>
                        </div>
                        <div class="inline" style="margin-left: 40px;">
                            <div class="text-platform">湿度8</div>
                            <div class="text-md">{{parseInt(list['r湿度8'])}}RH</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="child">
            <img src="../assets/ion/em.png" class="img">
            <div class="content">
                <div class="box">
                    <div class="flex-bet box-width-l">
                        <div class="inline">
                            <div class="text-platform">温度9</div>
                            <div class="text-md">{{parseInt(list['r温度9'])}}℃</div>
                        </div>
                        <div class="inline" style="margin-left: 40px;">
                            <div class="text-platform">湿度9</div>
                            <div class="text-md">{{parseInt(list['r湿度9'])}}RH</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="child">
            <img src="../assets/ion/em.png" class="img">
            <div class="content">
                <div class="box">
                    <div class="flex-bet box-width-l">
                        <div class="inline">
                            <div class="text-platform">温度10</div>
                            <div class="text-md">{{parseInt(list['r温度10'])}}℃</div>
                        </div>
                        <div class="inline" style="margin-left: 40px;">
                            <div class="text-platform">湿度10</div>
                            <div class="text-md">{{parseInt(list['r湿度10'])}}RH</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:this.$store.state.pageList.huanjing[0]
        }
    }
}
</script>

<style lang="less" scoped>
.list{
    margin-top: 20px;

    .child{
        width: 100%;
        height: 250px;
        position: relative;
        margin-bottom:20px;

        .content{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 250px;
            padding: 0 30px;
            padding-top: 60px;

            .box{
                overflow: hidden;
            }

            .ts{
                margin-top: 16px;
            }

            .box-width-l{
                float: left;
                width: 40%;
            }

            .box-width-r{
                float: right;
                width: 30%;
            }

            .ion{
                width: 40px;
                height: 50px;
                margin-top: 20px;
            }
        }
    }
}
</style>