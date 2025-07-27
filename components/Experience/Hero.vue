<template>
    <section
        class="hero__section"
        v-on="{ mousemove: canHover ? handleMouseMove : () => {} }"
    >
        <h1 ref="heroText" class="hero__text">Experience</h1>
        <div
            class="hero__image"
            :class="{ is__visible: isHeroVisible }"
            :style="transform"
        >
            <img
                src="~/assets/images/works__hero.svg"
                alt="Boy working on a laptop"
            />
        </div>
    </section>
</template>

<script>
import hero from '~/mixins/hero';
export default {
    mixins: [hero]
};
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
    .hero__text {
        font-size: rem(140);
    }
}
</style>
