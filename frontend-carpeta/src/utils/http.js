export const get = async (url) => {
    try {
        const respuesta = await fetch(url)

        if (!respuesta.ok) {
            throw new Error(respuesta.status + "error en fecth" + respuesta.statusText)
        }
        const data = await respuesta.json()
       
        return data;

    } catch (error) {
        console.log(`error cath de get ${error}`)
    }

}

export const post = async (url, data) => {
    const fechConfig = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }
    // creo que lo que falta, es poner en el post, el headers:header insertando el token digamos ,pero en la parte de la autorizacion del la peticion post

    try {

        const respuesta = await fetch(url, fechConfig)



        if (!respuesta.ok) {
            throw new Error(respuesta.status + "error en fecth [post hhtp]" + respuesta.statusText)
        }
        const datos = await respuesta.json()

        return datos;

    } catch (error) {
        console.log(`error cath de get [POST HTTPS]${error}`)
    }
}
// amigos les dejo este post que es para cargar una imagen a la base de datos! como cuando una persona encunetra un perro y quiere subir una foto del perro junto con el anuncio
// de que se perdio el perro.
export const postImagen = async (url,anuncio, token) => {
    const formData = new FormData();
  
    formData.append('descripcion', anuncio.descripcion); // Convertir objeto a JSON y agregar como parte
    formData.append('tamaño', anuncio.tamaño); // Convertir objeto a JSON y agregar como parte
    formData.append('localidad', anuncio.localidad);
    formData.append('file',anuncio.file); // Convertir objeto a JSON y agregar como parte

    // Agregar archivo de imagen como parte


    const fetchConfig = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData
    };

    try {
        const respuesta = await fetch(url, fetchConfig);

        if (!respuesta.ok) {
            throw new Error(respuesta.status + " error en fetch [post hhtp]: " + respuesta.statusText);
        }
        
        const datos = await respuesta.json();
        console.log(datos);

        return datos;
    } catch (error) {
        console.log("error cath de get [POST HTTPS]: " + error.statusText);
    }
};

