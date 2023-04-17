 import logo1 from './img/Mymen.jfif';
 import logo2 from './img/Mywomen2.jpg';
 import logo3 from './img/Mymen3.jpg';
 import logo4 from './img/Women.jpg';
 import logo5 from './img/Womeng.jpg';
 import logo6 from './img/Womenc.jpg';


 




import './App.css';



function App() {
  return (
    <div className="App">
    
       
          
      <h1>Axiom TechGuru Pvt Ltd</h1> 

        <table className="table ">
  <thead> 
    <tr>
      <th scope="col">Sr No</th>
      <th scope="col">First Nmae</th>
      <th scope="col">Last Nmae</th>
      <th scope="col">Desingtion</th>
      <th scope="col">Photo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      
      <td>Gaurav </td>
      <td>Raut</td>
      <td>Software Devloper</td>
      <td><img src={logo1} className="App-logo1" alt="logo" /></td>
    </tr>
    <tr className=''>
      <th scope="row">2</th>
      <td>Sameer </td>
      <td>Mohod</td>
      <td>Software Devloper</td>
      <td> <img src={logo2} className='App-logo2' alt="aaa" /></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="">Aditya</td>
      <td colspan="">Pohane</td>

      <td>Software Devloper</td>
      <td> <img src={logo3} className='App-logo3' alt="aaa" /></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td colspan="">Larry</td>
      <td>Bird</td>
      <td>Software Devloper</td>
      <td> <img src={logo4} className='App-logo3' alt="aaa" /></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td colspan="">Dhanshree</td>
      <td>Singh</td>
      <td>Software Devloper</td>
      <td> <img src={logo5} className='App-logo3' alt="aaa" /></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td colspan="">Swapnil</td>
      <td>Nikose</td>
      <td>Software Devloper</td>
      <td> <img src={logo6} className='App-logo3' alt="aaa" /></td>
    </tr>
  </tbody>
</table>
      
        
      
    </div>
  );
}

export default App;
