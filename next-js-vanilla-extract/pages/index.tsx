
import { Button } from '../components/button/button'

import * as styles from './custom-button.css'

export default function Home() {
  return (
    <div>
      <Button>Base button</Button>
      <Button className={styles.customButtonStyle}>Redefined Button</Button>
    </div>
  );
}