<template>
    <div>
        <Modal v-model="showModal" :title="modalTitle">
            <p>Model Added</p>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "ModeAdded",
        data() {
            return {
                showModal: false,
                modalTitle:"Succes!"
            };
        }
    };
</script>

<style scoped>
</style>