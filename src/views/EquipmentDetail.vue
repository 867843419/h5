<template>
    <div class="equipment-detail">
        <Header :text="'设备详情'" />
        <Container>
            <Equipment-list-detail />
        </Container>
    </div>
</template>

<script>
import Container from '../components/Container'
import EquipmentListDetail from '../components/Equipment-list-detail'
import { Indicator } from 'mint-ui';
export default {
    data(){
        return{}
    },
    components: { Container, EquipmentListDetail },
    mounted(){
      Indicator.close();
    }
}
</script>

<style lang="less" scoped>

</style>