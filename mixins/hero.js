export default {
    data() {
        return {
            isHeroVisible: true,
            translateX: 0,
            translateY: 0
        };
    },
    computed: {
        transform() {
            return `--translateX: ${this.translateX}px; --translateY: ${this.translateY}px;`;
        }
    },
    methods: {
        handleMouseMove(event) {
            this.translateX = (window.innerWidth / 2 - event.pageX) / 10;
            this.translateY = (window.innerHeight / 2 - event.pageY) / 10;
            // const xAxis = (window.innerWidth / 2 - event.pageX) / 25;
            // const yAxis = (window.innerHeight / 2 - event.pageY) / 25;
            // this.imageTransform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    },
    mounted() {
        new IntersectionObserver(
            entries => { this.isHeroVisible = entries[0].isIntersecting; },
            { threshold: 1 }
        ).observe(this.$refs.heroText);
    }
};
