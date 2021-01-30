import { Title, Description, ShopImage } from "../styles";

const Home = () => {
  return (
    <>
      <Title>Rust Shop</Title>
      <Description>
        Everything we have is worthless, we still make money
      </Description>
      <ShopImage src="./RustBros.jpg" alt="Rust Bros shop sign" />
    </>
  );
};

export default Home;
