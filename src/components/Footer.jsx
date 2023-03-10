import { Container, Link } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';

function Footer() {
    return (<footer>
        <Box mt={5} px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor='#778899' color='white'>
            <Container maxWidth='lg'>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link underline="hover" href='#' color='inherit'>
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link underline="hover" href='#' color='inherit'>
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link underline="hover" href='#' color='inherit'>
                                Privacy
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Account</Box>
                        <Box>
                            <Link underline="hover" href='#' color='inherit'>
                                Login
                            </Link>
                        </Box>
                        <Box>
                            <Link underline="hover" href='#' color='inherit'>
                                Register
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Messages</Box>
                        <Box>
                            <Link underline="hover" href='#' color='inherit'>
                                Backup
                            </Link>
                        </Box>
                        <Box>
                            <Link underline="hover" href='#' color='inherit'>
                                History
                            </Link>
                        </Box>
                        <Box>
                            <Link underline="hover" href='#' color='inherit'>
                                Roll
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign='center' pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                    Material UI Workshop &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    </footer>);
}

export default Footer;