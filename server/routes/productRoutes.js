import express from 'express';
import Product from '../models/Product.js';

const productRoutes = express.Router();

const getProducts = async (req, res) => {
	const page = parseInt(req.params.page);
	const sizePage = parseInt(req.params.sizePage);

	const products = await Product.find({});

	if(page && sizePage){
		const totalPages = Math.ceil(products.length / sizePage);
		const startIndex = (page - 1) * sizePage;
		const endIndex = startIndex + sizePage;
		const paginatedProducts = products.slice(startIndex, endIndex);
		res.json({ products: paginatedProducts, pagination: { currentPage: page, totalPages } });
	} else{
		res.json({ products, pagination: {} });
	}
};

productRoutes.route('/:page/:sizePage').get(getProducts);
productRoutes.route('/').get(getProducts);

export default productRoutes;