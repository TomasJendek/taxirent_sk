window.Body = createReactClass({
    getInitialState() {
        return { reservations: []}
    },

    componentDidMount() {
        $.getJSON('/api/v1/reservations.json', (response) => { this.setState({ reservations: response }) });
    },

    handleSubmit(reservation, showRegistration) {
        var newState = this.state.reservations.concat(reservation);
        this.setState({reservations: newState});
    },

    render() {
        return (
            <div>
                <NewReservation handleSubmit={this.handleSubmit}/>
                <Reservations reservations={this.state.reservations}/>
            </div>
        )
    }
});