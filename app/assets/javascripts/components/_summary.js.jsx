window.Summary = createReactClass({
    getInitialState: function() {
        return {

        };
    },

    render() {
        return (
            <div>
                <h3>Ďakujeme za využívanie našich služieb.</h3>
                <h2 class="yellow">Detail objednavky</h2>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Datum</th>
                            <th scope="col">Cas vyzdvihnutia</th>
                            <th scope="col">Cas vratenia</th>
                            <th scope="col">Vozidlo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{this.props.data.from}</th>
                            <td>7:00</td>
                            <td>19:00</td>
                            <td>Skoda fabia 1.6 TDi</td>
                        </tr>

                    </tbody>
                </table>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Meno</th>
                            <th scope="col">Priezvisko</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefon</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{this.props.data.firstname}</th>
                            <td>{this.props.data.lastname}</td>
                            <td>{this.props.data.email}</td>
                            <td>{this.props.data.phone}</td>
                        </tr>

                    </tbody>
                </table>

                <h2 class="yellow">Suma k uhrade: 30€</h2>


            </div>

        )
    }
});