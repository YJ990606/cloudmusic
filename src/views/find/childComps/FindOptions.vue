<template>
    <options>
        <options-item>
            <img
                slot="item-icon"
                src="../../../assets/img/icon/tabbar/dayrecommend.png"
                alt="每日推荐图标"
            />
            <div slot="item-text">每日推荐</div>
        </options-item>
        <options-item>
            <img
                slot="item-icon"
                src="../../../assets/img/icon/tabbar/fm.png"
                alt="私人FM"
            />
            <div slot="item-text">私人FM</div> </options-item
        ><options-item>
            <img
                slot="item-icon"
                src="../../../assets/img/icon/tabbar/singlist.png"
                alt="歌单"
            />
            <div slot="item-text">歌单</div> </options-item
        ><options-item>
            <img
                slot="item-icon"
                src="../../../assets/img/icon/tabbar/leaderboard.png"
                alt="排行榜"
            />
            <div slot="item-text">排行榜</div> </options-item
        ><options-item>
            <img
                slot="item-icon"
                src="../../../assets/img/icon/tabbar/digital-album.png"
                alt="数字专辑"
            />
            <div slot="item-text">数字专辑</div> </options-item
        ><options-item>
            <img
                slot="item-icon"
                src="../../../assets/img/icon/tabbar/meditation.png"
                alt="专注冥想"
            />
            <div slot="item-text">专注冥想</div> </options-item
        ><options-item>
            <img
                slot="item-icon"
                src="../../../assets/img/icon/tabbar/song-room.png"
                alt="歌房"
            />
            <div slot="item-text">歌房</div> </options-item
        ><options-item>
            <img
                slot="item-icon"
                src="../../../assets/img/icon/tabbar/game-zone.png"
                alt="游戏专区"
            />
            <div slot="item-text">游戏专区</div>
        </options-item>
    </options>
</template>

<script>
    import Options from "../../../components/common/options/Options.vue";
    import OptionsItem from "../../../components/common/options/OptionsItem.vue";

    export default {
        components: {
            Options,
            OptionsItem,
        },
    };
</script>

<style>
</style>
