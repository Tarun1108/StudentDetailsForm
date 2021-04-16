import React from 'react';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';


const Review = ({ formData, navigation }) => {
    <h1>Confirmation</h1>
      const {go }= navigation;
    const {
        firstName,
        lastName,
        dateOfBirth,
        matrialStatus,
        address,
        country,
        city,
        state,
        zip,
        projectName,
        description,
      } = formData;
    return (
      <Container maxWidth="sm">
          <h1>Review</h1>
          

            <RenderAccordion summary="BasicDetails " go={go} details={[
                            { 'First Name': firstName },
                            { 'Last Name': lastName },
                            { ' Date Of Birth':  dateOfBirth },
                            { 'Matrial Status':matrialStatus },
            ]}/>
              <RenderAccordion summary="Address" go={go} details={[
                  { 'Address': address },
                  {'Country':country},
                  { 'State': state },
                  { 'City': city },
                  { 'Pin': zip },
            ]}/>

            <RenderAccordion summary="ProjectDetails" go={go} details={[
                             { 'ProjectName': projectName},
                             { ' Description':  description },
            ]}/>

            <Button
                color="primary" variant="contained" style={{ marginTop: '1.5rem' }}   onClick={() => go('submit')}>Submit</Button>
      </Container>
    )
}

export default Review


export const RenderAccordion =({summary, details , go})=>(
    <Accordion>
        <AccordionSummary  expandIcon={<ExpandMoreIcon/>}>{summary}</AccordionSummary>
        <AccordionDetail>
            <div>
                    {details.map((data, index)=>{
                        const objKey= Object.keys(data)[0];
                        const objValue =data[Object.keys(data)[0]];

                        return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
                    })}
                    <IconButton color="primary"component="span"   onClick={() => go(`${summary.toLowerCase()}`)}><EditIcon /></IconButton>
            </div>
        </AccordionDetail>
    </Accordion>
)