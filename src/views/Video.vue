<template>
    <div class="video">
        <Header :text="'视频列表'" />
        <Container>
            <Video-list />
        </Container>
    </div>
</template>

<script>
import Container from '../components/Container'
import VideoList from '../components/Video-list'
import { Indicator } from 'mint-ui';
export default {
    data(){
        return{}
    },
    components: { Container, VideoList },
    mounted(){
      Indicator.close();
    }
}
</script>

<style lang="less" scoped>

</style>