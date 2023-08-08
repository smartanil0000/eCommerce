import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
`;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width:"0px 20px",display:"flex",flexDirection:"column"})}
`;

const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight:"0"})}
`;
const Select = styled.select`
  padding: 20px;
  margin-right: 20px;
  ${mobile({ margin:"10px 0px"})}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2]
  const [filters,setFilter] = useState({})
  const [sort,setSort] = useState("newest")


  const handleFilters = (e)=> {
    const value = e.target.value;
    setFilter({...filters,[e.target.name]:e.target.value})
  }
  
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="colors" onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>gray</Option>

          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value={"newest"}>Newest</Option>
            <Option value={"asc"}>Price (asc)</Option>
            <Option value={"desc"}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
