<template>
<div class="text-center">
    <v-pagination v-model="page" :length="0" circle color="#204051"></v-pagination>
</div>
</template>

<script>
export default {
   
    data() {
        return {
            page: 1,
        }
    },
}
</script>
