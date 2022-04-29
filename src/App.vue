<template>
<div class="wrapper">
    <MainHeader
        :authoriz="authorization"
        @open-popup="popupVisible = $event"
        :purses="(authorization.result === true) ? purses : null"
    />
    <MainContent
        :authoriz="authorization"
        :tokenCards="tokenCards"
        @open-popup="popupVisible = $event"
    />

    <base-popup
        v-if="authorization"
        @close-popup="closePopup"
        :hide="popupVisible"
        :authoriz="authorization"
    >
        <template v-slot:title>Replenish</template>
        <template v-slot:paragraph>
            <div class="pop_up__paragraph__value">
                Max. amount = <span class="--note">1000 TKN</span>
            </div>
            <div class="pop_up__paragraph__value">
                Available amount = <span class="--note">40 TKN</span>
            </div>
        </template>
        <template v-slot:params>
            <base-input
                :authoriz="authorization"
            />
            <base-button>
                Replenish
            </base-button>
        </template>
    </base-popup>

    <base-popup
        v-else
        @close-popup="closePopup"
        :hide="popupVisible"
    >
        <template v-slot:title>Select the payment card that you want to use for payment</template>
        <template v-slot:paragraph>The selected wallet will be connected to your staking</template>
        <template v-slot:params>
            <base-button-connect
                v-for="buttonConnect in buttonConnects"
                :buttonConnect="buttonConnect"
                :key="buttonConnect.id"
                @authorizat="authorization = authorizat($event)"
                @close-popup="closePopup"
             >
            </base-button-connect>
        </template>
    </base-popup>
</div>
</template>

<script>
import MainHeader from "@/components/MainHeader"
import MainContent from "@/components/MainContent"


export default {
    components: {
        MainHeader, MainContent
    },
    data() {
        return {
            authorization: this.authorizat(false),

            purses: [
                {
                    id: 1,
                    hash: "0хCb99...8EBb",
                    money: "0.029",
                    coinType: "BUSD",
                    coinIcon: "busd-coin.png"
                },
                {
                    id: 2,
                    hash: "0хCb09...821b",
                    money: "0.000111",
                    coinType: "ETH",
                    coinIcon: "eth-coin.png"
                },
            ],

            popupVisible: false,
            buttonConnects: [
                {
                    id: 1,
                    name: "MetaMask",
                    icon: "metaMask",
                },
                {
                    id: 2,
                    name: "Walletconnect",
                    icon: "walletconnect",
                }
            ],
            tokenCards: [
                {id: 1, title:"30", apy:"103,23", amout:"100 - 299"},
                {id: 2, title:"90", apy:"116,86", amout:"100 - 299"},
                {id: 3, title:"150", apy:"129,97", amout:"500 - 1000"}
            ]
        }
    },
    methods: {
        openPopUp()
        {
            this.popupVisible = true;
        },
        closePopup()
        {
            this.popupVisible = false;
        },
        fun(e)
        {
            console.log(e);
        },
        authorizat(event)
        {
            if(event === true)
                return {
                    result: true,
                    class: "authorized"
                };
            return false;
        }
    }
}
</script>

<style lang="sass">
*, *::after, *::before
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: 'Montserrat', sans-serif
    font-family: 'Noto Sans', sans-serif
a
    text-decoration: none
ul, li, ol
    list-style: none
button,
input
    border: none
input
    background-color: #fff
body,
input,
a
    color: $colot-text

.disable
    display: none

.wrapper
    position: relative
    max-width: 1920px
    height: 1080px
    width: 100%
    margin-inline: auto
    &::after
        content: ""
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 90.5%
        background-color: #F3BA2F
        opacity: 15%
        z-index: -1

.error
    color: red
    font-weight: bold
    letter-spacing: 1px
    padding: 10px

.--note
    color: $color-red

</style>