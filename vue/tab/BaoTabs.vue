<template>
  <div>
    <!--导航区域-->
    <div :class="[prefixCls]">
      <div ref="nav" :class="[prefixCls+'-nav']">
        <!--bar-->
        <div :class="[prefixCls+'-ink-bar']" :style="barStyle"></div>
        <!--导航栏-->
        <div :class="tabCls(item)" v-for="(item,index) in navList" @click="handleClickTab(index)">
          {{item.label}}
        </div>
      </div>
    </div>
    <!--内容区域-->
    <div :class="[prefixCls+'-content']">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  const prefixCls = "bao-tabs";
  export default {
    name: "BaoTabs",
    provide() {
      return {
        baoInstance: this,
      }
    },
    props: {
      "on-click": {
        type: Function
      }
    },
    data() {
      return {
        prefixCls: prefixCls,
        activeKey: 0,
        navList: [],
        barWidth: 0,//bar宽度
        barOffset: 0//bar偏移量
      }
    },
    mounted() {

    },
    computed: {
      barStyle() {
        return {
          width: `${this.barWidth}px`,
          left: `${this.barOffset}px`,

        }
      }
    },
    methods: {
      getTabs() {
        return this.$children.filter(item => item.$options.name === "BaoPane");
      },
      updateNav() {
        // console.log("updateNav");
        this.navList = [];
        this.getTabs().forEach((pane, index) => {
          this.navList.push({
            label: pane.label,
            name: index
          });
          if (index === 0) {
            this.activeKey = pane.name || index;
            this.$children[index].isActive = true;
          }
        })
      },
      updateBar() {
        this.$nextTick(() => {
          let prevTabs = this.$refs.nav.querySelectorAll(`.${prefixCls}-tab`);
          let tab = prevTabs[this.activeKey];
          this.barWidth = tab ? parseFloat(tab.offsetWidth) : 0;
          // if (this.activeKey > 0) {
          let offset = 0;
          for (let i = 0; i < this.activeKey; i++) {
            offset += prevTabs[i].offsetWidth + 16;
          }
          this.barOffset = offset;
        })
      },
      tabCls(item) {
        return [
          `${prefixCls}-tab`,
          {
            [`${prefixCls}-active`]: item.name === this.activeKey
          }

        ];
      },
      handleClickTab(index) {
        this.activeKey = index;
        this.$children.forEach((pane, indexPane) => {
          pane.isActive = (this.activeKey === indexPane);
        });
        this.$emit("on-click", index);
      },
    },
    watch: {
      activeKey(val) {
        this.updateBar();
      }

    }
  }
</script>

<style scoped>

  .bao-tabs {
    font-size: 14px;
    color: #515a6e;
    overflow: hidden;
    border-bottom: 1px solid #dcdee2;
  }

  .bao-tabs-nav {
    padding-left: 0;
    margin: 0;
    float: left;
    position: relative;
    /*transition: transform .5s ease-in-out;*/
  }

  .bao-tabs-ink-bar {
    height: 2px;
    box-sizing: border-box;
    background-color: #2d8cf0;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    transition: transform .3s ease-in-out;
    transform-origin: 0 0;
  }

  .bao-tabs-active {
    color: #2d8cf0;
  }

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

  .bao-tabs-content {
    margin-top: 16px;
  }

</style>
