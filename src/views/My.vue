<template>
    <div class="my">
        <Header :text="'关于我们'" />
        <div class="my-logo">
            <div class="logo">
                <span>ICON</span>
            </div>
            <div class="name">应用名称</div>
            <div class="eng">Version 1.1.1</div>
        </div>
        <div class="list">
            <div class="child flex-bet">
                <div class="tt">功能介绍</div>
                <div class="pre"><img src="../assets/ion/new.png" class="img"></div>
            </div>
            <div class="child flex-bet">
                <div class="tt">申诉举报</div>
                <div class="pre"><img src="../assets/ion/new.png" class="img"></div>
            </div>
            <div class="child flex-bet">
                <div class="tt">版本更新</div>
                <div class="pre"><img src="../assets/ion/new.png" class="img"></div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-text">《****软件许可及服务协议》</div>
            <div class="footer-date">
                <span>©</span>
                2019-2025 All Rights Reserved
            </div>
        </div>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
    mounted(){
      Indicator.close();
    }
}
</script>

<style lang="less" scoped>
.my-logo{
    margin: 0 auto;
    text-align: center;
    padding-top: 128px;

    .logo{
        width:120px;
        height:120px;
        background:linear-gradient(-90deg,rgba(77,138,252,1),rgba(80,203,252,1));
        border-radius:14px;
        text-align: center;
        margin: 0 auto;
        margin-top: 90px;

        span{
            display: inline-block;
            font-size:30px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height: 120px;
        }
    }

    .name{
        font-size:40px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(0,0,0,1);
        margin-top: 45px;
    }

    .eng{
        font-size:32px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(0,0,0,1);
    }
}

.list{
    padding: 0 60px 0 64px;
    margin-top: 140px;

    .child{
        height: 104px;
        padding-right: 10px;
        border-bottom: 1px solid @bg-light;

        .tt{
            font-size:32px;
            font-family:PingFang SC;
            font-weight:bold;
            color:rgba(0,0,0,1);
        }

        .pre{
            width: 13px;
            height: 22px;
        }
    }
}

.footer{
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%,0);
    text-align: center;

    .footer-text{
        font-size:28px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
    }

    .footer-date{
        font-size:22px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);

        span{
            margin-right: 2px;
        }
    }
}
</style>