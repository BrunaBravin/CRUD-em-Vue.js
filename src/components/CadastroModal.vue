<template>
    <div class="modal" :style="'display: block'">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <div class="box">
                <span class="icon is-right">
                    <i class="fa-solid fa-xmark"></i>
                </span>
            </div>
            <div class="box">
                <form>   
                    <div class="columns">
                        <div class="column">
                            
                            <div class="columns is-mobile">
                                <div class="column">
                                    <div class="box">
                                        <img src="../assets/Icons/account.png">
                                    </div>
                                   <button class="button is-default is-link is-light">Adicionar imagem</button>  
                                </div>
                                <div class="column">
                                    <div class="field">
                                        <label class="label" for="m-nome">Nome</label>
                                        <div class="control">
                                            <input id="m-nome" class="input" type="text" v-model="cadastro.nome">
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label for="m-idade" class="label">Idade</label>
                                        <div class="control">
                                            <input id="m-idade" class="input" type="text" v-model="cadastro.idade">
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label for="m-email" class="label">Email</label>
                                        <div class="control">
                                            <input id="m-email" class="input" type="text" v-model="cadastro.email">
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label for="m-senha" class="label">Senha</label>
                                        <div class="control">
                                            <input id="m-senha" class="input" type="password" v-model="cadastro.senha">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                       
                        
                    </div>
                </form>
            </div>
            <div class="box">
                <div class="column">
                    <slot></slot>
                </div>
            </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'CadastroModal',
  props:{
    arrCadastros: {
      required: true
    },
    cadEditar: {
      default: 0
    },
    index:{
      default: -1
    },
    cadastro:{
      required: true
    }
  },
  created(){
    console.log(this.cadEditar)
    if (this.index >= 0){
        this.cadastro.nome = this.arrCadastros[this.index].nome
        this.cadastro.idade = this.arrCadastros[this.index].idade
        this.cadastro.email = this.arrCadastros[this.index].email
        this.cadastro.senha = this.arrCadastros[this.index].senha
        this.cadastro.id = this.arrCadastros[this.index].id  //usar .this quando for prop ou data
        // console.log(this.cadEditar)
    }

  }
}
</script>

<style scoped>
.button{
    border-radius: 12px;
    border-style: outset;
    padding: 20px 20px;
    font-weight: 400;
    box-shadow: 0px 2px #dfdfdf;
  }

.box{
    margin: 2px;
  }


</style>