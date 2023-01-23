import React, {useState} from 'react';

const Listapoke = () => {
    const [listapoke,setListapoke]=useState([]);

    const getpokemones = ()=>fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0") //hacemos la solicitud a la api de fetch con una promise de que llegue una respuesta o un error en catch
    .then(response=> {return response.json();
    }).then(response=>{
        
        let arraydepokeobj = response.results; //array de objetos pokemones
       // console.log(arraydepokeobj)
        setListapoke(arraydepokeobj)// se pone un nuevo array, consultar spread operator
    }).catch(error=>{console.log(error)});


  return (
    <div className='container col-4'>
        <button type="button" className='btn btn-outline-info my-2' onClick={getpokemones}>Fetch Pokemon</button>
        <ul className='list-group'>
        {
            (listapoke.length=== 0) ? "Lista vacia presione fetch para listar" :
        listapoke.map((e,index)=><li className='list-group-item' key={index}>{e.name}</li>)
        }
        </ul>
    </div>
  )
}

export default Listapoke