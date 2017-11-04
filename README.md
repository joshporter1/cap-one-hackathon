# [Capital One Hackathon](https://github.com/CapitalOne-AU-Hackathon/au-hackathon-getting-started)

## Setup and Development

### install dependencies
`npm install`
### serve with hot reload at localhost:8080
`npm run dev`


## Build

### build for production with minification
`npm run build`
### run unit tests
`npm run unit`
### run and watch unit tests
`npm run unit:watch`

## Using Pet Cards
in your vue file, be sure to include these items in their correct locations.
```

    // HTML
    <div class='row'>
      <div class="col-lg-3 col-sm-6" v-for='pet in petCards.pets'>
        <pet-card>
          <div class="icon-big text-center" slot='header'>
            <img class="avatar border-white"  v-bind:src=pet.image alt="...">
          </div>
          <div class="numbers" slot='content'>
            <p>Happiness</p>
            {{pet.happiness}}%
          </div>
          <div class="stats" slot='footer'>
            <input v-model='pet.happiness' v-on:keyup='petCards.checkStatus(pet)'>
          </div>
        </pet-card>
      </div>
    </div>


    // SCRIPT
    import PetCard from 'components/UIComponents/Cards/PetCard.vue'

    export default {

    mounted() {
      for (var i = 0; i < this.petCards.pets.length; i++) {
        this.petCards.setImage(this.petCards.pets[i]);
      }
    },

    components: {
      PetCard
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
```