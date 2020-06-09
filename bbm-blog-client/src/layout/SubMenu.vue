<template functional>
  <a-sub-menu :key="props.menuInfo.key">
    <span slot="title">
      <a-icon :type="props.menuInfo.meta.icon || null" style="font-size: 20px;" />
      <span style="font-size: 20px;">{{ props.menuInfo.meta.title }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.name">
        <a-icon style="font-size: 15px;" :type="item.meta.icon || 'tag'" />
        <span style="font-size: 15px;">{{ item.meta.title }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.name" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  props: ["menuInfo"]
}
</script>
