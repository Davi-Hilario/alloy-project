package com.accenture.backend.service.product.dto;

import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ProductCreationDto {

    @NotBlank
    @Size(min = 3, max = 100)
    private String name;

    @NotBlank
    @Size(min = 3, max = 255)
    private String description;

    @Positive
    @DecimalMin("1.0")
    @DecimalMax("999.9")
    private Double price;

    @NotBlank
    private String image;
    
}
