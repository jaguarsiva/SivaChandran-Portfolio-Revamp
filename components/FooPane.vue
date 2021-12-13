<template>
    <footer ref="footer" :class="{ footer__visible: isFooterVisible }">
        <p class="flex-center">
            <span class="tahu first"> Made with </span>
            <span class="heartin relative">
                <img src="~assets/images/heart.svg" alt="heart" class="heart">
                <img src="~assets/images/hands.svg" alt="hands" class="hands">
            </span>
            <span class="tahu last"> by Siva Chandran </span>
        </p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            isFooterVisible: false
        }
    },
    mounted() {
        new IntersectionObserver(entries => {
            this.isFooterVisible = entries[0].isIntersecting;
        }, { threshold: 0.5 }).observe(this.$refs.footer);
    }
}
</script>

<style lang="scss" scoped>
footer {
    position: relative;
    z-index: 2;
    padding-block-start: 125px;
    padding-inline: 20px;
    background-color: #f1f5f5;
    overflow: hidden;
}

p {
    gap: 50px;
}

span {
    display: block;
    font-size: rem(42);
    line-height: 2;
    color: $black;
    opacity: 0;
    transform: translateY(50px);
    width: fit-content;
    text-align: right;

    @media (max-width: 1023px) {
        font-size: rem(36);
    }
}

.heartin {
    display: inline-block;
    width: fit-content;
}

.hands {
    transform: translateY( var(--translateY, 250px) );
    width: 250px;

    @media (max-width: 1023px) {
        width: 150px;
    }
}

.heart {
    --scale3d: 0, 0, 0;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%) scale3d( var(--scale3d) );
    width: 150px;

    @media (max-width: 1023px) {
        width: 110px;
    }
}

.footer__visible {
    .hands {
        --translateY: 0px;
        transition: transform 400ms ease-out 800ms;
    }

    .heart {
        --scale3d: 1, 1, 1;
        transition: transform 400ms ease-out 1200ms;
    }

    span {
        opacity: 1;
        transform: translateY(0);
    }

    .first {
        transition: opacity 400ms ease-out 400ms, transform 400ms ease-out 400ms;
    }

    .last {
        transition: opacity 400ms ease-out 1600ms, transform 400ms ease-out 1600ms;
    }
}

</style>
