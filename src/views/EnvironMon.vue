<template>
    <div class="environmental-monitoring">
        <Header :text="'环境监测'" />
        <Container v-show="$store.state.pageList.huanjing.length > 0">
            <Environmental-monitoring-list />
        </Container>
    </div>
</template>

<script>
import Container from '../components/Container'
import EnvironmentalMonitoringList from '../components/Environmental-monitoring-list'
import { Indicator } from 'mint-ui';
export default {
    data(){
        return{}
    },
    components: { Container, EnvironmentalMonitoringList },
    mounted(){
      Indicator.close();
    }
}
</script>

<style lang="less" scoped>

</style>