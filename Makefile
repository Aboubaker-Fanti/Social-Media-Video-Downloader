all:
	docker-compose up --build 
down:
	docker-compose down -v
clean:
	docker-compose down -v
fclean:
	docker system prune -a 
re: clean all

reall: fclean all
