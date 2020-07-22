<template>
  <div class="sy-header">
      <div class="menu">
        <div class="header-left" v-if="headLeft" @click="headLeftFun">{{headLeft}}</div>
        <div class="header-left" v-if="headRight" @click="headRightFun">{{headRight}}</div>
      </div>
      
  </div>
</template>

<script>
export default {
    name: "syHeader",
    props: {
        headLeft:null,
        headRight:null,
        headLeftURL:null
    },
    data() {
        return {}
    },
    methods:{
        headLeftFun() {
            this.$router.push(this.headLeftURL)
        }
    }
}
</script>

<style lang="less">

.sy-header{
    width: 100%;
    height:80px;
    background:#fff;
    box-shadow: 2px 5px 20px #eee;
    .menu{
        width:80%;
        height:100%;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 80px;
    }
    .header-left{
        cursor: pointer;
       font-size: 32px;
       color: #26a2ff;
    }
}
</style>