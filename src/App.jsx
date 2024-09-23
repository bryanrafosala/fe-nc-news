import Header from './Components/Header'
import ArticlesLists from './Components/ArticleLists/ArticlesList'
import ArticleById from './Components/ArticleById/ArticleById'
import SignIn from './Components/AccountPage/AccountPage'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={ <ArticlesLists/>}/>
        <Route path='/articles/:article_id' element={ <ArticleById/>}/>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
     
    </>
   
  )
}

export default App
