<template>
    <div class="form-group" >
        <label>{{label}}</label>
        <input class="form-control" 
            :type="type" 
            v-on:input="$emit('input',$event.target.value)" >
    </div>
</template>

<script>
    export default {
        props:{
            class:{
                type:String,
                default:null
            },
            label:{
                type:String,
                default:null
            },
            type:{
                type:String,
                default:'text'
            },
            value:{
                type:[String,Number],
                default:null
            },
        

        },

    }
</script>

<style lang="scss" scoped>

</style>