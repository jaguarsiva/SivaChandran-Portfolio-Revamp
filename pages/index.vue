<template>
    <main>
        <Hero />
        <Who />
        <Itiernary />
    </main>
</template>

<script>
import Hero from '@/components/Intro/Hero.vue';
import Who from '~/components/Intro/Who.vue';
import Itiernary from '~/components/Intro/Itinerary.vue';
export default {
    components: {
        Hero,
        Who,
        Itiernary
    }
};
</script>
