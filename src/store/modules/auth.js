import authApi from "@/api/auth";
const state = {
  isSubmitting: false,
  errors: null,
  isLogged: false,
  currentUser: null,
  usersDB: null,
  isLoading: false
}
const mutations = {
  registerStart(state) {
    state.isSubmitting = true
    state.errors = null
  },
  registerSuccess(state, userData) {
    state.isSubmitting = false
    state.isLogged = true
    state.currentUser = userData
  },
  registerFailure(state, err) {
    state.isSubmitting = false
    state.errors = err
  },
  loginStart(state) {
    state.isSubmitting = true
    state.errors = null
  },
  loginSuccess(state, userData) {
    state.isSubmitting = false
    state.isLogged = true
    state.currentUser = userData
  },
  loginFailure(state, err) {
    state.isSubmitting = false
    state.errors = err
  },
  deleteUserStart(state) {
    state.isSubmitting = true
    state.errors = null
  },
  deleteUserSuccess(state) {
    state.isSubmitting = false
    state.isLogged = false
    state.currentUser = null
  },
  deleteUserFailure(state, err) {
    state.isSubmitting = false
    state.errors = err
  },
  updateUserStart(state) {
    state.isSubmitting = true
    state.errors = null
  },
  updateUserSuccess(state, credentials) {
    state.isSubmitting = false
    state.isLogged = true
    state.currentUser = credentials
  },
  updateUserFailure(state, err) {
    state.isSubmitting = false
    state.errors = err
  },
  getUsersStart(state) {
    state.isLoading = true
    state.errors = null
  },
  getUsersSuccess(state, credentials) {
    state.isLoading = false
    state.usersDB = credentials
  },
  getUsersFailure(state, err) {
    state.isLoading = false
    state.errors = err
  },
}
const actions = {
  register(context, credentials) {
    return new Promise(resolve => {
      context.commit('registerStart')
      authApi
        .register(credentials)
        .then(response => {
          context.commit('registerSuccess', response.data.user)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          resolve(response.data)
        })
        .catch(err => {
          context.commit('registerFailure', err)
        })
    })
  },
  login(context, credentials) {
    return new Promise(resolve => {
      context.commit('loginStart')
      authApi
        .login(credentials)
        .then(response => {
          context.commit('loginSuccess', response.data.user)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          resolve(response.data)
        })
        .catch(err => {
          alert('The user was not found');
          context.commit('loginFailure', err)
        })
    })
  },
  deleteUser(context, password) {
    const email = JSON.parse(localStorage.getItem('user')).email
    return new Promise(resolve => {
      context.commit('deleteUserStart')
      context
        .dispatch('login', { email, password })
        .then(response => {
          authApi
            .deleteUser(response.user.id)
            .then(() => {
              context.commit('deleteUserSuccess')
              localStorage.setItem('user', '')
              resolve()
            })
            .catch(result => {
              context
                .commit('deleteUserFailure', result)
            })
        })
    })
  },
  updateUser(context, credentials) {
    const user = JSON.parse(localStorage.getItem('user'))
    return new Promise(resolve => {
      context.commit('updateUserStart')
      authApi
        .updateUser(user.id, credentials)
        .then(response => {
          context.commit('updateUserSuccess', response.data.user)
          localStorage.setItem('user', JSON.stringify({
            username: response.data.username,
            password: response.data.password,
            email: response.data.email,
          }))
          resolve(response.data)
        })
        .catch(err => {
          alert('Error');
          context.commit('updateUserFailure', err)
        })
    })
  },
  getUsers(context){
    return new Promise(resolve => {
      authApi
        .getUsers()
        .then(response => {
          context.commit('getUsersSuccess', response.data)
          resolve(response)
        })
        .catch(err => {
          alert('Error');
          context.commit('getUsersFailure', err)
        })
    })
  }
}
const getters = {
  getUsers(state) {
    return state.usersDB
  },
  getLoading(state) {
    return state.isLoading
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}