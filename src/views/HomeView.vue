<script setup>
import PostItem from '@/components/PostItem.vue';
import MyWrapper from '@/components/MyWrapper.vue';

const posts = [
  {
    "userId": 1,
    "id": 5,
    "name": "ZJ",
    "date": "09-11-2025",
    "title": "Chase the Wind, Catch the Sky",
    "body": "Ambition may seem like chasing the impossible, but in the pursuit, we often rise higher than we ever imagined."
  },
  {
    "userId": 1,
    "id": 6,
    "name": "ZJ",
    "date": "09-11-2025",
    "title": "A Silent River Cuts the Deepest Path",
    "body": "Quiet strength and steady effort often outlast loud noise and sudden bursts. Patience leaves a lasting mark."
  },
  {
    "userId": 1,
    "id": 7,
    "name": "ZJ",
    "date": "09-11-2025",
    "title": "Don’t Trade Time for Applause",
    "body": "Seek purpose, not popularity. What’s loud today may be forgotten tomorrow — but meaning endures."
  },
  {
    "userId": 1,
    "id": 8,
    "name": "ZJ",
    "date": "09-11-2025",
    "title": "Storms Don't Ask for Permission",
    "body": "Life’s challenges rarely give warnings. Strength lies in how we stand, not when we’re ready."
  },
  {
    "userId": 1,
    "id": 9,
    "name": "ZJ",
    "date": "09-11-2025",
    "title": "The Tree Grows in Silence",
    "body": "True growth doesn’t always show itself right away. Be still. Your roots are doing their work."
  },
]
</script>

<template>
  <main>
    <div class="container">
      <div v-for="post in posts" :key="post.id">
        <MyWrapper>
          <PostItem :post="post"/>
        </MyWrapper>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>
