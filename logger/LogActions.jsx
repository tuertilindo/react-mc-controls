import Reflux from 'reflux'
let LogActions = Reflux.createActions([
  'Info',
  'Success',
  'Warning',
  'Error',
  'System',
  'Debug',
  'Listfetch',
  'Listclean'
])
export default LogActions
