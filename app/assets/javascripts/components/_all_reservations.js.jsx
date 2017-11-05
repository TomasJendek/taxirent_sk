window.Reservations = createReactClass({

    render() {
        var reservations= this.props.reservations.map((reservation) => {
            return (
                <div key = {reservation.id}>
                    <h3>{reservation.interval}</h3>
                    <p>{reservation.from}</p>
                    <p>{reservation.email}</p>
                </div>
            )
        });

        return(
            <div>
                {reservations}
            </div>
        )
    }
});