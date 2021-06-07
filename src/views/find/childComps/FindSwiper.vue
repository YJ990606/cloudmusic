<template>
    <swiper class="findswiper">
        <swiper-item v-for="(item, index) in banners" v-bind:key="index">
            <img :src="item.imageUrl" alt="" @load="imageLoad" />
        </swiper-item>
    </swiper>
</template>

<script>
    import SwiperItem from "../../../components/common/swiper/SwiperItem.vue";
    import Swiper from "../../../components/common/swiper/Swiper.vue";

    export default {
        name: "FindSwiper",
        components: {
            Swiper,
            SwiperItem,
        },
        props: {
            banners: {
                type: Array,
                default() {
                    return [];
                },
            },
        },
        data() {
            return {
                isLoad: false,
            };
        },
        methods: {
            imageLoad() {
                if (!this.isLoad) {
                    this.$emit("swiperImageLoad");
                    this.load = true;
                }
            },
        },
    };
</script>

<style scoped>
    .findswiper {
        width: 93%;
        border-radius: 5px;
        position: fixed;
        top: 15px;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
</style>
