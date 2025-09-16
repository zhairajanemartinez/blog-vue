<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="header-container">
    <div class="header">
      <span>Posted by {{ post.name }} on {{ post.date }}</span>
      <div>
        <button class="del material-icons">delete</button>
        <button class="save material-icons">bookmark_border</button>
      </div>
    </div>
  </div>

  <h1>{{ post.title }}</h1>
  <p>{{ post.body }}</p>
</template>

<style lang="scss" scoped>
.header-container {
  background-color: rgb(236, 173, 182);
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #888;
    font-size: 0.95rem;
  }

  button {
    background: lightblue;
    border: none;
    border-radius: 6px;
    padding: 8px 16px;
    margin-left: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;

    &.del {
      color: #d32f2f;
    }

    &.save {
      color: #388e3c;
    }

    &:hover {
      background: #b3e5fc;
    }
  }
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 16px;
  color: #222;
}

p {
  font-size: 1.15rem;
  color: #444;
  line-height: 1.7;
}
</style>
