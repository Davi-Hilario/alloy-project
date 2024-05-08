package com.accenture.backend.service.user.dto;

import lombok.Data;

@Data
public class UserConsultingDto {
    private Integer id;
    private String name;
    private String email;
    private String password;
}
