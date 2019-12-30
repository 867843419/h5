<template>
    <div class="tab">
        <div :class="[tabIndex == index ? 'active' : 'text']" v-for="(item,index) in list" :key="index" @click="tabClick(item,index)">
            <span>{{item}}</span>
            <span class="xian"></span>
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
    data(){
        return{
            tabIndex:0
        }
    },
    methods:{
        tabClick(item,index){
            this.$store.commit('setEquimentmodel',item)
            this.tabIndex = index;
        }
    }
}
</script>

<style lang="less" scoped>
.tab{
    height: 93px;
    background: #fff;
    text-align: center;
    overflow-y: scroll;
    white-space:nowrap;

    div{
        padding: 24px 0 24px 30px;
        display: inline-block;
        position: relative;

        span{
            display: block;
            padding-right: 30px;
            border-right: 1px solid #E1E1E1;
        }

        &:last-child{
            span{
                border-right: 0 none;
            }
        }

        &.text{
            font-size:32px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(102,102,102,1);
        }

        &.active{
            font-size:30px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(255,255,255,1);
            background:linear-gradient(-90deg,rgba(80,141,249,1) 0%, rgba(87,204,250,1) 100%);
            background-clip:text;
            -webkit-text-fill-color:transparent;

            .xian{
                position: absolute;
                bottom: 0;
                left: 50%;
                width:66px;
                height:4px;
                background:linear-gradient(-90deg,rgba(80,141,249,1),rgba(87,204,250,1));
                margin-left: -46px;
            }
        }
    }
}
</style>