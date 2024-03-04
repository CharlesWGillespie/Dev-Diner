import NavBar from "../components/Nav"
import Container from '@mui/material/Container';

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
      
    </Container>
    </>
  )
}