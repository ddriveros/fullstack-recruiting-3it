package cl.tresit.encuesta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cl.tresit.encuesta.model.EncuestaMusica;

@Repository
public interface EncuestaMusicaRepository extends JpaRepository<EncuestaMusica, Integer> {

}
