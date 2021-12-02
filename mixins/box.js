export default {
    data() {
        return {
            isBoxVisible: false
        };
    },
    mounted() {
        new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                this.isBoxVisible = true;
                observer.unobserve(entries[0].target);
            }
        }, { threshold: 0.1 }).observe(this.$refs.box);
    }
};
