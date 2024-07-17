<template>
    <div>
      <h1>Категории новостей</h1>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link :to="'/categories/' + category.id + '/news'">{{ category.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import apiClient from '@/api'; // Убедитесь, что путь правильный
  
  export default {
    data() {
      return {
        categories: []
      };
    },
    created() {
      this.fetchCategories();
    },
    methods: {
      async fetchCategories() {
        try {
          const response = await apiClient.get('/news/categories'); // Убедитесь, что путь правильный
          this.categories = response.data;
        } catch (error) {
          console.error('Ошибка при загрузке категорий:', error);
        }
      }
    }
  };
  </script>
  
  <style>
  /* Ваши стили */
  </style>
  