<template>
    <div class="columns">
      <div class="column is-2">
        <div class="field">
          <div class="control has-icons-left">
            <input id="pesquisa" class="input is-default is-link" :id="pesquisa" v-model="search" type="search"/>
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="column">
          <p class="control">
            <button class="button is-default is-link is-light" id="botao" @click="$emit('buscarCadastro', search)">
              Buscar usuários
            </button>  
          </p> 
      </div>

      <div class="column is-2">
          <p class="control">
            <button class="button is-default is-danger is-light" v-show="excluir_selecionados" @click="excluiVarios()">Excluir selecionados</button>  
          </p> 
      </div>

      <div class="column is-2">
        <slot></slot>
      </div> 

    </div>

      <div class="table is-vcentered">
        <table class="table is-fullwidth">
          <tbody>
            <tr v-for="(cadastro, index) in arrCadastro" :key="index">
              <div class="box">
                <div class="columns">

                  <div class="column"><input v-bind:id="cadastro.id" type="checkbox" @change="verificaSelecionados()" class="checkbox"></div>
                  <div class="column is-1">
                    <span class="icon is-large">
                      <span class="fa-stack fa-2x">
                        <i class="fas fa-user fa-border fa-stack-2x" id="borda"></i>
                      </span>
                    </span>
                  </div>
                                
                  <div class="column is-2">
                    <p class="elementos">Nome: {{ cadastro.nome }}</p>
                    <div class="columns is-mobile">
                      <div class="column">
                        <p class="elementos">e-mail: {{ cadastro.email }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="column is-7">
                    <p class="elementos">Idade: {{ cadastro.idade }}</p>
                    <div class="columns is-mobile">
                      <div class="column">
                        <p class="elementos" >senha: {{ cadastro.senha }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="column">
                    <div class="control has-icons-left">
                      <button @click="$emit('editarCadastro', {cadastro:cadastro})" class="button is-default is-link is-light">
                      </button>
                      <span class="icon is-small is-left">
                        <i class="fas fa-pen" id="iconboldpen"></i>
                      </span>
                    </div>
                  </div>
                  
                  <div class="column is-3">
                    <div class="control has-icons-left">
                        <button @click="confirma(cadastro)" class="button is-default is-danger is-light">
                        </button>
                        <span class="icon is-small is-left">
                          <i class="fas fa-trash" id="iconboldtrash"></i>
                        </span>
                      </div> 
                  </div>
                      
                </div>
              </div>                

          </tr>
        </tbody>
      </table>
      <div class="container content "><span class="bulma-arrow-mixin mt-6"></span></div> 
    </div>

  </template>
  
  <script>
  import CadastroModal from './CadastroModal.vue'
  import CadastroMenu from './CadastroMenu.vue'
  import { useStore } from "vuex";
  import { computed } from "vue";
  export default {
    name: 'HeaderHome',
    components:{
    CadastroModal,
    CadastroMenu
    },
    props:{
      // arrCadastros: {
      //   required: true
      // },
      cadastro:{
      required: true
      },
      index:{
      required: true
      },
      incluir:{
      required: true
      }
    },
    setup(){
     const store = useStore();
    },
    data(){
        return {
            //excluir_selecionados: false,
            //ckList: [],
            search: "",
            arrCadastro: this.$store.state.arrCadastro
        }
    },
    // watch:{
    // arrayFiltrado(){
    //   console.log("entrou no watch")
    //   console.log(this.arrayFiltrado)
    // }
    // },
    methods: {
      verificaSelecionados(){
        this.$store.commit('verificacao_selecionados')
      },

      pegarSelecionados(){
        this.$store.commit('lista_selecionados')
      },

      excluiVarios(){
        this.pegarSelecionados()
        this.$store.commit('exclui_varios')
      },

       async excluirUm(cadastroId){
        this.$store.dispatch('excluirUm', cadastroId)
      },

      confirma(cadastro){
        var r=confirm("Excluir cadastro(s)?");
        if (r==true){
          this.excluirUm(cadastro.id);  // cadastro.id é igual o index do elemento a ser excluído
        } else { 
          console.log("cancelado");
        }
      },
    },
  }
  </script>

<style scoped>

  #iconboldpen{
    color: rgb(86, 143, 207);
  }

  #iconboldtrash{
    color: rgb(207, 86, 86);
  }

  .elementos{
    font-weight: 600;
  }

  #borda{
    border-radius: 12px;
    box-shadow: 3px 3px #dfdfdf;
  }
  .icon{
   border-radius: 12px;
  }

  .box{
    margin: 2px;
  }

  .button{
    border-radius: 12px;
    border-style: outset;
    padding: 20px 20px;
    font-weight: 400;
    box-shadow: 0px 2px #dfdfdf;
  }

  #user{
    background-color: #136fb9;
    padding: 25px 25px 25px 25px;
  }

  #pesquisa{
    border-radius: 12px;
    border-color: #136fb9;
    border-width: 3px;
    padding: 17px;
    padding-left: 30px;
  /* primeira forma de fazer o icon da barra de pesquisa(porém é a maneira "crua"):
  background: url("../assets/Icons/search-interface-symbol.png") no-repeat; 
  background-size: 15px;
  background-position: 0.2cm;
  padding-left: 30px; */

 }



</style>