import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { data } from "../Data/data";

export function StudentDetails() {
  const [ProductData, setProductData] = useState(data);
  const [id, setId] = useState("");
  const [edit, setEdit] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState("");
  const [show, setShow] = useState("true");
  const[showAdd, setShowAdd] = useState("true");
  const[showUpdate, setShowUpdate] = useState("false");

  const addproduct = () => {
    const newProduct = {
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
    };
    console.log(newProduct);

    setProductData([...ProductData, newProduct]);
    setId("");
    setTitle("");
    setDescription("");
    setPrice("");
    setDiscount("");
    setRating("");
    setStock("");
    setBrand("");
    setCategory("");
    setThumbnail("");
    setImages("");
  };
  //Delete Product
  const deleteProduct = (prodID) => {
    const deleteProductData = ProductData.filter(
      (product, id) => id !== prodID
    );
    setProductData(deleteProductData);
  };

  //select products

  const selectProduct = (idx) => {
    const selectedProduct = ProductData.find((prod) => prod.id === idx);
    console.log(selectedProduct);
    setShowAdd(false);
    setShowUpdate(true)
    setEdit(idx);
    setShow(!show);
    setId(selectedProduct.id);
    setTitle(selectedProduct.title);
    setDescription(selectedProduct.description);
    setPrice(selectedProduct.price);
    setDiscount(selectedProduct.discountPercentage);
    setRating(selectedProduct.rating);
    setStock(selectedProduct.stock);
    setBrand(selectedProduct.brand);
    setCategory(selectedProduct.category);
    setThumbnail(selectedProduct.thumbnail);
    setImages(selectedProduct.images);
  };

  //update Product
  const updateProduct = (updateProd) => {
    //find product
    console.log(edit);
    
    //select product
    const selectProductobj = ProductData.findIndex((prod) => prod.id === edit);
    const updateProductdata = {
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
    };
    console.log(updateProductdata);
    ProductData[selectProductobj] = updateProductdata;
    setProductData([...ProductData]);
    setShowAdd(true);
    setShowUpdate(false)
    setId("");
    setTitle("");
    setDescription("");
    setPrice("");
    setDiscount("");
    setRating("");
    setStock("");
    setBrand("");
    setCategory("");
    setThumbnail("");
    setImages("");
  };

  return (
    <div className="addform">
      <div className="input-section">
        <Box
          id="box-sec"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              onChange={(event) => setId(event.target.value)}
              value={id}
              label="Enter Id"
            />
            <TextField
              required
              id="outlined"
              onChange={(event) => setTitle(event.target.value)}
              value={title}
              label="Enter Title"
            />
            <TextField
              required
              id="outlined"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
              label="Enter Description"
            />
            <TextField
              required
              id="outlined"
              onChange={(event) => setPrice(event.target.value)}
              value={price}
              label="Enter Price"
            />
            <TextField
              required
              id="outlined"
              onChange={(event) => setDiscount(event.target.value)}
              value={discountPercentage}
              label="Enter Discount Percentage"
            />
            <TextField
              required
              id="outlined"
              onChange={(event) => setRating(event.target.value)}
              value={rating}
              label="Enter Rating"
            />
            <TextField
              required
              id="outlined"
              onChange={(event) => setStock(event.target.value)}
              value={stock}
              label="Stock Status"
            />
            <TextField
              required
              id="outlined"
              onChange={(event) => setBrand(event.target.value)}
              value={brand}
              label="Enter the Brand Name"
            />
            <TextField
              required
              id="outlined"
              onChange={(event) => setCategory(event.target.value)}
              value={category}
              label="Category Name"
            />
            <TextField
              required
              id="outlined"
              onChange={(event) => setThumbnail(event.target.value)}
              value={thumbnail}
              label="Enter Thumbnail URL"
            />
            <TextField
              required
              id="outlined"
              onChange={(event) => setImages(event.target.value)}
              value={images}
              label="Enter Image URL"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {showAdd ?
              <Button id="btn-section" onClick={addproduct} variant="primary">
                Add Product
              </Button>
              : ""}
              {showUpdate ?
              <Button
                onClick={updateProduct}
                variant="contained"
                color="success"
              >
                Update Product
              </Button>
              : ""}
            
          </div>
        </Box>
      </div>
      <div className="card-container">
        {ProductData.map((prod, id) => (
          <Card
            sx={{ maxWidth: 300 }}
            className="card-main"
            style={{ Height: 550 }}
          >
            <CardMedia
              sx={{ height: 100 }}
              key={prod.id}
              image={prod.thumbnail}
              title={prod.title}
            />
            <CardContent className="card-sec">
              <Typography gutterBottom variant="h5" component="div">
                {prod.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description: {prod.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {prod.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {prod.rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Brand: {prod.brand}
              </Typography>
              <CardActions>
                <Button
                  onClick={() => selectProduct(prod.id)}
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => deleteProduct(id)}
                  size="small"
                  variant="contained"
                  color="error"
                >
                  Terminate
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
