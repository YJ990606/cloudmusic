<template>
    <div id="find">
        <!-- 导航栏 -->
        <nav-bar class="find-nav">
            <img
                slot="left"
                src="../../assets/img/icon/navbar/menu.png"
                alt="菜单图标"
            />
            <input slot="center" type="text" placeholder="搜索音乐" />
            <img
                slot="right"
                src="../../assets/img/icon/navbar/microphone.png"
                alt="麦图标"
            />
        </nav-bar>
        <scroll
            class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @pullingUp="loadMore"
        >
        </scroll>
		<find-swiper :banners="banners" />
		<find-options :data="data"/>
		<br /><br />
		<hr />
		<find-rec-song-list :result="result" />
		
    </div>
</template>

<script>
    import FindSwiper from "./childComps/FindSwiper.vue";
    import FindOptions from "./childComps/FindOptions.vue";
    import FindRecSongList from "./childComps/FindRecSongList.vue";

    import NavBar from "../../components/common/navbar/NavBar.vue";
    import Scroll from "../../components/common/scroll/Scroll.vue";

    import { getBanner, getResult, getData } from "../../network/find.js";
    export default {
        name: "Find",
        components: {
            NavBar,
            Scroll,
            getBanner,
			getResult,
			getData,
            FindSwiper,
            FindOptions,
            FindRecSongList,
        },
        data() {
            return {
                banners: [],
                result: [],
				data: []
            };
        },
        computed: {},
        created() {
            this.getBanner();
            this.getResult();
			this.getData()
        },
        // activated() {
        //     this.$refs.scroll.scrollTo(0, this.saveY, 0);
        // },
        // deactivated() {
        //     this.saveY = this.$refs.scroll.getScrollY();
        // },
        methods: {
            loadMore() {
                // this.getHomeGoods(this.currentType)
            },
            getBanner() {
                getBanner().then((res) => {
                    this.banners = res.banners;
                });
            },
            getResult() {
                getResult().then((res) => {
                    this.result = res.result;
                });
            },
			getData() {
			    getData().then((res) => {
			        this.data = res.data;
			    });
			},
        },
    };
</script>

<style>
    #find {
        padding-top: 44px;
        height: 100vh;
        position: relative;
    }
    .find-nav {
        background-color: #ee3f4d;
        color: white;
        height: 50px;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    .find-nav img {
        width: 25px;
        height: 25px;
        margin: 3px 12px 1px;
        vertical-align: middle;
    }
    .find-nav input {
        width: 70%;
		position: fixed;
		left: 0;
		right: 0;
		top: 9px;
		margin: auto;
        border-radius: 20px;
		border-color: crimson;
        text-align: center;
		color: black;
        padding: 5px;
        outline: none;
        background-image: url(../../assets/img/icon/navbar/search.png);
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: left center;
    }
    .content {
        overflow: hidden;
        position: absolute;
        top: 25px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
	
</style>
