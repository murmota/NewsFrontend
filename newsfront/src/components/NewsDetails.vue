<template>
    <div v-if="news">
      <h1>{{ news.title }}</h1>
      <p v-html="news.shortDescription"></p>
      <div v-if="news.fullDescription" v-html="news.fullDescription"></div>
      <div v-else>
        <button @click="loadFullDescription">Загрузить полное описание</button>
      </div>
    </div>
    <div v-else>
      <p>Новость не найдена.</p>
    </div>
  </template>
  
  <script>
  import apiClient from '@/api'; // Убедитесь, что путь правильный
  
  export default {
    props: ['id'],
    data() {
      return {
        news: null,
      };
    },
    methods: {
      async fetchNewsDetails() {
        try {
          const response = await apiClient.get(`/news/details/${this.id}`);
          this.news = response.data;
        } catch (error) {
          console.error('Ошибка при загрузке новостей:', error);
        }
      },
      async loadFullDescription() {
        try {
          const response = await apiClient.get(`/news/details/${this.id}`);
          this.news.fullDescription = response.data.fullDescription;
        } catch (error) {
          console.error('Ошибка при загрузке полного описания:', error);
        }
      }
    },
    watch: {
      id: {
        immediate: true,
        handler() {
          this.fetchNewsDetails();
        }
      }
    }
  };
  </script>
  
  <style>
  /* Стилизуйте по своему усмотрению */
  </style>
  