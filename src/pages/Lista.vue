<template>
  <form class="m-20 justify-center">
    <input
      class="border-2 w-3/4 uppercase px-4 py-2 "
      type="text"
      placeholder="Descrição do item"
    />
    <br />
    <input
      class="border-2 px-4 py-2"
      type="number"
      placeholder="Quantidade"
    /><br />
    <input
      class="border-2 px-4 py-2"
      type="number"
      placeholder="Valor Unitário"
    /><br />
   <p class="px-4 py-2 text-indigo-600  rounded-md" > <input
      class="border-2 px-4 py-2 "
      type="checkbox"
      placeholder="No carrinho"
    /> No carrinho </p>
    <br />
    <button class="bg-indigo-600 px-4 rounded-md text-white" type="button">
      Cadastrar
    </button>
    <button class="bg-red-400 px-4 rounded-md text-white" type="button">Cancelar</button>
  </form>
</template>

