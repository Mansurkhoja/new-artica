import splitting from 'splitting'
export default ({ app }, inject) => {
  inject('splitting', () => {
    splitting()
  })
}
