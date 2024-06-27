<style>
    .swiper-container {
        overflow: hidden;
    }
</style>

<template>
    <div class="scroll-block" ref="scroller">
        <section class="section bg-linear">
            <div class="search-cont">
                <img src="@/assets/images/searchBar.png" class="search-bar" alt="">
                <p class="support-text-header titan-one-regular">ARE YOU</p>
                <p class="support-text titan-one-regular">NEED A</p>
                <p class="support-text-moving titan-one-regular" id="text">{{ typify }}</p>
            </div>
            <p class="montserratNormal text-grey desc">ХЭРЭВ ТА ТУСЧ ХӨРШҮҮДТЭЙ НЭГДЭХИЙГ ХҮСВЭЛ,<br>ДАРААХ ХОЛБООСУУДЫГ АШИГЛАЖ АППЛИКЭЙШНЭЭ ТАТНА УУ.</p>
            <div class="links">
                <a href="javascript:;"><img src="@/assets/images/appstore.png" alt=""></a>
                <a href="javascript:;"><img src="@/assets/images/playstore.png" alt=""></a>
            </div>

            <a class="scroll-down" href="javascript:;" @click="goNextSection(2)"><img src="@/assets/images/scrolldown.png" alt=""></a>
        </section>
        <section class="section bg-white">
            <div class="line"></div>
            <!-- <div class="title titan-one-regular"> WHAT WE DO</div> -->
            <div class="grid">
                <div class="grid-item">
                    <div class="img-container">
                        <img src="@/assets/images/pets.png" alt="">
                        <div class="curtain"></div>
                    </div>
                    <p class="desc">ГЭР БҮЛИЙН ГИШҮҮНДЭЭ ЦАГ ГАРГАЖ ЧАДАХГҮЙ БАЙНА УУ?</p>
                </div>
                <div class="grid-item">
                    <p class="desc">ХҮРГЭЖ ӨГМӨӨР БАЙВЧ ЦАГ ЗАВ ГАРАХГҮЙ БАЙГАА БИЗ</p>
                    <div class="img-container">
                        <img src="@/assets/images/delivery.png" alt="">
                        <div class="curtain"></div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="img-container">
                        <img src="@/assets/images/nurse.png" alt="">
                        <div class="curtain"></div>
                    </div>
                    <p class="desc">ЯАРАЛТАЙ ҮЕД ТАРИА ХИЙХ ХҮН ОЛДОХГҮЙ БАЙНА УУ?</p>
                </div>
                <div class="grid-item">
                    <p class="desc">ШААРДЛАГАТАЙ ҮЕД ТУСЛАХ ХҮН ОЛДОХГҮЙ БАЙНА УУ?</p>
                    <div class="img-container">
                        <img src="@/assets/images/school_police.png" alt="">
                        <div class="curtain"></div>
                    </div>
                </div>
            </div>

            <div class="foot-title">
                <span>
                    ХЭРВЭЭ ТИЙМ БОЛ ТУСЧ ХӨРШҮҮДДЭЭ ХАНДААРАЙ.
                </span>
                БИД ТАНТАЙ ХАМТ ТЭДГЭЭР АСУУДЛУУДЫГ ШИЙДВЭРЛЭХ БОЛНО
            </div>
        </section>
        
        <swiper
            :slides-per-view="1"
            :space-between="0"
            :speed="1000"
            :loop="false"
            @swiper="onSwiper"
            >
            <swiper-slide>
                <section class="section bg-linear about">
                    <div class="description">
                        <p class="title montserratNormal">
                            ӨӨРТ ХАМГИЙН ОЙР<br><span>ХӨРШДӨӨ ТУСЛАХ</span>, ТҮҮНЭЭС<br>ТУСЛАМЖ ХҮСЭХ
                        </p>
                    </div>
                    <div class="images">
                        <img src="@/assets/images/mappage.png" alt="">
                        <img src="@/assets/images/homepage.png" alt="">
                    </div>
                </section>
            </swiper-slide>

            <swiper-slide>
                <section class="section bg-linear about">
                    <div class="images back">
                        <img src="@/assets/images/jobtypes.png" alt="">
                        <img src="@/assets/images/userdescription.png" alt="">
                    </div>
                    <div class="description back">
                        <p class="title montserratNormal">
                            ТӨРӨЛ БҮРИЙН АЖИЛ <br>БОЛОН<span> БАТАЛГААЖСАН</span><br>ХЭРЭГЛЭГЧИД
                        </p>
                    </div>
                </section>
            </swiper-slide>
        </swiper>
        <section class="section contact bg-linear-back">
            <div class="grid big" :style="{width: '55%', height: '70%'}">
                <div class="grid-item">
                    <div class="big-description">
                        <span>
                            ХЭРВЭЭ ТИЙМ БОЛ ТУСЧ ХӨРШҮҮДДЭЭ ХАНДААРАЙ.
                            БИД ТАНТАЙ ХАМТ ТЭДГЭЭР АСУУДЛУУДЫГ ШИЙДВЭРЛЭХ БОЛНО
                        </span>
                        
                    </div>
                </div>
                <div class="gird-item">
                    <div class="links">
                        <a href="javascript:;"><img src="@/assets/images/appstore.png" alt=""></a>
                        <a href="javascript:;"><img src="@/assets/images/playstore.png" alt=""></a>
                        <a href="javascript:;" class="register-btn">
                            <img src="@/assets/images/playstore.png" alt="">
                            <p>
                                JOIN US
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                            </p>
                        </a>
                    </div>
                </div>
            </div>


            <footer>
                <div class="footer-cont">
                    <div class="grid">
                        <div class="grid-item">
                            <p class="title">ТУСЛАМЖ</p>
                            <ul>
                                <li><a href="javascript:;" @click="goNextSection(1)">Home</a></li>
                                <li><a href="javascript:;" @click="goNextSection(2)">WHAT WE DO</a></li>
                                <li><a href="javascript:;" @click="goNextSection(3)">HOW TO USE</a></li>
                            </ul>

                            <div class="copyright"><span>Personal Assistant</span> © 2024</div>
                        </div>
                        <div class="grid-item">
                            <p class="title">ХОЛБОО БАРИХ</p>

                            <ul class="address">
                                <li>Монгол Улс, Улаанбаатар, Баянгол дүүрэг, 10-р хороо, 43 тоот</li>
                                <li class="phone">9099 0918</li>
                                <li class="email">email@example.com</li>
                            </ul>

                            <div class="icons">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    </div>
