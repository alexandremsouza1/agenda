<template>
  <div id="q-app">
    <calendar :events="eventCollections"></calendar>
    <q-dialog v-model="modal">
      <div class="q-pa-md background" style="max-width: 80%">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
            >
            <q-list bordered separator>
              <q-input
                filled
                v-model="evento.nome"
                label="Evento *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

               <q-input
                filled
                v-model="evento.descricao"
                label="Descrição *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
            </q-list>

              <q-list bordered separator>
             <span>De:</span>
             <div class="row">
             <div class="q-pa-md row">
                <q-list separator>
                  <q-item class="inherit">
                    <q-item-section>Início</q-item-section>
                  </q-item>
                </q-list>
              <!--<q-date v-model="evento.dia" mask="YYYY-MM-DD HH:mm" color="purple" />-->
              <!--<q-time v-model="evento.hora" mask="YYYY-MM-DD HH:mm" color="purple" />-->
              <q-input v-model="evento.inicio.dia" filled type="date"  />
              <q-input v-model="evento.inicio.hora" filled type="time" />
            </div>
             <div class="q-pa-md row">
                <q-list separator>
                  <q-item class="inherit">
                    <q-item-section>Fim</q-item-section>
                  </q-item>
                </q-list>
              <!--<q-date v-model="evento.dia" mask="YYYY-MM-DD HH:mm" color="purple" />-->
              <!--<q-time v-model="evento.hora" mask="YYYY-MM-DD HH:mm" color="purple" />-->
              <q-input v-model="evento.fim.dia" filled type="date" />
              <q-input v-model="evento.fim.hora" filled type="time" />
            </div>
            </div>
            <q-list class=" row" separator>
            <div class="q-pa-xl">
               <q-badge color="secondary">
                Intervalo de semanas: {{ evento.intervalo }}
              </q-badge>
              <q-slider v-model="evento.intervalo" :min="0" :max="10" style="width: 50%;"/>
            </div>
            <div class="absolute-bottom-right q-pa-xl">
              <q-option-group
                :options="options"
                label="Notifications"
                type="radio"
                v-model="group"
              />
            </div>
            </q-list>
            </q-list>

            <div class="float-right">
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>
      </div>
    </q-dialog>
      <q-btn
        round
        color="blue"
        @click="callModal"
        class="fixed"
        icon="add"
        style="right: 18px; bottom: 30px"
      />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import calendar from './components/calendar.vue'
export default {
  name: 'App',
  components: {
    calendar
  },
  data () {
    return {
      modal: false,
      group: null,
      options: [
        { label: 'Não se repete', value: 'n' },
        { label: 'Repetir', value: 'r' }
      ],
      evento: {
        nome: '',
        descricao: '',
        toggle: true,
        inicio: {
          dia: '',
          hora: ''
        },
        fim: {
          dia: '',
          hora: ''
        },
        repetir: false,
        intervalo: 1,
      },
      eventCollections: []
    }
  },
  computed: {
  ...mapGetters({
      obj: 'evento/evento'
    })
  },
  methods: {
    callModal () {
      this.modal = !this.modal
    },
    getFormatDate (val) {
      try{
        if (val.toString().length === 1) {
          val = '0' + val
        }
      }catch(e){
        return val
      }
      return val
    },
    onSubmit () {
      this.modal=false
      this.eventCollections.push(
        { start: `${this.evento.inicio.dia+' '+this.evento.inicio.hora}`, 
          end: `${this.evento.fim.dia+' '+this.evento.fim.hora}`, 
          title: `${this.evento.nome}`, 
          content:`${this.evento.descricao}`,
          class: 'leisure' 
        })
      this.$store.dispatch('evento/saveEvt',this.eventCollections)  
      this.onReset()
    },
    onReset () {
      this.evento = {
        nome: '',
        descricao: '',
        toggle: true,
        inicio: {
          dia: '',
          hora: ''
        },
        fim: {
          dia: '',
          hora: ''
        },
        repetir: false,
        intervalo: 0
      }
    }
  },
  created : function () {
    const d = new Date()
    const date = [
      d.getFullYear(),
      ('0' + (d.getMonth() + 1)).slice(-2),
      ('0' + d.getDate()).slice(-2) + ' ' + this.getFormatDate(d.getHours()) + ':' + this.getFormatDate(d.getMinutes())
    ].join('-').split(' ')

    this.evento.inicio.dia = date[0]
    this.evento.fim.dia = date[0]
    this.evento.inicio.hora = date[1]
    this.evento.fim.hora = date[1]
  }
}
</script>
<style lang="scss">
.background {
  background: white
}
</style>
