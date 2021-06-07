<template>
    <div class="recsonglist">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "RecSongList",
    };
</script>

<style>
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
</style>