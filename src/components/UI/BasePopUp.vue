<template>
    <div 
        class="pop_up" 
        @click="closePopUp"
        v-if="hide" 
    >
        <div class="pop_up__window">
            <div class="pop_up__button--close" @click="closePopUpDefault"></div>
            <h3 class="pop_up__title">
                <slot name="title"></slot>
            </h3>
            <div class="pop_up__paragraph">
                <slot name="paragraph"></slot>
            </div>
            <div class="pop_up__params">
                <slot name="params"></slot>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    name: "base-popup",
    props: {
        hide: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closePopUpDefault() { this.$emit("close-popup", false); },
        closePopUp(event)
        {
            if(event.target.classList.contains("pop_up"))
                this.closePopUpDefault();
        }
    }
}
</script>

<style lang="sass" scoped>
.pop_up
    @include flexbox(center, center, 0)
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    background-color: rgba(0,0,0, 0.3)
    &__window
        position: relative
        width: 670px
        height: 365px
        padding: 61px 56px
        background-color: #fff
        border-radius: 24px
    &__button--close
        @include svgIcon(close, 44, 44, #B7C6D8)
        position: absolute
        top: 16px
        right: 16px
        cursor: pointer

    &__title
        @include font("Montserrat", 800, 24px)
        padding-bottom: 32px
    &__paragraph
        @include font("Noto Sans", 400, 16px)
        padding-bottom: 24px
    &__params
        @include flexbox(center, center, 16px)
</style>