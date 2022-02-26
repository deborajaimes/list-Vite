<template>
  <div class="bg-white p-8 rounded-md w-full">
    <div class="flex items-center justify-between pb-6">
      <div>
        <h2 class="text-gray-600 font-semibold">Todos os Itens de Compra</h2>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex bg-gray-50 items-center p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            class="bg-gray-50 outline-none ml-1 block"
            type="text"
            name=""
            id=""
            placeholder="procurar..."
          />
        </div>
        <div class="lg:ml-40 ml-10 space-x-8">
         <router-link to="/lista">
            <button
            class="
              bg-indigo-600
              px-4
              py-2
              rounded-md
              text-white
              font-semibold
              tracking-wide
              cursor-pointer
            "
          >
            Novo Item
          </button>
         </router-link>
        </div>
      </div>
    </div>
  </div>
  <div>
    <table class="min-w-full leading-normal">
      <thead>
        <tr>
          <th
            class="
              px-5
              py-3
              border-b-2 border-gray-200
              bg-gray-100
              text-left text-xs
              font-semibold
              text-gray-600
              uppercase
              tracking-wider
            "
          >
            Produto
          </th>
          <th
            class="
              px-5
              py-3
              border-b-2 border-gray-200
              bg-gray-100
              text-left text-xs
              font-semibold
              text-gray-600
              uppercase
              tracking-wider
            "
          >
            Quantidade
          </th>
          <th
            class="
              px-5
              py-3
              border-b-2 border-gray-200
              bg-gray-100
              text-left text-xs
              font-semibold
              text-gray-600
              uppercase
              tracking-wider
            "
          >
            Valor
          </th>
          <th
            class="
              px-5
              py-3
              border-b-2 border-gray-200
              bg-gray-100
              text-left text-xs
              font-semibold
              text-gray-600
              uppercase
              tracking-wider
            "
          >
            carrinho
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in lista" :key="item.descricao">
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {{ item.descricao }}
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {{ item.quantidade }}
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {{ item.valorTotal }}
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <input
              type="checkbox"
              name="carrinho"
              id="carrinho"
              :checked="item.carrinho"
              @change="alterarCarrinho(item)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <table class="min-w-full leading-normal">
    <thead>
      <tr>
        <th
          class="
            px-5
            py-3
            border-b-2 border-gray-200
            bg-gray-100
            text-left text-xs
            font-semibold
            text-gray-600
            uppercase
            tracking-wider
          "
        >
          Valor Total Geral:
        </th>
        <th class="px-5 font-semibold text-gray-600 uppercase tracking-wider">
          {{ totalGeral }}
        </th>
        <th
          class="
            px-5
            py-3
            border-b-2 border-gray-200
            bg-gray-100
            text-left text-xs
            font-semibold
            text-gray-600
            uppercase
            tracking-wider
          "
        >
          Valor Total no Carrinho:
        </th>
        <th
          class="
            text-left
            px-5
            font-semibold
            text-gray-600
            uppercase
            tracking-wider
          "
        >
          {{ resultadoTotalCarrinho }}
        </th>
      </tr>
    </thead>
  </table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      lista: [],
      resultadoTotalCarrinho: 0,
    };
  },
  methods: {
    async buscarItem() {
      let resposta = await axios.get(import.meta.env.VITE_APP_API_URL + "/item");
      this.lista = resposta.data;
      this.calcularTotalCarrinho();
    },

    calcularTotalCarrinho() {
      console.log("OLA");
      if (this.lista.length <= 0) this.resultadoTotalCarrinho = 0;
      this.resultadoTotalCarrinho = this.lista
        .map((el) => {
          return el.carrinho ? el.valorTotal : 0;
        })
        .reduce((anterior, atual) => anterior + atual);
    },
   async alterarCarrinho(item){
       console.log("teste "+item._id) 
       await axios.put(import.meta.env.VITE_APP_API_URL + "/item/"+ item._id);
    }
  },
  mounted() {
   this.buscarItem();
  },
  computed: {
    totalGeral() {
      if (this.lista.length <= 0) return 0;
      return this.lista
        .map((el) => el.valorTotal)
        .reduce((anterior, atual) => anterior + atual);
    },
    totalCarrinho() {
      return this.resultadoTotalCarrinho;
    },
  },
};
</script>
