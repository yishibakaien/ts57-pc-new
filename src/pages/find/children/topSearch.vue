<template lang="html">
	<div class="hotSearch-content" ref="hotSearch">
		<ts-title-block>爆款热搜</ts-title-block>
		<ts-grid :data="BurstHotSearch">
			<ts-grid-item width="200px" v-for="(product,index) in BurstHotSearch" :key="product" @click="handleViewProduct(product,index)">
				<span class="ranking hotSearch-rank" :class="`ranking_${index+1}`" v-if="index<3&&Params.pageNo===1"></span>
				<ts-image width="170" height="170" :canView="false" disabledHover :src="product.pics[0]+'?x-oss-process=image/resize,m_fill,h_170,w_170'+watermask">
				</ts-image>
				<template slot="footer" class="hotSearch-footer">
					<p>搜索量&nbsp;<span class="hotSearch-footer--searchNum">{{product.searchs}}</span></p>
					<p class="hotSearch-footer--total">共{{product.sameCount}}款</p>
				</template>
			</ts-grid-item>
		</ts-grid>
		<br/>
		<ts-button type="plain" @click="handleLoadMore">加载更多爆款</ts-button>
	</div>
</template>

<script>
	import {
		burstHotSearch
	} from '@/common/api/api';
	import {mapGetters} from 'vuex';
	export default {
		data() {
			return {
				Params: {
					pageNo: 1,
					pageSize: 12
				},
				pageData: {},
				BurstHotSearch: {}
			};
		},
		methods: {
			async handleLoadMore(number) {
				this.Params.pageNo++;
				let data = (await burstHotSearch(this.Params)).data.data.list;
				this.BurstHotSearch = this.BurstHotSearch.concat(data);
			},
			// 进去某个商品
			handleViewProduct(item, id) {
				this.$router.push({
					name: 'updateResult',
					params: {
						id: id + 1
					},
					query: {
						sameCount: item.sameCount,
						searchs: item.searchs
					}
				});
			}
		},
		computed: {
			...mapGetters(['watermask'])
		},
		async created() {
			this.BurstHotSearch = (await burstHotSearch(this.Params)).data.data.list;
		}
	};
</script>

<style lang="css" scoped>
	@component-namespace hotSearch {
		@component rank {
			position: absolute;
			z-index: 1;
		}
		@component content {
			text-align: center;
		}
		@component footer {
			@modifier searchNum {
				color: #FF8400;
			}
			@modifier total {
				color: #999999;
			}
		}
	}
</style>
