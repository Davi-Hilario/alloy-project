package com.accenture.backend.api.product.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accenture.backend.model.product.Product;
import com.accenture.backend.service.product.ProductService;
import com.accenture.backend.service.product.dto.ProductConsultingDto;
import com.accenture.backend.service.product.dto.ProductMapper;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
@CrossOrigin(maxAge = 3600, origins = "*")
public class productController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<List<ProductConsultingDto>> listAllProducts() {
        List<Product> foundProducts = productService.findAll();
        if (foundProducts.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(ProductMapper.toDto(foundProducts));
    }

}
