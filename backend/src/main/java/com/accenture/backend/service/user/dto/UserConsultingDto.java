package com.accenture.backend.service.user.dto;

import lombok.Data;

@Data
public class UserConsultingDto {
    private Integer id;
    private String name;
    private String image;
    private Short role;
    private String email;
    private String password;
}
