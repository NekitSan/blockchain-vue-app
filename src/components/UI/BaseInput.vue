<template>
    <div v-if="time_quote" class="entry_field">
        <input class="input" type="text" placeholder="0" valu="0">
        <span class="entry_field__text">Max</span>
    </div>

    <div v-if="!time_quote" class="input--disable">
        <span class="input--disable__icon"></span>
        <span class="input--disable__text">
            To perform actions on the page, connect your wallet
        </span>
    </div>
</template>

<script>
    export default {
        name: "base-input",
        props: {
            time_quote: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="sass" scoped>
.entry_field,
.input--disable
    width: 100%
    font-family: 'Noto Sans', sans-serif

.entry_field
    position: relative
    height: 60px
    border: solid 1px #DFEBF5
    border-radius: 8px
    &__text
        color: #FFD42C
        text-align: right
        font-size: 20px
    &__context--error
        border-color: $color-red
        &::after
            position: absolute
            top: calc( 100% + 8px )
            left: 23px
            content: "Error proper amount"
            color: $color-red
            font-size: 14px

.input
    width: calc( 100% - 52px )
    height: 100%
    padding: 14px 16px
    border-radius: 8px
    font-size: 20px
    &--disable
        @include flexbox(flex-start, center, 20px)
        height: 60px
        padding: 20px
        font-size: 16px
        background-color: #EFF3F8
        border-radius: 16px
        color: #828A97
        &__icon
            @include svgIcon(input_disable, 32, 32, #828A97)
        &__text
            font-weight: 700
</style>