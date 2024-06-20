<template>
    <div>
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
                    <p class="desc">ГЭР БҮЛИЙН ЭРХЭМ ГИШҮҮНДЭЭ ЦАГ ГАРГАЖ ЧАДАХГҮЙ БАЙНА УУ?</p>
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
                ХЭРВЭЭ ТИЙМ БОЛ ТУСЧ ХӨРШҮҮДДЭЭ ХАНДААРАЙ
            </div>
        </section>
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

        <section class="section bg-linear-back about">
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
    </div>
</template>
<script>
export default {
    data() {
        return {
            typify: ''
        }
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
            this.$_gsap.to(window, { duration: 1, scrollTo: window.innerHeight * (sectionId-1) });
        }
    }
}
</script>