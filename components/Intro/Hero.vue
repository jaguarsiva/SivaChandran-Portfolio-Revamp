<template>
    <section class="hero__section">
        <h1 ref="heroText" class="hero__text">Intro</h1>
        <div
            class="hero__image"
            :class="{ is__visible: isHeroVisible }"
            :style="transform"
            @mousemove="handleMouseMove"
        >
            <img
                src="~assets/images/intro__hero.svg"
                alt="Boy working on a laptop"
            />
        </div>
    </section>
</template>

<script>
import hero from '~/mixins/hero';
export default {
    mixins: [hero]
}
</script>
