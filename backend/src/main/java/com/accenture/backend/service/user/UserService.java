package com.accenture.backend.service.user;

import java.util.List;

import org.springframework.stereotype.Service;

import com.accenture.backend.model.error.ConflictException;
import com.accenture.backend.model.error.UnauthorizedException;
import com.accenture.backend.model.user.Users;
import com.accenture.backend.model.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public Users createUser(Users newUser) {
        if (userRepository.existsByEmailOrPassword(newUser.getEmail(), newUser.getPassword())) {
            throw new ConflictException("Users [Email, Password]");
        }
        return userRepository.save(newUser);
    }

    public Users login(Users credentials) {
        return userRepository
                .findByEmailAndPassword(credentials.getEmail(), credentials.getPassword())
                .orElseThrow(() -> new UnauthorizedException(
                        "Email: " + credentials.getEmail() +
                                " | Password: " + credentials.getPassword()));
    }

    public Users loginAdmin(Users credentials) {
        return userRepository
                .findByEmailAndPasswordAndRole(credentials.getEmail(), credentials.getPassword(), (short) 1)
                .orElseThrow(() -> new UnauthorizedException(
                        "Email: " + credentials.getEmail() +
                                " | Password: " + credentials.getPassword()));
    }

    public List<Users> listAllUsers() {
        return userRepository.findAll();
    }

}
