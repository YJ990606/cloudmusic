<template>
    <options>
        <options-item  v-for="(item, index) in data"
            v-bind:key="index">
            <img
                slot="item-icon"
                :src="item.iconUrl"
            />
            <div slot="item-text">{{item.name}}</div>
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
		props: {
			//内容
		    data: {
		        type: Array,
		        default() {
		            return [];
		        },
		    },
		},
		methods: {
		    imageLoad() {
		        if (!this.isLoad) {
		            this.$emit("recSongListImageLoad");
		            this.load = true;
		        }
		    },
		}
    };
</script>

<style>
</style>
