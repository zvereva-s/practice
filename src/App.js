import { Routes, Route } from 'react-router-dom';
import Header from './module/Header/Header';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactsPage';
import ProductsPage from './pages/ProductsPage';
import ProductsPartnersPage from './pages/ProductsPartnersPage';
import PeopleListPage from './pages/PeopleListPage/PeopleListPage';
import SingleHumanPage from './pages/SingleHumanPage';

import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/people' element={<PeopleListPage />}/>
        <Route path="/people/:id" element={<SingleHumanPage />} />
        <Route path='/products' element={<ProductsPage />}></Route>
        <Route path='/products-partners' element={<ProductsPartnersPage />} ></Route>
        <Route path='/contacts' element={<ContactPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
