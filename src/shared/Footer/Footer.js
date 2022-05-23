import "./Footer.css"

export default function Footer({poster, title, session}) {
  return (
    <>
      <div className="Footer">
        <div className="movie">
          <img className="cartaz" src={poster} alt="Poster" />
        </div>
        <div>
        <p>{title}</p><br></br>
        <p>{session}</p>
        </div>
      </div>
    </>
  );
}
