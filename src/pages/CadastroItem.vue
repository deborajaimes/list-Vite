<template>
  <form class="m-20 justify-center">
    <input
      v-model="item.descricao"
      class="
        border-2
        w-3/4
        uppercase
        px-4
        py-2
        rounded-lg
        border-gray-200
        outline-none
        focus:border-indigo-500
      "
      type="text"
      placeholder="Descrição do item"
    />
    <br />
    <input
      v-model="item.quantidade"
      class="
        border-2
        px-4
        py-2
        rounded-lg
        border-gray-200
        outline-none
        focus:border-indigo-500
      "
      type="number"
      placeholder="Quantidade"
      id="qtde"
    /><br />
    <input
      v-model="item.valorUnitario"
      class="
        border-2
        px-4
        py-2
        rounded-lg
        border-gray-200
        outline-none
        focus:border-indigo-500
      "
      type="number"
      placeholder="Valor Unitário"
      id="un"
    /><br />
    <input
      v-model="item.valorTotal"
      readonly
      class="
        border-2
        px-4
        py-2
        rounded-lg
        border-gray-200
        outline-none
        focus:border-indigo-500
      "
      type="number"
      placeholder="Valor Total"
    /><br />
    <p class="px-4 py-2 text-indigo-600 rounded-md mdi mdi-cart-outline">
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
      @click="salvarItem"
      class="bg-indigo-500 px-4 rounded-md text-white mdi mdi-check"
      type="button"
    >
      Salvar
    </button>
    <button
      @click="cancelar"
      class="bg-red-400 px-4 rounded-md text-white mdi mdi-cancel"
      type="button"
    >
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
    async salvarItem() {
      const resp = await axios.post(
        import.meta.env.VITE_APP_API_URL + "/item",
        this.item
      );
      alert(resp.data.mensagem);
      this.item={}
    },
    calcularTotal() {
      this.item.valorTotal = this.item.valorUnitario * this.item.quantidade;
    },
    cancelar() {
      this.item = {};
    },
  },
  mounted() {
    console.log(this.$route.params);
    if(this.$route.params.item) this.item = JSON.parse(this.$route.params.item);
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
