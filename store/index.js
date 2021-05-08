export const state = () => ({
  islogin: false
});

export const mutations = {
  login(state){
    state.islogin = true
  },
  logout(state) {
    state.islogin = false
  }
}