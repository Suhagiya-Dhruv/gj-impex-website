// src/pages/Home.js
import React from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import logo from "../../assets/logo.png"; // Replace with your logo path
import { Link } from "react-router-dom";
import loadcellczl601ac from "../../assets/products/loadcell(czl601ac).jpg";
import CraneScale from "../../assets/products/CraneScale.jpg";
import Transformer1amp from "../../assets/products/Transformer1amp.jpg";

const HoverEffectBox = styled(Box)({
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  transition: "transform 0.3s ease-in-out",
});

const Home = () => (
  <Container>
    <section className="my-12 text-center">
      <Typography variant="h3" className="text-[#FB6119]">
        Welcome to G J Impex
      </Typography>
      <header className="flex items-center justify-end pb-4 font-extrabold">
        <Typography variant="h5" className="text-[#5F452A]">
          We believe in service...
        </Typography>
      </header>
      <Typography variant="h6" className="text-[#5F452A]">
        G J Impex has in stock some of the most robust and high-performance Load
        Cell collections. We are reliable Importers, Manufacturers, and
        Suppliers of all types of Weighing Products like Load Cells, Crane
        Scales, Transformers, Flat Cables and their Connectors, MRS Connectors,
        Power Cords, and Strain Gauges. Our company uses superior quality raw
        materials to meet international standards and cater to our clients'
        needs, big or small.
      </Typography>
    </section>

    <section className="my-12">
      <Typography variant="h4" className="text-center text-[#5F452A] mb-6">
        Our Products
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <HoverEffectBox className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src={loadcellczl601ac}
              alt="Product 1"
              className="w-full mb-4"
            />
            <Typography variant="h6" className="text-[#FB6119]">
              Load Cells
            </Typography>
            <Typography className="text-[#5F452A]">
              High-quality load cells for various applications.
            </Typography>
          </HoverEffectBox>
        </Grid>
        <Grid item xs={12} md={4}>
          <HoverEffectBox className="p-6 bg-white rounded-lg shadow-lg">
            <img src={CraneScale} alt="Product 2" className="w-full mb-4" />
            <Typography variant="h6" className="text-[#FB6119]">
              Crane Scales
            </Typography>
            <Typography className="text-[#5F452A]">
              Reliable and durable crane scales Reliable and durable crane
              scales.
            </Typography>
          </HoverEffectBox>
        </Grid>
        <Grid item xs={12} md={4}>
          <HoverEffectBox className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src={Transformer1amp}
              alt="Product 3"
              className="w-full mb-4"
            />
            <Typography variant="h6" className="text-[#FB6119]">
              Transformers & Connectors
            </Typography>
            <Typography className="text-[#5F452A]">
              High-quality transformers and connectors for various uses.
            </Typography>
          </HoverEffectBox>
        </Grid>
      </Grid>
      <Link to="/products">
        <div className="flex justify-center my-10">
          <Button
            variant="contained"
            className="my-6"
            style={{ backgroundColor: "var(--secondary-color)" }}
          >
            More Products
          </Button>
        </div>
      </Link>
    </section>

    <section className="my-12 text-center">
      <Typography variant="h4" className="text-[#5F452A] mb-6">
        Why Choose Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" className="text-[#FB6119]">
            Quality Products
          </Typography>
          <Typography className="text-[#5F452A]">
            We use superior quality raw materials and adhere to international
            standards.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" className="text-[#FB6119]">
            Customer-Centric
          </Typography>
          <Typography className="text-[#5F452A]">
            We are committed to providing excellent customer service.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" className="text-[#FB6119]">
            Wide Range of Products
          </Typography>
          <Typography className="text-[#5F452A]">
            We offer a diverse range of products to meet various needs.
          </Typography>
        </Grid>
      </Grid>
    </section>

    <footer className="text-center my-12">
      <Typography variant="h4" className="text-[#5F452A] mb-6">
        Contact Us
      </Typography>
      <Typography className="text-[#5F452A]">
        Get in touch with us for more information or to place an order.
      </Typography>
      {/* <Link to="/contact-us" className="mt-8 bg-[#FB6119] hover:bg-[#FB6119]">
        Contact Us
      </Link> */}
      <Link to="/contact-us">
        <div className="flex justify-center my-2">
          <Button
            variant="contained"
            style={{ backgroundColor: "var(--secondary-color)" }}
          >
            Contact Now
          </Button>
        </div>
      </Link>
    </footer>
  </Container>
);

export default Home;
