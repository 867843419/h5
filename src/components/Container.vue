<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.container{
    background: #f1f1f1;
    height: calc(100vh);
    padding: 0 25px;
    overflow: auto;
    padding-top: 128px;
}
</style>