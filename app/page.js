import { Card, Container, Grid } from "@mui/material";
import platfroms from "@/public/platforms.json";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export const Page = () => {
  return (
    <>
      <Container maxWidth="md">
      <Typography variant="h4" align="center" sx={{ my: '2rem' }}><strong>Select a platform</strong></Typography>
      <Container maxWidth="md" sx={{
        display: 'flex',
        flexDirection: 'row', // this is the default and can be omitted
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem'
      }}>
        <Grid container spacing={6}> {/* Add spacing between grid items */}
          {platfroms.map(platform => 
            <Grid item xs={12} sm={6} md={3}> {/* Responsive grid layout */}
              <Link href={`/${platform.name.toLowerCase()}`}>
                <Card className="hover-box" sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '1rem', boxShadow: 'none', border: '1px solid black' }}> {/* Make card take full width of its container */}
                  <Image height={150} width={150} src={`/${platform.logo}`} />
                  <Typography>{platform.name}</Typography>
                </Card>
              </Link>
            </Grid>
          )}
        </Grid>
      </Container>
      </Container>
    </>
  )
}

export default Page;
