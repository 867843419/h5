<template>
    <div class="list">
        <div class="child">
            <div class="text-orgin text-height margin-l">杭州市摄像头001号</div>
            <div class="content">
                <video 
                    tabindex="2" 
                    mediatype="video" 
                    poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573125285532&di=668fc7037b987676b042e58ecac1cf61&imgtype=0&src=http%3A%2F%2Fwww.ctoutiao.com%2Fuploads%2F2016%2F04%2F02%2F2fb9f5e76e14bb7c6e8a4decbdecd361.jpg"
                    src="http://vd2.bdstatic.com/mda-ibdjjc1b52b5dpjj/sc/mda-ibdjjc1b52b5dpjj.mp4" 
                    style="position: absolute; top: 0px; left: 0px;"
                ></video>
                <div class="mask">
                    <div class="text text-sm">2019年10月29日 09:30:00</div>
                    <div class="ion">
                        <img src="../assets/ion/video.png" class="img">
                    </div>
                </div>
            </div>
        </div>
        <div class="child">
            <div class="text-orgin text-height margin-l">杭州市摄像头001号</div>
            <div class="content">
                <video 
                    tabindex="2" 
                    mediatype="video" 
                    poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573125285532&di=668fc7037b987676b042e58ecac1cf61&imgtype=0&src=http%3A%2F%2Fwww.ctoutiao.com%2Fuploads%2F2016%2F04%2F02%2F2fb9f5e76e14bb7c6e8a4decbdecd361.jpg"
                    src="http://vd2.bdstatic.com/mda-ibdjjc1b52b5dpjj/sc/mda-ibdjjc1b52b5dpjj.mp4" 
                    style="position: absolute; top: 0px; left: 0px;"
                ></video>
                <div class="mask">
                    <div class="text text-sm">2019年10月29日 09:30:00</div>
                    <div class="ion">
                        <img src="../assets/ion/video.png" class="img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    }
}
</script>

<style lang="less" scoped>
.child{
    margin-bottom: 10px;

    .content{
        height:300px;
        border-radius:8px;
        position: relative;

        video{
            width: 100%;
            height: 300px;
        }

        .mask{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background:rgba(0,0,0,.7);
            border-radius: 8px;

            .text{
                padding-top: 22px;
                padding-left: 24px;
            }

            .ion{
                width: 100px;
                height: 100px;
                position: absolute;
                transform: translate(-50%,-50%);
                top: 55%;
                left: 50%;
            }
        }

        
    }
}
</style>