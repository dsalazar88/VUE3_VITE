<template>
  <div id="app" class="text-center">

    <h2 :class="callClassCounter">Contador: {{ counter }}</h2>

    <div class="div-btns">
      <button class="btn btn-primary" @click="increment()">Incrementar</button>
      <button class="btn btn-primary" @click="decrement()">Decrementar</button>
      <button class="btn btn-primary" @click="reset()">Resetear</button>
      <button class="btn btn-warning" @click="addNumber()" :disabled="callBlockBtnAdd()">Añadir numero: </button>
    </div>

    <div>
      <h4 class="mt-3">Numeros guardados:  </h4>
      <ul class="list-group mt-3">
        <li class="list-group-item" v-for="num in favorites_number">{{ num }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { index } from './components/js/app'

const counter = ref(0)
let favorites_number = ref([])

const callClassCounter = computed(() => {
  return index.classCounter(counter)
})

const decrement = () => {
  counter.value--
}

const increment = () => {
  counter.value++
}

const reset = () => {
  counter.value = 0
}

const addNumber = () => {
  favorites_number.value.push(counter.value)
}

const callBlockBtnAdd = () => {
  return index.blockBtnAdd(favorites_number, counter)
}

</script>


<style>
@import url(./components/styles/app.css);
</style>