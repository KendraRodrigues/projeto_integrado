USE sistema_tcc;

INSERT INTO aluno (`aluno_matricula`,`nome`,
`ano_ingresso`,`email`,`endereco`,`telefones`,`curso_id` )
 VALUES ('10160112', 'Steicy', '2021', '10160112@instituição', 'Rua tal numero 000',
 '15655922154', '3');

 select * from aluno;
 drop database sistema_tcc;
 drop user 'grupo'@'localhost';