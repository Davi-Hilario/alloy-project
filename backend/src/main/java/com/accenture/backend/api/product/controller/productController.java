package com.accenture.backend.api.product.controller;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accenture.backend.model.product.Product;
import com.accenture.backend.service.product.ProductService;
import com.accenture.backend.service.product.dto.ProductConsultingDto;
import com.accenture.backend.service.product.dto.ProductCreationDto;
import static com.accenture.backend.service.product.dto.ProductMapper.*;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
@CrossOrigin(maxAge = 3600, origins = "*")
public class productController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<List<ProductConsultingDto>> listAllProducts() {
        List<Product> foundProducts = productService.findAllByOrderByIdDesc();
        if (foundProducts.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(toDto(foundProducts));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductConsultingDto> findProductById(@PathVariable Integer id) {
        return ResponseEntity
            .ok()
            .body(toDto(productService.findProductById(id)));
    }

    @PostMapping
    public ResponseEntity<ProductConsultingDto> createNewProduct(
        @RequestBody @Valid ProductCreationDto productCreationDto
    ) {
        Product createdProduct = productService.createNewProduct(toEntity(productCreationDto));
        return ResponseEntity
            .created(URI.create("/products/" + createdProduct.getId()))
            .body(toDto(createdProduct));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductConsultingDto> updateProductById(
        @PathVariable Integer id,
        @RequestBody @Valid ProductCreationDto product
    ) {
        return ResponseEntity
            .ok()
            .body(toDto(productService
                .updateProductById(id, toEntity(product))));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProductById(@PathVariable Integer id) {
        productService.deleteProductById(id);
        return ResponseEntity.noContent().build();
    }

}
