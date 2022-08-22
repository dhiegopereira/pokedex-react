import './styles.css';

export default function Card(props) {
    return (
        <ul className='list'>
            {
                props.pokemonsFilters.map((item, index) => (
                    <li key={item.name} className='items'>
                        <img
                            className='image'
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
                            alt={item.name}
                        />
                        <p className='name'>{item.name}</p>
                    </li>
                ))
            }
        </ul>
    )
}