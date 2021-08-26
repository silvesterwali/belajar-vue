<template>
    <div>
        <input v-model="value" class="form-control" >
    </div>
</template>

<script>
    export default {
        props:{
            classbg:{
                type:String,
                default:null
            }
        },
        computed:{
            value:{
                set(value){
                    this.$emit('update:classbg',value)
                },
                get(){
                    return this.classbg
                }
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>