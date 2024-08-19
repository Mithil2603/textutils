import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
// import About from './Components/About';

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About TextUtils"/>
      <TextForm heading="Enter the text to analyse below" />
      {/* <About></About> */}
    </>
  );
}

export default App;