import './App.css';
import './AppStyle.css'
// import { Greet } from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/HelloJSX';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import StyleSheet from './components/StyleSheet';
// import Style from './AppStyles.module.css'
// import Form from './components/Form';
// import LifeCycleA from './components/LifeCycleA';
// import FragmentDemo from './components/FragmentDemo';
// import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';

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
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}

      {/* <StyleSheet /> */}
      {/* <h1 className={`${Style.success} heading-small`}>Success</h1> */}

      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentDemo /> */}

      {/* This to see the behaviour of PureComponent and memo  */}
      {/* <ParentComp /> */}

      <RefsDemo />
    </div>
  );
}

export default App;
