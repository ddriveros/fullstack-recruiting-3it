package cl.tresit.encuesta.service;

import java.util.List;

import cl.tresit.encuesta.model.EncuestaMusica;

public interface EncuestaMusicaService {

	EncuestaMusica guardarEncuestaMusica(EncuestaMusica em);

	List<EncuestaMusica> listarEncuestaMusica();
}
