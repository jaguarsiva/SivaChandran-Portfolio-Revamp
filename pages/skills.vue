<template>
    <main>
        <Hero />
        <What />
        <!-- <How /> -->
    </main>
</template>

<script>
import Hero from '@/components/Skills/Hero.vue';
import What from '@/components/Skills/What.vue';
import How from '@/components/Skills/How.vue';

export default {
    components: {
        Hero,
        What,
        How
    },
    transition(to, from) {
        if (!from) return '';
        else if (from.name === 'index') return 'slide-left';
        else return 'slide-right';
    }
};
</script>
