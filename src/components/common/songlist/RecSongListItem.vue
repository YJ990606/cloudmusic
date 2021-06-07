<template>
    <div class="recsonglist-item">
        <slot name="item-image"></slot>
        <slot name="item-text"></slot>
    </div>
</template>

<script>
    export default {
        name: "RecSongListItem",
    };
</script>

<style scoped>
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
