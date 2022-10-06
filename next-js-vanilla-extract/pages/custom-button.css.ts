import { style } from '@vanilla-extract/css'

import { buttonStyles } from '../components/button/button.css'

export const customButtonStyle = style([buttonStyles, {
  width: '90%',
  background: 'red'
}])