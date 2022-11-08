import Login from './Login'
import Register from './Register';
import Categories from './Categories';
import Update from './Update';
import Words from './Words';
import Tags from './Tags';
import AddWord from './AddWord';
import EditTag from './EditTag';
import CreateTag from './CreateTag';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Categories />} />
          <Route path="/update" element={<Update />} />
          <Route path="/words" element={<Words />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/addword" element={<AddWord />} />
          <Route path="/edittag" element={<EditTag />} />
          <Route path="/createtag" element={<CreateTag />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
