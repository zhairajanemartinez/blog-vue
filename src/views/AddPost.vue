<script setup>
import { reactive,computed } from 'vue'
import MyWrapper from '@/components/MyWrapper.vue';
import {useRouter} from 'vue-router'

import {usePostsStore} from '@/stores/posts'

const router = useRouter()
const postsStore = usePostsStore()

const post = reactive ({
  title: '',
  body: ''
})

const isFormInvalid = computed(() => {
  return post.title.trim() === '' || post.body  === ''
})

const submit = () => {
   postsStore.addPost(post)
    router.push({name: 'home'})
}
</script>

<template>
<div class = "container">
    <MyWrapper>
      <form @submit.prevent="submit">
        <h3>Add a New Post</h3>
        <div>
          <label>Post Title</label>
          <input type="text" v-model="post.title" @input="(e) => (post.
          title = e.target.value)" />
        </div>
        <div>
          <label>Post Body</label>
          <textarea rows="7" v-model ="post.body"></textarea>
        </div>
        <div>
          <button :disabled="isFormInvalid">Add</button>
        </div>
      </form>
    </MyWrapper>
</div>
</template>

<style lang="scss" scoped>
form {
  padding: 2rem 2.5rem;
  width: 100%;
  max-width: 500px;

  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #333;
  }

  div {
    margin-bottom: 1.2rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #555;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
      background-color: #fafafa;
      transition: border-color 0.3s;

      &:focus {
        border-color: #007bff;
        outline: none;
        background-color: #fff;
      }
    }

    button {
      padding: 0.75rem 1.5rem;
      background-color: rgb(219, 110, 127);
      color: #fff;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    } 
  }
}
</style>