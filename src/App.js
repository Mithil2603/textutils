import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About TextUtils"/>
      <TextForm heading="Enter the text to analyse below" />
    </>
  );
}

export default App;