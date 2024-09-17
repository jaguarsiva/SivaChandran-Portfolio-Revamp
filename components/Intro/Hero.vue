<template>
    <section
        class="hero__section"
        v-on="{ mousemove: canHover ? handleMouseMove : () => {} }"
    >
        <h1 ref="heroText" class="hero__text">Intro</h1>
        <div
            class="hero__image"
            :class="{ is__visible: isHeroVisible }"
            :style="transform"
        >
            <img
                src="~/assets/images/intro__hero.svg"
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
.hero__image {
    img {
        @media (max-width: 767px) {
            max-width: 65vw;
        }
    }

    @media (max-width: 600px) {
        height: calc(100vh - 75px);
    }
}
</style>
