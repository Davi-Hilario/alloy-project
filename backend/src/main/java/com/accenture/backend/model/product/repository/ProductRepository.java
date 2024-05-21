package com.accenture.backend.model.product.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.accenture.backend.model.product.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    List<Product> findAllByOrderByIdDesc();

}
