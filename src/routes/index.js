import Login from './../pages/Login.vue'
import Home from './../pages/Home.vue'
import Lista from './../pages/Lista.vue'
import CadastroUsuario from './../pages/CadastroUsuario.vue'

export default [
    { path: "/", component: Login },
    { path: "/home", component: Home },
    { path: "/lista", component: Lista },
    { path: "/cadastro", component: CadastroUsuario }
]