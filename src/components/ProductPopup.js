
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Divider, Grid, TextField } from '@mui/material';
import { ButtonMui } from './ButtonMui';
import {TextFieldMUi} from './TextFieldMUi';
import {addProduct} from '../redux/ProductDetails'

export const ProductPopup= ({ setOpenPopup, confirmDialog, setConfirmDialog,initialFieldValues,values,setValues }) => {
   const dispatch=useDispatch()
  // close popup
  const closePopup = () => {
    setOpenPopup(false);
    
  }


  const errorMsg = {
    title: "",
    price: "",
    image: ""
  };
  const [errors, setErrors] = useState(errorMsg);

  // validate scheme
  const validateProduct = () => {
    const temp = errorMsg;
    temp.title = values.title ? '' : 'Title is required';
    temp.price = values.price ? '' : 'Price amount is required';
    temp.image = values.image ? '' : 'Image link is required';

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === '');
  };


  // handle Input change
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  // create scheme api
  const saveScheme = (e) => {
    
    if (!validateProduct()) {
      return;
    }
    let id = Math.floor((Math.random() * 100) + 1);
    console.log(values,id,"values")
   dispatch(addProduct({
    id:id,
    title:values.title,
    price:values.price,
    image:values.image,
    quantity:0
   }))
   setValues(initialFieldValues)
   setOpenPopup(false)
   
  };


  return (
    <>

      <form>
        <Grid container spacing={2} sx={{ mt: -1, mb: 1 }}>
          <Grid item xs={12} sm={4}>
            <TextFieldMUi
              variant="outlined"
              label="Title"
              name="title"
              value={values.title}
              onChange={handleInputChange}
              {...(errors.title !== '' && { error: true, helperText: errors.title })}
              required
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextFieldMUi
              variant="outlined"
              label="Price"
              name="price"
              type="number"
              value={values.price}
              onChange={handleInputChange}
              {...(errors.price !== '' && { error: true, helperText: errors.price })}
              required
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextFieldMUi
              variant="outlined"
              label="Image Link"
              name="image"
              value={values.image}
              onChange={handleInputChange}
              {...(errors.image !== '' && { error: true, helperText: errors.image })}
              required
            />
          </Grid>

        </Grid>


      </form>
      <Divider variant="fullWidth" sx={{ mt: 2, borderColor: '#D0D0D0' }} />
      <Grid container spacing={2} sx={{ mt: 2 }} >
        <Grid item xs={6}>

          <ButtonMui
            sx={{
              background: "black",
              color: "white",
              marginRight: "400px"
            }}
            variant="contained"
            label="Cancel"
            onClick={closePopup}
          />
        </Grid>
        <Grid container item xs={6} display="flex" justifyContent="flex-end" alignItems="flex-end">

          <ButtonMui
            sx={{
              background: "black",
              color: "white",
            }}
            variant="contained"
            label="Save"
            onClick={saveScheme}
          />


        </Grid>

      </Grid>
    </>
  )
}
