import { createStore } from "vuex"

export const store = createStore({
    state: {
        cadastro:[{
            nome: '',
            email: '',
            senha: '',
            idade: '', 
            id: '',
          }
        ],
        index: -1,
        arrCadastro: JSON.parse(localStorage.getItem("data")) || [],
        arrayFiltrado: [],
        arrayCadastros: JSON.parse(localStorage.getItem("arrCadastros")) || [],
        cadEditar: 0,
        incluir: false,
        excluir_selecionados: false,
        ckList: []
    },

    mutations: {    // mecanismos/métodos para alteras os estados de maneira síncrona



      salvar_cadastro(state){

        var data = {
            nome: state.cadastro.nome,
            idade: state.cadastro.idade,
            email: state.cadastro.email,
            senha: state.cadastro.senha,
            id: state.index === -1 ? new Date().getTime().toString() : state.cadastro.id
        };
        
        state.index === -1 ? state.arrCadastro.push(data) :  state.arrCadastro[state.index] = data

        localStorage.setItem("data", JSON.stringify(state.arrCadastro));

        state.cadastro.nome = "";
        state.cadastro.idade = "";
        state.cadastro.email = "";
        state.cadastro.senha = "";
        state.incluir = false;
        state.index = -1

      },

      editar_cadastro(state, cadastro){
        //console.log("cadastro a ser editado: ", cadastro)
        state.index = state.arrCadastro.indexOf(state.arrCadastro.find(arrcad => arrcad.id == cadastro.id))
        state.cadEditar = cadastro;
        state.incluir = true;     
      },

      verificacao_selecionados(state){
        document.querySelectorAll("input[type=checkbox]:checked").length > 0 ? state.excluir_selecionados = true : state.excluir_selecionados = false;
      },

      lista_selecionados(state){
        let selecionados = document.querySelectorAll("input[type=checkbox]:checked") 
        for (let index = 0; index < selecionados.length; index++) {
          let existe = state.ckList.findIndex(el => el === selecionados[index].id)
          if (existe == -1){     //se ele n existe no ckList, será incluido
            state.ckList.push(selecionados[index].id)
          }          
        }
      },
      exclui_varios(state){
        console.log(state.ckList)
        state.ckList.forEach(cadastroid => {
          excluirUm(cadastroid).then(() => {
            let deselecionados = document.querySelectorAll("input[type=checkbox]:checked")
            for (let index = 0; index < deselecionados.length; index++) {
              deselecionados[index].checked = false          
            }
            state.ckList = []
          }).catch((e) => {
            console.log(e)
          })
        });
      },
      carrega_inicio(state){
        state.arrayFiltrado =  state.arrCadastro  
      }
    }, actions:{   // métodos assincronos, chama as mutations e retorna um obj, ou seja se quiser na hora que estiver
      // salvando algo, esperar a action acabar para executar uma ação secundária, aí n é possível fazer direto com
      // a função de dentro da mutation, é necessário fazer dentro da action, usando uma promessa para assincronicidade.
      // conjunto de ações assim como mutations.

      async excluirUm(cadastroId){
        console.log(this.arrCadastros.findIndex(el => el.id === cadastroId))
        console.log(this.arrCadastros)
        this.arrCadastros.splice(this.arrCadastros.findIndex(el => el.id === cadastroId), 1)
        localStorage.setItem('data', JSON.stringify(this.arrCadastros))
      },

    }, getters:{ // mecanismos de dados computados, mais ou menos parecido com o computed(computed 
      // chama os métodos relativos ao dado que foi alterado, quando n é utilizado e dados são alterados
      // todos os métodos são chamados tendo ou não ligação com o dado).
      // dependências
      // toda vez q a dependêcia for alterada ele retorna um valor
      // getters é uma computed do vuex

      arraycadastros(state){
        state.arrayFiltrado =  state.arrCadastro 
        console.log(state.arrayFiltrado)
        return state.arrayFiltrado
      }

    } 
})







