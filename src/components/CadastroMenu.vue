<template>
  <div class="columns is-mobile">
    <div class="column">
      <slot></slot>
    </div>
  </div>    
</template>

<script>
import CadastroModal from './CadastroModal.vue'
export default {
  name: 'CadastroMenu',
  components: {
    CadastroModal

  },
  data(){
    return{
      incluir: false,
    }
  },
  methods:{
    teste(){
      this.incluir = !this.incluir
    }
  }
}
</script>