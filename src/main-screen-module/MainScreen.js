import React from "react";
import { Container } from "../assets/styles/globalStyles";
import NavBar from "../components/navbar/NavBar";
import HeaderSection from "./components/HeaderSection";
import StatusSection from "./components/StatusSection";
import TableSection from "./components/TableSection";

export default function MainScreen() {
 
  return (
    <>
      <NavBar />
      <HeaderSection />
      <Container>
        <StatusSection />
        <TableSection />
      </Container>
    </>
  );
}
