<template>
	<rec-song-list-head class="head">
		<button name="head">{{headtext}}</button>
		<button slot="button">{{buttontext}}</button>
	</rec-song-list-head>
	<rec-song-list class="recsonglist">
	    <rec-song-list-item class="recsonglist-item"
	        v-for="(item, index) in data"
	        v-bind:key="index"
	    >
	        <audio
	            slot="item-image"
	            :src="item.url"
	            alt=""
	            @load="imageLoad"
	        />
	        <div slot="item-text" class="text">
				{{ item.name }}
			</div>
	    </rec-song-list-item>
	</rec-song-list>
</template>

<script>
	import RecSongList from "../../../components/common/songlist/RecSongList.vue";
	import RecSongListItem from "../../../components/common/songlist/RecSongListItem.vue";
	import RecSongListHead from "../../../components/common/songlist/RecSongListHeader.vue";
	
	export default{
		name: "FindSongStyle",
		components:{
			RecSongListHead,
			RecSongList,
			RecSongListItem,
		},
		
		data() {
		    return {
		        isLoad: false,
				headtext: '精选音乐视频',
				buttontext: '换一批'
		    };
		},
		
	}
</script>

<style>
</style>
