<template>
    <div class="list">
        <div class="child" v-for="item in list" :key="item.eid" v-show="item.equimentmodel == equimentmodel" @click="detail(item)">
            <div class="text-platform three margin-b">{{item.equimentname}}</div>
            <div class="text-orgin gray lin">{{item.equimentmodel}}</div>
            <div class="text-orgin gray lin">{{item.equimentport}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Array,
            default:[]
        }
    },
    computed:{
        equimentmodel(){
            return this.$store.state.equimentmodel
        }
    },
    methods:{
        detail(item){
            this.$router.push('/equipment-detail');
            this.$store.commit('setEquipmentDetail',item);
        }
    }
}
</script>

<style lang="less" scoped>
.list{
    overflow: hidden;
    padding-bottom: 24px;

    .child{
        width: 48.8%;
        background: #FFFFFF;
        box-shadow:0px 0px 8px 0px rgba(68,68,68,0.1);
        border-radius:8px;
        text-align: center;
        height: 200px;
        float: left;
        margin-right: 16px;
        margin-top: 24px;
        padding: 24px 0;

        &:nth-child(even){
            margin-right: 0;
        }
    }
    
}
</style>