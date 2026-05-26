package portfolio_backend.controller; // controller package

import org.springframework.beans.factory.annotation.Autowired; // dependency injection

import org.springframework.web.bind.annotation.*; // REST API annotations

import portfolio_backend.dto.ContactRequest; // request DTO

import portfolio_backend.service.EmailService; // email service



@RestController // REST API controller

@RequestMapping("/api/contact") // base API route

@CrossOrigin("*") // frontend requests allow
public class ContactController {

    @Autowired // inject email service
    private EmailService emailService;



    @PostMapping // POST API endpoint
    public String sendMessage(@RequestBody ContactRequest request // frontend request body

    ) {
        System.out.println("API HIT SUCCESSFULLY"); // debug check


        emailService.sendEmail(

                request.getName(),

                request.getEmail(),

                request.getMessage()

        ); // send email



        return "Message Sent Successfully"; // API response
    }
}