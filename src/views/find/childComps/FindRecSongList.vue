<template>
	<div>
	<rec-song-list-head>
		<h4 slot="head">{{headtext}}</h4>
		<button slot="button">{{buttontext}}</button>
	</rec-song-list-head>
    <rec-song-list class="rec-songlist">
        <rec-song-list-item
            v-for="(item, index) in playlists"
            v-bind:key="index"
        >
            <img
                slot="item-image"
                :src="item.coverImgUrl"
                alt=""
                @load="imageLoad"
            />
            <div slot="item-text" class="text">
				{{ item.name }}
			</div>
        </rec-song-list-item>
    </rec-song-list>
	</div>
</template>

<script>
    import RecSongList from "../../../components/common/songlist/RecSongList.vue";
    import RecSongListItem from "../../../components/common/songlist/RecSongListItem.vue";
	import RecSongListHead from "../../../components/common/songlist/RecSongListHeader.vue";

    export default {
        name: "FindRecSongList",
        components: {
			RecSongListHead,
            RecSongList,
            RecSongListItem,
        },
        props: {
			//内容
            playlists: {
                type: Array,
                default() {
                    return [];
                },
            },
        },
        data() {
            return {
                isLoad: false,
				headtext: '推荐歌单',
				buttontext: '更多>'
            };
        },
        methods: {
            imageLoad() {
                if (!this.isLoad) {
                    this.$emit("recSongListImageLoad");
                    this.load = true;
                }
            },
		}
 }
</script>

<style scoped>
</style>

