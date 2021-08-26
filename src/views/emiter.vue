<template>
    <div class="row" :class="classbg">
        <div class="col-md-4 col-md-offset-2">
            <b-input v-model="email"  />
            <b-input v-model="nama" type="password"  label="Nama"  />
        </div>

        <b-col cols="4" md="2">
            <b-input v-model="email" :key="3" />
        </b-col>

        <b-col cols="5" md="6">
            <b-input v-model="email" :key="1"  />
        </b-col>
        
    </div>
</template>

<script>
    import BInput from "../components/Form/BInput.vue"
    import BInputText from "../components/Form/BInputText.vue"
    import BCol from '../components/BCol.vue'
    export default {
        components:{
            BInput,
            BInputText,
            BCol
        },
        data(){
            return {
                email:null,
                nama:null,
                emailProperty:{
                    label:"Email",
                },
                classbg:""
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>