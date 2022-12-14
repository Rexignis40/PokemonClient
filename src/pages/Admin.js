import './Admin.css';
import Header from "../components/Header.js";
import React, { useEffect, useState } from "react";
import {getPokemonByName} from "../api/getPokemons.js";
import {DeletePokemon} from "../api/deletePokemon.js";
import {AddPokemon} from "../api/AddPokemons.js";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Admin() {
    //Add pokemon
    const [name, setName] = useState("");
    const [genera, setGenera] = useState("");
    const [type, setType] = useState([]);
    const [num, setNum] = useState("");
    const [img, setImg] = useState(null);

    function handleType(e){
        if(e.target.checked){
            type.push(e.target.value);
        }
        else{
            for( var i = 0; i < type.length; i++){ 
    
                if ( type[i] === e.target.value) { 
            
                    type.splice(i, 1); 
                }
            
            }
        }
    }

    const [search, setSearch] = useState("");
    const [ pokemons, setPokemons ] = useState([]);
  
    useEffect(() => {
      const pokemonsFetched = getPokemonByName(search);
      pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[search]);

    function handleSubmit(e){
        console.log(genera);
        console.log(img);
        AddPokemon(name, genera, type, num, img);
    }

    return (
        <>
        <Header />
        <div id="inf-container">
        <h1>Admin</h1>
        <h2>Ajouter des Pokemons :</h2>
        <Container>
            <Form onSubmit={e => handleSubmit()}>
            <Row>
                <Col><Form.Group className="mb-3">
                    <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nom du pokémon" />
                </Form.Group></Col>
                <Col><Form.Group className="mb-3">
                    <Form.Control type="text" value={genera} onChange={e => setGenera(e.target.value)} placeholder="Genera" />
                </Form.Group></Col>
            </Row>
            <Row>
                <Form.Label> Types: </Form.Label>
                <Col><Form.Check type="switch" id="custom-switch" label="Normal" value="normal" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Fire" value="fire" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Water" value="water" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Electric" value="electric" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Grass" value="grass" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Ice" value="ice" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Figthting" value="figthting" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Poison" value="poison" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Ground" value="ground" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Flying" value="flying" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Psychic" value="psychic" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Bug" value="bug" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Rock" value="rock" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Ghost" value="ghost" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Dragon" value="dragon" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Dark" value="dark" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Steel" value="steel" onChange={e => handleType(e)}></Form.Check></Col>
                <Col><Form.Check type="switch" id="custom-switch" label="Fairy" value="fayri" onChange={e => handleType(e)}></Form.Check></Col>
            </Row>
            <Row>
                <Col><Form.Group className="mb-3">
                    <Form.Control type="number" value={num} onChange={e => setNum(e.target.value)} placeholder="Numéro" />
                </Form.Group></Col>
                <Col><Form.Group className="mb-3">
                    <Form.Control type="text"value={img} onChange={e => setImg(e.target.value)} placeholder="Image" />
                </Form.Group></Col>
            </Row>
                <Button variant="light" type="submit">
                    Submit
                </Button>
            <Form.Group className="mb-3 search">
                    <Form.Control type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher un pokémon" />
            </Form.Group>
            </Form>
            <div>
            {pokemons.map((p) => {
            return(
            <div key={p._id}>
                <p>{p.name}</p>
                <p>{p.genera}</p>
                <img src={p.sprites["front_default"]} alt="" />
                <form onSubmit={e => DeletePokemon(p._id)}>
                    <input type="submit" value="Supprimer" />
                </form>
            </div>
            )})}
            </div>
        </Container>
        </div>
        </>
    );
  }
  
  export default Admin;