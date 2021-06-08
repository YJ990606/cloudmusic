<template>
	<div>
	<rec-song-list-head class="head">
		<h4 slot="head">{{headtext}}</h4>
		<a slot="button" href="">{{buttontext}}</a>
	</rec-song-list-head>
    <rec-song-list class="recsonglist">
        <rec-song-list-item class="recsonglist-item"
            v-for="(item, index) in result"
            v-bind:key="index"
        >
            <img
                slot="item-image"
                :src="item.picUrl"
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
            result: {
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
	.head {
			display: flex;
			justify-content: space-between;
			padding: 10px 15px ;
	}
	.head a{
		width: 50px;
		height: 20px;
		background-color: #fff;
		font-size: 0.75rem;
		border-radius: 5px;
		border-width: 0.0625rem;
		border-color: #000000;
		text-shadow: #000000;
	}
	
	.recsonglist {
		overflow-x: scroll;
		list-style: none;
		white-space: nowrap;
		display: flex;
		position: relative;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.recsonglist::-webkit-scrollbar {
	    display: none;
	}
	
	.recsonglist-item {
		flex: 1;
		justify-content: space-evenly;
	    padding: 0 10px 0;
	    width: 100%;
	}
	
	.recsonglist-item img {
	    width: 100px;
	    margin: 3px 0px 2px;
		border-radius: 5%;
	    vertical-align: middle;
	}
	
	.recsonglist-item div{
		width: 100px;
		overflow: auto;
		font-size: 12px;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		text-align: center;
	}
	.recsonglist-item div::-webkit-scrollbar {
	    display: none;
	}
</style>

