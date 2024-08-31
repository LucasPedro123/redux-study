import './header.style.css'

interface IProps {
    name: string;
    description: string;
    image: string;
}
function Filho({ children }: any) {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

function Card({ name, image, description }: IProps) {
    console.log(name)



    return (
        <Filho>
            <img src={image} alt="" />
            <div className='card-wrapper'>
                <h1 className='name'>{name}</h1>
                <p className='description'>{description}</p>
            </div>
        </Filho>
    )
}

export default Card;