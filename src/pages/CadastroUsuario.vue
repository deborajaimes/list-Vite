<template>
  <form class="m-20 justify-center">
    <input
      v-model="usuario.usuario"
      class="border-2 w-3/4 uppercase px-4 py-2"
      type="text"
      placeholder="Nome Completo"
    />
    <br />
    <input
      v-model="usuario.email"
      class="border-2 px-4 py-2"
      type="text"
      placeholder="email"
      id="qtde"
    /><br />
    <input
      v-model="usuario.senha"
      class="border-2 px-4 py-2"
      type="password"
      placeholder="senha"
      id="un"
    /><br />
    <button
      @click="adicionarUsuario"
      class="bg-indigo-600 px-4 rounded-md text-white"
      type="button"
    >
      Cadastrar
    </button>
    <button class="bg-red-400 px-4 rounded-md text-white" type="button">
      Cancelar
    </button>
  </form>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      usuario: {},
      usuarios: [],
    };
  },
  methods: {
    async adicionarUsuario() {
      const resp = await axios.post(
        import.meta.env.VITE_APP_API_URL + "/usuario",
        this.item
      );
      alert(resp.data.mensagem);
    },
  },
};
</script>
