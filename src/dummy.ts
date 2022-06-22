import { ref } from '@vue/reactivity'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

export {
  count,
  increment,
}
