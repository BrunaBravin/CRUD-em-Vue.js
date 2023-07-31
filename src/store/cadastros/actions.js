export default {
    async SELECT_CADASTROS() {
       const arrCadastro = await JSON.parse(localStorage.getItem("data")) || []
    //    console.log(arrCadastro)
       return arrCadastro
    }
}

