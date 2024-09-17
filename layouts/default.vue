<template>
    <div class="default__layout">
        <TopPane @open-contact="openModal" />
        <Horizon />
        <NuxtPage />
        <Contact :is-modal-open="isContactOpen" @close-contact="closeModal" />
        <FooPane />
        <Loader />
    </div>
</template>

<script>
import TopPane from '@/components/TopPane.vue';
import Horizon from '@/components/Horizon.vue';
import Contact from '@/components/Contact.vue';
import FooPane from '@/components/FooPane.vue';
import Loader from '@/components/Loader.vue';
export default {
    components: {
        TopPane,
        Horizon,
        Contact,
        FooPane,
        Loader
    },
    data() {
        return {
            isContactOpen: false
        };
    },
    mounted() {
        if (document && document.fonts) {
            document.fonts.ready.then(function () {
                document.body.classList.add('fonts__loaded');
            });
        } else document.body.classList.add('fonts__loaded');
    },
    methods: {
        openModal() {
            this.isContactOpen = true;
            document.body.addEventListener('click', this.closeModal, {
                once: true
            });
        },
        closeModal() {
            this.isContactOpen = false;
            document.body.removeEventListener('click', this.closeModal);
        }
    }
};
</script>

<style lang="scss" scoped>
.default__layout {
    height: 100%;
    width: 100vw;
}
</style>
