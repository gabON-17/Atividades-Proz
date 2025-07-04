create database school;

create table instructions(
	id int auto_increment,
	name varchar(100) not null,
    email varchar(100) not null,
    telephone varchar(13) not null,
    specialty varchar(255),
    
    primary key(id)
);

create table courses(
	id int auto_increment,
	title varchar(100) not null,
    description text,
    category varchar(255) not null,
    id_instructor int,
    duration_hours time not null,
    level enum('Iniciante', 'Intermediario', 'Avançado'),
    price decimal(6, 2) not null,
    
    primary key(id),
    foreign key(id_instructor) references instructions(id)
);


create table registered(
	id int auto_increment,
	name_student varchar(100),
    email_student varchar(100),
    id_course int,
    date_registered date,
    status enum('Cursando', 'Desativado', 'Concluido'),
    
    primary key(id),
    foreign key(id_course) references courses(id)
);


insert into instructions(name, email, telephone, specialty) values
	('Douglas Gonçalves', 'douglas32@gmail.com', '31 98233-8432', 'Tecnologia'),
    ('Amanda Silva', 'amanda@gmail.com', '31 92344-8893', 'Enfermagem'),
    ('Martinz Henrique', 'martinz45@gmail.com', '21 93422-9003', 'Jogos Digitais'),
    ('Cleó Silva', 'cleo@gmail.com', '31 92214-9034', 'Mecânica'),
    ('Gabriel Mendes', 'gabbsmendes@gmail.com', '31 99023-3429', 'Tecnologia');


insert into courses(
	title, description, category, id_instructor, duration_hours, level, price
 ) values (
		'Desenvolvimento WEB Completo', 
		'Curso de desenvolvimento de sites completo, utilizando REACT.JS, NEXT.JS e Node.js juntamente com o Express',
		'Tecnologia',
		5,
		'48:00:00',
		'Intermediario',
		200.00
	),
    ('Enfermagem Tecnico', 'Curso Técnico de Enfermagem, com muita prática', 'Enfermagem', 2, '200:00:00', 'Iniciante', 1200.00),
    ('Desenvolvimento de Jogos', 'Desenvolvimento de Jogos AVANÇADO', 'Tecnologia', 3, '100:00:00', 'Avançado', 500.00), 
    ('Mecânica na prática', 'Curso de mecânica com prática', 'Física', 4, '50:00:00', 'Intermediario', 300.00),
    ('Entendendo Nest.JS', 'Desenvolvimento com nest.js e postgre', 'Tecnologia', 1, '30:00:00', 'Intermediario', 50.00);


insert into registered(
		name_student, email_student, id_course, date_registered, status
    ) values
		('Igor Samuel', 'igor32@gmail.com', 5, '2025-04-17', 'Concluido'),
		('Emanuelle Taler', 'manutaler@gmail.com', 3, '2025-07-01', 'Cursando'),
        ('Josias Emanuel', 'josias@gmail.com', 4, '2025-06-21', 'Desativado'),
        ('Ana Maria', 'aninha33@gmail.com', 2, '2025-05-30', 'Concluido'),
        ('Carla Mendes', 'carlinha@gmail.com', 1, '2025-05-04', 'Cursando');

    
select * from instructions;
select * from courses;
select * from registered;

select 
	r.name_student, r.email_student, courses.title, courses.duration_hours,
    r.date_registered, r.status 
	from registered r
join courses on courses.id = r.id_course;
