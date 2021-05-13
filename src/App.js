import {Provider} from 'react-redux'
import 'assets/style/reset.css'
import Tab from './pages/home/Tab'
import store from "./store/"
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
    <div className="App">
      <Tab/>
    </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
