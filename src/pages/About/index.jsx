// src/pages/About.js
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInContainer = styled('div')({
  animation: `${fadeIn} 1s ease-out`,
});

const About = () => (
    <Container>
        <FadeInContainer>
            <Typography variant="h3" gutterBottom className="text-center my-12 text-[#FB6119]">
                About Us
            </Typography>
            <Typography variant="h5" gutterBottom className="text-[#5F452A]">
                Based in Surat (Gujarat), G J Impex was set up in the year 2013. We are a reliable Importer, Manufacturer, and Supplier of various Weighing Products like Load Cells, Crane Scales, Transformers, Flat Cables, Connectors, MRS Connectors, Power Cords, and Strain Gauges. Under the rich guidance of our Managing Directors, Mr. Jignesh Golaviya and Mr. Nikunj Golaviya, both B.E. in Instrumentation & Control, we strive to provide the highest satisfaction levels.
            </Typography>
            <Typography variant="h5" gutterBottom className="text-[#FB6119] mt-12">
                Our Warehousing Facility
            </Typography>
            <Typography paragraph className="text-[#5F452A] mb-12">
                Our warehouse capacity has been strategically designed to keep all products secure. We take precautionary measures to handle emergency situations effectively. Key features include:
            </Typography>
            <ul className="list-disc pl-5 mb-12 space-y-2 text-[#5F452A]">
                <li>Good connectivity with various transport mediums</li>
                <li>Forklifts & Cranes for moving equipment and machines</li>
                <li>Highly efficient inventory tracking system</li>
            </ul>
            <Typography variant="h5" gutterBottom className="text-[#FB6119] mt-12">
                Our Team
            </Typography>
            <Typography paragraph className="text-[#5F452A] mb-12">
                Our motivated team of engineers and professionals is the backbone of our organization. Key reasons why we are a top priority for our clients include:
            </Typography>
            <ul className="list-disc pl-5 mb-12 space-y-2 text-[#5F452A]">
                <li>High standards of quality</li>
                <li>Easy payment modes</li>
                <li>Safety measures</li>
                <li>Speedy delivery at competitive prices</li>
                <li>24x7 support</li>
                <li>Simple business ethics</li>
                <li>Efficient packaging personnel</li>
            </ul>
            <Typography variant="h5" gutterBottom className="text-[#FB6119] mt-12">
                Customer Satisfaction
            </Typography>
            <Typography paragraph className="text-[#5F452A] mb-12">
                We are a customer-oriented organization, considering our clients as our greatest asset. We strive to fulfill client requirements, minimize costs, and enhance output.
            </Typography>
            <Typography variant="h5" gutterBottom className="text-[#FB6119] mt-12">
                Quality Assurance
            </Typography>
            <Typography paragraph className="text-[#5F452A] mb-12">
                Our Quality Team ensures flawless product checks. We procure goods from vendors meeting quality standards. Before packing and loading, our quality controllers rigorously examine load cells to ensure functionality and tamper-proof quality.
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className="p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <Typography variant="h6" className="text-[#FB6119]">
                            Name of Managing Directors
                        </Typography>
                        <Typography className="text-[#5F452A]">Misters Jignesh Golaviya & Nikunj Golaviya</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className="p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <Typography variant="h6" className="text-[#FB6119]">
                            Qualification
                        </Typography>
                        <Typography className="text-[#5F452A]">B.E. (Instrumentation & Control)</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className="p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <Typography variant="h6" className="text-[#FB6119]">
                            Year of Establishment
                        </Typography>
                        <Typography className="text-[#5F452A]">2013</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className="p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <Typography variant="h6" className="text-[#FB6119]">
                            Nature of Business
                        </Typography>
                        <Typography className="text-[#5F452A]">Importer, Manufacturer & Supplier of Weighing Products</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className="p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <Typography variant="h6" className="text-[#FB6119]">
                            Number of Employees
                        </Typography>
                        <Typography className="text-[#5F452A]">Below 20</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className="p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <Typography variant="h6" className="text-[#FB6119]">
                            Annual Turnover
                        </Typography>
                        <Typography className="text-[#5F452A]">Rs. 25 to 50 Crore Approx.</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className="p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <Typography variant="h6" className="text-[#FB6119]">
                            Market Covered
                        </Typography>
                        <Typography className="text-[#5F452A]">Domestic & Worldwide</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </FadeInContainer>
    </Container>
);

export default About;
