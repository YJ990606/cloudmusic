<template>
    <div class="options-item">
        <slot name="item-icon"></slot>
        <slot name="item-text"></slot>
    </div>
</template>

<script>
    export default {
        name: "OptionsItem",
    };
</script>

<style scoped>
    .options-item {
        padding: 0 15px 0;
        display: inline-block;
		width: 50%;
		height: 54px;
        font-size: 12px;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        text-align: center;
    }

    .options-item img {
		width: 35px;
        margin: 3px 0px 2px;
		background-color: #e9ccd3;
		border-radius: 50%;
        vertical-align: middle;
    }
</style>
