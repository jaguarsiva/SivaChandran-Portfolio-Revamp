<template>
    <section ref="horizon" class="horizon">
        <div class="hero__bg" :class="{ is__visible: isHorizonVisible }">&nbsp;</div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isHorizonVisible: false
        }
    },
    mounted() {
        new IntersectionObserver(
            entries => { this.isHorizonVisible = entries[0].isIntersecting; },
            { threshold: 0.5 }
        ).observe(this.$refs.horizon);
    }
}
</script>

<style lang="scss" scoped>

.horizon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
}

.hero__bg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-image: url('~assets/images/background.jpg');
    transition: opacity 400ms cubic-bezier(0.62, 0.02, 0.34, 1);
    opacity: 0;

    &.is__visible {
        opacity: 1;
    }
}
</style>
