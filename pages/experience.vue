<template>
    <main>
        <Hero />
        <What />
        <Where />
    </main>
</template>

<script>
import Hero from '@/components/Experience/Hero.vue';
import What from '@/components/Experience/What.vue';
import Where from '@/components/Experience/Where.vue';

export default {
    components: {
        Hero,
        What,
        Where
    },
    transition(to, from) {
        return from ? 'slide-left' : '';
    }
};
</script>
