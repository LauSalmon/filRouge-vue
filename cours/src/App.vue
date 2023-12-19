<script>
  export default {
    data() {
      return {
        activities : []
      }
    },
    methods:{
      addActivity(eventTitle, eventAdress, eventPrice, eventInfo){
        const newActivityInfo = {
          title : eventTitle,
          adress : eventAdress,
          price : eventPrice,
          info : eventInfo,
        };
        console.log("ça marche");
        this.activities.push(newActivityInfo);
      },
      newActivity() {
        
      }
  }
}
</script>

<template>
  <div class="container">
    <p>Ajouter : </p>
    <button class="btn" type="button">Hebergement</button>
    <button class="btn" type="button">Restaurant</button>
    <button class="btn" type="button" @click="newActivity" >Activitée</button>
    <button class="btn" type="button">Trajet</button>
  </div>
  <div>
    <ul class="list-group">
      <new-activity @add-activity="addActivity"></new-activity>
      <add-activity v-for="activity in activities" :aTitle="activity.title" :anAdress="activity.adress" :aPrice="activity.price" :anInfo="activity.info"></add-activity>
    </ul>

    <add-accomodation></add-accomodation>
    <add-travel></add-travel>
    <add-restaurant></add-restaurant>
  </div>

  

</template>

<style scoped>
.container {
  background-color : #6E7554;
  border-radius : 5px;
}
.btn {
  border-color : #FF7F3F;
  margin : 10px;
}
</style>
