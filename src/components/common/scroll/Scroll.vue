<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll";

    export default {
        name: "Scroll",
        props: {
            probeType: {
                type: Number,
                default: 0,
            },
            pullUpLoad: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                scroll: null,
            };
        },
        mounted() {
            //1.创建BScroll对象
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad,
                //监听图片加载调用refresh()重新计算高度
                observeDOM: true,
                observeImage: true,
                //使事件中的点击事件生效 click为false时 button可以监听点击而div不可以
                click: true,
                top: true,
                //增加鼠标滚轮滚动
                mouseWheel: true,
            });
            //2. 监听scroll滚动的位置 position表示位置坐标
            if (this.probeType === 2 || this.probeType === 3) {
                this.scroll.on("scroll", (position) => {
                    this.$emit("scroll", position);
                });
            }
            //3.监听scroll滚动到底部后上拉事件
            if (this.pullUpLoad) {
                this.scroll.on("pullingUp", () => {
                    this.$emit("pullingUp");
                });
            }
        },
        created() {
            this.$nextTick(() => {
                if (!this.scroll) {
                    this.scroll = new BScroll(this.$refs.wrapper, {
                        scrollX: true,
                        eventPassthrough: "vertical",
                    });
                }
            });
        },
        methods: {
            //从某一位置回到顶部
            scrollTo(x, y, time = 300) {
                this.scroll &&
                    this.scroll.scrollTo &&
                    this.scroll.scrollTo(x, y, time);
            },
            //结束上拉加载行为。此方法名不能与scroll中的finishPullUp()一样,否则识别不了scroll中的方法
            finishpullup() {
                this.scroll && this.scroll.finishPullUp();
            },
            getScrollY() {
                return this.scroll ? this.scroll.y : 0;
            },
        },
    };
</script>

<style scoped>
</style>
