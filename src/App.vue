<template>
  <nav class="py-5 px-40 bg-indigo-600 shadow-md flex justify-between">
    <h1 class="font-bold text-white">Soft List</h1>
    <div>
      <router-link to="/home" class="mx-2 text-white">home</router-link>
      <router-link to="/lista" class="mx-2 text-white">Cadastrar Item</router-link>
      <router-link to="/cadastro" class="mx-2 text-white">Cadastrar Usuario</router-link>
    </div>
  </nav>
  <router-view></router-view>
</template>