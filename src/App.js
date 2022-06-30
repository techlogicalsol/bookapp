import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import BooksCard from './Components/BooksCard';
import Footer from './Components/Footer';


function App() {

  const [maxResults, setMaxResults] = useState(10)
  const [startIndex, setStartIndex] = useState(1)
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false)
  const [card, setCard] = useState([])

  const handleSubmit = () =>{
    setLoading(true)
    if(maxResults > 40 || maxResults < 1){
      toast.error("Max result must be between 1 to 40")
    
    }else{
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`)
      .then(res =>{

        if(startIndex >= res.data.totalItems || startIndex < 1){

          toast.error(`max result must be between 1 and ${res.data.totalItems}`)

        }else{
          if(res.data.items.length > 0){
            setCard(res.data.items)
            setLoading(false)
            //console.log("this is a card: ",card)
          }
        }
        
        console.log(res.data)
      
      }).catch(err =>{
        //console.log(err)
        setLoading(true)
        toast.error(`${err.response.data.error.message}`)
      })
    }
  }


  const handleCards = () =>{
    console.log(card)
    const items = card.map((item, index)=>{
      let thumbnail = '';
      if(item.volumeInfo.imageLinks.thumbnail){
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }

      return(
        <div className="col-md-3 mb-4" key={item.id}>
          <BooksCard 
          thumbnail ={thumbnail}
          title={item.volumeInfo.title}
          pageCount={item.volumeInfo.pageCount}
          language={item.volumeInfo.language}
          authors={item.volumeInfo.authors}
          publisher={item.volumeInfo.publisher}
          description={item.volumeInfo.description}
          previewLink={item.volumeInfo.previewLink}
          infoLink={item.volumeInfo.infoLink}

          />
        </div>
      )


    })


    if (loading) {
      return(
        <div className="d-flex justify-content-center mt-3">
          <div style={{width: '60px', height: '60px'}} className="spinner-border text-warning"></div>
        </div>
      
      ) 
    }

    else{
      return(
        <div className="container my-5">
          <div className="row">
            {items}
          </div>
        </div>
      )

    }
  }




  return (
    <>
      <NavBar />
      <Header 
          query={query}
          setQuery={setQuery}
          maxResults={maxResults}
          setMaxResults={setMaxResults}
          startIndex={startIndex}
          setStartIndex={setStartIndex}
          handleSubmit={handleSubmit}

      />


      
      <ToastContainer />
      {handleCards()}

    </>
  );
}

export default App;
