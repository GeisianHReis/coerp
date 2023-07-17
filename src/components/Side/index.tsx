import { Lateral } from "./styles";

interface ISide{
    name: string;
}

export function Side({name}: ISide){
    return(
        <>
        
            <Lateral>
                {name}
            </Lateral>
        </>

    )
}