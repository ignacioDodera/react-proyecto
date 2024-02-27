import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ img, tituloProduct, descripcion, costo, id }) => {
  return (
    <Card
      sx={{
        width: 405,
        height: 650,
        backgroundColor: "white",
      }}
    >
      <CardMedia sx={{ height: 440 }} image={img} title="green iguana" />
      <CardContent sx={{ height: 150 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {tituloProduct}
        </Typography>
        <Typography variant="h8" color="text.secondary" textAlign={"center"}>
          {descripcion}
        </Typography>
        <Typography variant="subtitle1" textAlign={"right"}>
          ${costo}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/item/${id}`}>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Detalle Producto
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
