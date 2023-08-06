import { styled } from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/MailOutline';
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
${mobile({ flexDirection:"column"})}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: whitesmoke;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
${mobile({ display:"none"})}

`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom:20px;
display: flex;
align-items: center;

`

const Payment = styled.div``


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Anil.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          veniam commodi excepturi fuga dignissimos optio quasi earum placeat
          eius omnis libero quod similique, amet voluptas! Rerum autem iusto ea
          quidem?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="0072b1">
            <LinkedInIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem> <RoomIcon style={{marginRight:"10px"}} />9071 Sanjay Colony Faridabad 121005</ContactItem>
        <ContactItem><PhoneIcon style={{marginRight:"10px"}} />+91 8285063757</ContactItem>
        <ContactItem><MailIcon style={{marginRight:"10px"}} />smartanil0000@gmail.com</ContactItem>
        <Payment src="https://freepngimg.com/thumb/payment_method/2-2-payment-method-png-picture.png" />
      </Right>
    </Container>
  );
};

export default Footer;
