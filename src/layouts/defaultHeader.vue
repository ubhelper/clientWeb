<template>
    <div>
        <div class="header" v-bind:class="{ 'bg-white': whiteBg }">
            <div class="container">
                <router-link to="/"><img class="logo" src="@/assets/logo.png" alt=""></router-link>

                <div class="menu-bar" v-if="$route.name == 'Home'">
                    <a href="javascript:;" @click="popup = true">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="popup" :hidden="!popup">
            <div class="popup-body">
                <div class="close" @click="popup = false">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                    </svg>
                </div>


                <div>
                    <ul>
                        <li><a href="javascript:;" @click="scrollTop(1)">HOME</a></li>
                        <li><a href="javascript:;" @click="scrollTop(2)">WHAT WE DO</a></li>
                        <li><a href="javascript:;" @click="scrollTop(3)">HOW TO USE</a></li>
                        <li><a href="javascript:;" @click="scrollTop(4)">CONTACT</a></li>
                        <!-- <li><router-link to="/register">REGISTER</router-link></li> -->
                    </ul>
                </div>
            </div>
        </div>

        <div class="scrolltop" ref="scrollTop" @click=scrollTop :hidden=hidden>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
        </div>
    </div>
</template>
<script>
import router from '../router';

export default {
    data() {
        return {
            popup: false,
            whiteBg: false,
            hidden: true
        }
    },
    methods: {
        handleScroll() {
            if (document.querySelector('.scroll-block').scrollTop < 10) {
                this.whiteBg = false;
                this.hidden = true;
            } else {
                this.whiteBg = true;
                this.hidden = false;
            }
        },
        scrollTop(scroll = null) {
            if (!scroll) {
                this.$_gsap.to(document.querySelector('.scroll-block'), { duration: 1, scrollTo: 0 });
                return;
            }

            this.$_gsap.to(document.querySelector('.scroll-block'), { duration: 1, scrollTo: window.innerHeight * (scroll-1) });
            this.popup = false;
        }
    },
    mounted() {
        const timer = setInterval(() => {
            if (document.querySelector('.scroll-block')) {
                clearInterval(timer);
                document.querySelector('.scroll-block').addEventListener('scroll', this.handleScroll);
            }
        }, 100);
    }
}
</script>