const user = {
    // // // 修改state (异步)
    actions: {
        asyncUpdateUser(context, user) {
            context.commit("updateUser", user);
        },
    },
    // // // 修改state (同步)
    mutations: {
        updateUser(state, user) {
            state.user = user;
        }
    },

    // // // 准备state——用于存储数据(全局)
    // state: sessionStorage.getItem('state') ? sessionStorage.getItem('state') : {
    state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
        user: {
            userName: ""
        }
    },

    // // // 监听state,计算属性
    getters: {
        getUser(state) {
            return state.user;
        }
    },
};

export default user;