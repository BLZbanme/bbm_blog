<template>
  <div>
    <AdminInfo />
    <div>
      <a-menu
        mode="inline"
        theme="light"
        :inline-collapsed="collapsed"
      >
      <template v-for="item in MenuData">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon type="pie-chart" />
          <span>{{ item.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.key" :menu-info="item" />
      </template>
    </a-menu>
    </div>
  </div>
</template>

<script>
import AdminInfo from "./AdminInfo";

export default {
  data() {
    return {
      MenuData: this.getMenuData(this.$router.options.routes)
    }
  },
  components: {
    AdminInfo
  },
  methods: {
    getMenuData() {
      const menuData = [];
      return menuData
    }
  }
}
</script>

<style>

</style>