<template>
  <form class="m-20 justify-center">
    <input
      v-model="item.descricao"
      class="border-2 w-3/4 uppercase px-4 py-2"
      type="text"
      placeholder="Descrição do item"
    />
    <br />
    <input
      v-model="item.quantidade"
      class="border-2 px-4 py-2"
      type="number"
      placeholder="Quantidade"
      id="qtde"
    /><br />
    <input
      v-model="item.valorUnitario"
      class="border-2 px-4 py-2"
      type="number"
      placeholder="Valor Unitário"
      id="un"
    /><br />
    <input
      v-model="item.valorTotal"
      readonly
      class="border-2 px-4 py-2"
      type="number"
      placeholder="Valor Total"
    /><br />
    <p class="px-4 py-2 text-indigo-600 rounded-md">
      <input
        v-model="item.carrinho"
        class="border-2 px-4 py-2"
        type="checkbox"
        placeholder="No carrinho"
      />
      No carrinho
    </p>
    <br />
    <button
      @click="adicionarItem"
      class="bg-indigo-600 px-4 rounded-md text-white"
      type="button"
    >
      Cadastrar
    </button>
    <button @click="cancelar" class="bg-red-400 px-4 rounded-md text-white" type="button" >
      Cancelar
    </button>
  </form>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      item: {},
      itens: [],
    };
  },
  methods: {
    async adicionarItem() {
      const resp = await axios.post(
        import.meta.env.VITE_APP_API_URL + "/item",
        this.item
      );
      alert(resp.data.mensagem);
    },
    calcularTotal() {
      this.item.valorTotal = this.item.valorUnitario * this.item.quantidade;
    },
    cancelar() {
      this.item = {};
    },
  },
  watch: {
    "item.valorUnitario": function () {
      this.calcularTotal();
    },
    "item.quantidade": function () {
      this.calcularTotal();
    },
  },
};
</script>
