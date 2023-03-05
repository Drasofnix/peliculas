export default function Pelicula(props) {
    return (<div className="movie-item-style-2">
        <img src={props.img} alt="" />
        <div className="mv-item-infor">
            <h6><a href="moviesingle.html">{props.title}</a></h6>
            <p className="rate"><i className="ion-android-star"></i><span>   10</span> /10</p>
            <p className="describe">-</p>
            <p className="run-time"> Run Time: 2h 21m    .     <span>MMPA:  PG-13</span>    .     <span>Release: may 5</span></p>
            <p>Director: <a>Enrique Segobiano</a></p>
            <p>Stars: <a>Todos</a></p>
        </div>
    </div>);
}