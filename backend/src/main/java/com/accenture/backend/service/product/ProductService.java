package com.accenture.backend.service.product;

import java.util.List;

import org.springframework.stereotype.Service;

import com.accenture.backend.model.error.NotFoundException;
import com.accenture.backend.model.product.Product;
import com.accenture.backend.model.product.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> findAllByOrderByIdDesc() {
        return productRepository.findAllByOrderByIdDesc();
    }

    public Product findProductById(Integer id) {
        return productRepository
            .findById(id)
            .orElseThrow(() -> new NotFoundException("Product " + id));
    }

    public Product createNewProduct(Product newProduct) {
        return productRepository.save(newProduct);
    }

    public Product updateProductById(Integer id, Product data) {
        Product foundProduct = findProductById(id);
        data.setId(foundProduct.getId());
        return productRepository.save(data);
    }

    public void deleteProductById(Integer id) {
        if (!productRepository.existsById(id)) {
            throw new NotFoundException("Product " + id);
        }
        productRepository.deleteById(id);
    }

}
