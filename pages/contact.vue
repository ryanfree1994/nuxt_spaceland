<template>
<div class="Contact">
  <h2 class="text-danger text-center m-4 p-5">Contact</h2>


    <main class="main">
      <h3 class="text-primary text-center m-4 p-6">Please feel free to reach out through the following:</h3>
      <ul class="text-center list-inline">
        <li class="list-inline-item p-3" v-for="item in items" v-bind:key="item.id">
          {{item.text}}
          <div v-if="item.checked" class="text-warning">Available</div>
          <div v-else>Not Availavble</div>
        </li>
      </ul>
      <div class="m-5" id="accordion">
        <div class="card m-5">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Contact Us
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body text-danger text-center">
              <p class="card-body text-danger text-center" v-for="info in contact" v-bind:key="info.id">{{ info.info }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>

</div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      contact: [{
          info: 'Feel free to send us an e-mail via spaceland@gmail.com'
        },
        {
          info: 'Feel free to call us at 1 - 800 - SPACELAND'
        }
      ],
      items: [{
          id: 1,
          text: 'Email',
          checked: true
        },
        {
          id: 2,
          text: 'Phone',
          checked: true
        },
        {
          id: 3,
          text: 'Chatbot',
          checked: false
        },
      ],
    }
  },
};
</script>
