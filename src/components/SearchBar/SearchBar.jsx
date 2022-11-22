// import React, { useState } from "react";
// import { Paper, Autocomplete, TextField, Grid, Button } from "@mui/material";
// import Categories from "../Categories/Categories";
// import { useNavigate } from "react-router-dom";

// function SearchBar(props) {
//   const [selectedCat, setSelectedCat] = useState("");
//   const [storedCat, setStoredCat] = useState([]);
//   const [open, setOpen] = useState(false);
//   let navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSelectedCat("");
//     setStoredCat([...storedCat, selectedCat]);
//   };

//   const handleChange = (event) => {
//     setSelectedCat(event.target.textContent);
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     props.searchRestaurants({
//       latitude: props.coordinates.latitude,
//       longitude: props.coordinates.longitude,
//       categories: storedCat,
//     });
//     navigate("/search");
//   };
//   return (
//     <>
//       <Grid container spacing={2} direction="row" justifyContent="center">
//         <Grid item xs={5}>
//           <Paper elevation={2}>
//             <Autocomplete
//               open={open}
//               onInputChange={(_, value) => {
//                 if (value.length === 0) {
//                   if (open) setOpen(false);
//                 } else {
//                   if (!open) setOpen(true);
//                 }
//               }}
//               onClose={() => setOpen(false)}
//               freeSolo
//               id="free-solo-2-demo"
//               options={props.categories}
//               onChange={handleChange}
//               clearOnBlur={true}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label="Add a category"
//                   value={selectedCat}
//                 />
//               )}
//             />
//           </Paper>
//         </Grid>
//         <Grid item xs={2}>
//           <Button
//             variant="outlined"
//             type="submit"
//             size="medium"
//             sx={{ height: 55 }}
//             onClick={handleSubmit}
//           >
//             +
//           </Button>
//         </Grid>
//         <Grid item xs={2}>
//           <Button
//             variant="outlined"
//             type="submit"
//             size="medium"
//             sx={{ height: 55 }}
//             onClick={handleSearch}
//           >
//             Search
//           </Button>
//         </Grid>
//         <Grid item xs={8}>
//           <Categories storedCat={storedCat} />
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default SearchBar;
