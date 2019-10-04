
export const state = function() {
    return {
        users: null
    }
}
export const mutations = {
    setUser: function(state, user) {
        state.users = user;
    },
    exitUser: function(state) {
        state.users = null;
    }
}