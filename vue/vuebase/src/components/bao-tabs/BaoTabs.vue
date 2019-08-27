<!--data   props  computed-->

<template>
  <div>
    <div :class="[prefixCls]">
      <div :class="[prefixCls+'-nav']">
        <!--下划线-->
        <div :class="[prefixCls+'-ink-bar']"></div>
        <!--标签-->
        <div :class="tabCls(item)" v-for="(item,index) in navList" @click="handleClickTab(index)">
          {{item.label}}
        </div>
      </div>
    </div>
    <!--内容-->
    <div>
      <slot></slot>
    </div>

  </div>
</template>

<script>
  const prefixCls = "bao-tabs";
  export default {
    name: "BaoTabs",
    data() {
      return {
        navList: [],
        prefixCls: prefixCls,
        activeKey: 0
      }
    },
    methods: {
      tabCls(item) {
        /* item : */
        return [
          `${prefixCls}-tab`,
          {
            [`${prefixCls}-active`]: item.index === this.activeKey
          }

        ]
      },

      updateTab(){

        this.$children[0].active = true;

      },

      handleClickTab(tabIndex) {
        // * 2:  变换的颜色 activeKey
        this.activeKey = tabIndex;
        /*
        * 1: 嵌套的组件 active  判断
        *
        * */
        this.$children.forEach((pane,index)=>{
          pane.active = (tabIndex === index);
        })
      }
    },

    mounted() {
      this.updateTab();

      console.log(this.$children[0].label);

      /*
      * 测试 看能不能出来效果 到时候要放到更新方法中
      * */
      this.$children.forEach((item, index) => {
        this.navList.push({
          label: item.label,
          index
        })
      })
    },

  }
</script>

<style scoped>

  /*div > 切换  内容*/
  .bao-tabs {
    font-size: 14px;
    color: #515a6e;
    overflow: hidden;
    border-bottom: 1px solid #dcdee2;
  }

  /*切换的标签的样式   */
  .bao-tabs-nav {
    padding-left: 0;
    margin: 0;
    float: left;
    position: relative;
    /*transition: transform .5s ease-in-out;*/
  }

  /*线的样式*/
  .bao-tabs-ink-bar {
    height: 2px;
    box-sizing: border-box;
    background-color: #2d8cf0;
    position: absolute;
    left: 0;
    bottom: 1px;
    z-index: 1;
    transition: transform .3s ease-in-out;
    transform-origin: 0 0;
  }

  /*选中的颜色*/
  .bao-tabs-active {
    color: #2d8cf0;
  }

  /*每一个标签的样式*/
  .bao-tabs-tab {
    display: inline-block;
    height: 100%;
    padding: 8px 16px;
    margin-right: 16px;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: color .3s ease-in-out;
  }
</style>
