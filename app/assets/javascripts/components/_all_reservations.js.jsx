window.Reservations = createReactClass({

    render() {
        var items= this.props.reservations.map((reservation) => {
            return (
                <div key = {reservation.id}>
                    <h3>{reservation.interval}</h3>
                    <p>{reservation.from}</p>
                </div>
            )
        });

        return(
            <div>
                {items}
            </div>
        )
    }
});