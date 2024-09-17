<template>
    <footer ref="footer" :class="{ footer__visible: isFooterVisible }">
        <p class="flex-center">
            <span class="tahu first"> Made with </span>
            <span class="heartin relative">
                <img
                    src="~/assets/images/heart.svg"
                    alt="heart"
                    class="heart"
                />
                <img
                    src="~/assets/images/hands.svg"
                    alt="hands"
                    class="hands"
                />
            </span>
            <span class="smallscreen__only"> 💖 </span>
            <span class="tahu last"> by Siva Chandran </span>
        </p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            isFooterVisible: false
        };
    },
    mounted() {
        new IntersectionObserver(
            entries => {
                this.isFooterVisible = entries[0].isIntersecting;
            },
            { threshold: 0.5 }
        ).observe(this.$refs.footer);
    }
};
</script>

<style lang="scss" scoped>
footer {
    position: relative;
    z-index: 2;
    padding-block-start: 125px;
    padding-inline: 20px;
    background-color: #f1f5f5;
    overflow: hidden;

    @media (max-width: 768px) {
        padding-block-start: 100px;
    }

    @media (max-width: 768px) {
        padding-block: 50px;
    }
}

p {
    gap: 50px;

    @media (max-width: 600px) {
        display: block;
        text-align: center;
    }
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

    @media (max-width: 768px) {
        font-size: rem(28);
    }

    @media (max-width: 600px) {
        font-style: rem(24);
        display: inline-block;
    }
}

.smallscreen__only {
    display: inline-block;
    margin-inline: 12px;

    @media (min-width: 600px) {
        display: none;
    }
}

.heartin {
    display: inline-block;
    width: fit-content;

    @media (max-width: 600px) {
        display: none;
    }
}

.hands {
    transform: translateY(var(--translateY, 250px));
    width: 250px;

    @media (max-width: 1023px) {
        width: 150px;
    }

    @media (max-width: 768px) {
        width: 100px;
    }
}

.heart {
    --scale3d: 0, 0, 0;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%) scale3d(var(--scale3d));
    width: 150px;

    @media (max-width: 1023px) {
        width: 110px;
    }

    @media (max-width: 768px) {
        width: 80px;
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

        @media (max-width: 600px) {
            transition-duration: 300ms;
            transition-delay: 200ms;
        }
    }

    .smallscreen__only {
        transition-property: opacity, transform;
        transition-timing-function: ease-out;
        transition-duration: 300ms;
        transition-delay: 450ms;
    }

    .last {
        transition: opacity 400ms ease-out 1600ms,
            transform 400ms ease-out 1600ms;

        @media (max-width: 600px) {
            transition-duration: 300ms;
            transition-delay: 600ms;
        }
    }
}
</style>
