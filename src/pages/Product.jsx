import  styled  from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import { mobile } from "../responsive"




const Container = styled.div``

const Wrapper= styled.div`
padding: 50px;
display: flex;
${mobile({ padding:"10px",flexDirection:"column"})}
`

const ImgContainer = styled.div`
flex: 1;
`

const Image= styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height:"40vh"})}
`

const InfoContainer = styled.div`
flex:1;
padding: 0px 20px;
${mobile({ padding:"10px"})}
`

const Title = styled.h1`
font-weight: 200;
`

const Desc = styled.p``

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({ width:"100%"})}
`

const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 2px;
cursor: pointer;
`

const FilterSize = styled.select`
margin-left: 7px;
padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width:"100%"})}
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;

`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
cursor: pointer;
background-color: white;
font-weight: 500;

&:hover{
    background-color: whitesmoke;
}

`

    

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
            <Image src="https://m.media-amazon.com/images/I/614ofbAkWxL._AC_UL320_.jpg" />
            </ImgContainer>
            <InfoContainer>

            <Title>Denim Jacket</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, labore molestiae? Fugit aspernatur accusantium blanditiis dignissimos reprehenderit, facere quia facilis unde doloremque maxime voluptates illo? Ipsa quasi nihil rerum soluta!</Desc>
            <Price>$ 20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue" />
                    <FilterColor color="gray" />

                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>

                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                </AmountContainer>
                <Button>Add To Cart</Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product