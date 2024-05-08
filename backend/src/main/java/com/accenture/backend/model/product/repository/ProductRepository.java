package com.accenture.backend.model.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.accenture.backend.model.product.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
