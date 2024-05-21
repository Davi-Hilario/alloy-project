package com.accenture.backend.service.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserLoginByRoleDto {
    
    @Email
    @NotBlank
    private String email;

    @NotBlank
    @Size(min = 8, max = 255)
    private String password;

    @Min(0)
    @Max(1)
    @NotNull
    private Short role;
    
}
