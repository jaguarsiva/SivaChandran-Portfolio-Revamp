<template>
    <section class="hero__section" @mousemove="handleMouseMove">
        <h1 ref="heroText" class="hero__text">Skills</h1>
        <div
            class="hero__background"
            :class="{ is__visible: isHeroVisible }"
        ></div>
        <div
            class="hero__image"
            :class="{ is__visible: isHeroVisible }"
            :style="transform"
        >
            <img
                src="~assets/images/skills__hero.svg"
                alt="Boy working on a laptop"
            />
        </div>
    </section>
</template>

<script>
import hero from '@/mixins/hero.js';
export default {
    mixins: [hero]
}
</script>

<style lang="scss" scoped>

img {
    --opacity: 0;
    --scale: 0.9, 0.9, 0.9;
    position: absolute;
    left: 50%;
    bottom: -175px;
    height: 767px;
    transition: opacity 200ms ease-in 200ms, transform 200ms ease-in 200ms;
    opacity: var(--opacity);
    transform: translateX(-50%) scale3d(var(--scale)) translateZ(200px);
    transform-style: preserve-3d;
    perspective: 100px;

    .is__visible & {
        --opacity: 1;
        --scale: 1, 1, 1;
    }
}
</style>
