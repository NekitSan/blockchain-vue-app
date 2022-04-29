<template>
    <header class="header">
        <nav class="header__main">
            <ul class="menu">
                <li class="menu__item menu__item--active">
                    <a class="menu__link">Stacking</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link">Bridge</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link">SHO</a>
                </li>
            </ul>
            <select
                class="header__wallet"
                v-if="authoriz.result === true"
                :class="authorizedAddClass()"
            >
                <option
                    v-for="purse in purses"
                    :key="purse.id"
                >
                    <div class="header__wallet__hash">
                        <!-- <div class="header__wallet__hash__value">{{purse.id}}</div> -->
                        <!-- <div 
                            class="header__wallet__hash__icon" 
                            :style="'background-image: url(' + require(`@/assets/icons/${purse.coinIcon}`) + ');'"
                        ></div> -->
                    </div>
                    <div class="header__wallet__summ">
                        <div class="header__wallet__hash__value">{{purse.money}}</div>
                        <div 
                            class="header__wallet__hash__icon" 
                            :style="'background-image: url(' + require(`@/assets/icons/${purse.coinIcon}`) + ');'"
                        ></div>
                    </div>
                </option>
            </select>

            <div 
                class="header__wallet"
                @click="openPopUp"
                v-else
            >
                Connect wallet
            </div>
            
        </nav>
    </header>
</template>

<script>

export default {
    props: {
        purses: {
            type: Array,
            requred: true
        },
        authoriz: {
            type: [Boolean, Object]
        }
    },
    methods: {
        openPopUp()
        {
            this.$emit("open-popup", true);
        },
        authorizedAddClass()
        {
            if(this.authoriz.result)
                return this.authoriz.class;
            return "";
        }
    }
}
</script>

<style lang="sass" scoped>
.header
    width: 100%
    height: 88px
    font-family: 'Montserrat'
    border-bottom: solid 1px #fff
    &__main
        @include flexbox(flex-end, center, 057px)
        max-width: 1170px
        width: 100%
        height: 100%
        margin-inline: auto
    &__wallet
        @include flexbox(center, center, 0)
        @include font("Noto Sans", 400, 16px)
        border-radius: 12px
        width: 164px
        height: 48px
        line-height: 20px
        background-color: #fff
        cursor: pointer
        &.authorized
            width: 314px
            
.menu
    @include flexbox(space-between, center, 38px)
    height: 100%
    &__item
        width: 84px
        height: inherit
        text-align: center
        cursor: pointer
        &:last-child
            margin-left: 53px
        &:hover,
        &--active
            border-bottom: solid 4px $color-red
            .menu__link
                color: $color-red
                font-weight: 700

    &__link
        line-height: 84px
</style>