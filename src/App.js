import './App.scss';
import { Routes ,Route } from 'react-router-dom';
import UserList from './components/userList'
import Posts from './components/Posts'
import OneUser from './components/userList/Item';
import OnePost from './components/Posts/Item';
import CreatePost from './components/createPost';
import ViewPost from './components/ViewPost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserList />}/>
        <Route path='/authors' element={<UserList />}/>
        <Route path='/authors/:id' element={<OneUser />}/>
        <Route path='posts' element={<Posts />}/>
        <Route path='posts/:id' element={<OnePost />}/>
        <Route path='createPost/:id' element={<CreatePost />}/>
        <Route path='viewPost/:id' element={<ViewPost />}/>
      </Routes>
    </div>
  );
}

export default App;
