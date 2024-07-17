<template>
  <div>
    <h1>Новости</h1>
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <router-link :to="'/news/details/' + news.id">
          <h2>{{ news.title }}</h2>
          <p>{{ news.date }}</p>
          <p v-html="news.shortDescription"></p>
        </router-link>
      </li>
    </ul>
    <div class="pagination">
      <button @click="prevPage" :disabled="page === 0">Назад</button>
      <span>Страница {{ page + 1 }}</span>
      <button @click="nextPage" :disabled="!hasMore">Вперед</button>
    </div>
  </div>
</template>

<script>
import apiClient from '@/api'; // Убедитесь, что путь правильный

export default {
  props: ['id'],
  data() {
    return {
      newsList: [],
      page: 0,
      size: 10,
      hasMore: true,
    };
  },
  methods: {
    async fetchNews() {
      try {
        const response = await apiClient.get(`/news/categories/${this.id}/news?page=${this.page}&size=${this.size}`);
        this.newsList = response.data.content;
        this.hasMore = !response.data.last;
      } catch (error) {
        console.error(error);
      }
    },
    nextPage() {
      this.page++;
      this.fetchNews();
    },
    prevPage() {
      if (this.page > 0) {
        this.page--;
        this.fetchNews();
      }
    }
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        this.page = 0;
        this.fetchNews();
      }
    }
  }
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.pagination button {
  margin: 0 5px;
}
</style>
