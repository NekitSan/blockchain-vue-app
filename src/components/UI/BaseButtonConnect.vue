<template>
    <button 
        class="button_connect" 
        @click="inputNetwork"
    >
        <span 
            class="button_connect__icon"
            :style="'background-image: url(' + require(`@/assets/icons/${buttonConnect.icon}.svg`) + ');'"
        >
        </span>
        <span class="button_connect__name">
            {{buttonConnect.name}}
        </span>
    </button>
</template>

<script>
    export default {
        name: "base-button-connect",
        props: {
            buttonConnect: {
                type: Object,
                requred: true
            }
        },
        methods: {
            inputNetwork() {
                this.$emit("authorizat", true);
                this.$emit("close-popup", false)
            }
        }
    }
</script>

<style lang="sass" scoped>
.button_connect
    @include flexbox(center, center, 16px)
    @include font("Noto Sans", 400, 20px)
    width: 271px
    height: 108px
    background-color: transparent
    border: solid 1px #DFEBF5
    border-radius: 12px
    user-select: none
    cursor: pointer
    &__icon
        width: 44px
        height: 44px
        background-position: center
        background-repeat: no-repeat
    &:hover
        background-color: rgba(205,205,205, 0.1)
</style>