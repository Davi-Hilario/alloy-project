package com.accenture.backend.service.user.dto;

import java.util.List;

import com.accenture.backend.model.user.Users;

public class UserMapper {

    public static Users toEntity(UserCreationDto dto) {
        Users entity = new Users();
        entity.setUsername(dto.getName());
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        return entity;
    }

    public static Users toEntity(UserLoginDto dto) {
        Users entity = new Users();
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        return entity;
    }

    public static UserConsultingDto toDto(Users entity) {
        UserConsultingDto dto = new UserConsultingDto();
        dto.setId(entity.getId());
        dto.setName(entity.getUsername());
        dto.setEmail(entity.getEmail());
        dto.setPassword(entity.getPassword());
        return dto;
    }

    public static List<UserConsultingDto> toDto(List<Users> entitites) {
        return entitites.stream().map(UserMapper::toDto).toList();
    }

}
