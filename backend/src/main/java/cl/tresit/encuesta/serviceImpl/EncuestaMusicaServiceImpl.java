package cl.tresit.encuesta.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.tresit.encuesta.model.EncuestaMusica;
import cl.tresit.encuesta.repository.EncuestaMusicaRepository;
import cl.tresit.encuesta.service.EncuestaMusicaService;

@Service
public class EncuestaMusicaServiceImpl implements EncuestaMusicaService {

	@Autowired
	EncuestaMusicaRepository encuestaMusicaRepository;

	public EncuestaMusica guardarEncuestaMusica(EncuestaMusica em) {
		return encuestaMusicaRepository.save(em);
	}

	public List<EncuestaMusica> listarEncuestaMusica() {
		return encuestaMusicaRepository.findAll();
	}
}
