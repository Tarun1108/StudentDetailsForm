import React from 'react'
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ProjectDetails = ({formData, setForm, navigation}) => {
    const { projectName, description} = formData;
   
    return (
      <Container maxWidth="xs">
          <h1>Project Details</h1>
            {/* phone */}
        <TextField   label="Project Name" name="projectName" value={ projectName} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth/>
        {/* email */}
        <TextField   label="Description" name="description" value={description} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth/>

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

export default ProjectDetails;
