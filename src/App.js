import { Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from './Component/Layout';
import DashboardPage from './Component/Pages/Dashboard/Dashboard';
import Setting from './Component/Pages/setting/Setting';
import Profile from './Component/Pages/Profile/Profile';
import Projects from './Component/Pages/Projects/Projects';
import Courses from './Component/Pages/Courses/Courses';
import Friends from './Component/Pages/Friends/Friends';
import Files from './Component/Pages/Files/Files';
import Plans from './Component/Pages/Plans/Plans';



function App() {

  return (

    <div className="App">

      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='Dashpoard' element={<DashboardPage />}  />
        <Route path='setting' element={<Setting />}  />
        <Route path='profile' element={<Profile />}  />
        <Route path='projects' element={<Projects />}  />
        <Route path='courses' element={<Courses />}  />
        <Route path='friends' element={<Friends />}  />
        <Route path='files' element={<Files />}  />
        <Route path='plans' element={<Plans />}  />

        </Route>

      

      </Routes>
    </div>
  );
}

export default App;
