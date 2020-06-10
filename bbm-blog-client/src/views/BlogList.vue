<template>
  <div class="blogsList">
    <template v-for="blog in blogsData">
      <BlogInfo :key="blog.id"/>
    </template>
  </div>
</template>

<script>
import BlogInfo from "@/components/BlogInfo";

const blogsData = []
for (let i = 0; i < 23; i++) {
  blogsData.push({
    id: 123 + i,
    title: `这是一个博文${i}`,
    summary: "这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文",
    content: `这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文这是一个博文`,
    time: "2019-08-07",
    tags: ["面试", "前端"]
  });
}
export default {
  data() {
    return {
      blogsData
    }
  },
  components: {
    BlogInfo
  }
}
</script>

<style>
.blogsList {
  width: 80%;
  margin: 0 auto;
}
</style>