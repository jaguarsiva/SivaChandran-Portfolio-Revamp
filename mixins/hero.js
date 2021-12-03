export default {
    data() {
        return {
            isHeroVisible: true,
            rotateX: 0,
            rotateY: 0,
            translateX: 0,
            translateY: 0
        };
    },
    computed: {
        transform() {
            return `--rotateX: ${this.rotateX}deg; --rotateY: ${this.rotateY}deg; --translateX: ${this.translateX}px; --translateY: ${this.translateY}px;`;
        }
    },
    methods: {
        handleMouseMove(event) {
            const x = window.innerWidth / 2 - event.pageX;
            const y = window.innerHeight / 2 - event.pageY;
            this.translateX = x / 8;
            this.translateY = y / 4;
            this.rotateX = x / -22;
            this.rotateY = (y > 0) ? (y / 15) : (y / 10);
        }
    },
    mounted() {
        new IntersectionObserver(
            entries => { this.isHeroVisible = entries[0].isIntersecting; },
            { threshold: 0.5 }
        ).observe(this.$refs.heroText);
    }
};
