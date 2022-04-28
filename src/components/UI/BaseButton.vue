<template>
    <button class="button">
        <span>
            <slot class="button__icon" name="icon" v-if="icon">[]</slot>
        </span>
        <span class="button__text">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    export default {
        name: "base-button",
        props: {
            icon: { // Переделать в просто слот а css icon написать на родителе
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="sass" scoped>
.button
    @include flexbox(center, center, 0)
    @include font("Noto Sans", 700, 16px)
    width: 164px
    height: 48px
    line-height: 20px
    background-color: #FFD42C
    border-radius: 12px
    color: #fff
    user-select: none
    cursor: pointer
    &__white
        background-color: #fff
        color: $colot-text
        border: 1px solid #DFEBF5
        font-weight: 400
    &__icon
        margin-right: 13px
</style>