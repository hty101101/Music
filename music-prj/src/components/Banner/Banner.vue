<template>
    <div class="slide">
        <ul class="slide-wrapper">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
      return {}
    },

    methods: {},

    components: {},
}
</script>

<style scoped>
.slide{
    width: 100%;
    overflow: hidden;
}
.slide-wrapper{
    width: 100%;
}
.slide-item{
    width: 100%;
    float: left;
}
.slide-item>img{
    width: 100%;
    display: block;
}
</style>