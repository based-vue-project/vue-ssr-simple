<template>
	<div class="wap">
		<ul>
			<li v-for="(item, index) in list" @click="showTitle(item.title)">
				<img :src="item.image">
				<p>{{item.title}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	// import Vue from 'vue'
	// import { mapGetters } from 'vuex'
	// import { LIST } from '../store/mutation-types'
	export default {
		data() {
			return {
				list: [{
                    "appointStatus": 0,
                    "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/05/05/183558.90013339.jpg",
                    "liveId": 634,
                    "liveStatus": 4,
                    "startTime": 1494313262000,
                    "statistic": 64783,
                    "title": "《超凡战队》首映礼发布会",
                    "videoId": 0
                }]
			}
		},
		// computed: {
	 //      ...mapGetters(['list'])
	 //    },
	 //    mounted() {
		// 	Vue.axios.get('http://localhost:3000/data').then((res) => {
		// 		const list = res.data.data.liveWodList
		// 		this.$store.commit(LIST.GET_DATA, list)
		// 	})
		// },
		methods: {
			showTitle(title) {
				alert(title)
			}
		}
	
	}
</script>

<style lang="less">
    ul {
        // width: 1300px;
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: center;
    }

    li {
        width: 380px;
        height: 270px;
        margin-right: 30px;
        background-color: #f2f2f2;
        cursor: pointer;
        margin-top: 10px;
    }

    img {
        width: 380px;
        height: 214px;
    }

    p {
        width: 380px;
        padding-left: 15px;
        font-size: 16px;
    }
</style>