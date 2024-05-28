import { createContext, useEffect, useState } from "react";

import { get, post, postImagen } from "../utils/http";


 // http://localhost:8080/api/v1/auth/authenticate
//url para hacer login
const urlPostLogin = 'http://localhost:8080/auth/login'
const urlVerificarToken = `http://localhost:8080/api/v1/auth/validate?jwt=`
const urlCrearUsuario = 'http://localhost:8080/usuario/registrar'
const urlListaDeMascotas = 'http://localhost:8080/portal/listaMascotas'
const urlCrearServicio='http://localhost:8080etcetc'
//creo los usuarios para recibir la data del back
const usuarioLogin = {
    nombre: "",
    email:"",
    jwt: "",
    rol: "",
    localidad:"",
    Auth: false
}

const ContextoAdministrador = createContext()


const ContextLoginRegister = ({ children }) => {


    // creo el estado de usarios
    const [usuarioLogeado, setUsuarioLogeado] = useState(usuarioLogin)
    const [listaMascotas, setlistaMascotas] = useState([])



    const SubmitRegistro = async (e, formRegistro) => {
        e.preventDefault()
        try {

            const respuesta = await post(urlCrearUsuario, formRegistro)
            if (respuesta) {
                window.location.href = '/login';
            }
        } catch (error) {
            console.log(error)
        }
    }

    /// traigo los servicios del back para mostrarlos en inicio
    const serviciosBack = async () => {

        try {
            const respuesta = await get(urlListaDeMascotas)
            setlistaMascotas(respuesta)
            console.log(respuesta)


        } catch (error) {
            console.log(error)

        }


    }


    // ACCION PARA LOGUEARSE Y RECIBIR EL TOKEN
    const SubmitLogin = async (e, formlogin) => {
        e.preventDefault()
        try {
            const respuesta = await post(urlPostLogin, formlogin)

          const usuarioRespuesta = {
                nombre: respuesta.userName,
                email:respuesta.email,
                jwt: respuesta.jwt,
                rol: respuesta.rol,
                localidad:respuesta.localidad,
                Auth: true
            }
            setUsuarioLogeado(usuarioRespuesta) 
            window.localStorage.setItem("auth_token", respuesta.jwt)
            console.log(respuesta)
        } catch (error) {
            console.log("No existe ese usuario maquina (linea 48")
        }
    }

    //VERIFICACION DE LOGIN AUTOMATICA
    const AuthuTokenYUsiario = async () => {
        if (verificarToken()) {

            let token = verificarToken()
            const urlFinal = urlVerificarToken + token
            const respuesta = await VerificarExpericacionToken(urlFinal)
            const usuarioRespuesta = {
                userName: respuesta.userName,
                jwt: respuesta.jwt,
                Rol: respuesta.rol,
                Auth: true
            }
            setUsuarioLogeado(usuarioRespuesta)
            // cambianr en el  backend para que en vez de devolver un true o false,devuelva el objeto




        }

    }

    const verificarToken = () => {

        let jwt = window.localStorage.getItem("auth_token")
        if (!jwt) return false

        return jwt

    }


    ///

    const VerificarExpericacionToken = async (urlVerificarToken) => {
        const respuesta = await get(urlVerificarToken)
        return respuesta
    }

    const SubmintCrearServicio = async (e, serviPodo) => {
        e.preventDefault()
        try {
            const token = verificarToken()
            const respuest = await postImagen(urlCrearServicio, serviPodo, token);
            if (respuest) {
                window.location.href = '/login';
            }
            return console.log(respuest)

        } catch (error) {
            console.log("error en cath de postIamgen")
        }
    }


    const data = { VerificarExpericacionToken, SubmitLogin, usuarioLogeado, AuthuTokenYUsiario, SubmitRegistro, listaMascotas, serviciosBack,SubmintCrearServicio }
    return <ContextoAdministrador.Provider value={data}>{children}</ContextoAdministrador.Provider>

}

export { ContextLoginRegister }
export default ContextoAdministrador