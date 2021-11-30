<template>
    <section class="light__section">
        <h2
            ref="sectionHeading"
            class="section__heading"
            :class="{ heading__visible: isHeadingVisible }"
        >
            How I Learned
        </h2>

        <div class="how__texts" :class="{ texts__visible: isTextsVisible }">
            <p class="signika">
                <span>For me there was no bootcamps, </span>
                <span>no coding institutes either </span>
                <span>All I had was</span>
            </p>
            <p class="tahu translate__up" ref="mainText">
                Only the Internet and a hungry soul
            </p>
            <p class="signika translate__up">
                <span>I showed up everyday inorder to learn more and </span>
                <span
                    >slowly but steadily I found a path that I could
                    follow</span
                >
            </p>
        </div>

        <ul class="tags flex justify-center" :class="{ texts__visible: isTextsVisible }">
            <li class="translate__up">
                #EAT_SLEEP_CODE_REPEAT
            </li>
            <li class="translate__up">
                #JUST_CODE_AND_CHILL
            </li>
            <li class="translate__up">
                #SELF_TAUGHT_DEVELOPER
            </li>
        </ul>

    </section>
</template>

<script>
import sectionHeading from '@/mixins/sectionHeading.js';
export default {
    mixins: [sectionHeading],
    data() {
        return {
            isTextsVisible: false
        };
    },
    mounted() {
        new IntersectionObserver(entries => {
            this.isTextsVisible = entries[0].isIntersecting;
        }, {}).observe(this.$refs.mainText);
    }
};
</script>

<style lang="scss" scoped>
.how__texts {
    margin-top: 100px;
    text-align: center;
}

.translate__up {
    --translate: 150px;
    opacity: 0;
    transform: translateY(var(--translate));

    .texts__visible & {
        opacity: 1;
        --translate: 0;
        transition: opacity 500ms linear, transform 500ms linear;
    }
}

p:first-child, p:last-child {
    font-size: rem(26);
    line-height: 1.6;
    font-weight: 300;

    span {
        display: block;
    }
}

p:nth-child(2) {
    font-size: rem(80);
    color: $tomato;
    margin-block: 30px;

    .texts__visible & {
        transition-delay: 300ms;
    }
}

.texts__visible p:last-child {
    transition-delay: 600ms;
}

.tags {
    margin-top: 75px;
    gap: 18px;

    li {
        padding: 6px 12px;
        background-color: $black;
        border-radius: 6px;
        font-weight: 500;
        font-size: rem(18);
        color: $cream;
        box-shadow: $shadow;
        text-transform: lowercase;
        transition-duration: 200ms;

        &:first-child {
            transition-delay: 900ms;
        }

        &:nth-child(2) {
            transition-delay: 1100ms;
        }

        &:last-child {
            transition-delay: 1300ms;
        }
    }
}

</style>
