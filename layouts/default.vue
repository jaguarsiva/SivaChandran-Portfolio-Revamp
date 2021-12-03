<template>
    <div class="default__layout">
        <TopPane @open-contact="openModal" />
        <Horizon />
        <nuxt />
        <Contact :is-modal-open="isContactOpen" @close-contact="closeModal" />
        <FooPane />
    </div>
</template>

<script>
export default {
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
            document.body.removeEventListener('click', this.closeModal );
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