</template>
<script>
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2';
import 'swiper/swiper-bundle.css';
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            typify: '',
            swiper: null,
            wheel: 0,
            isScroll: true
        }
    },
    beforeMount() {
        window.onwheel  = this.scroll;
    },
    mounted() {
        this.typify = Typify('#text', {
            text: ['HELPER?', 'FRIEND?'],
            delay: 100,
            loop: true,
            cursor: true,
            stringDelay: 1000 
        });
    },
    methods: {
        goNextSection(sectionId) {
            this.$_gsap.to(this.$refs.scroller, { duration: 1, scrollTo: window.innerHeight * (sectionId-1) });
        },
        swiperSlideTo(index) {
            this.swiper.slideTo(index);
        },
        onSwiper (swiper) {
            this.swiper = swiper;
        },
        scrollTo(scrollTo) {
            this.$_gsap.to(this.$refs.scroller, { duration: 1, scrollTo, onComplete: () => {
                this.isScroll = true;
                this.wheel = 0;
            } });
        },
        scroll(event) {

            if (!this.isScroll) return;

            this.wheel += event.deltaY;
            if (this.wheel > 100) {
                if (this.$refs.scroller.scrollTop / window.innerHeight === 2) {
                    if (this.swiper.activeIndex === 1) {
                        this.isScroll = false;
                        this.scrollTo(this.$refs.scroller.scrollTop+window.innerHeight);
                    } else {
                        this.isScroll = false;
                        const timeout = 1000;
                        this.swiper.slideTo(this.swiper.activeIndex + 1, timeout);
                        setTimeout(() => { this.isScroll = true; }, timeout);
                    }
                } else {
                    this.isScroll = false;
                    this.scrollTo(this.$refs.scroller.scrollTop+window.innerHeight);
                }
            } else if (this.wheel < -100) {
                if (this.$refs.scroller.scrollTop / window.innerHeight === 2) {
                    if (this.swiper.activeIndex === 0) {
                        this.isScroll = false;
                        this.scrollTo(this.$refs.scroller.scrollTop-window.innerHeight);
                    } else {
                        this.isScroll = false;
                        const timeout = 1000;
                        this.swiper.slideTo(this.swiper.activeIndex - 1, timeout);
                        setTimeout(() => { this.isScroll = true; }, timeout);
                    }
                } else {
                    this.isScroll = false;
                    this.scrollTo(this.$refs.scroller.scrollTop-window.innerHeight);
                }
            }
        }
    }
}
</script>