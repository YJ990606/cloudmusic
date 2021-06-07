<template>
    <div class="options" ref="options">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Options",
    };
</script>

<style scoped>
    .options {
        overflow-x: scroll;
        list-style: none;
        white-space: nowrap;
		display: flex;
		position: relative;
		left: 0;
		right: 0;
		top: 1.5rem;
		bottom: 0;
    }
    .options::-webkit-scrollbar {
        display: none;
    }
</style>