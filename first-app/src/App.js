
import './App.css';
import Head from './components/func';



function App() {

  const Pointers = [
    {
      heading:"Mobile Operating System",
      items:["Andriod","Blackberry","iPhone","Windows Phone"],
    },
    {
      heading:"Mobile Manufacturers",
      items:["Samsung","HTC","Micromax","Apple"],
    }
  ]


  
  return (
    <div className="App">
    
     <div>
       {
         Pointers.map((el)=>{
           return <Head el={el}></Head>
         })

       }
     </div>
    </div>
  );
}

export default App;
