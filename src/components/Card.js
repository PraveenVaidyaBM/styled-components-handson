import { StyledCard } from "./styles/Card.styled";



export default function Card({ item: { id, title, body, image } }) {
    return (
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
            <div>
                {title}
                {body}
            </div>
            <div>
                <img src={`./images/${image}`} alt="" />
            </div>
        </StyledCard>
    );
}
