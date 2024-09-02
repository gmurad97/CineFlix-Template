import { useParams } from "react-router-dom";

const SinglePage = () => {
    const params = useParams()
    /* console.log(getId) *///movieId
    return(
        <h1 style={{color:"WHITE"}}>{params.movieId}</h1>
    )
}

export default SinglePage;