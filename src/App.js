import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/HelloJSX';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman"><p>This is childern</p></Greet> */}
      {/* <Greet name="Clark" heroName="Superman"><button>Action</button></Greet> */}
      {/* <Greet name="Diana" heroName="Wonder Woman"></Greet> */}

      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Welcome name="Clark" heroName="Superman" /> */}
      {/* <Welcome name="Diana" heroName="Wonder Woman" /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter addValue='3' /> */}

      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
