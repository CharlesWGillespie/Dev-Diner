import NavBar from "../components/Nav"
import Container from '@mui/material/Container';
import MenuList from "../components/MenuList";
import MenuCard from "../components/MenuCard";
import CategoryMenu from "../components/CategoryMenu";

export default function HomePage() {
  return (
    <>
    <NavBar/>
    <Container
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <CategoryMenu />
      <MenuList />
    </Container>
    </>
  )
}