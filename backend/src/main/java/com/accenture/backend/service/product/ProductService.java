package com.accenture.backend.service.product;

import java.util.List;

import org.springframework.stereotype.Service;

import com.accenture.backend.model.product.Product;
import com.accenture.backend.model.product.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

}
