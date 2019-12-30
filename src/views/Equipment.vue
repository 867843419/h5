<template>
    <div class="equipment">
        <Header :text="'设备列表'" />
        <div class="equipment-box">
            <Tab :list="type" />
            <div class="content">
                <div class="url">
                    <img src="../assets/ion/url.png" class="img">
                </div>
                <EquipmentList :list="list" />
            </div>
        </div>
    </div>
</template>

<script>
import Container from '../components/Container'
import Tab from '../components/Tab'
import EquipmentList from '../components/Equipment-list'
import { Toast, Indicator } from 'mint-ui';
export default {
    data(){
        return{
            type:[],
            list:[],
            token:this.$store.state.token
        }
    },
    components: { Container, Tab, EquipmentList },
    mounted(){
        this.equiment()
    },
    methods:{
        equiment(){
            this.$http({
                method: 'get',
                url: this.$api.equiment,
                headers:{
                  'token':this.token
                },
                params:{
                    stationID: 4
                }
            })
            .then(res => {
                if(res.data.code == 0){
                    this.type = res.data.data.type;
                    this.list = res.data.data.data;
                    this.$store.commit('setEquimentmodel',res.data.data.type[0])
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
.equipment-box{
    width: 100%;
    padding-top: 128px;
    position: relative;

    .content{
        height: calc(100vh - 128px - 93px);
        background: #f1f1f1;
        padding: 0 25px;
        padding-top: 30px;
        overflow: auto;

        .url{
            height: 250px;
        }
    }
}

</style>