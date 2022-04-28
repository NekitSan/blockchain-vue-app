<template>
<div class="wrapper">
    <MainHeader
        @open-popup="popupVisible = $event"
    />
    <MainContentr
        :tokenCards="tokenCards"
        @open-popup="popupVisible = $event"
    />


    <base-popup
        v-if="authorization"
        @close-popup="closePopup"
        :hide="popupVisible"
        :authorizat="authorization"
    >
        <template v-slot:title>Replenish</template>
        <template v-slot:paragraph>
            Max. amount = <span>1000 TKN</span> <br>
            Available amount = <span>40 TKN</span>
        </template>
        <template v-slot:params>
            <base-button-connect
                v-for="buttonConnect in buttonConnects"
                :buttonConnect="buttonConnect"
                :key="buttonConnect.id"
             >
            </base-button-connect>
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
             >
            </base-button-connect>
        </template>
    </base-popup>
</div>
</template>

<script>
import MainHeader from "@/components/MainHeader"
import MainContentr from "@/components/MainContentr"


export default {
    components: {
        MainHeader, MainContentr
    },
    data() {
        return {
            authorization: true,
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
    max-height: 1080px
    margin-inline: auto

    width: 100vw
    height: 100vh
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

</style>