<template>
    <div class="list">
        <div class="child flex-bet">
            <div class="text-orgin black">{{list.equimentname}}</div>
            <div class="ion">
                <img src="../assets/ion/deng.png" class="img">
            </div>
        </div>
        <div class="child flex-bet">
            <div class="text-orgin black">型号</div>
            <div class="text-orgin black">{{list.equimentmodel}}</div>
        </div>
        <div class="child flex-bet">
            <div class="text-orgin black">数量</div>
            <div class="text-orgin black">{{list.equimentnum}}</div>
        </div>
        <div class="child flex-bet">
            <div class="text-orgin black">功放电流1</div>
            <div class="ion">
                <img src="../assets/ion/no-deng.png" class="img">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        list(){
            return this.$store.state.equipmentDetail
        }
    }
}
</script>

<style lang="less" scoped>
.list{
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 8px 0px rgba(0,78,142,0.16);
    border-radius:10px;
    padding: 0 32px;
    margin-top: 22px;

    .child{
        height: 100px;
        border-bottom: 1px solid @bg-light;

        &:last-child{
            border-bottom: 0 none;
        }

        .ion{
            width: 23px;
            height: 30px;
        }
    }
}
</style>