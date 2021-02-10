import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from "../../../src/App.vue";
import store from '../../../src/store'
const localVue = createLocalVue()


describe("App test", () => {
  it("should is Vue instance", () => {
    const wrapper = shallowMount(App, {
      localVue
    });
    expect(wrapper).toBeTruthy();
  })

  it("should change value", () => {
    const wrapper = shallowMount(App, {
      localVue
    });
    wrapper.vm.callModal()
    expect(wrapper.vm.modal).toBeTruthy();
  })

  it("should increment string", () => {
    const wrapper = shallowMount(App, {
      localVue
    });
    let d = wrapper.vm.getFormatDate('9')
    expect(d).toBe('09');
  })

  it("should add event in calendar", () => {
    const wrapper = shallowMount(App, {
      store,
      localVue,
      mocks: {
        $store: {
          dispatch: () => {}
        }
      }
    });
    let event = 
    {
      nome: 'Jest',
      descricao: 'this is a test',
      toggle: true,
      inicio: {
        dia: '2012-09-07',
        hora: '10:10'
      },
      fim: {
        dia: '2012-09-07',
        hora: '11:10'
      },
      repetir: false,
      intervalo: 1,
    }
    wrapper.vm.evento = event
    wrapper.vm.onSubmit()

    expect(wrapper.vm.eventCollections.length).toBe(1);
  })


})