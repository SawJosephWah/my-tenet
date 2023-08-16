import { Container } from 'react-bootstrap';
import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './screens/Login';
import RegisterScreen from './screens/Register';
import DefaultLayout from './screens/Default/DefaultLayout';
import PrivateRoute from './components/privateRoute';
import HomeScreen from './screens/Home/Home';
import Course from './screens/Course';
import Test from './components/Test';
import Details from './screens/Home/Details';
import Explore from './screens/Explore/Explore';

import TeacherHome from './screens/TeacherHome/TeacherHome';
import TeacherHomeDetails from './screens/TeacherHome/TeacherHomeDetails';
import TeacherBatch from './screens/TeacherBatch/TeacherBatch';
import TeacherCourseDetails from './screens/TeacherBatch/TeacherBatchDetails';
function App() {
  return (
    <Container fluid className="p-0">
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<RegisterScreen />} />
          <Route element={<PrivateRoute />} >
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" element={<HomeScreen />}>
                <Route path="/test/:id" element={<Details />} />
              </Route>
              <Route path="/courses" element={<Course />} />
              <Route path="/explore" element={<Explore></Explore>}></Route>
              <Route path="/teacher" element={<TeacherHome></TeacherHome>}>
                <Route path="details" element={<TeacherHomeDetails />} />
              </Route>
              <Route path="/teacher-batch" element={<TeacherBatch></TeacherBatch>} />
              <Route path="/teacher-batch/details/:batch_id" element={<TeacherCourseDetails></TeacherCourseDetails>} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Container>
  )
}

export default App
