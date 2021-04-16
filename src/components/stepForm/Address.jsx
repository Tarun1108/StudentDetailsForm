import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Address = ({formData, setForm, navigation}) => {
    const {address, country, city, state, zip} = formData;
   
    return (
       <Container maxWidth="xs">
           <h1>Accomodation Details</h1>
           {/* Address */}
           <TextField   label="Address" name="address" value={address} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth/>
          {/* country */}
          <TextField   label="Country" name="country" value={country} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth/>
         {/* state */}
         <TextField   label="State" name="state" value={state} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth/>
        {/* city */}
        <TextField   label="City" name="city" value={city} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth/>
        {/* Zip */}
        <TextField
        label="Zip"
        name="zip"
        type="number"
        value={zip}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

       {/* Buttons */}
       <div style={{ marginTop: "1rem" }}>
           {/* Back */}
        <Button color="secondary" variant="contained" style={{ marginRight: "1rem" }} onClick={() => navigation.previous()}> Back</Button>

        {/* Next */}
        <Button color="primary" variant="contained" onClick={() => navigation.next()}> Next
         </Button>
      </div>

       </Container>
    )
}

export default Address
