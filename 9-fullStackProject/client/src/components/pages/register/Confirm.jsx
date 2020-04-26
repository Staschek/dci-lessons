import React, { Component, Fragment } from 'react';

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>

</ul>        


<li primaryText='First Name' secondaryText={firstName} />
            <li primaryText='Last Name' secondaryText={lastName} />
            <li primaryText='Email' secondaryText={email} />
            <li primaryText='Occupation' secondaryText={occupation} />
            <li primaryText='City' secondaryText={city} />
            <li primaryText='Bio' secondaryText={bio} />

            <br />
          <Button
            label='Confirm'
            primary={true}
            variant='contained'
            //style={style.button}
            onClick={this.continue}
          />
          <Button
            label='Back'
            primary={false}
            variant='contained'
            //style={style.button}
            onClick={this.back}
          />

    );
  }
}
// const style = {
//     button:{
//         margin:15
//     }
// }
export default Confirm;
