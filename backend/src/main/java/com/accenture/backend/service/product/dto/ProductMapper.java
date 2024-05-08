package com.accenture.backend.service.product.dto;

import java.util.List;

import com.accenture.backend.model.product.Product;

public class ProductMapper {

    public static ProductConsultingDto toDto(Product entity) {
        ProductConsultingDto dto = new ProductConsultingDto();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setDescription(entity.getDescription());
        dto.setPrice(entity.getPrice());
        dto.setImage(entity.getImage());
        return dto;
    }

    public static List<ProductConsultingDto> toDto(List<Product> entities) {
        return entities.stream().map(ProductMapper::toDto).toList();
    }

}
