<template>
    <div class="w-[100vw]">
        <!-- 搜索框 -->
        <div
            class="w-[100%] h-[5vw] flex space-between items-center justify-evenly bg-gradient-to-r from-purple-300 to-pink-300">
            <span class="text-[4vw] relative text-blue-gray-500">
                <Icon icon="iconoir:menu-scale" />
            </span>
            <span class="text-[4vw] absolute left-[25%]">
                <Icon icon="grommet-icons:form-search" />
            </span>
            <input type="text"
                class="h-[80%] text-[2vw] w-[70%] rounded-full suojin bg-gradient-to-r from-purple-100 to-pink-100"
                :placeholder="tishi.showKeyword" :v-model="suokey">
            <span class="text-[4vw] text-blue-gray-500">
                <Icon icon="solar:microphone-bold" />
            </span>
        </div>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe pt-[3vw]" :autoplay="3000" indicator-color="white ">
            <van-swipe-item v-for="item in banners" class="w-[100%] rounded-[3vw] overflow-hidden ">
                <img :src="item.pic" alt="" class="w-[100%] h-[100%]" />
            </van-swipe-item>
        </van-swipe>

        <!-- 菜单 -->
        <ul class=" p-[1.5vw] overflow-auto flex justify-between items-center menu pt-[4vw]">
            <template v-for="(item, index) in menu">
                <li v-if="true" :key="item.id" class="flex flex-col items-center mr-[5vw]">
                    <Icon :icon="icon[index]" color="red" width="36" height="36" class="w-[5vw] h-[5vw]" />
                    <p class="text-[#969aa3] text-[1.5vw] w-[15vw] text-center">{{ item.name }}</p>
                </li>
            </template>
        </ul>

        <!-- 推荐歌单 -->
        <h2 class="text-2xl pt-[4vw] pl-6 font-bold ">推荐歌单></h2>
        <div class="pl-6 pt-[1vw] w-screen overflow-auto menu h-[60vw]">

            <ul class="flex justify-between  menu relative w-[270vw]">
                <li v-for="item in personalized" class=" flex flex-col relative pt-[2vw] items-center mr-[10vw] h-[30vw] ">
                    <img :src="item.picUrl" alt="" class="w-[60vw] h-[40vw]">
                    <p class="w-[30vw] pt-[2vw] text-[1vw]">{{ item.name }}</p>
                    <p class="absolute text-white text-[1vw] flex items-center right-4">
                        <span class="text-[5vw]">
                            <Icon icon="ph:play-bold" />
                        </span>
                        <span class="pl-2">{{ Math.floor(item.playCount / 10000) }}万</span>
                    </p>
                    <p class="absolute text-white bottom-0 right-2 text-[5vw]">
                        <Icon icon="ph:play-bold" />
                    </p>
                </li>
            </ul>
        </div>

        <!-- 新歌新碟 -->
        <h1 class="flex pl-6 items-center font-bold font-mono text-[2.5vw] justify-between">
            <span class="flex items-center">
                {{ dingzhi.uiElement.subTitle.title }}/{{ dingzhi.creatives[4].uiElement.mainTitle.title }}
                <Icon icon="mingcute:right-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw]" />
            </span>
            <span>
                <Icon icon="ri:more-2-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
            </span>
        </h1>


        <van-swipe class="my-swipe" :indicator="false" :loop="false" indicator-color="white">
            <van-swipe-item class="flex flex-col pl-6 items-start py-3  border-y " v-for="item in newsongArr"
                :key="item.id">
                <div class="flex my-3 " v-for="item in item.resources" :key="item.id">
                    <img class="w-[15vw] h-[15vw] mr-3 rounded" :src="item.uiElement.image.imageUrl" alt="" />
                    <div class="flex flex-col justify-between">
                        <p class=" text-sm">{{ item.uiElement.mainTitle.title }}</p>
                        <p class=" text-sm text-[3vw] mt-[6vw]">{{ item.uiElement.subTitle.title }}</p>
                    </div>
                </div>
            </van-swipe-item>
        </van-swipe>

        <!-- 排行榜 -->
        <h2 class="text-2xl pt-[4vw] pl-6 font-bold ">排行榜/</h2>
        <van-swipe class="my-swipe pl-6" :loop="false" indicator-color="white">
            <van-swipe-item v-for="item in blocks">
                <div :key="item.id"
                    class="p-[2vw] mr-[10vw] overflow-hidden w-[90vw] m-[2.5vw] ml-0 h-[50vw] bg-white scroll-item"
                    ref="song">
                    <div class="flex justify-between w-[100%]">
                        <h2 class="text-2xl pt-[2vw] pl-3 font-bold ">{{ item.uiElement.mainTitle.title }}</h2>
                        <p class="text-[3vw] leading-[10vw] text-ellipsis overflow-hidden whitespace-nowrap w-[30vw]">
                            {{ item.uiElement.mainTitle.titleDesc }}
                        </p>
                    </div>
                    <ul class="">
                        <li v-for="(items, indexs) in 3" :key="indexs.id" class="mb-[3vw]">
                            <div class="flex relative w-[100%]">
                                <img :src="item.resources[indexs].resourceExtInfo?.songData.album
                                    .blurPicUrl
                                    " class="w-[10vw]" alt="" />
                                <p class="text-[5vw] w-[10vw] text-center">
                                    {{ indexs + 1 }}
                                </p>
                                <div>
                                    <p
                                        class="text-[3.5vw] font-normal w-[40vw] text-ellipsis overflow-hidden whitespace-nowrap">
                                        {{
                                            item.resources[indexs].resourceExtInfo?.songData.name
                                        }}
                                    </p>
                                    <p class="text-[2.5vw]">
                                        {{
                                            item.resources[indexs].resourceExtInfo?.artists[0].name
                                        }}
                                        <span class="absolute w-[8vw] h-[5vw] right-[3vw] text-[3vw] top-[1vw]" ref="sps"
                                            :style="{ color: 'red' }">{{
                                                item.resources[indexs]?.uiElement.labelText.text
                                            }}</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </van-swipe-item>
        </van-swipe>


        <div v-for="item in rili">
            <p>{{ dayjs(onlineTime).format('MM/DD') }}</p>
        </div>






    </div>
