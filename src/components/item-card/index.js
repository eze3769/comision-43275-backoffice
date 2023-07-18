import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Item = ({ data, onClick }) =>  {
  const { title, imageURL, stock, price } = data;

  const [image, setImage] = React.useState(imageURL || '');
  const [name, setName] = React.useState(title || '');
  const [stockProds, setStock] = React.useState(stock || 0);
  const [newPrice, setPrice] = React.useState(price || 0);

  const handleClick = () => {
    if (!onClick) {
      return;
    }
    const product = {
      title: name,
      stock: stockProds,
      price: newPrice,
      imageURL: image
    }

    onClick(product, data.id);
  }

  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={imageURL}
      />
      <input value={image}  onChange={(e) => setImage(e.target.value)}/>
      <CardContent>
        <input value={name} onChange={(e) => setName(e.target.value)}/>

        $ <input value={newPrice} onChange={(e) => setPrice(e.target.value)}/>

      
        <Typography  color="text.secondary">
          Stock: <input value={stockProds} onChange={(e) => setStock(e.target.value)}/>
        </Typography>
      </CardContent>

      <button onClick={handleClick}>guardar</button>
    </Card>
  );
}
export default Item