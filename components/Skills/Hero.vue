<template>
    <section class="hero__section" @mousemove="handleMouseMove">
        <h1 ref="heroText" class="hero__text">Skills</h1>
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
