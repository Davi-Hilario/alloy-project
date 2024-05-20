package com.accenture.backend.service.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserCreationDto {

    @NotBlank
    @Size(min = 3, max = 255)
    private String name;

    @NotBlank
    private String image;

    @Min(0)
    @Max(1)
    @PositiveOrZero
    Short role;

    @Email
    @NotBlank
    private String email;

    @NotBlank
    @Size(min = 8, max = 255)
    private String password;

}
