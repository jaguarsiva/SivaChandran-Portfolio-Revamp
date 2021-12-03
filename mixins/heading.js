
export default {
    data() {
        return {
            isHeadingVisible: false
        }
    },
    mounted() {
        new IntersectionObserver(entries => {
            this.isHeadingVisible = entries[0].isIntersecting;
        }, {}).observe(this.$refs.sectionHeading);
    }
}
