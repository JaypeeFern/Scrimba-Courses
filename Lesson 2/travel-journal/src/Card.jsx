export default function Card({item: props}) {
    return (
        <div className="card--container">
            <div className="card--wrapper">
                <img className="card--img" src={props.img} />
                <div className="card--info-header">
                    <img className="card--gps-marker" src="./src/assets/gps.png" />
                    <span className="card--location">{props.location}</span>
                    <span className="card--gps" >View on Google Maps</span>
                    <div className="card--info-body">
                        <h1 className="card--title">{props.title}</h1>
                        <h2 className="card--date">{props.date}</h2>
                        <p className="card--text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}