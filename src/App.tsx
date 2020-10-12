import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button';
import Alert from './components/Alert/alert'
import './App.css';

function App() {
  return (
    <div className="App">
     <section className="section">
        <Button>default</Button>
        <Button disabled>disabled</Button>
        <Button onClick={() => console.log('123')} btnType={ButtonType.Primary} size={ButtonSize.Small}>primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>danger</Button>
        <Button target="_blank" href="http://www.baidu.com" btnType={ButtonType.Link}>link</Button>
        <Button disabled btnType={ButtonType.Link}>link disabled</Button>
     </section>

     <section className="section">
        <Alert>This is a default alert!</Alert>
        <Alert type="success">This is a default alert!</Alert>
        <Alert type="warning">This is a default alert!</Alert>
     </section>
    </div>
  );
}

export default App;
