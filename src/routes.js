import Account from './components/Account'
import Block from './components/Block'
import Operations from './components/Operations'
import Receive from './components/Receive'
import Settings from './components/Settings'

export default [
  {path: '/', component: Account},
  {path: '/block/:blockHeight', component: Block, name: 'block'},
  {path: '/operations', component: Operations},
  {path: '/receive', component: Receive},
  {path: '/settings', component: Settings}
]
