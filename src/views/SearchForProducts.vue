<template>
    <router-link to="/">Go Back</router-link>
    <div class="search-container">
      <h1>Search for Products</h1>
      <input type="text" v-model="searchQuery" @input="fetchProducts" placeholder="Search products..." />
      
      <table v-if="products.length">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Manufacturer</th>
            <th>Year</th>
            <th>Specification</th>
            <th>Height</th>
            <th>Width</th>
            <th>Breadth</th>
            <th>Serial No</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.productName }}</td>
            <td>{{ product.manufacturer }}</td>
            <td>{{ product.yearOfRelease }}</td>
            <td>{{ product.specifications }}</td>
            <td>{{ product.height }}</td>
            <td>{{ product.breadth }}</td>
            <td>{{ product.width }}</td>
            <td>{{ product.serialNo }}</td>
          </tr>
        </tbody>
      </table>
      
      <p v-if="!products.length && searchQuery">No results found.</p>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const searchQuery = ref("");
      const products = ref([]);
  
      const fetchProducts = async () => {
        if (searchQuery.value.length < 1) {
          products.value = [];
          return;
        }
  
        try {
          const response = await fetch(`https://us-central1-product-collections.cloudfunctions.net/searchProducts?q=${searchQuery.value}`);
          products.value = await response.json();
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      return { searchQuery, products, fetchProducts };
    }
  };
  </script>
  
  <style scoped>
  .search-container {
    text-align: center;
    margin: 20px;
  }
  
  input {
    width: 80%;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 10px;
  }
  
  th {
    background-color: #f4f4f4;
  }
  </style>
  