package com.accenture.backend.api.user.controller;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.accenture.backend.model.user.Users;
import com.accenture.backend.service.user.UserService;
import com.accenture.backend.service.user.dto.UserConsultingDto;
import com.accenture.backend.service.user.dto.UserCreationDto;
import com.accenture.backend.service.user.dto.UserLoginByRoleDto;
import com.accenture.backend.service.user.dto.UserLoginDto;
import static com.accenture.backend.service.user.dto.UserMapper.*;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
@CrossOrigin(maxAge = 3600, origins = "*")
public class UserController {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<UserConsultingDto> createNewUser(@RequestBody @Valid UserCreationDto newUser) {
        Users createdUser = userService.createUser(toEntity(newUser));
        return ResponseEntity
                .created(URI.create("/users/" + createdUser.getId()))
                .body(toDto(createdUser));
    }

    @PostMapping("/login")
    public ResponseEntity<UserConsultingDto> login(@RequestBody @Valid UserLoginDto credentials) {
        Users foundUser = userService.login(toEntity(credentials));
        return ResponseEntity.ok(toDto(foundUser));
    }

    @PostMapping("/login-by-role")
    public ResponseEntity<UserConsultingDto> loginByAccountRole(@RequestBody @Valid UserLoginByRoleDto credentials) {
        Users foundUser = userService.loginByAccountRole(toEntity(credentials));
        return ResponseEntity.ok(toDto(foundUser));
    }

    @GetMapping
    public ResponseEntity<List<UserConsultingDto>> listAllUsers() {
        List<Users> foundUsers = userService.listAllUsers();
        if (foundUsers.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(toDto(foundUsers));
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserConsultingDto> findUserById(@PathVariable Integer id) {
        return ResponseEntity
                .ok(toDto(userService.findUserById(id)));
    }

    @PatchMapping("/{id}/change-image")
    public ResponseEntity<UserConsultingDto> changeUserImageById(
            @PathVariable Integer id,
            @RequestParam String newImage) {
        return ResponseEntity
                .ok(toDto(userService
                        .changeUserImageById(id, newImage)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserConsultingDto> updateUserById(
            @PathVariable Integer id,
            @RequestBody @Valid UserCreationDto updatedUser) {
        return ResponseEntity
                .ok(toDto(userService
                        .updateUserById(id, toEntity(updatedUser))));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable Integer id) {
        userService.deleteUserById(id);
        return ResponseEntity.noContent().build();
    }
}
