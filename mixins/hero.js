export default {
    data() {
        return {
            isHeroVisible: true,
            rotateX: 0,
            rotateY: 0
        };
    },
    computed: {
        transform() {
            return `--rotateX: ${this.rotateX}deg; --rotateY: ${this.rotateY}deg;`;
        }
    },
    methods: {
        handleMouseMove(event) {
            this.rotateX = (window.innerWidth / 2 - event.pageX) / 50;
            this.rotateY = (window.innerHeight / 2 - event.pageY) / 50;
        }
    },
    mounted() {
        new IntersectionObserver(
            entries => { this.isHeroVisible = entries[0].isIntersecting; },
            { threshold: 1 }
        ).observe(this.$refs.heroText);
    }
};
