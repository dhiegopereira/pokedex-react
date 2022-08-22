import './styles.css';
import axios from 'axios';
import * as React from 'react';
import Card from '../../components/Card';

export default function Home() {

    const [pokemons, setPokemons] = React.useState([]);
    const [pokemonsFilters, setPokemonsFilters] = React.useState([]);
    const [input, setInput] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setPokemonsFilters(pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(input.toLowerCase())));
    }

    React.useEffect(() => {
        const getPokemons = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            setPokemons(response.data.results);
            setPokemonsFilters(response.data.results);
        }
        getPokemons();
    }, [])

    return (
        <div className="container">
            <h1 className="title">Pokédex</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="search"
                    type="text"
                    placeholder="Pesquisar..."
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
            </form>
            <Card pokemonsFilters={pokemonsFilters} />
        </div>
    )
}