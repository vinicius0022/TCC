import { exp } from "react-native-reanimated"

// Action - Login
export const USER_LOGGED_IN = 'USER_LOGGED_IN'

// Action - Logout
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

// Action - Criando usuario
export const LOADING_USER = 'LOADING_USER'

//Action - Usuario criado
export const USER_LOADED = 'USER_LOADED'

//Action que apresenta mensagens de possiveis erro ao usuario
export const SET_MESSAGE = 'SET_MESSAGE'

//Action que informa que o processo de criação de um paciente no banco de dados está em andamento
export const CREATING_PATIENT = 'CREATING_PATIENT'

//Action que inicia o processo de criação de um paciente no banco de dados
export const SET_PATIENT = 'SET_PATIENT'

//Action que informa que o paciente foi criado
export const PATIENT_CREATED = 'PATIENT_CREATED'