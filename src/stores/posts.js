import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
  state() {
    return {
      posts: [],
      loading: true,
      errMsg: ''
    }
  },

  getters: {
    sorted(state) {
      return [...state.posts].sort((a, b) => new Date(b.date) - new Date(a.date))
    },

    saved(state) {
      return [...state.posts]
        .filter(p => p.is_saved)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    }
  },

  actions: {
    getPosts() {
      fetch('http://localhost:3000/posts')
      .then((res) => res.json())
      .then((data) => {
        this.posts = data
        this.loading = false
      })
      .catch(err => {
        this.errMsg = 'Something went wrong'
        this.loading = false
        console.log(err)
      })


    },

    addPost(post) {

      const newPost = {id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'wanako kasabot sa gibati nako ron',
        created_at: new Date().toLocaleDateString(), // use "date" consistently
        is_saved: false

      }

      this.posts.push(newPost)

      fetch('http://localhost:3000/posts/${id}', {
        method: 'POST',  
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      }).catch((err) => console.log(err)) 
    },

    deletePost(id) {
      this.posts = this.posts.filter(p => p.id !== id)

      fetch('http://localhost:3000/posts/${id}', {
        method: 'DELETE',
      }).catch((err) => console.log(err))
    },

    savePost(id) {
      const post = this.posts.find(p => p.id === id)
        post.is_saved = !post.is_saved

        fetch('http://localhost:3000/posts/${id}', {
        method: 'PATCH',  
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify({is_saved: post.is_saved})
      }).catch((err) => console.log(err)) 
          
    }
  }
})
