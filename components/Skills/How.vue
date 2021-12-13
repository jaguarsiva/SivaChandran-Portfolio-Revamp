<template>
    <section class="light__section">
        <h2
            ref="sectionHeading"
            class="section__heading"
            :class="{ heading__visible: isHeadingVisible }"
        >
            How I Learned
        </h2>

        <div
            ref="box"
            class="how__box box flex"
            :class="{ box__visible: isBoxVisible }"
        >
            <div class="box__left">
                <h3 class="tahu">A Self Taught Developer</h3>
                <p class="biko__regular">
                    For me there was no bootcamps, no coding institutes either. All I had was
                    <span class="biko__bold">only the internet and a hungry soul.</span>
                    I showed up everyday inorder to learn more. And then slowly but steadily I found a path that I could follow.
                </p>
                <ul class="tags flex">
                    <li>#EAT_SLEEP_CODE_REPEAT</li>
                    <li>#JUST_CODE_AND_CHILL</li>
                </ul>
            </div>
            <div class="box__right">
                <img src="~assets/images/keyboard.jpg" alt="keyboard">
                <span>
                    Photo by <a href="https://unsplash.com/@nublson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="__blank">Nubelson Fernandes</a> on <a href="https://unsplash.com/s/photos/developer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="__blank">Unsplash</a>
                </span>
            </div>
        </div>
    </section>
</template>

<script>
import heading from '~/mixins/heading';
import box from '@/mixins/box.js';
export default {
    mixins: [heading, box],
};
</script>

<style lang="scss" scoped>
.how__texts {
    margin-top: 100px;
    text-align: center;
}

p {
    font-size: rem(20);
    line-height: 1.75;
    color: hsl(0, 0, 48%);

    span {
        color: $tomato;
    }
}


.tags {
    margin-top: 24px;
    gap: 12px;

    li {
        font-size: rem(16);
        font-weight: 500;
        line-height: 1;
        color: $cream;
        padding: 6px 12px;
        border-radius: 6px;
        box-shadow: $shadow;
        background-color: $black;
        text-transform: lowercase;
        transition-duration: 200ms;
    }

    &.texts__visible li {
        &:first-child {
            transition-delay: 2000ms;
        }

        &:nth-child(2) {
            transition-delay: 2250ms;
        }

        &:last-child {
            transition-delay: 2500ms;
        }
    }

    @media (max-width: 1023px) {
        justify-content: center;
    }
}
</style>
