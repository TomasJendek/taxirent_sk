window.RegistrationForm = createReactClass({
    getInitialState: function() {
        return {
        };
    },
    handleMake() {
        var name = this.firstname.value;
        var surname = this.lastname.value;
        var email = this.email.value;
        var phone = this.phone.value;


        console.log('The name value is ' + name + 'the surname value is ' + surname);

        $.ajax({
            url: '/api/v1/reservations',
            type: 'POST',
            data: {  reservation: {interval: this.props.data.interval, from: this.props.data.from, firstname: name, lastname: surname, email: email, phone: phone}  },
            success: (response) => {
                this.props.handleMakeReservation(response);
            }
        });
    },

    render() {
        return (
            <div>
                <h3 class="text-center">Vyplňte prosím vaše osobné údaje:</h3>
                <div className="form-group row">
                    <div className="col-md-6">
                        <input className="form-control" ref={node => this.firstname = node} placeholder="Meno" id="tt" required/>
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" ref={node => this.lastname = node} placeholder="Priezvisko" id="ee" required/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-6">
                        <input className="form-control" ref={node => this.email = node} placeholder="Email" id="email"  type="email" required/>
                    </div>
                    <div className="col-md-6">
                         <input className="form-control" ref={node => this.phone = node} placeholder="Telefon" id="phone" required/>
                    </div>
                </div>
                <div>
                    <h3 class="text-center">Detail objednávky:</h3>
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Vozidlo</th>
                                <th scope="col">Typ</th>
                                <th scope="col">Čas</th>
                                <th scope="col">Cena</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Škoda fabia</th>
                                <td>Sedane 1.6 TDi</td>
                                <td>7:00 - 19:00</td>
                                <td>30 Eur</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={this.handleMake}>Objednať</button>
                <div>
                    <p>*Cena s dph</p>
                </div>
            </div>

        )
    }
});