</template>

<script>
import axios from 'axios';

import { featchSearchDefault, fetchSearchResult } from './request/index'

export default {
    data() {
        return {
            menu: [],
            banners: [],
            activeMenuItem: '',
            personalized: [],
            icon: ["tabler:calendar", "ph:radio-fill", "icon-park-outline:music-menu", "icon-park-solid:ranking-list", "mdi:audio-book", "ic:outline-live-tv", "vaadin:user-heart", "bi:file-earmark-music", "mdi:hammer-sickle", "solar:gamepad-bold"],
            dingzhi: [],
            xingge: [],
            newsongArr: [], //新歌速递数据
            blocks: [],
            tishi: [],
            suokey: '',
            rili: []


        };
    },
    methods: {
        toggleMenu(name) {
            this.activeMenuItem = name;
            this.fetchPlaylists(name);
        },



        fetchPlaylists(cat) {
            axios
                .get(
                    'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page',
                    {
                        params: {
                            cat: cat,
                        },
                    }
                )
                .then((res) => {
                    // console.log( res.data.playlists);
                    this.playlists = res.data.playlists;
                });
        },


    },
    async created() {
        axios
            .get(
                'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'

            )
            .then((res) => {
                // console.log(res);
                this.banners = res.data.data.blocks[0].extInfo.banners;
                this.dingzhi = res.data.data.blocks[5];
                this.newsongArr = res.data.data.blocks[5].creatives;
                this.blocks = res.data.data.blocks[3].creatives;
                // console.log(res.data.data.blocks[5].creatives[0].resources);
            })
            .then((cat) => this.fetchPlaylists(cat))
            .catch((err) => {
                console.log(err);
            });
        // 菜单
        axios
            .get(
                'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball'
            )
            .then((res) => {
                this.menu = res.data.data
            }).catch((err) => console.log(err));

        // 推荐歌单
        axios
            .get(
                'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized?limit=6'
            )
            .then((res) => {
                this.personalized = res.data.result;
                // console.log(this.personalized);
            })
            .catch((err) => {
                console.log(err);
            });

        // 音乐日历

        axios
            .get(
                'https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1677417600000&endTime=1677417600000'
            )
            .then((res) => {
                this.rili = res.data.data.calendarEvents;
                // console.log(this.personalized);
            })
            .catch((err) => {
                console.log(err);
            });

        // 搜索部分
        const ress = await featchSearchDefault().catch((err) => console.log(err));
        this.tishi = ress.data.data;
        console.log(this.tishi);


    },




};

</script>

<style>
.suojin {
    text-indent: 10em;
}

.hua {
    overflow: auto;
}

.menu::-webkit-scrollbar {
    height: 0px;
    width: 20px;
}



.hua>li {
    width: 20vw;
    height: 12vw;
    /* float: left; */


}

body {
    background-color: #F8F9FD;
}
</style>