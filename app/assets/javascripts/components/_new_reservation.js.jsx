window.NewReservation = createReactClass({
        componentDidMount: function() {
            $.datepicker.setDefaults(
                $.extend(
                    {'dateFormat':'dd-mm-yy'},
                    $.datepicker.regional['sk']
                )
            );

            $('#datepicker').datepicker({
                minDate: '0'}
            )

            $("#datepicker").datepicker('setDate', new Date());
        },

        handleClick() {
            var interval = this.interval.value;
            var from = this.from.value;

            $.ajax({
                url: '/api/v1/reservations',
                type: 'POST',
                data: {  reservation: {interval: interval, from: from}  },
                success: (response) => {
                    this.props.handleSubmit(response)
                }
            });

            console.log('The name value is ' + interval + 'the description value is ' + from);
        },

        render() {
            return (

            <div class="container-fluid">
                <div class="row fill">
                    <div class="wide">
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                            <div class="jumbotron vertical-center">
                                <h2 class="text-center">Rezervacia</h2>
                                <form>
                                    <div class="form-group row">
                                        <label for="fromdate" class="col-md-3 col-form-label">Dátum od:</label>
                                        <div class="col-md-9">
                                            <input class="form-control" ref={node => this.from = node} placeholder="From date" id="datepicker" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="interval" class="col-md-3 col-form-label">Na aký čas:</label>
                                        <div class="col-md-9">
                                            <select class="form-control" ref={node => this.interval = node} >
                                                <option value="8">8 hod</option>
                                                <option value="12">12 hod</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={this.handleClick}>Objednat</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                </div>
            </div>

            )
        }
    }
);