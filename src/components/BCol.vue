<template>
    <div :class="[colsx,colsMd]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props:{
            cols:{
                type:[String,Number],
                default:12
            },
            md:{
                type:[String,Number],
                default:12
            }
           
        },
        computed:{
            colsx(){
                return 'col-'+this.cols
            },
            colsMd(){
                return 'col-md-'+this.md
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>