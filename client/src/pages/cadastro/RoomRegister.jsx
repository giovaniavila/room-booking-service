import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Grid, Box } from '@chakra-ui/react'

const RoomRegister = () => {
  return (
    <Grid gridTemplateColumns="0.05fr 1fr" h="100vh">
      <Sidebar/>
      <Box>
        Cadastro de salas
      </Box>
    </Grid>
  )
}

export default RoomRegister
