<template>
    <section class="light__section">
        <h2
            ref="sectionHeading"
            class="section__heading"
            :class="{ heading__visible: isHeadingVisible }"
        >
            Where I Learned
        </h2>

        <div
            ref="box"
            class="where__box box flex"
            :class="{ box__visible: isBoxVisible }"
        >
            <div class="box__left">
                <h3 class="tahu">Just Code and Chill</h3>
                <p class="biko__regular">
                    Kudos to the creators and instructors from the below
                    platforms for teaching me and taking me through this
                    exciting journey.
                </p>
                <ul class="flex">
                    <li>
                        <a href="#" class="icons__sprite youtube"> &nbsp; </a>
                    </li>
                    <li>
                        <a href="#" class="icons__sprite udemy"> &nbsp; </a>
                    </li>
                    <li>
                        <a href="#" class="icons__sprite vue_mastery">
                            &nbsp;
                        </a>
                    </li>
                </ul>
            </div>
            <div class="box__right">
                <img src="~assets/images/laptop.jpg" alt="laptop" />
                <span class="biko__regular">
                    Photo by
                    <a
                        href="https://unsplash.com/@blakeconnally?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        target="__blank"
                        >Blake Connally</a
                    >
                    on
                    <a
                        href="https://unsplash.com/s/photos/coding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        target="__blank"
                        >Unsplash</a
                    >
                </span>
            </div>
        </div>
    </section>
</template>

<script>
import sectionHeading from '@/mixins/sectionHeading.js';
import box from '@/mixins/box.js';
export default {
    mixins: [sectionHeading, box]
};
</script>

<style lang="scss" scoped>
p {
    font-size: rem(20);
    line-height: 1.75;
    margin-bottom: 24px;
    color: hsl(0, 0, 55%);
}

ul {
    gap: 24px;
}
</style>
