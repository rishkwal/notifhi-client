'use client';
import { useState, useEffect } from "react";
import { Container, Typography, CircularProgress, Box, Alert, IconButton, Grid, TextField } from "@mui/material";
import CopyIcon from '@mui/icons-material/FileCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import platforms from '@/public/platforms.json';
import axios from "axios";

const Page = ({ params }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState(''); // State for the TextField input

  useEffect(() => {
    const getLists = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${params.platform}/list`);
        setList(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getLists();
  }, []);

  const platform = platforms.find(platform => platform.identifier === params.platform);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleDelete = (index) => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/${params.platform}/remove`, { channel: list[index] });
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleAdd = () => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/${params.platform}/add`, { channel: inputValue.trim() });
    if (inputValue.trim()) {
      setList(prevList => [...prevList, inputValue.trim()]);
      setInputValue(''); // Clear the input after adding
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        {platform.name}
      </Typography>

      <Box display="flex" alignItems="center" mb={3}>
        <TextField
          fullWidth
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add Another"
        />
        <IconButton onClick={handleAdd} color="secondary" aria-label="add">
          <AddIcon />
        </IconButton>
      </Box>

      {loading && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {list && list.map((item, index) => (
        <Grid container alignItems="center" spacing={2} key={index} sx={{ mb: 2 }}>
          <Grid item xs={10}>
            <Typography sx={{ overflow: 'hidden' }} variant="h5">
              {item}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={() => handleCopy(item)} aria-label="copy">
              <CopyIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(index)} color="error" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}

export default Page;
