import Login from './../pages/Login.vue'
import Home from './../pages/ListagemCompras.vue'
import Lista from './../pages/CadastroItem.vue'
import CadastroUsuario from './../pages/CadastroUsuario.vue'

export default [
    { path: "/", component: Login },
    { path: "/home", component: Home },
    { path: "/lista", component: Lista, name: "Lista" },
    { path: "/cadastro", component: CadastroUsuario }
]