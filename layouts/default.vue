<template>
    <div class="default__layout">
        <TopPane @open-contact="openModal" />
        <Horizon />
        <Nuxt />
        <Contact :is-modal-open="isContactOpen" @close-contact="closeModal" />
        <FooPane />
    </div>
</template>

<script>
import TopPane from '@/components/TopPane.vue';
import Horizon from '@/components/Horizon.vue';
import Contact from '@/components/Contact.vue';
import FooPane from '@/components/FooPane.vue';
export default {
    components: {
        TopPane,
        Horizon,
        Contact,
        FooPane
    },
    data() {
        return {
            isContactOpen: false
        };
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
    width: 100%;
}
</style>
