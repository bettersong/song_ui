<template>
  <div class="index">
    <syHeader :headLeft="headLeft" :headRight="null" headLeftURL="/"></syHeader>
    <div class="index-body">
        <div class="menus">
        <syMenu/>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'index',
    data() {
        return {
            headLeft:"UI"
        }
    },
    methods:{
        goHome() {
            this.$router.push("/")
        }
    }
}
</script>

<style lang="less">
    .index{
        .index-body{
            display:flex;
            margin:0 auto;
            width: 90%;
            .menus{
                background: orange;
            }
            .content{
                width:800px;
                height:300px;
                background: palegoldenrod;
            }
        }
    }
</style>