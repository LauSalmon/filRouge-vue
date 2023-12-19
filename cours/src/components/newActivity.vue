<script>
  export default {
    name : 'new-activity',
    emits:['add-activity'],

    data() {
      return {
                enteredTitle : "",
                enteredAdress : "",
                enteredPrice : "",
                enteredInfo : ""
      }
    },
    methods:{
        submitData(){
            this.$emit('add-activity', this.enteredTitle, this.enteredAdress, this.enteredPrice, this.enteredInfo);
        },        
    }
  }
</script>

<template>
    <form @submit.prevent="submitData">
        <div class="container row">
            <div class="col-7">
                <h3>Activitée</h3>
                <div class="mb-3">
                    <input type="text" class="form-control form-control-sm" placeholder="Nom de l'activitée" v-model="enteredTitle" required>
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control form-control-sm" placeholder="Adresse" v-model="enteredAdress" required>
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control form-control-sm" placeholder="Prix : €/pers." v-model="enteredPrice">
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control form-control-sm" placeholder="Informations supplémentaires" v-model="enteredInfo">
                </div>
                
            </div>
            <div class="mb-3 col-5">
                <input type="radio" id="payé" name="price" >
                    <label for="payé">Payé</label>
                <input type="radio" id="aPayer" name="price" >
                    <label for="aPayer">A payer</label>
                <button class="btn my-2">Valider</button>
            </div>
        </div>
    </form>

</template>

<style scoped>
.container {
  background-color : #6E7554;
  border-radius : 5px;
}
.btn {
    background-color : #FF7F3F;
  border-color : #FF7F3F;
  margin : 10px;
}
</style>