const ProductsService = require("../services/products.services");

const service = new ProductsService();

const listaProductos = async (req, res) => {
  const { limit = 5 } = req.query;
  const productos = await service.find();

  res.json({ data: productos, count: service.lenght() });
};


const filterController = async (req, res) => {
  res.send("filter");
};

const getProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.finOne(id);
    res.json({
      data: product,
    });
  } catch (error) {
    res.status(error.output.statusCode).json({
      error: error.output.payload,
    });
  }
};

const setProductController = async (req, res) => {
  const { name = "", price = "" } = req.body;
  const product = service.create({ name, price });
  res.json({ data: product });
};

const updateProductController = async (req, res, next) => {
  const { name, price, id } = req.body;
  try {
    const product = await service.update(id, { name, price });
    res.json({
      msg: "put",
      data: product,
    });
  } catch (error) {
    // next(error);
    res.status(error.output.statusCode).json({
      error: error.output.payload,
    });
  }
};

const patchProductController = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    msg: "patch",
    id,
    body,
  });
};
const deleteProductController = (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);
  res.json({
    id,
    check: product,
  });
};

module.exports = {
  filterController,
  getProductByIdController,
  setProductController,
  updateProductController,
  patchProductController,
  deleteProductController,
  listaProductos,
};
