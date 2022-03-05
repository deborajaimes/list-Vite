<template>
  <nav class="py-5 px-40 bg-indigo-500 shadow-md flex justify-between">
    <h1 class="font-bold text-white text-lg">Soft List</h1>
    <div>
      <router-link to="/home" class="mx-2 text-white mdi mdi-home-outline text-lg">Home</router-link>
      <router-link to="/lista" class="mx-2 text-white mdi mdi-cart-plus text-lg"
        >Cadastrar Item</router-link
      >
      <router-link
        to="/cadastro"
        class="mx-2 text-white mdi mdi-account-plus text-lg"
        > Usuário</router-link
      >
    </div>
  </nav>
  <router-view></router-view>
</template>
