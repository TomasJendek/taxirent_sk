window.NewReservation = createReactClass({
        getInitialState: function() {
            return {
                showRegistration: false,
                showNotAvailableMessage : false,
                inputValues : "",
                interval: "",
                from: "",
                showCheck: true,
                showSummary: false,
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
            };
        },

        componentDidMount: function() {
            $.datepicker.setDefaults(
                $.extend(
                    {'dateFormat':'dd-mm-yy'},
                    $.datepicker.regional['sk']
                )
            );

            $('#datepicker').datepicker({
                minDate: '0'}
            );

            $("#datepicker").datepicker('setDate', new Date());
        },

        checkAvailability() {
            var interval = this.interval.value;
            var from = this.from.value;
            this.setState({interval: interval});
            this.setState({from: from});

            $.ajax({
                url: '/api/v1/check_availability',
                type: 'GET',
                data: {  reservation: {interval: interval, from: from}  },
                success: (response) => {
                    var available = response.available;
                    if (available == "true"){
                        this.setState({showRegistration: true});
                        this.setState({showNotAvailableMessage: false});
                    }
                    else{
                        this.setState({showNotAvailableMessage: true});
                    }
                }
            });

            console.log('The name value is ' + interval + 'the description value is ' + from);
        },

        handleMakeReservation(response) {
            this.setState({showCheck: false});
            this.setState({showSummary: true});

            this.setState({firstname: response.firstname});
            this.setState({lastname: response.lastname});
            this.setState({email: response.email});
            this.setState({phone: response.phone});
        },

        render() {
            return (

            <div className="container-fluid">
                <div className="row fill">
                    <div className="wide">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="jumbotron vertical-center">
                                <h1 className="text-center">TAXIRENT.</h1>
                                <div >
                                {this.state.showCheck ?
                                    <div>
                                    <div className="form-group row">
                                        <label htmlFor="fromdate" className="col-md-4 col-form-label">Dátum vyzdvihnutia:</label>
                                        <div className="col-md-8">
                                            <input className="form-control" ref={node => this.from = node} placeholder="From date" id="datepicker" required/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="interval" className="col-md-4 col-form-label">Na aký čas:</label>
                                        <div className="col-md-8">
                                            <select className="form-control" ref={node => this.interval = node} required>
                                                <option value="8">8 hod</option>
                                                <option value="12">12 hod</option>
                                            </select>
                                        </div>
                                    </div>
                                    </div>
                                    :
                                    <div>

                                    </div>
                                }
                                    { this.state.showRegistration && this.state.showCheck ? <RegistrationForm data={this.state} handleMakeReservation={this.handleMakeReservation}/> : null }
                                    { this.state.showSummary || this.state.showRegistration ? null : <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={this.checkAvailability}>Overiť dostupnosť vozidla</button>}
                                    { this.state.showNotAvailableMessage ? <h2 class="red"> Termín je bohužial obsadený</h2> : null}
                                    { this.state.showSummary ? <Summary data={this.state}/> : null}




                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>

            </div>

            )
        }
    }
);