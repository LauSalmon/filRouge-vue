<script>

export default {
    name : 'add-activity',
    
    props:{
        aTitle :{
            type:String,
            required:true
        },
        anAdress:{
            type:String,
            required:true
        },
        aPrice:{
            type:Number,
            required:false
        },
        anInfo:{
            type:String,
            required:false
        }
    },

    data(){
        return{
            detailsVisibles:false,
        }
    }, 


    methods : {
        showDetails(){
            this.detailsVisible = !this.detailsVisible;
        },
        saveActivity() {
            let data = {
                title : this.activity.title,
                adress : this.activity.adress,
                price : this.activity.price,
                info : this.activity.info,
                // published : false
            }
        },
        addActivity(title, adress, price, info) {
            const newActivity = {
                title : title,
                adress : adress,
                price : price,
                info : info,
            }
        }
    }
}
</script>

<template>
    <div class="container my-1">
        <ul class="list-group">
            <h2 class="list-group-item">{{ aTitle }}</h2>
            <li class="list-group-item">{{ anAdress }}</li>
            <li class="list-group-item">{{ aPrice }}</li>
            <li class="list-group-item">{{ anInfo }}</li>
        </ul>
    </div>
</template>

<style scoped>
</style>