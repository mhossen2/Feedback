
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
// import Card from './components/shared/Card'
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import {FeedbackProvider} from './context/FeedbackContext'


function App() {
  
  return (
    <FeedbackProvider>
    <Router>
    <Header text='Hello World' />
    <div className="container">

    <Routes>
    <Route exact path='/' element={ 
    <>
    <FeedbackForm  />
    <FeedbackStats  />
    <FeedbackList />

    </>
    } >
    
    </Route>
    <Route path='/about' element={<AboutPage />} />
    
    </Routes>

    
    <AboutIconLink />
    </div>
    </Router>

    </FeedbackProvider>
  );
}

export default App;
