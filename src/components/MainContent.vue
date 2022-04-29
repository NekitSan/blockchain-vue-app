<template>
<section class="content">
    <main class="content__window">
        <div class="content__item content__item__header">
            <h1 class="content__title">Staking App</h1>
            <div class="content__notice_auth" v-if="authoriz.result === true">
                <span class="content__notice_auth__text">Wallet approved</span>
                <span class="content__notice_auth__icon"></span>
            </div>
        </div>
        <div class="content__item">
            <div class="cell__group">
                <main-content-token-card
                    v-for="tokenCard in tokenCards"
                    :tokenCard="tokenCard"
                    :key="tokenCard.id"
                >
                </main-content-token-card>
            </div>
        </div>
        <div class="content__item">
            <base-input
                :authoriz="authoriz"
            />
        </div>
        <div class="content__item">
            <base-button @click="openPopUp">
                <slot v-if="authoriz.result === true">Stake</slot>
                <slot v-else>Connect wallet</slot>
            </base-button>
            <base-button class="button__white">
                <slot>View contract</slot>
            </base-button>
        </div>
    </main>
</section>
</template>

<script>
import MainContentTokenCard from "@/components/MainContentTokenCard";
export default {
    components: {
        MainContentTokenCard
    },
    props: {
        tokenCards: {
            type: Array,
            requred: true,
        },
        authoriz: {
            type: [Boolean, Object]
        }
    },
    methods: {
        openPopUp()
        {
            this.$emit("open-popup", true);
        }
    }
}
</script>

<style lang="sass" scoped>
.content
    width: 100%
    height: calc( 100% - 88px )
    padding-top: 133px
    &__window
        max-width: 1170px
        max-height: 690px
        width: 100%
        height: 100%
        margin-inline: auto
        padding: 64px 56px
        border-radius: 24px
        background-color: #fff
        box-shadow: 0px 16px 44px rgba(78, 102, 120, 0.1)
    &__item
        &__header
            @include flexbox(space-between, center, 0)
        &:nth-child(1)
            margin-bottom: 55px
        &:nth-child(2)
            margin-bottom: 52px
        &:nth-child(3)
            margin-bottom: 52px
        &:nth-child(4)
            display: flex
            justify-content: space-between
    &__notice_auth
        width: 222px
        height: 56px
        background-color: #EFF3F8
        border-radius: 16px
        @include flexbox(center, center, 13px)
        &__text
            color: #828A97
            @include font("Noto Sans", 400, 20px)
        &__icon
            @include svgIcon(comileted, 24, 24, #45CA72)
            
    &__title
        color: #343840
        letter-spacing: 0.06em
        @include font("Montserrat", 800, 44px)
.cell__group
    @include flexbox(flex-start, normal, 32px)
</style>