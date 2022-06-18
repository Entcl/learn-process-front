<template>
    <div>
        <!-- 会员等级 ID={{ $route.params.id }} -->
        会员等级 ID={{ id }}
        <!-- name={{ UserName }} -->
    </div>
</template>

<script>
export default {
    name: "MemberLevel",
    props: ["id"],
    beforeRouteEnter: (to, from, next) => {
        console.log("进入路由");
        next(vm => {
            vm.getData();
        });
    },
    beforeRouteLeave: (to, from, next) => {
        console.log("离开路由");
        next();
    },
    methods: {
        getData: function () {
            console.log(this.axios);
            this.axios({
                method: 'get',
                url: 'http://127.0.0.1:8081/courseManage/abc.json',
            }).then(function (repos) {
                console.log(repos);
            }).catch(function (error) {
                console.log(error);
            })
        }
    },
}
</script>

<style>
</style>