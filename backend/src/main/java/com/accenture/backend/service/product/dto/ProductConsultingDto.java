package com.accenture.backend.service.product.dto;

import lombok.Data;

@Data
public class ProductConsultingDto {
    private Integer id;
    private String name;
    private String description;
    private Double price;
    private String image;
}
