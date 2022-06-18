<template>
    <div>
        <div id="pb_position"></div>
        <div class="container">
            <div class="notfind_wrapper">
                <img class="notfind" src="@/assets/picture/404.png" alt="">
                <span class="">很抱歉，您访问的页面去月球了~~</span>
                <a href="https://404.life">返回首页</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFound"
}
</script>

<style scoped>
.notfind_wrapper {
    position: relative;
}

.notfind {
    margin: 150px auto 0 auto;
    display: block;
}

.notfind_wrapper span {
    position: absolute;
    top: 36%;
    left: 42%;
    color: #999999;
    font-size: 18px;
}

.notfind_wrapper a {
    position: absolute;
    position: absolute;
    top: 43%;
    left: 47%;
    border: 2px solid #94BFF3;
    color: #94BFF3;
    border-radius: 15px;
    padding: 2px 14px;
    font-size: 15px;
}
</style>