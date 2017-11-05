<template>
  <div class='row'>
      <div class="col-lg-3 col-sm-6" v-for='pet in petCards.pets'>
        <div class="card">
          <div class="content">
            <div class="row">
              <div class="col-xs-5">
                <div class="icon-big text-center">
            <img class="avatar border-white"  v-bind:src=pet.image alt="...">
          </div>
              </div>
              <div class="col-xs-7">
                <div class="numbers">
            <p>Happiness</p>
            {{pet.happiness}}%
          </div>
              </div>
            </div>
            <div class="footer">
              <hr/>
              <div class="stats" >
            <input v-model='pet.happiness' v-on:keyup='petCards.checkStatus(pet)'>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'pet-card',
    mounted() {
      for (var i = 0; i < this.petCards.pets.length; i++) {
        this.petCards.setImage(this.petCards.pets[i]);
      }
    },

    data () {
      return {
        petCards: {

          // PETS GO HERE
          pets: [
            {
              happiness: 0,
              image: 'static/img/pet-status/minior-green.gif',
            }
          ],
          checkStatus: function(pet) {
            this.setImage(pet);
          },
          setStatus: function(pets) {

          },
          setImage: function(pet) {
            if (pet.happiness <= 20) {
              pet.image = 'static/img/pet-status/minior.gif'
            } else if (pet.happiness > 20 && pet.happiness <= 40) {
              pet.image = 'static/img/pet-status/minior-red.gif'
            } else if (pet.happiness > 40 && pet.happiness <= 60) {
              pet.image = 'static/img/pet-status/minior-orange.gif'
            } else if (pet.happiness > 60 && pet.happiness <= 80) {
              pet.image = 'static/img/pet-status/minior-yellow.gif'
            } else {
              pet.image = 'static/img/pet-status/minior-green.gif'
            }
          }
        }
      }
    }
  }

</script>
<style>

</style>