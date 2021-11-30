<template>
    <main>
        <Hero />
        <Intro />
        <Itiernary />
    </main>
</template>

<script>
import Hero from '@/components/Intro/Hero.vue';
import Intro from '@/components/Intro/Intro.vue';
import Itiernary from '~/components/Intro/Itinerary.vue';
export default {
    components: {
        Hero,
        Intro,
        Itiernary
    }
};
</script>
