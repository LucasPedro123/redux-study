import React, { useReducer, useState } from 'react'
import Card from '../../components/Header/header.component';
import Image1 from '../../assets/image.jpg';


interface IStateProp {
    name: string;
    description: string;
}

interface IActionProp {
    type: string;
    payload: Partial<IStateProp>; // `Partial` permite que o payload tenha um ou mais campos de `IStateProp`.
}

const initialState: IStateProp = { name: '', description: '' };

function reducer(state: IStateProp, action: IActionProp): IStateProp {
    switch (action.type) {
        case 'alterar-nome':
            return { ...state, name: action.payload.name || state.name };
        case 'alterar-descricao':
            return { ...state, description: action.payload.description || state.description };
        case 'alterar-ambos':
            return {
                ...state,
                name: action.payload.name || state.name,
                description: action.payload.description || state.description
            };
        default:
            return state;
    }
}

const Home: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleBothChange() {
        dispatch({ type: 'alterar-ambos', payload: { name, description } });
    }


    return (
        <>
            <Card name={state.name} image={Image1} description={state.description} />
            <button onClick={handleBothChange}>Alterar Ambos</button>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite o nome"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Digite a descrição"
            />
        </>

    )
}

export default Home;