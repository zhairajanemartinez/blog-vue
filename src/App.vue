<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { usePostsStore } from '@/stores/posts'
const postStore = usePostsStore()
postStore.getPosts()

</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">
          <span class="material-icons nav-icon">home</span>
          Home
        </RouterLink>
        <RouterLink to="/add-post">
          <span class="material-icons nav-icon">post_add</span>
          Add Post
        </RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgb(184, 104, 104);
}

nav {
  padding: 1rem 2rem;
  border-bottom: 1px solid pink;
}

nav a {
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  margin-right: 1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

nav a:hover {
  background-color: #64b5f6;
}

.nav-icon {
  font-size: 20px;
  margin-right: 6px;
  vertical-align: middle;
}
</style>