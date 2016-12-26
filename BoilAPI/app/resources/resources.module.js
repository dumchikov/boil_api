(function () {
	'use strict';

	angular.module('app.resources', [])
        .constant("ProductRes",
	    {
	    	title: "Название",
	    	description: "Рецепт",
	    	category: "Категория",
	    	image: "Картинка",
	    	timers: "Таймеры",
	    	timer_desc: "Описание",
	    	timer_dur: "Время в минутах",
	    	add_timer: "Добавить таймер",
	    	save: "Сохранить",
	    	cancel: "Отменить",
	    	date: "Дата",
	    	add: "Добавить",
	    	remove: "Удалить",
	    	edit: "Редактировать",
	    	search: "Поиск",

	    	title_is_req: "Введите название",
	    	desc_is_req: "Введите рецепт",
	    	image_is_req: "Введите URL картинки",
            image_should_be_url: "Картинка должна быть ссылкой",
	    	timer_dur_is_req: "Введите продолжительность таймера",
	    	timer_desc_is_req: "Введите описание таймера",
	    	timer_dur_should_be_number: "Продолжительность таймера должна быть в числом",
	    	errors: "Ошибки",
	    	close: "Закрыть",
	    	exit: "Выйти",
	    	delete_product: "Удаление продукта",
	    	delete_confirm: "Удалить продукт",
	    	yes: "Да",
            no: "Нет"
	    });
})();
