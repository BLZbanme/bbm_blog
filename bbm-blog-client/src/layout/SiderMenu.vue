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
        <a-menu-item v-if="!item.children" :key="item.name" @click="$router.push(item.path)">
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" style="font-size: 20px;"/>
          <span style="font-size: 20px;">{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.name" :menu-info="item" />
      </template>
    </a-menu>
    </div>
  </div>
</template>

<script>
import AdminInfo from "@/components/AdminInfo";
import SubMenu from "./SubMenu";

export default {
  props: ["collapsed"],
  data() {
    return {
      MenuData: this.getMenuData(this.$router.options.routes)[0],
    }
  },
  components: {
    AdminInfo,
    SubMenu
  },
  methods: {
    getMenuData(routes) {
      const menuData = [];
      for (let route of routes) {
        if (route.hidenInMenu) {
          if (route.children) {
            menuData.push(this.getMenuData(route.children));
          }
          else {
            continue;
          }
        }
        else {
          let obj = Object.assign(route);
          if (route.children) {
           obj.children = this.getMenuData(route.children);
          }
          menuData.push(obj);
        }
      }
      return menuData
    }
  }
}
</script>

<style>

</style>