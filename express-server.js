const { verify } = require('crypto');
const express = require('express');


const app = express();

class Movie {
    constructor(theater, dates, city, tickets){
        this.theater = theater;
        this.date = date;
        this.city = city;
        this.tickets = tickets
    }
}
class Theater {
    constructor(movies, city){
        this.movies = movies;
        this.city = city;
    }
}
class Ticket {
    constructor(movie, id, date){
        this.movie = movie;
        this.id = id;
        this.date = date;
    }
}

movies = [
    // list of movies
]

theaters = [
    // list of theaters

]
// api 1 - where a movie is being screened given a date and a movie
app.get('/movie-locations', (req, res) => {
    result = [];
    movie = req.query.Movie;
    date = req.query.date;
    for (let theater in theaters) {
        for (let _movie in theater){
            if ((_movie == movie) && (date == _movie.date)){
                result.append(theater);
                break;
            }
        }
    }
    res.send(result);
});

// api 2 - which movies are screened in a specipic theater given a date
app.get('/movies-in-location', (req, res) => {
    result = []
    theater = req.query.Theater;
    date = req.query.date;
    for (let _movie in theater){
        if (_movie.date == date){
            result.append(_movie);
        }
    }
    res.send(result);
});

// api 3 - puchasing a ticket
app.get('/purchase-ticket', (req, res) => {
    movie = req.query.Movie;
    id = req.query.id;
    date = req.query.date;
    ticket = Ticket(movie,id,date)
    theater[movie.theater][movie]
});

// api 4 - ticket validation
app.get('/ticket-validation', (req, res) => {
    ticket = req.query.ticket;
    for (let theater in theaters) {
        for (let _movie in theater){
            for (let _ticket in _movie.tickets){
                if (ticket == _ticket){
                    return true;
                }
            }
        }
    }
    return false;

});




app.listen(3000);