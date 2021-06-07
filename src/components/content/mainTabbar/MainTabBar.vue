<template>
    <tab-bar class="tab-bar">
        <tab-bar-item path="/find">
            <img
                slot="item-icon"
                src="../../../assets/img/icon/tabbar/find.png"
                alt="发现图标"
            />
            <img
                slot="item-icon-active"
                src="../../../assets/img/icon/tabbar/afterfind.png"
                alt=""
            />
            <div slot="item-text">发现</div>
        </tab-bar-item>
        <tab-bar-item path="/sprinkler">
            <img
                slot="item-icon"
                src="../../../assets/img/icon/tabbar/music.png"
                alt=""
            />
            <img
                slot="item-icon-active"
                src="../../../assets/img/icon/tabbar/aftermusic.png"
                alt=""
            />
            <div slot="item-text">播客</div>
        </tab-bar-item>
        <tab-bar-item path="/mine">
            <img
                slot="item-icon"
                src="../../../assets/img/icon/tabbar/mine.png"
                alt=""
            />
            <img
                slot="item-icon-active"
                src="../../../assets/img/icon/tabbar/aftermine.png"
                alt=""
            />
            <div slot="item-text">我的</div>
        </tab-bar-item>
        <tab-bar-item path="/ksong">
            <img
                slot="item-icon"
                src="../../../assets/img/icon/tabbar/ksong.png"
                alt=""
            />
            <img
                slot="item-icon-active"
                src="../../../assets/img/icon/tabbar/afterksong.png"
                alt=""
            />
            <div slot="item-text">K歌</div>
        </tab-bar-item>
        <tab-bar-item path="/yuncun">
            <img
                slot="item-icon"
                src="../../../assets/img/icon/tabbar/yuncun.png"
                alt=""
            />
            <img
                slot="item-icon-active"
                src="../../../assets/img/icon/tabbar/afteryuncun.png"
                alt=""
            />
            <div slot="item-text">云村</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "../../common/tabbar/TabBar.vue";
    import TabBarItem from "../../common/tabbar/TabBarItem.vue";

    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem,
        },
    };
</script>

<style scoped>
	.tar-bar{
		position: fixed;
		     left: 0;
		     bottom: 0;
		     width: 100%;
		     z-index: 1010;
	}
</style>
