import { Container, Card, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {

    const [movies, setMovies] = useState(null);

    // URL FROM THE 'DISCOVER' API LINK
    const url =
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en"
    // BELOW IS FOUND/COPIED FROM THE MOVIE DB WEBSITE. SAME PAGE WHERE THE LINK ABOVE IS FOUND
    const options = {
        method: "GET",
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGJkNzViMTY0MjcxN2FkMGJhOTFhMDgwY2UyNWJjYyIsInN1YiI6IjY0NjZmNGVlMDA2YjAxMDE2ODRhZTE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ciqgzh1AuL7VDFmBAmZVaNJOk2F4vOOMPyvbkivJDuY'
        }
    };

    // REQUEST DATA FROM THE API. ALSO FOUND ON SAME PAGE AS ABOVE.
    useEffect(() => {
        fetch(url, options)
            .then((res) => res.json())
            .then((json) => setMovies(json))
    }, [])

    // LINKS URL WITH EACH INDIVIDUAL MOVIE IMAGE TO SET UP TO DISPLAY ON WEBPAGE
    const getImageUrl = posterPath => {
        const baseImageUrl = 'https://image.tmdb.org/t/p/w500'
        return baseImageUrl + posterPath
    }

    return (
        <Container className="homeContainer">
            <div className="d-flex flex-wrap">
                {movies ? (
                    // CREATES A CARD FOR EVERY MOVIE IMAGE
                    movies.results.map((movie) => ( // WHY IS THE PARAMETER 'MOVIE'?
                        <div className="col-lg-3" key={movie.id}>
                            <Card
                                key={movie.id}
                                style={{ width: "200px", height: "450px", marginTop: "50px", border: 'solid black 1px' }}
                            >
                                <Nav>
                                    <Nav.Item>
                                        <Link to={`/details/${movie.id}`}>
                                            <Button
                                                style={{ position: "absolute", zIndex: '1', opacity: '0', left: '-.5px', top: "0", width: "200px", height: "300px", objectFit: "cover" }}
                                                to={`/details?data=${movie.id}`}

                                            ></Button>
                                        </Link>
                                        <Card.Img
                                            variant="top"
                                            src={getImageUrl(movie.poster_path)}// HOW DOES THIS WORK WITH THE PARAMETER 'MOVIE'?
                                            alt="Movie poster"
                                            style={{ position: "absolute", left: '-.5px', top: "0", width: "200px", height: "300px", objectFit: "cover" }}
                                        />
                                    </Nav.Item>
                                </Nav>
                                <Card style={{ position: "absolute", bottom: "0", top: "67%", right: "0", left: "0" }}>
                                    <Card.Title style={{ textAlign: "center" }}>{movie.original_title}</Card.Title>
                                    {/* Stars Page */}
                                    <Nav>
                                        <Nav.Item>
                                            <Link to={`/details/${movie.id}`}>
                                                <Button
                                                    style={{ position: "absolute", bottom: "10%", left: "18%" }}
                                                    variant="dark"
                                                    size="sm"
                                                    to={`/details/${movie.id}`}>
                                                    Details and Reviews
                                                </Button>
                                            </Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card>
                            </Card>
                        </div>
                    ))
                ) : (
                    "loading.."
                )}
            </div>
        </Container>
    )
}