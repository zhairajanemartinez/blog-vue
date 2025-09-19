<script setup>
import { ref, computed } from 'vue'
import PostItem from '@/components/PostItem.vue'
import MyWrapper from '@/components/MyWrapper.vue'
import { usePostsStore } from '@/stores/posts'

const postsStore = usePostsStore()
const postFilter = ref('all')

// Toggle between all and saved posts
const setPostFilter = () => {
  postFilter.value = postFilter.value === 'all' ? 'saved' : 'all'
}

// Filtered & sorted posts
const filteredPosts = computed(() => {
  const posts = postsStore.sorted || postsStore.posts
  return postFilter.value === 'all'
    ? posts
    : postsStore.saved
})
</script>

<template>
  <!-- Header -->
  <div class="header">
    <div>
      <h3>{{ postFilter === "all" ? "All Posts" : "Saved Posts" }}</h3>
      <!-- SPINNING ICON HERE -->
      <span v-show="postsStore.loading" class="material-icons spin">cached</span>
    </div>
    <div class="filter-button">
      <button @click="setPostFilter">
        {{ postFilter === "all" ? "Show saved posts" : "Show all posts" }}
      </button>
    </div>
  </div>

  <!-- Error Handling -->
  <div v-if="postsStore.errMsg" class="error">
    {{ postsStore.errMsg }}
  </div>

  <!-- Posts -->
  <div v-if="filteredPosts.length > 0">
    <div v-for="post in filteredPosts" :key="post.id" class="post-item">
      <MyWrapper>
        <PostItem :post="post" />
      </MyWrapper>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.header {
  background: rgb(236, 166, 166);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header > div:first-child {
  display: flex;
  align-items: center;
  gap: 18px;
}

.filter-button {
  display: flex;
  align-items: center;
}

.filter-button button {
  padding: 8px 16px;
  background-color: lightblue;
  color: #333;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.filter-button button:hover {
  background-color: #f0f0f0;
}

.post-item {
  margin-top: 1rem;
}

.error {
  margin: 2rem;
  background: #f87171;
  color: #fff;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
}

/* SPINNING ANIMATION */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spin {
  animation: spin 1s linear infinite;
}
</style>
