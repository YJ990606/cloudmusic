<template>
	<div class="head">
		<slot name="head"></slot>
		<slot name="button"></slot>
	</div>
</template>

<script>
	export default{
		name: "RecSongListHead"
	}
</script>

<style>
	.head {
		display: flex;
		justify-content: space-between;
		padding: 10px 15px ;
	}
	.head button{
		width: 50px;
		height: 20px;
		background-color: #fff;
		font-size: 0.75rem;
		border-radius: 5px;
		border-style: none;
	}
</style>
