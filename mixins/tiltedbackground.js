
export default {
    data() {
        return {
            isSectionVisible: false
        };
    },
    mounted() {
        new IntersectionObserver(
            entries => { this.isSectionVisible = entries[0].isIntersecting; },
            { threshold: 0.05 }
        ).observe(this.$refs.tiltedSection);
    }
};
