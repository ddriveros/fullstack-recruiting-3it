package cl.tresit.encuesta.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.tresit.encuesta.model.EncuestaMusica;
import cl.tresit.encuesta.service.EncuestaMusicaService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/encuestaMusica")
public class EncuestaMusicaController {

	@Autowired
	EncuestaMusicaService encuestaMusicaService;

	@PostMapping("/guardar")
	public EncuestaMusica guardarEncuestaMusica(@RequestBody EncuestaMusica em) {
		return encuestaMusicaService.guardarEncuestaMusica(em);
	}

	@GetMapping("/listar")
	public List<EncuestaMusica> listarEncuestaMusica() {
		return encuestaMusicaService.listarEncuestaMusica();
	}
}
