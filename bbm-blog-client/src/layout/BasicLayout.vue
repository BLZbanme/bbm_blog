<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible theme="light" :trigger="null">
      <!-- <div class="logo">
      </div> -->
      <SiderMenu/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon :type="collapsed ? 'menu-fold' : 'menu-unfold'" />
        <Header />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import SiderMenu from "./SiderMenu";
import Header from "./Header";
import Footer from "./Footer";

export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components: {
    SiderMenu,
    Header,
    Footer
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
