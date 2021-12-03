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
    },
    transition(to, from) {
        if (!from) return '';
        return from.meta.pageNo < to.meta.pageNo ? 'slide-left' : 'slide-right';
    }
};
</script>
