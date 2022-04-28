<template>
    <div class="token_card">
        <h2 class="token_card__title">
            {{tokenCard.title}} Days
        </h2>
        <div class="token_card__apy">
            APY: {{tokenCard.apy}}%
            <div class="token_card__apy--info__icon"></div>
            <div class="token_card__apy--info__text">Tip text hover</div>
        </div>
        <div class="token_card__amout">
            Amount: {{tokenCard.amout}} TKN
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            tokenCard: {
                type: Object,
                requred: true,
            }
        }
    }
</script>

<style lang="sass" scoped>
.token_card
    @include flexbox(center, flex-start, 9px)
    flex-direction: column

    width: 331px
    height: 163px
    padding: 24px 28px
    background-color: #fff
    border: 1px solid #DFEBF5
    border-radius: 24px
    cursor: pointer
    &__apy
        position: relative
        color: $color-red
        @include flexbox(flex-start, center, 9px)
        @include font("Montserrat", 600, 20px)
        &--info
            &__icon
                @include svgIcon("question", 24, 24, #828A97)
                cursor: default
                &:hover
                    background-color: $color-red
                &:hover ~ .token_card__apy--info__text
                    width: 116px
                    opacity: 1
            &__text
                position: absolute
                left: 178px
                width: 0
                height: 42px
                line-height: 42px
                background-color: rgba(130,138,151, 0.6)
                border-radius: 12px
                color: #fff
                text-align: center
                font-size: 14px
                user-select: none
                opacity: 0
                z-index: 11
                &::after
                    content: ""
                    position: absolute
                    left: -12px
                    top: 50%
                    transform: translate(0, -50%)
                    @include svgIcon("triangle", 20, 15, #b4b9c1)
    &__amout
        color: #828A97
    &:hover, &--active
        background-color: #EFF3F8
</style>