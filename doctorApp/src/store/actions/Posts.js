import { CREATING_POST,POST_CREATED,SET_POSTS, ADD_COMMENT } from './ActionTypes'
import axios from 'axios'
import { setMessage } from './Message'


export const addPost = post => {

    return (dispatch, getState) => {

        dispatch(creatingPost())
        //https://us-central-instagram-clone-5706d.cloudfunctions.net/uploadImage'
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-instagram-clone-5706d.cloudfunctions.net/uploadImage',
            method: 'post',
            data: {
                image: post.image.base64
            }
        }).catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: 'Não foi possivel realizar o upload da imagem'
                }))
        })
          .then(res => {
              post.image = res.data.imageUrl
              axios.post(`/post.json?auth=${getState().user.token}`, {...post})
              .catch(erro => {
                  dispatch(setMessage({
                    title: 'Erro',
                    text: 'Não foi possivel realizar o upload da imagem'
                    }))
            })
              .then(res => {
                dispatch(getPosts())
                dispatch(postCreated())
              })
          })

    }
 }


 //recebe um array de posts e retorna uma action
export const setPosts = posts => {

    return{

        type: SET_POSTS,
        payload: posts
    }
}

//obtem os dados de forma assincrona atraves de uma requisição ajax utilizando o axios e redux thunk, acessando o firebase
export const getPosts = () =>{


    return dispatch => {
        
        // a baseURL padrão foi definada no index
       axios.get('/post.json').catch(err => {
        dispatch(setMessage({
            title: 'Erro',
            text: 'Não foi possivel carregar o Feed'
            }))
       }).then(res => {
        // a constante rawPosts recebe um objeto posts do Firabase com 3 atributos que identificam cada postagem
        const rawPosts = res.data
           const posts = []
           //cada atributo do objeto é adicionado no array posts
           for(let key in rawPosts){
               posts.push({
                //pega todos os atributos desse objeto
                ...rawPosts[key],
                id: key
               })
           }

           //chama o dispatch chamando o setposts passando o array com as postagens
           //para ser renderizado no estado da aplicação
           dispatch(setPosts(posts.reverse()))
       })
       
        
    }
}

export const addComment = payload => {

    return (dispatch, getState) => {

        axios.get(`/post/${payload.postId}.json`)
        .catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: 'Não foi possivel fazer o comentário'
                }))
        })
        .then(res => {
            const comments = res.data.comments || []
            comments.push(payload.comment)
            //atualização de um atributo especifico do objeto
            axios.patch(`/post/${payload.postId}.json?auth=${getState().user.token}`, {comments})
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Não foi possivel fazer o comentário'
                    }))
            })
            .then(res => {
                dispatch(getPosts())
            })
        })
    }
    /* return {

        type: ADD_COMMENT,
        payload
    } */

}

export const creatingPost = () => {

    return {
        type: CREATING_POST,
    }
}

export const postCreated = () => {

    return{

        type: POST_CREATED
    }
}